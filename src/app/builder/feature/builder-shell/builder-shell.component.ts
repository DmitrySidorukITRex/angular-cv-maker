import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IProgressBarItem } from 'src/app/shared/ui/progress-bar/progress-bar.interface';
import { BuilderDataService } from '../../data-access/builder-data.service';

@Component({
  selector: 'app-builder-shell',
  templateUrl: './builder-shell.component.html',
  styleUrls: ['./builder-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderShellComponent implements OnInit {
  progressBarItems$: Observable<IProgressBarItem[]>;
  progressBarItems: IProgressBarItem[];

  constructor(
    private readonly builderDataService: BuilderDataService,
    private readonly router: Router
  ) {
    this.progressBarItems$ = this.builderDataService.progressBarItems$;
    this.progressBarItems = this.builderDataService.getProgressBarItems();
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.builderDataService.setProgressBarItems(
          this.getCurrentProgressBarItems(this.progressBarItems, event.url)
        );
      });

    this.builderDataService.setProgressBarItems(
      this.getCurrentProgressBarItems(this.progressBarItems, this.router.url)
    );
  }

  public onClickItem(item: IProgressBarItem): void {
    this.router.navigate([item.link]);
  }

  private getCurrentProgressBarItems(
    items: IProgressBarItem[],
    url: string
  ): IProgressBarItem[] {
    const copy = [...items];

    return copy.map((item) => {
      item.isActive = item.link === url;
      return item;
    });
  }
}
