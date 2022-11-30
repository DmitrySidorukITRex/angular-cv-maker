import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProgressBarItem } from 'src/app/shared/ui/progress-bar/progress-bar.interface';
import { URL } from '../../shared/constants/app.constants';

const progressBarItems: IProgressBarItem[] = [
  { title: 'Personal', isActive: true, link: URL.BUILDER_PERSONAL_DETAILS },
  { title: 'Experience', isActive: false, link: URL.BUILDER_EXPERIANCE },
  { title: 'Template', isActive: false, link: URL.BUILDER_TEMPLATE },
];

@Injectable()
export class BuilderDataService {
  private progressBarItemsSbj = new BehaviorSubject<IProgressBarItem[]>(
    progressBarItems
  );
  public progressBarItems$: Observable<IProgressBarItem[]> =
    this.progressBarItemsSbj.asObservable();

  public getProgressBarItems(): IProgressBarItem[] {
    return this.progressBarItemsSbj.value;
  }

  public setProgressBarItems(items: IProgressBarItem[]): void {
    this.progressBarItemsSbj.next(items);
  }
}
