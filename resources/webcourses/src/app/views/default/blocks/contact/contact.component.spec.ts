import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ContactBlockComponent } from './contact.component'

describe('ContactBlockComponent', () => {
  let component: ContactBlockComponent
  let fixture: ComponentFixture<ContactBlockComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactBlockComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(ContactBlockComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
