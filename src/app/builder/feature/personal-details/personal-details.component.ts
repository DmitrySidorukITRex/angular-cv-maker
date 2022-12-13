import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPersonalDetails } from 'src/app/shared/interfaces/builder.interface';
import { URL } from 'src/app/shared/constants/app.constants';
import { BuilderDataService } from '../../data-access/builder-data.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalDetailsComponent implements OnInit {
  constructor(
    public builderDataService: BuilderDataService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  public onCancelForm(): void {
    this.router.navigate([URL.MAIN_PAGE]);
  }

  public onChangeForm(data: IPersonalDetails): void {
    this.builderDataService.setPersonalDetails(data);
  }

  public onSaveForm(): void {
    this.router.navigate([URL.BUILDER_EXPERIANCE]);
  }
}
