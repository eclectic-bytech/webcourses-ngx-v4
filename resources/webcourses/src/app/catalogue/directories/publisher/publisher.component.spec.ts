import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { PublisherComponent } from './publisher.component'

describe('PublisherComponent', () => {
  let component: PublisherComponent
  let fixture: ComponentFixture<PublisherComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
