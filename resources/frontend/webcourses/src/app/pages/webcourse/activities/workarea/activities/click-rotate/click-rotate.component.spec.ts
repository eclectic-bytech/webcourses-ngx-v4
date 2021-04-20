import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ClickRotateComponent } from './click-rotate.component'

describe('ClickRotateComponent', () => {
  let component: ClickRotateComponent
  let fixture: ComponentFixture<ClickRotateComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickRotateComponent ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickRotateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
