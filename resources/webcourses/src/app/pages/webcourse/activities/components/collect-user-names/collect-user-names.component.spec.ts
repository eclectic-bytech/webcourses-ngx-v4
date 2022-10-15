import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { CollectUserNamesComponent } from './collect-user-names.component'

describe('CollectUserNamesComponent', () => {
  let component: CollectUserNamesComponent
  let fixture: ComponentFixture<CollectUserNamesComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectUserNamesComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectUserNamesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
