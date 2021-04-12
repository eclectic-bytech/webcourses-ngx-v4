import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginRedirectComponent } from './login-redirect.component';

describe('LoginRedirectComponent', () => {
  let component: LoginRedirectComponent;
  let fixture: ComponentFixture<LoginRedirectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
