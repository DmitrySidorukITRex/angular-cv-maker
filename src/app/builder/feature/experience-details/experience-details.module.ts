import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceDetailsComponent } from './experience-details.component';
import { ExperienceDetailsRoutingModule } from './experience-details-routing.module';

@NgModule({
  declarations: [ExperienceDetailsComponent],
  imports: [CommonModule, ExperienceDetailsRoutingModule],
})
export class ExperienceDetailsModule {}
