import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewMarksComponent } from './admin-view-marks.component';

describe('AdminViewMarksComponent', () => {
  let component: AdminViewMarksComponent;
  let fixture: ComponentFixture<AdminViewMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewMarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
