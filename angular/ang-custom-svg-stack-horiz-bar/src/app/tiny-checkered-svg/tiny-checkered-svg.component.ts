import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { DocumentReference } from '../document-reference';

@Component({
  selector: 'app-tiny-checkered-svg',
  templateUrl: './tiny-checkered-svg.component.html',
  styleUrls: ['./tiny-checkered-svg.component.scss']
})

export class TinyCheckeredSVGComponent implements OnInit {

  @Input() width: any;

  constructor(private documentReference: DocumentReference) {
  }

  ngOnInit(): void {
    this.width = 1900;
    this.setWidth(this.width);
  }

  setWidth(width: any): void {
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
