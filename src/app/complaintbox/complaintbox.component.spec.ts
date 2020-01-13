import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintboxComponent } from './complaintbox.component';

describe('ComplaintboxComponent', () => {
  let component: ComplaintboxComponent;
  let fixture: ComponentFixture<ComplaintboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
