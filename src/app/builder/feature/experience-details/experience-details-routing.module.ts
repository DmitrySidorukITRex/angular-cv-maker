import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceDetailsComponent } from './experience-details.component';

const routes: Routes = [
  {
    path: '',
    component: ExperienceDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienceDetailsRoutingModule {}
