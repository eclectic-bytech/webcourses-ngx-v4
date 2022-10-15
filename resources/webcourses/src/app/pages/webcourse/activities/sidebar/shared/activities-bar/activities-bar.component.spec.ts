import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ActivitiesBarComponent } from './activities-bar.component';

describe('ActivitiesBarComponent', () => {
  let component: ActivitiesBarComponent;
  let fixture: ComponentFixture<ActivitiesBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
