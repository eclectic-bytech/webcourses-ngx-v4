import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { CatalogueCardComponent } from './catalogue-card.component'

describe('CatalogueCardComponent', () => {
  let component: CatalogueCardComponent
  let fixture: ComponentFixture<CatalogueCardComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueCardComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
