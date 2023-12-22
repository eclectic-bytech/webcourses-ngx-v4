import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PublisherCoursesComponent } from './courses.component'

describe('CoursesComponent', () => {
  let component: PublisherCoursesComponent
  let fixture: ComponentFixture<PublisherCoursesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherCoursesComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(PublisherCoursesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
