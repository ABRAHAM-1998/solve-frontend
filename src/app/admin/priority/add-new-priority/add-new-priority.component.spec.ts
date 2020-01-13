import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPriorityComponent } from './add-new-priority.component';

describe('AddNewPriorityComponent', () => {
  let component: AddNewPriorityComponent;
  let fixture: ComponentFixture<AddNewPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
