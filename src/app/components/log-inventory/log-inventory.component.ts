import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LogService } from 'src/app/services/log-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-log-inventory',
  templateUrl: './log-inventory.component.html',
  styleUrls: ['./log-inventory.component.css']
})
export class LogInventoryComponent implements OnInit {
  logs: Observable<any[]>;
  columnsToDisplay = ['Title', 'Timestamp'];
  logKey: string;

  constructor(
    public route: ActivatedRoute,
    private logService: LogService,
    private router: Router
  ) {}

  ngOnInit() {
    const logId = this.route.params.subscribe(params => {
      this.logKey = params['key'];
      this.logs = this.logService.getLogInventoryForLogType(params['key']);
    });
  }

  openLog(id) {
    this.router.navigateByUrl('/log/' + this.logKey + '/' + id);
  }
}
