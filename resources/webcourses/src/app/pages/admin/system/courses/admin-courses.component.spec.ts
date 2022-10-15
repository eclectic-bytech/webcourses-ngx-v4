import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminCoursesComponent } from './admin-courses.component';

describe('AdminCoursesComponent', () => {
  let component: AdminCoursesComponent;
  let fixture: ComponentFixture<AdminCoursesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
