import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMenuComponent } from './student-menu.component';

describe('StudentMenuComponent', () => {
  let component: StudentMenuComponent;
  let fixture: ComponentFixture<StudentMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
