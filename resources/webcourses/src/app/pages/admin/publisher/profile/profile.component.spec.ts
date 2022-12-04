import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherProfileComponent } from './profile.component';

describe('PublisherProfileAdminComponent', () => {
  let component: PublisherProfileComponent;
  let fixture: ComponentFixture<PublisherProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
