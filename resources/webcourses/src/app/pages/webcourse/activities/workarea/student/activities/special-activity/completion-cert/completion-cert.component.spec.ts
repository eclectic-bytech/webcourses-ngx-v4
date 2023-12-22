import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CompletionCertComponent } from './completion-cert.component'

describe('CompletionCertComponent', () => {
  let component: CompletionCertComponent
  let fixture: ComponentFixture<CompletionCertComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletionCertComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(CompletionCertComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
