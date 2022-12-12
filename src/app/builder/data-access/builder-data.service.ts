import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  IEducationDetails,
  IExperienceDetails,
  IPersonalDetails,
  IWorkDetails,
} from 'src/app/shared/interfaces/builder.interface';
import { IProgressBarItem } from 'src/app/shared/ui/progress-bar/progress-bar.interface';
import { URL } from '../../shared/constants/app.constants';

const progressBarItemsInitial: IProgressBarItem[] = [
  { title: 'Personal', isActive: true, link: URL.BUILDER_PERSONAL_DETAILS },
  { title: 'Experience', isActive: false, link: URL.BUILDER_EXPERIANCE },
  { title: 'Template', isActive: false, link: URL.BUILDER_TEMPLATE },
];

const experienceDetailsInitial: IExperienceDetails = {
  education: [],
  work: [],
};

@Injectable()
export class BuilderDataService {
  private progressBarItemsSbj = new BehaviorSubject<IProgressBarItem[]>(
    progressBarItemsInitial
  );
  private personalDetailsSbj = new BehaviorSubject<IPersonalDetails>({});
  private experienceDetailsSbj = new BehaviorSubject<IExperienceDetails>(
    experienceDetailsInitial
  );

  public progressBarItems$ = this.progressBarItemsSbj.asObservable();
  public personalDetails$ = this.personalDetailsSbj.asObservable();
  public experienceDetails$ = this.experienceDetailsSbj.asObservable();

  public getProgressBarItems(): IProgressBarItem[] {
    return this.progressBarItemsSbj.value;
  }

  public setProgressBarItems(items: IProgressBarItem[]): void {
    this.progressBarItemsSbj.next(items);
  }

  public getPersonalDetails(): IPersonalDetails | {} {
    return this.personalDetailsSbj.value;
  }

  public setPersonalDetails(data: IPersonalDetails): void {
    this.personalDetailsSbj.next(data);
  }

  public getExperienceDetails(): IExperienceDetails {
    return this.experienceDetailsSbj.value;
  }

  public setExperienceDetails(data: IExperienceDetails): void {
    this.experienceDetailsSbj.next(data);
  }
}
