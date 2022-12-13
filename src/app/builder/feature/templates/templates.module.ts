import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesComponent } from './templates.component';
import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesToPrintModule } from '../../ui/templates-to-print/templates-to-print.module';

@NgModule({
  declarations: [TemplatesComponent],
  imports: [CommonModule, TemplatesRoutingModule, TemplatesToPrintModule],
})
export class TemplatesModule {}
