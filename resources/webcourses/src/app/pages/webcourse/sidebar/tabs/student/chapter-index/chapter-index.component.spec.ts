import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { ChapterIndexComponent } from './chapter-index.component'

describe('ChapterIndexComponent', () => {
  let component: ChapterIndexComponent
  let fixture: ComponentFixture<ChapterIndexComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterIndexComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterIndexComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
