import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EnrolMessageComponent } from './enrol-message.component';

describe('EnrolMessageComponent', () => {
  let component: EnrolMessageComponent;
  let fixture: ComponentFixture<EnrolMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
