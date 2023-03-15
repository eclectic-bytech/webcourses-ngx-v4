import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BeforeAndAfterComponent } from './before-and-after.component'

describe('BeforeAndAfterComponent', () => {
  let component: BeforeAndAfterComponent
  let fixture: ComponentFixture<BeforeAndAfterComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeforeAndAfterComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(BeforeAndAfterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
