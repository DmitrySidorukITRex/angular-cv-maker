import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkDetailsFormComponent } from './work-details-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [WorkDetailsFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [WorkDetailsFormComponent],
})
export class WorkDetailsFormModule {}
