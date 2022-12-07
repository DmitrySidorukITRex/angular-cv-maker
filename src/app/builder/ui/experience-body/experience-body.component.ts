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
  @Input() currentEducationDetails: IEducationDetails;
  @Output() saveEducationExperience = new EventEmitter<IEducationDetails>();
  @Output() removeEducationExperience = new EventEmitter<string>();
  @Output() editEducationExperience = new EventEmitter<string>();

  public isOpenedForm = false;
  public experienceTitle = ExperienceTitle;

  constructor() {}

  ngOnInit(): void {}

  public getExperienceItem(data: IEducationDetails): IExperienceItem {
    return {
      id: data.id,
      title: data.degree ? data.degree : 'Education',
      startDateMonth: data.startDateMonth,
      startDateYear: data.startDateYear,
      endDateMonth: data.endDateMonth,
      endDateYear: data.endDateYear,
    };
  }

  public onAddExperience(): void {
    this.isOpenedForm = true;
  }

  public onCancelForm(): void {
    this.isOpenedForm = false;
  }

  public onSaveForm(data: IEducationDetails): void {
    this.saveEducationExperience.emit(data);
    this.isOpenedForm = false;
  }

  public onRemoveItem(id: string): void {
    this.removeEducationExperience.emit(id);
  }

  public onEditItem(id: string): void {
    this.editEducationExperience.emit(id);
    this.isOpenedForm = true;
  }
}
