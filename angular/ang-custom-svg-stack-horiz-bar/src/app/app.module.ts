import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { TinyCheckeredSVGComponent } from './tiny-checkered-svg/tiny-checkered-svg.component';
import { DocumentReference } from './document-reference';
import { StackedHorizontalBarComponent } from './stacked-horizontal-bar/stacked-horizontal-bar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    TinyCheckeredSVGComponent,
    StackedHorizontalBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [DocumentReference],
  bootstrap: [TinyCheckeredSVGComponent]
})
export class AppModule { }
