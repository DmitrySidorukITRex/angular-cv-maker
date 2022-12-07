import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationDetailsFormComponent } from './education-details-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [EducationDetailsFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [EducationDetailsFormComponent],
})
export class EducationDetailsFormModule {}
