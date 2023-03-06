import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountCodesUsersComponent } from './discount-codes-users.component';

describe('DiscountCodesUsersComponent', () => {
  let component: DiscountCodesUsersComponent;
  let fixture: ComponentFixture<DiscountCodesUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountCodesUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountCodesUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
