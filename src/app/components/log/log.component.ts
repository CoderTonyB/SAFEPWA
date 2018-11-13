import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  logTypeKey;
  logKey;
  question$;

  constructor(
    private logService: LogService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.logTypeKey = params['logTypeKey'];
      this.logKey = params['logKey'];

      this.loadQuestions();
    });
  }

  loadQuestions() {
    this.question$ = this.logService.getQuestionsForLogKey(this.logTypeKey);
  }
}
