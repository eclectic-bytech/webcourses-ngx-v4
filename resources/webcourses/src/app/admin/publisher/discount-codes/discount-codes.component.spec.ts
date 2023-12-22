import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountCodesComponent } from './discount-codes.component';

describe('DiscountCodesComponent', () => {
  let component: DiscountCodesComponent;
  let fixture: ComponentFixture<DiscountCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountCodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
