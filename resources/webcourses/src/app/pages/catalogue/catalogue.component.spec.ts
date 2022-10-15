import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { CatalogueComponent } from './catalogue.component'

describe('CatalogueComponent', () => {
  let component: CatalogueComponent
  let fixture: ComponentFixture<CatalogueComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
