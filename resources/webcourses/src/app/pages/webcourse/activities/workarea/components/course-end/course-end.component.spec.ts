import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { CourseEndComponent } from './course-end.component'

describe('CourseEndComponent', () => {
  let component: CourseEndComponent
  let fixture: ComponentFixture<CourseEndComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEndComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEndComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
