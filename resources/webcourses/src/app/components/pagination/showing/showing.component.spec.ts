import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingComponent } from './showing.component';

describe('ShowingComponent', () => {
  let component: ShowingComponent;
  let fixture: ComponentFixture<ShowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
