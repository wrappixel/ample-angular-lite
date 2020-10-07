import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlychartComponent } from './yearlychart.component';

describe('YearlychartComponent', () => {
  let component: YearlychartComponent;
  let fixture: ComponentFixture<YearlychartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearlychartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
