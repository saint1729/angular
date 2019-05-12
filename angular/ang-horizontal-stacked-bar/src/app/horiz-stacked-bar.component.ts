import {Component} from '@angular/core';
import {multi} from '../data';


@Component({
  selector: 'app-horiz-stacked-bar',
  templateUrl: './horiz-stacked-bar.component.html',
  styleUrls: [ './horiz-stacked-bar.component.scss' ]

})


export class HorizStackedBarComponent {

  multi: any[];

  constructor() {
    Object.assign(this, { multi });
  }

  view: number[] = [1800, 100];

  showLegend = true;

  onSelect(event) {
    console.log(event);
  }


}
