import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedHorizontalBarComponent } from './stacked-horizontal-bar.component';

describe('StackedHorizontalBarComponent', () => {
  let component: StackedHorizontalBarComponent;
  let fixture: ComponentFixture<StackedHorizontalBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedHorizontalBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedHorizontalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
