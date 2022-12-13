import { Injectable } from '@angular/core';
import {
  IEducationDetails,
  IExperienceDetails,
  IPersonalDetails,
  IWorkDetails,
} from 'src/app/shared/interfaces/builder.interface';
import {
  ISection,
  ISectionItem,
  ITemplateSidebarItem,
} from 'src/app/shared/interfaces/templates';
import { ExperienceTitle } from 'src/app/shared/constants/app.constants';

@Injectable()
export class TemplatesHelper {
  public getSideBarData(details: IPersonalDetails): ITemplateSidebarItem[] {
    const { firstname, lastname, address, code, city, phone, email } = details;

    return [
      {
        label: 'Name',
        value: `${firstname || ''} ${lastname || ''}`,
      },
      {
        label: 'Address',
        value: `${address || ''} ${code || ''} ${city || ''}`,
      },
      {
        label: 'Phone number',
        value: phone || '',
      },
      {
        label: 'Email',
        value: email || '',
      },
    ];
  }

  public getEducationExperienceItemData(data: IEducationDetails): ISectionItem {
    const {
      degree,
      startDateMonth,
      startDateYear,
      endDateMonth,
      endDateYear,
      school,
      city,
      details,
    } = data;

    return {
      title: degree || '',
      subTitle: `${school || ''}${school && city ? ', ' : ''}${city || ''}`,
      date: this.getDate(
        startDateMonth || '',
        startDateYear || '',
        endDateMonth || '',
        endDateYear || ''
      ),
      info: details || '',
    };
  }

  public getWorkExperienceItemData(data: IWorkDetails): ISectionItem {
    const {
      jobTitle,
      startDateMonth,
      startDateYear,
      endDateMonth,
      endDateYear,
      employer,
      city,
      responsibilities,
    } = data;

    return {
      title: jobTitle || '',
      subTitle: `${employer || ''}${employer && city ? ', ' : ''}${city || ''}`,
      date: this.getDate(
        startDateMonth || '',
        startDateYear || '',
        endDateMonth || '',
        endDateYear || ''
      ),
      info: responsibilities || '',
    };
  }

  public getAllSections(
    experienceSectionTitles: ExperienceTitle[],
    data: IExperienceDetails
  ): ISection[] {
    let allSections: ISection[] = [];

    const educationSections = data.education.map((x) =>
      this.getEducationExperienceItemData(x)
    );

    const workSections = data.work.map((x) =>
      this.getWorkExperienceItemData(x)
    );

    experienceSectionTitles.forEach((sectionName) => {
      switch (sectionName) {
        case ExperienceTitle.EDUCATION:
          allSections.push({
            name: sectionName,
            items: educationSections,
          });
          break;
        case ExperienceTitle.WORK:
          allSections.push({
            name: sectionName,
            items: workSections,
          });
          break;
        default:
          break;
      }
    });

    return allSections;
  }

  private getDate(
    startDateMonth: string,
    startDateYear: string,
    endDateMonth: string,
    endDateYear: string
  ): string {
    return `${startDateMonth || ''} ${startDateYear || ''} ${
      (startDateMonth || startDateYear) && (endDateMonth || endDateYear)
        ? '-'
        : ''
    } ${endDateMonth || ''} ${endDateYear || ''}`;
  }
}
