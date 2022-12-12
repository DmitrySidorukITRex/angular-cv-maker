import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ExperienceTitle } from 'src/app/shared/constants/app.constants';
import {
  IEducationDetails,
  IExperienceDetails,
  IExperienceItem,
  IWorkDetails,
} from 'src/app/shared/interfaces/builder.interface';

@Component({
  selector: 'app-experience-body',
  templateUrl: './experience-body.component.html',
  styleUrls: ['./experience-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceBodyComponent implements OnInit {
  @Input() itemTitle: string;
  @Input() experienceDetails: IExperienceDetails;
  @Output() saveExperience = new EventEmitter<
    IEducationDetails | IWorkDetails
  >();
  @Output() removeExperience = new EventEmitter<string>();
  @Output() editExperience = new EventEmitter<
    IEducationDetails | IWorkDetails
  >();

  public isOpenedForm = false;
  public experienceTitle = ExperienceTitle;
  public currentEducationDetails: IEducationDetails = { id: '' };
  public currentWorkDetails: IWorkDetails = { id: '' };

  constructor() {}

  ngOnInit(): void {}

  public getExperienceItem(
    data: IEducationDetails | IWorkDetails
  ): IExperienceItem {
    switch (this.itemTitle) {
      case this.experienceTitle.EDUCATION:
        return this.getExperienceItemFromEducationDetails(data);
      case this.experienceTitle.WORK:
        return this.getExperienceItemFromWorkDetails(data);
      default:
        return { id: data.id };
    }
  }

  public onAddExperience(): void {
    this.isOpenedForm = true;
  }

  public onCancelForm(): void {
    this.clearForm();
  }

  public onSaveForm(data: IEducationDetails | IWorkDetails): void {
    if (this.currentEducationDetails.id || this.currentWorkDetails.id) {
      this.editExperience.emit(data);
    } else {
      this.saveExperience.emit(data);
    }

    this.clearForm();
  }

  public onRemoveExperienceItem(id: string): void {
    this.removeExperience.emit(id);
  }

  public onEditExperieceItem(id: string): void {
    switch (this.itemTitle) {
      case ExperienceTitle.EDUCATION:
        this.currentEducationDetails = this.experienceDetails.education.find(
          (x) => x.id === id
        )!;
        break;
      case ExperienceTitle.WORK:
        this.currentWorkDetails = this.experienceDetails.work.find(
          (x) => x.id === id
        )!;
        break;
      default:
        break;
    }
    this.isOpenedForm = true;
  }

  private getExperienceItemFromEducationDetails(
    data: IEducationDetails
  ): IExperienceItem {
    return {
      id: data.id,
      title: data.degree ? data.degree : 'Education',
      startDateMonth: data.startDateMonth,
      startDateYear: data.startDateYear,
      endDateMonth: data.endDateMonth,
      endDateYear: data.endDateYear,
    };
  }

  private getExperienceItemFromWorkDetails(
    data: IWorkDetails
  ): IExperienceItem {
    return {
      id: data.id,
      title: data.jobTitle ? data.jobTitle : 'Job title',
      startDateMonth: data.startDateMonth,
      startDateYear: data.startDateYear,
      endDateMonth: data.endDateMonth,
      endDateYear: data.endDateYear,
    };
  }

  private clearForm(): void {
    this.isOpenedForm = false;
    this.currentEducationDetails = { id: '' };
    this.currentWorkDetails = { id: '' };
  }
}
