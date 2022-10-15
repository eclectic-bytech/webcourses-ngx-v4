import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WebcoursesComponent } from './webcourses.component';

describe('WebcoursesComponent', () => {
  let component: WebcoursesComponent;
  let fixture: ComponentFixture<WebcoursesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WebcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
