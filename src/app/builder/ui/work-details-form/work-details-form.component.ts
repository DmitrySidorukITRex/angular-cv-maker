import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IWorkDetails } from 'src/app/shared/interfaces/builder.interface';
import {
  MonthSelectItems,
  YearSelectItems,
} from 'src/app/shared/constants/app.constants';

@Component({
  selector: 'app-work-details-form',
  templateUrl: './work-details-form.component.html',
  styleUrls: ['./work-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkDetailsFormComponent implements OnInit {
  @Input() workDetails: IWorkDetails;
  @Output() cancelForm = new EventEmitter();
  @Output() saveForm = new EventEmitter<IWorkDetails>();

  public form: FormGroup;
  public months = MonthSelectItems;
  public years = YearSelectItems;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      jobTitle: new FormControl(this.workDetails.jobTitle),
      city: new FormControl(this.workDetails.city),
      employer: new FormControl(this.workDetails.employer),
      startDateMonth: new FormControl(this.workDetails.startDateMonth),
      startDateYear: new FormControl(this.workDetails.startDateYear),
      endDateMonth: new FormControl(this.workDetails.endDateMonth),
      endDateYear: new FormControl(this.workDetails.endDateYear),
      responsibilities: new FormControl(this.workDetails.responsibilities),
    });
  }

  public onCancel(): void {
    this.cancelForm.emit();
  }

  public onSubmit(): void {
    this.saveForm.emit({ ...this.form.value, id: this.workDetails.id });
  }
}
