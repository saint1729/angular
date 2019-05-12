import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HorizStackedBarComponent } from './horiz-stacked-bar.component';


@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    ],
  declarations: [ HorizStackedBarComponent],
  bootstrap:    [ HorizStackedBarComponent]
})

export class AppModule { }
