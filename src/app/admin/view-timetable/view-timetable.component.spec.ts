import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTimetableComponent } from './view-timetable.component';

describe('ViewTimetableComponent', () => {
  let component: ViewTimetableComponent;
  let fixture: ComponentFixture<ViewTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTimetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
