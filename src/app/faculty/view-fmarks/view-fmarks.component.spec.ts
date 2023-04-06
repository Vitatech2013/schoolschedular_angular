import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFmarksComponent } from './view-fmarks.component';

describe('ViewFmarksComponent', () => {
  let component: ViewFmarksComponent;
  let fixture: ComponentFixture<ViewFmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFmarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
