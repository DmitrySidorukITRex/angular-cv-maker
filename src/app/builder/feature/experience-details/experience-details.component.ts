import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { IEducationDetails } from 'src/app/shared/interfaces/builder.interface';
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

  constructor(public builderDataService: BuilderDataService) {}

  ngOnInit(): void {
    this.builderDataService.currentEducationDetails$
      .pipe(untilDestroyed(this))
      .subscribe((value) => (this.currentEducationDetails = value));
  }

  public onSaveEducationExperience(data: IEducationDetails): void {
    const experienceDetails = this.builderDataService.getExperienceDetails();
    const currentExperienceItems = experienceDetails.education.filter(
      (x) => x.id !== data.id
    );

    const newExperienceItem = {
      ...data,
      id: Math.random().toString().slice(2),
    };

    this.builderDataService.setExperienceDetails({
      ...experienceDetails,
      education: [...currentExperienceItems, newExperienceItem],
    });
    this.builderDataService.setCurrentEducationDetails({ id: '' });
  }

  public onRemoveEducationExperience(id: string): void {
    const experienceDetails = this.builderDataService.getExperienceDetails();

    this.builderDataService.setExperienceDetails({
      ...experienceDetails,
      education: [
        ...experienceDetails.education.filter(
          (experience) => experience.id !== id
        ),
      ],
    });
  }

  public onEditEducationExperience(id: string): void {
    const experienceDetails = this.builderDataService.getExperienceDetails();

    this.builderDataService.setCurrentEducationDetails({
      ...(experienceDetails.education.find(
        (experience) => experience.id === id
      ) as IEducationDetails),
    });
  }
}
