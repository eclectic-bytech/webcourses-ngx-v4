import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { CouponFieldComponent } from './coupon-field.component'

describe('CouponFieldComponent', () => {
  let component: CouponFieldComponent
  let fixture: ComponentFixture<CouponFieldComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponFieldComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponFieldComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
