import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAdminComponent } from './nav-admin.component';

describe('NavAdminComponent', () => {
  let component: NavAdminComponent;
  let fixture: ComponentFixture<NavAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
