import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { MyCoursesCardComponent } from './my-courses-card.component'

describe('MyCoursesCardComponent', () => {
  let component: MyCoursesCardComponent
  let fixture: ComponentFixture<MyCoursesCardComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCoursesCardComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoursesCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
