import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {
  constructor(private logService: LogService) {}
  logtypes: Observable<any[]>;
  ngOnInit() {
    this.logtypes = this.logService.getLogList();
  }
}
