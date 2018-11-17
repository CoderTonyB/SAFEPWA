import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { flatMap, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmAbandonComponent } from 'src/app/dialogs/confirm-abandon/confirm-abandon.component';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  logTypeKey;
  logKey;
  question$;
  answers;
  formObject = {};

  form: FormGroup = this.fb.group({});

  constructor(
    private logService: LogService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.formObject['Title'] = '';
    this.form = this.fb.group(this.formObject);

    this.activatedRoute.params.subscribe(params => {
      this.logTypeKey = params['logTypeKey'];
      this.logKey = params['logKey'];

      this.formObject['LogTypeKey'] = params['logTypeKey'];

      this.loadQuestions();

      if (this.logKey !== 'New') {
        this.loadAnswers();
      }
    });
  }

  async saveLog() {
    this.snackBar.open(
      await this.logService.saveLog(this.logKey, this.form.value),
      null,
      { duration: 2000 }
    );
    this.form.markAsUntouched();
  }

  goBack() {
    if (this.form.untouched) {
      this.router.navigateByUrl(`logInventory/${this.logTypeKey}`);
    } else {
      const dialogRef = this.dialog.open(ConfirmAbandonComponent, {
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.router.navigateByUrl(`logInventory/${this.logTypeKey}`);
        }
      });
    }
  }

  ngOnInit() {}

  loadQuestions() {
    this.question$ = this.logService.getQuestionsForLogKey(this.logTypeKey);

    // build the reactive form object
    this.question$.forEach(questionInLogType => {
      questionInLogType.forEach(question => {
        this.formObject[question.id] = '';
      });
      this.form = this.fb.group(this.formObject);
    });
  }
  loadAnswers() {
    this.logService.getAnswersForLog(this.logKey).subscribe(answer => {
      this.answers = answer;
      Object.keys(answer).forEach(key => {
        if (this.form.controls[key] !== undefined) {
          this.form.controls[key].setValue(answer[key]);
        }
      });
    });
  }
}
