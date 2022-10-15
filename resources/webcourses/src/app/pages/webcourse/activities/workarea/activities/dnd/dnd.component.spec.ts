import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DndComponent } from './dnd.component';

describe('DndComponent', () => {
  let component: DndComponent;
  let fixture: ComponentFixture<DndComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
