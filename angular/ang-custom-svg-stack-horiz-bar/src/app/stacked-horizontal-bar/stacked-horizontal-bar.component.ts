import { Component, OnInit, ElementRef } from '@angular/core';
import { single, multi } from '../data';

@Component({
  selector: 'app-stacked-horizontal-bar',
  templateUrl: './stacked-horizontal-bar.component.html',
  styleUrls: ['./stacked-horizontal-bar.component.scss']
})
export class StackedHorizontalBarComponent implements OnInit {

  public single: any[];
  public multi: any[];
  public view: any[] = [(window.innerWidth) * 0.8, 40];
  public showXAxis = false;
  public showYAxis = false;
  public gradient = false;
  public showLegend = true;
  public legendPosition = 'below';
  public showXAxisLabel = false;
  public xAxisLabel = '';
  public showYAxisLabel = false;
  public yAxisLabel = '';

  public colorScheme = {
    domain: ['#008800', 'url(#saint1729)', '#A10A28', '#AAAAAA']
  };

  constructor(private el: ElementRef) {
    Object.assign(this, {single, multi});
  }

  ngOnInit() {
  }

  onSelect(event: any) {
    console.log(event);
  }

}
