import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesToPrintComponent } from './templates-to-print.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TemplatesHelper } from './templates-to-pring.helper';

@NgModule({
  declarations: [TemplatesToPrintComponent, SideBarComponent],
  imports: [CommonModule],
  exports: [TemplatesToPrintComponent],
  providers: [TemplatesHelper],
})
export class TemplatesToPrintModule {}
