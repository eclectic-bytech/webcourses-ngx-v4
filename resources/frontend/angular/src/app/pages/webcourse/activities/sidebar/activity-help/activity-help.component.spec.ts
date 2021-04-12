import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { ActivityHelpComponent } from './activity-help.component'

describe('ActivityHelpComponent', () => {
  let component: ActivityHelpComponent
  let fixture: ComponentFixture<ActivityHelpComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityHelpComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityHelpComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
