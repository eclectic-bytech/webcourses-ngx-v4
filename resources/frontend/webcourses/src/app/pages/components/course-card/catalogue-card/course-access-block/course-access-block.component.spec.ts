import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CourseAccessBlockComponent } from './course-access-block.component'

describe('CourseAccessBlockComponent', () => {
  let component: CourseAccessBlockComponent
  let fixture: ComponentFixture<CourseAccessBlockComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAccessBlockComponent ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAccessBlockComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
