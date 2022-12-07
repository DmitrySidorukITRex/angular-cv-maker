import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceDetailsComponent } from './experience-details.component';
import { ExperienceDetailsRoutingModule } from './experience-details-routing.module';
import { AccordionModule } from 'src/app/shared/ui/accordion/accordion.module';
import { ExperienceHeaderModule } from '../../ui/experience-header/experience-header.module';
import { ExperienceBodyModule } from '../../ui/experience-body/experience-body.module';

@NgModule({
  declarations: [ExperienceDetailsComponent],
  imports: [
    CommonModule,
    ExperienceDetailsRoutingModule,
    AccordionModule,
    ExperienceHeaderModule,
    ExperienceBodyModule,
  ],
})
export class ExperienceDetailsModule {}
