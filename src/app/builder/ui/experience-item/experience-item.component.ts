import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IExperienceItem } from 'src/app/shared/interfaces/builder.interface';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceItemComponent implements OnInit {
  @Input() item: IExperienceItem;
  @Output() removeItem = new EventEmitter<string>();
  @Output() editItem = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public getDate(month: string | undefined, year: string | undefined): string {
    const newMonth = month ? month : 'N/A';
    const newYear = year ? year : 'N/A';

    return `${newMonth} ${newYear}`;
  }

  public onRemove(id: string): void {
    this.removeItem.emit(id);
  }

  public onEdit(id: string): void {
    this.editItem.emit(id);
  }
}
