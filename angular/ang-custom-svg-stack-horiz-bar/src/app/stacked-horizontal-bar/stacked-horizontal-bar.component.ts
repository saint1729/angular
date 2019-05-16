import { Component, OnInit } from '@angular/core';
import { single, multi } from '../data';

@Component({
  selector: 'app-stacked-horizontal-bar',
  templateUrl: './stacked-horizontal-bar.component.html',
  styleUrls: ['./stacked-horizontal-bar.component.scss']
})
export class StackedHorizontalBarComponent implements OnInit {

  public single: any[];
  public multi: any[];
  public view: any[] = [1000, 50];
  public showXAxis = false;
  public showYAxis = false;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = false;
  public xAxisLabel = '';
  public showYAxisLabel = false;
  public yAxisLabel = '';

  public colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, {single, multi});
  }

  ngOnInit() {
  }

  onSelect(event: any) {
    console.log(event);
  }

}
