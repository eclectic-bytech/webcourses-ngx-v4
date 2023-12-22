import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AccessCodeModalComponent } from './access-code-modal.component'

describe('AccessCodeModalComponent', () => {
  let component: AccessCodeModalComponent
  let fixture: ComponentFixture<AccessCodeModalComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessCodeModalComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(AccessCodeModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
