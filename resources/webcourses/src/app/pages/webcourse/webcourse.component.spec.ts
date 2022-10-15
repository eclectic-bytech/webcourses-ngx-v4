import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { WebcourseComponent } from './webcourse.component'

describe('WebcourseComponent', () => {
  let component: WebcourseComponent
  let fixture: ComponentFixture<WebcourseComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WebcourseComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcourseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
