import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTTComponent } from './view-tt.component';

describe('ViewTTComponent', () => {
  let component: ViewTTComponent;
  let fixture: ComponentFixture<ViewTTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
