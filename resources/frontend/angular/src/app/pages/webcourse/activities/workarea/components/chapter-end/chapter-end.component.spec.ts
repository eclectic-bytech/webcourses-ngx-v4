import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { ChapterEndComponent } from './chapter-end.component'

describe('ChapterEndComponent', () => {
  let component: ChapterEndComponent
  let fixture: ComponentFixture<ChapterEndComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterEndComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterEndComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
