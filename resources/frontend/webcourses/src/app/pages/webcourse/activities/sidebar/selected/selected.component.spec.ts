import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { SelectedComponent } from './selected.component'

describe('SelectedComponent', () => {
  let component: SelectedComponent
  let fixture: ComponentFixture<SelectedComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
