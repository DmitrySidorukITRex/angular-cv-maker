import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/feature/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/feature/builder-shell/builder-shell.module').then(
        (m) => m.BuilderShellModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
