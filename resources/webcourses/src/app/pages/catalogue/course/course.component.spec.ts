import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { CourseComponent } from './course.component'

describe('CourseComponent', () => {
  let component: CourseComponent
  let fixture: ComponentFixture<CourseComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
