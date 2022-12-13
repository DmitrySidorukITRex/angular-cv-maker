import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ExperienceTitle } from 'src/app/shared/constants/app.constants';
import {
  IExperienceDetails,
  IPersonalDetails,
} from 'src/app/shared/interfaces/builder.interface';
import { ISection } from 'src/app/shared/interfaces/templates';
import { TemplatesHelper } from './templates-to-pring.helper';

@Component({
  selector: 'app-templates-to-print',
  templateUrl: './templates-to-print.component.html',
  styleUrls: ['./templates-to-print.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatesToPrintComponent implements OnInit {
  @Input() personalDetails: IPersonalDetails;
  @Input() experienceSectionTitles: ExperienceTitle[];
  @Input() experienceDetails: IExperienceDetails;

  public templateName: string;
  public allSections: ISection[] = [];

  constructor(public templatesHelper: TemplatesHelper) {}

  ngOnInit(): void {
    this.templateName =
      !this.personalDetails.firstname?.length &&
      !this.personalDetails.lastname?.length
        ? 'Your Name'
        : `${this.personalDetails.firstname} ${this.personalDetails.lastname}`;

    this.allSections = this.templatesHelper.getAllSections(
      this.experienceSectionTitles,
      this.experienceDetails
    );
  }
}
