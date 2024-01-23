import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingXyzComponent } from './showing-xyz.component';

describe('ShowingXyzComponent', () => {
  let component: ShowingXyzComponent;
  let fixture: ComponentFixture<ShowingXyzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowingXyzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowingXyzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
