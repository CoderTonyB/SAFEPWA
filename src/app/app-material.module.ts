import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatCardModule,
  MatTableModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatIconModule
  ]
})
export class SAFEMaterialModule {}
