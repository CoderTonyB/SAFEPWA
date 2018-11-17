import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-abandon',
  template: `
    <h2 mat-dialog-title>Abandon changes?</h2>
    <mat-dialog-content
      >Are you sure you want to abandon your changes?</mat-dialog-content
    >
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false">No</button>
      <button mat-button [mat-dialog-close]="true">Yes</button>
    </mat-dialog-actions>
  `,
  styleUrls: ['./confirm-abandon.component.css']
})
export class ConfirmAbandonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
