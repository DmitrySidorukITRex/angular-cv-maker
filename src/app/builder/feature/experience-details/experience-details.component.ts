import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ExperienceTitle } from 'src/app/shared/constants/app.constants';
import {
  IEducationDetails,
  IExperienceDetails,
  IWorkDetails,
} from 'src/app/shared/interfaces/builder.interface';
import { BuilderDataService } from '../../data-access/builder-data.service';
import { AccordionItems } from './experience-details.constants';

@UntilDestroy()
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

  ngOnInit(): void {
    this.builderDataService.currentEducationDetails$
      .pipe(untilDestroyed(this))
      .subscribe((value) => (this.currentEducationDetails = value));

    this.builderDataService.currentWorkDetails$
      .pipe(untilDestroyed(this))
      .subscribe((value) => (this.currentWorkDetails = value));
  }

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
        this.removeEducationExperience(experienceDetails, id);
        break;
      case ExperienceTitle.WORK:
        this.removeWorkExperience(experienceDetails, id);
        break;
      default:
        break;
    }
  }

  public onEditExperience(id: string, experienceTitle: string): void {
    const experienceDetails = this.builderDataService.getExperienceDetails();

    switch (experienceTitle) {
      case ExperienceTitle.EDUCATION:
        this.editEducationExperience(experienceDetails, id);
        break;
      case ExperienceTitle.WORK:
        this.editWorkExperience(experienceDetails, id);
        break;
      default:
        break;
    }
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
    this.builderDataService.setCurrentEducationDetails({ id: '' });
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
    this.builderDataService.setCurrentWorkDetails({ id: '' });
  }

  private removeEducationExperience(
    experienceDetails: IExperienceDetails,
    experienceId: string
  ): void {
    this.builderDataService.setExperienceDetails({
      ...experienceDetails,
      education: [
        ...experienceDetails.education.filter(
          (experience) => experience.id !== experienceId
        ),
      ],
    });
  }

  private removeWorkExperience(
    experienceDetails: IExperienceDetails,
    experienceId: string
  ): void {
    this.builderDataService.setExperienceDetails({
      ...experienceDetails,
      work: [
        ...experienceDetails.education.filter(
          (experience) => experience.id !== experienceId
        ),
      ],
    });
  }

  private editEducationExperience(
    experienceDetails: IExperienceDetails,
    experienceId: string
  ): void {
    this.builderDataService.setCurrentEducationDetails({
      ...(experienceDetails.education.find(
        (experience) => experience.id === experienceId
      ) as IEducationDetails),
    });
  }

  private editWorkExperience(
    experienceDetails: IExperienceDetails,
    experienceId: string
  ): void {
    this.builderDataService.setCurrentWorkDetails({
      ...(experienceDetails.work.find(
        (experience) => experience.id === experienceId
      ) as IWorkDetails),
    });
  }
}
