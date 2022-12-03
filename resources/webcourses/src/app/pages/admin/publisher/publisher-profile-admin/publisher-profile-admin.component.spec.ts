import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherProfileAdminComponent } from './publisher-profile-admin.component';

describe('PublisherProfileAdminComponent', () => {
  let component: PublisherProfileAdminComponent;
  let fixture: ComponentFixture<PublisherProfileAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherProfileAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherProfileAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
