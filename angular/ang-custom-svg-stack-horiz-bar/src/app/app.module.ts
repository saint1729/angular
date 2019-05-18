import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { TinyCheckeredSVGComponent } from './tiny-checkered-svg/tiny-checkered-svg.component';
import { DocumentReference } from './document-reference';
import { StackedHorizontalBarComponent } from './stacked-horizontal-bar/stacked-horizontal-bar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomLegendComponent } from './custom-legend/custom-legend.component';

@NgModule({
  declarations: [
    TinyCheckeredSVGComponent,
    StackedHorizontalBarComponent,
    CustomLegendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [DocumentReference],
  bootstrap: [StackedHorizontalBarComponent]
})
export class AppModule { }
