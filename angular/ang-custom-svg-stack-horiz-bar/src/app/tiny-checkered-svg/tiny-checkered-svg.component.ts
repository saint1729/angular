import { Component, OnInit, Input } from '@angular/core';
import { DocumentReference } from '../document-reference';

@Component({
  selector: 'app-tiny-checkered-svg',
  templateUrl: './tiny-checkered-svg.component.html',
  styleUrls: ['./tiny-checkered-svg.component.scss']
})

export class TinyCheckeredSVGComponent implements OnInit {

  @Input() width: any = 0;
  @Input() height: any = 0;
  @Input() colorScheme: any = ['#c82c0e', '#ff7156'];

  public imageURL: any;

  constructor(private documentReference: DocumentReference) {
  }

  ngOnInit(): void {
    // this.setWidth(this.width);
    this.imageURL = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'\
                      viewBox=\'0 0 8 8\'%3E%3Cg%3E%3Cpath d=\'M0 0 H4 V4 H0 Z M4 4 H8 V8 H4 Z\' fill=\'%23' +
                      this.colorScheme[0].substring(1) + '\' /%3E%3Cpath d=\'M4 0 H8 V4 H4 Z M0 4 H4 V8 H0 Z\'\
                      fill=\'%23' + this.colorScheme[1].substring(1) + '\' /%3E%3C/g%3E%3C/svg%3E';
  }

  private setWidth(width: any): void {
    if (this.width) {
      const e0 = this.documentReference.nativeDocument.getElementsByTagName('svg')[0];
      e0.setAttribute('width', width + 'px');
      const e1 = e0.getElementById('saint1729');
      const e1Width = 0.6 * 1200 / width;
      e1.setAttribute('width', e1Width + '%');
      e1.setAttribute('height', e1Width + '%');
      const e2 = e0.getElementsByTagName('rect')[0];
      e2.setAttribute('width', width);
      e2.setAttribute('height', width);
    }
  }

}
