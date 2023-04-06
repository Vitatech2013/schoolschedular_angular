import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFstudentComponent } from './view-fstudent.component';

describe('ViewFstudentComponent', () => {
  let component: ViewFstudentComponent;
  let fixture: ComponentFixture<ViewFstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFstudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
