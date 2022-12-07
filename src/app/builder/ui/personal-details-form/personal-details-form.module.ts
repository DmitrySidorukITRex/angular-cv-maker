import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PersonalDetailsFormComponent } from './personal-details-form.component';

@NgModule({
  declarations: [PersonalDetailsFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule],
  exports: [PersonalDetailsFormComponent],
})
export class PersonalDetailsFormModule {}
