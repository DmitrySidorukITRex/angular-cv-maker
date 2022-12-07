import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceBodyComponent } from './experience-body.component';
import { EducationDetailsFormModule } from '../education-details-form/education-details-form.module';
import { ExperienceItemModule } from '../experience-item/experience-item.module';

@NgModule({
  declarations: [ExperienceBodyComponent],
  imports: [CommonModule, EducationDetailsFormModule, ExperienceItemModule],
  exports: [ExperienceBodyComponent],
})
export class ExperienceBodyModule {}
