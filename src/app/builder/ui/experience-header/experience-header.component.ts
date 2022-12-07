import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-experience-header',
  templateUrl: './experience-header.component.html',
  styleUrls: ['./experience-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceHeaderComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
