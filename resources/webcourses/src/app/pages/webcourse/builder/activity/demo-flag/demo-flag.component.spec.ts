import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFlagComponent } from './demo-flag.component';

describe('DemoFlagComponent', () => {
  let component: DemoFlagComponent;
  let fixture: ComponentFixture<DemoFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFlagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
