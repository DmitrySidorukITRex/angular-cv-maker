import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  IExperienceDetails,
  IPersonalDetails,
} from 'src/app/shared/interfaces/builder.interface';
import { IProgressBarItem } from 'src/app/shared/ui/progress-bar/progress-bar.interface';
import { ExperienceTitle, URL } from '../../shared/constants/app.constants';

const progressBarItemsInitial: IProgressBarItem[] = [
  { title: 'Personal', isActive: true, link: URL.BUILDER_PERSONAL_DETAILS },
  { title: 'Experience', isActive: false, link: URL.BUILDER_EXPERIANCE },
  { title: 'Template', isActive: false, link: URL.BUILDER_TEMPLATE },
];

const experienceDetailsInitial: IExperienceDetails = {
  education: [],
  work: [],
  // education: [
  //   {
  //     id: '',
  //     degree: 'Bakalavr',
  //     city: 'Minsk',
  //     school: 'Belarusian National Technichal University',
  //     startDateMonth: 'September',
  //     startDateYear: '2013',
  //     endDateMonth: 'January',
  //     endDateYear: '2018',
  //     details: 'Graduated it with red diplom',
  //   },
  //   {
  //     id: '',
  //     degree: 'Magistr',
  //     city: 'Minsk',
  //     school: 'Belarusian National Technichal University',
  //     startDateMonth: 'September',
  //     startDateYear: '2018',
  //     endDateMonth: 'June',
  //     endDateYear: '2020',
  //     details: 'Graduated it with red diplom',
  //   },
  // ],
  // work: [
  //   {
  //     id: '',
  //     jobTitle: 'Angular Developer',
  //     city: 'Minsk',
  //     employer: 'Yumasoft',
  //     startDateMonth: 'March',
  //     startDateYear: '2018',
  //     endDateMonth: 'September',
  //     endDateYear: '2018',
  //     responsibilities: `- Creating web components
  //       - Design web components
  //       - Making unit tests
  //       - Connecting back and front sides
  //     `,
  //   },
  //   {
  //     id: '',
  //     jobTitle: 'Angular Developer',
  //     city: 'Minsk',
  //     employer: 'Issoft',
  //     startDateMonth: 'October',
  //     startDateYear: '2018',
  //     endDateMonth: 'September',
  //     endDateYear: '2021',
  //     responsibilities: `- Creating web components
  //       - Design web components
  //       - Making unit tests
  //       - Connecting back and front sides
  //     `,
  //   },
  //   {
  //     id: '',
  //     jobTitle: 'React Developer',
  //     city: 'Minsk',
  //     employer: 'ITRex',
  //     startDateMonth: 'September',
  //     startDateYear: '2021',
  //     endDateMonth: 'September',
  //     endDateYear: '2024',
  //     responsibilities: `- Creating web components
  //       - Design web components
  //       - Making unit tests
  //       - Connecting back and front sides
  //     `,
  //   },
  // ],
};

const experienceSectionsInitial: ExperienceTitle[] = [
  ExperienceTitle.EDUCATION,
  ExperienceTitle.WORK,
];

@Injectable()
export class BuilderDataService {
  private progressBarItemsSbj = new BehaviorSubject<IProgressBarItem[]>(
    progressBarItemsInitial
  );
  private personalDetailsSbj = new BehaviorSubject<IPersonalDetails>({
    // firstname: 'Dmitry',
    // lastname: 'Sidoruk',
    // email: 'sidar94@mail.ru',
    // phone: '+375295295350',
    // address: 'Bogdanovicha 139',
    // city: 'Minsk',
    // code: '06004',
  });
  private experienceDetailsSbj = new BehaviorSubject<IExperienceDetails>(
    experienceDetailsInitial
  );
  private experienceSectionsSbj = new BehaviorSubject<ExperienceTitle[]>(
    experienceSectionsInitial
  );

  public progressBarItems$ = this.progressBarItemsSbj.asObservable();
  public personalDetails$ = this.personalDetailsSbj.asObservable();
  public experienceDetails$ = this.experienceDetailsSbj.asObservable();
  public experienceSections$ = this.experienceSectionsSbj.asObservable();

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

  public getExperienceSections(): ExperienceTitle[] {
    return this.experienceSectionsSbj.value;
  }

  public setExperienceSections(data: ExperienceTitle[]) {
    this.experienceSectionsSbj.next([...data]);
  }
}
