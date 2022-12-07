import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ExperienceItemComponent } from './experience-item.component';

@NgModule({
  declarations: [ExperienceItemComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ExperienceItemComponent],
})
export class ExperienceItemModule {}
