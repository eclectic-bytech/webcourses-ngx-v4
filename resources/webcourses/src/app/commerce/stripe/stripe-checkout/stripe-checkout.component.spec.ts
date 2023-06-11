import { ComponentFixture, TestBed } from '@angular/core/testing'

import { StripeCheckoutComponent } from './stripe-checkout.component'

describe('StripeCheckoutComponent', () => {
  let component: StripeCheckoutComponent
  let fixture: ComponentFixture<StripeCheckoutComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripeCheckoutComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(StripeCheckoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
