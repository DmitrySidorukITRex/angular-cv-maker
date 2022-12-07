import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IEducationDetails } from 'src/app/shared/interfaces/builder.interface';
import {
  MonthSelectItems,
  YearSelectItems,
} from './education-details-form.constants';

@Component({
  selector: 'app-education-details-form',
  templateUrl: './education-details-form.component.html',
  styleUrls: ['./education-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationDetailsFormComponent implements OnInit {
  @Input() educationDetails: IEducationDetails;
  @Output() cancelForm = new EventEmitter();
  @Output() saveForm = new EventEmitter<IEducationDetails>();

  public form: FormGroup;
  public months = MonthSelectItems;
  public years = YearSelectItems;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      degree: new FormControl(this.educationDetails.degree),
      city: new FormControl(this.educationDetails.city),
      school: new FormControl(this.educationDetails.school),
      startDateMonth: new FormControl(this.educationDetails.startDateMonth),
      startDateYear: new FormControl(this.educationDetails.startDateYear),
      endDateMonth: new FormControl(this.educationDetails.endDateMonth),
      endDateYear: new FormControl(this.educationDetails.endDateYear),
      details: new FormControl(this.educationDetails.details),
    });
  }

  public onCancel(): void {
    this.cancelForm.emit();
  }

  public onSubmit(): void {
    this.saveForm.emit({ ...this.form.value, id: this.educationDetails.id });
  }
}
