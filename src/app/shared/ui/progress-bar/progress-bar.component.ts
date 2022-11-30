import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IProgressBarItem } from './progress-bar.interface';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent implements OnInit {
  @Input() items: IProgressBarItem[];
  @Output() clickItem = new EventEmitter<IProgressBarItem>();

  constructor() {}

  ngOnInit(): void {}

  public isItemPassed(index: number): boolean {
    return index <= this.items.findIndex((item) => item.isActive);
  }

  public onClickItem(link: IProgressBarItem): void {
    this.clickItem.emit(link);
  }
}
