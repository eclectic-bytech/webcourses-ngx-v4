import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaymentSuccessfulComponent } from './payment-successful.component';

describe('PaymentSuccessfulComponent', () => {
  let component: PaymentSuccessfulComponent;
  let fixture: ComponentFixture<PaymentSuccessfulComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
