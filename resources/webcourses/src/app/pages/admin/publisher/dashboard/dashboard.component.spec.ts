import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherAdminDashboardComponent } from './dashboard.component';

describe('PublisherAdminDashboardComponent', () => {
  let component: PublisherAdminDashboardComponent;
  let fixture: ComponentFixture<PublisherAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherAdminDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
