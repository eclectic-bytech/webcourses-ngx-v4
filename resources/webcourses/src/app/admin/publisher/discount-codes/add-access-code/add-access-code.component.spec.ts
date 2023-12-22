import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AddAccessCodeComponent } from './add-access-code.component'

describe('AddAccessCodeComponent', () => {
  let component: AddAccessCodeComponent
  let fixture: ComponentFixture<AddAccessCodeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAccessCodeComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(AddAccessCodeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
