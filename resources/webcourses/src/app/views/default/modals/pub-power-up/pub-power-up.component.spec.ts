import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PubPowerUpComponent } from './pub-power-up.component'

describe('PubPowerUpComponent', () => {
  let component: PubPowerUpComponent
  let fixture: ComponentFixture<PubPowerUpComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PubPowerUpComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(PubPowerUpComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
