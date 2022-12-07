import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPersonalDetails } from 'src/app/shared/interfaces/builder.interface';

@Component({
  selector: 'app-personal-details-form',
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalDetailsFormComponent implements OnInit {
  @Input() personalDetails: IPersonalDetails;
  @Output() changeForm = new EventEmitter<IPersonalDetails>();
  public form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      firstname: new FormControl(this.personalDetails.firstname),
      lastname: new FormControl(this.personalDetails.lastname),
      email: new FormControl(this.personalDetails.email, Validators.email),
      phone: new FormControl(this.personalDetails.phone),
      address: new FormControl(this.personalDetails.address),
      city: new FormControl(this.personalDetails.city),
      code: new FormControl(this.personalDetails.code),
    });
  }

  get f() {
    return this.form.controls;
  }

  public onChange(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.changeForm.emit(this.form.value);
  }
}
