import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTableComponent } from './recent-table.component';

describe('RecentTableComponent', () => {
  let component: RecentTableComponent;
  let fixture: ComponentFixture<RecentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
