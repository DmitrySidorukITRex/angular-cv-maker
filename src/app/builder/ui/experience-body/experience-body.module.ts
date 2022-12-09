import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceBodyComponent } from './experience-body.component';
import { EducationDetailsFormModule } from '../education-details-form/education-details-form.module';
import { ExperienceItemModule } from '../experience-item/experience-item.module';
import { WorkDetailsFormModule } from '../work-details-form/work-details-form.module';

@NgModule({
  declarations: [ExperienceBodyComponent],
  imports: [
    CommonModule,
    EducationDetailsFormModule,
    ExperienceItemModule,
    WorkDetailsFormModule,
  ],
  exports: [ExperienceBodyComponent],
})
export class ExperienceBodyModule {}
