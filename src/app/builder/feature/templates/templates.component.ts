import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { URL } from 'src/app/shared/constants/app.constants';
import { BuilderDataService } from '../../data-access/builder-data.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatesComponent implements OnInit {
  @ViewChild('content') content: ElementRef;

  constructor(
    public builderDataService: BuilderDataService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  public onBack(): void {
    this.router.navigate([URL.BUILDER_EXPERIANCE]);
  }

  public onDownloadPDF(): void {
    html2canvas(this.content.nativeElement).then((canvas) => {
      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var width = pdf.internal.pageSize.getWidth();
      var height = (canvas.height * width) / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height);
      pdf.save('my_CV.pdf'); // Generated PDF
    });
  }
}
