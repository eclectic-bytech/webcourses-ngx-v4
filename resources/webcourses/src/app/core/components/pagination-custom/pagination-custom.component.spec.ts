import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PaginationCustomComponent } from './pagination-custom.component'

describe('PaginationCustomComponent', () => {
  let component: PaginationCustomComponent
  let fixture: ComponentFixture<PaginationCustomComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationCustomComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(PaginationCustomComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
