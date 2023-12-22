import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BookmarkButtonComponent } from './bookmark-button.component'

describe('BookmarkButtonComponent', () => {
  let component: BookmarkButtonComponent
  let fixture: ComponentFixture<BookmarkButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkButtonComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(BookmarkButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
