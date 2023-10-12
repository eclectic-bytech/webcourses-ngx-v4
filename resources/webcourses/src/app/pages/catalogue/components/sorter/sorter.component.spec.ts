import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CatalogueSorterComponent } from './sorter.component'

describe('CatalogueSorterComponent', () => {
  let component: CatalogueSorterComponent
  let fixture: ComponentFixture<CatalogueSorterComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueSorterComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(CatalogueSorterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
