import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFilterButtonComponent } from './course-filter-button.component';

describe('CourseFilterButtonComponent', () => {
  let component: CourseFilterButtonComponent;
  let fixture: ComponentFixture<CourseFilterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseFilterButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseFilterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
