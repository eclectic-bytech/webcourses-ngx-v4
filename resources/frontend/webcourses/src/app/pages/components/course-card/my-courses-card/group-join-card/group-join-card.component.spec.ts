import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GroupJoinCardComponent } from './group-join-card.component';

describe('GroupJoinCardComponent', () => {
  let component: GroupJoinCardComponent;
  let fixture: ComponentFixture<GroupJoinCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupJoinCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupJoinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
