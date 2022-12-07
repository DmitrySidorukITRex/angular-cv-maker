import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './personal-details.component';
import { PersonalDetailsRoutingModule } from './personal-details-routing.module';
import { PersonalDetailsFormModule } from '../../ui/personal-details-form/personal-details-form.module';

@NgModule({
  declarations: [PersonalDetailsComponent],
  imports: [
    CommonModule,
    PersonalDetailsRoutingModule,
    PersonalDetailsFormModule,
  ],
})
export class PersonalDetailsModule {}
