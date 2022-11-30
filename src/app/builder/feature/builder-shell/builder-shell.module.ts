import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderShellComponent } from './builder-shell.component';
import { BuilderShellRoutingModule } from './builder-shell-routing.module';
import { ProgressBarModule } from 'src/app/shared/ui/progress-bar/progress-bar.module';
import { BuilderDataService } from '../../data-access/builder-data.service';

@NgModule({
  declarations: [BuilderShellComponent],
  imports: [CommonModule, BuilderShellRoutingModule, ProgressBarModule],
  providers: [BuilderDataService],
})
export class BuilderShellModule {}
