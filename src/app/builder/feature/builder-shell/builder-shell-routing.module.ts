import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderShellComponent } from './builder-shell.component';

const routes: Routes = [
  {
    path: '',
    component: BuilderShellComponent,
    children: [
      {
        path: 'personal-details',
        loadChildren: () =>
          import('../personal-details/personal-details.module').then(
            (m) => m.PersonalDetailsModule
          ),
      },
      {
        path: 'experience-details',
        loadChildren: () =>
          import('../experience-details/experience-details.module').then(
            (m) => m.ExperienceDetailsModule
          ),
      },
      {
        path: 'templates',
        loadChildren: () =>
          import('../templates/templates.module').then(
            (m) => m.TemplatesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuilderShellRoutingModule {}
