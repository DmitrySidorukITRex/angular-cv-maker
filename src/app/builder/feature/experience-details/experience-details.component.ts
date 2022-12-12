import { Component, OnInit } from '@angular/core';
import { ExperienceTitle } from 'src/app/shared/constants/app.constants';
import {
  IEducationDetails,
  IExperienceDetails,
  IWorkDetails,
} from 'src/app/shared/interfaces/builder.interface';
import { BuilderDataService } from '../../data-access/builder-data.service';
import { AccordionItems } from './experience-details.constants';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.scss'],
})
export class ExperienceDetailsComponent implements OnInit {
  public accordionItems = AccordionItems;
  public currentEducationDetails: IEducationDetails;
  public currentWorkDetails: IWorkDetails;

  constructor(public builderDataService: BuilderDataService) {}

  ngOnInit(): void {}

  public onSaveExperience(
    data: IEducationDetails | IWorkDetails,
    experienceTitle: string
  ): void {
    const experienceDetails = this.builderDataService.getExperienceDetails();

    switch (experienceTitle) {
      case ExperienceTitle.EDUCATION:
        this.saveEducationExperience(experienceDetails, data);
        break;
      case ExperienceTitle.WORK:
        this.saveWorkExperience(experienceDetails, data);
        break;
      default:
        break;
    }
  }

  public onRemoveExperience(id: string, experienceTitle: string): void {
    const experienceDetails = this.builderDataService.getExperienceDetails();

    switch (experienceTitle) {
      case ExperienceTitle.EDUCATION:
        const newEducationArr = experienceDetails.education.filter(
          (experience) => experience.id !== id
        );
        this.builderDataService.setExperienceDetails({
          ...experienceDetails,
          education: [...newEducationArr],
        });
        break;
      case ExperienceTitle.WORK:
        const newWorkArr = experienceDetails.work.filter(
          (experience) => experience.id !== id
        );
        this.builderDataService.setExperienceDetails({
          ...experienceDetails,
          work: [...newWorkArr],
        });
        break;
      default:
        break;
    }
  }

  public onEditExperience(
    data: IEducationDetails | IWorkDetails,
    experienceTitle: string
  ): void {
    const experienceDetails = this.builderDataService.getExperienceDetails();

    switch (experienceTitle) {
      case ExperienceTitle.EDUCATION:
        let currentEducationDetailsIndex =
          experienceDetails.education.findIndex(
            (experience) => experience.id === data.id
          );
        experienceDetails.education[currentEducationDetailsIndex] = data;
        break;
      case ExperienceTitle.WORK:
        let currentWorkDetailsIndex = experienceDetails.work.findIndex(
          (experience) => experience.id === data.id
        );
        experienceDetails.work[currentWorkDetailsIndex] = data;

        break;
      default:
        break;
    }

    this.builderDataService.setExperienceDetails({ ...experienceDetails });
  }

  private saveEducationExperience(
    experienceDetails: IExperienceDetails,
    educationDetails: IEducationDetails
  ): void {
    const currentExperienceItems = experienceDetails.education.filter(
      (x) => x.id !== educationDetails.id
    );

    const newExperienceItem = {
      ...educationDetails,
      id: Math.random().toString().slice(2),
    };

    this.builderDataService.setExperienceDetails({
      ...experienceDetails,
      education: [...currentExperienceItems, newExperienceItem],
    });
  }

  private saveWorkExperience(
    experienceDetails: IExperienceDetails,
    workDetails: IWorkDetails
  ): void {
    const currentExperienceItems = experienceDetails.work.filter(
      (x) => x.id !== workDetails.id
    );

    const newExperienceItem = {
      ...workDetails,
      id: Math.random().toString().slice(2),
    };

    this.builderDataService.setExperienceDetails({
      ...experienceDetails,
      work: [...currentExperienceItems, newExperienceItem],
    });
  }
}
