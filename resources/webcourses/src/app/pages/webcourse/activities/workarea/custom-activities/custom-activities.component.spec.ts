import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { CustomActivitiesComponent } from './custom-activities.component'

describe('CustomActivitiesComponent', () => {
  let component: CustomActivitiesComponent
  let fixture: ComponentFixture<CustomActivitiesComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomActivitiesComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomActivitiesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
