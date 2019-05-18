import { Component, OnInit, Input } from '@angular/core';
import { multi } from '../data';

@Component({
  selector: 'app-custom-legend',
  templateUrl: './custom-legend.component.html',
  styleUrls: ['./custom-legend.component.scss']
})
export class CustomLegendComponent implements OnInit {

  @Input() public colorScheme: any = {};

  public multi: any[];

  constructor() {
    Object.assign(this, {multi});
  }

  ngOnInit() {
  }

}
