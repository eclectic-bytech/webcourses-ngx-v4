import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EnterCourseComponent } from './enter-course.component'

describe('EnterCourseComponent', () => {
  let component: EnterCourseComponent
  let fixture: ComponentFixture<EnterCourseComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterCourseComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(EnterCourseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
