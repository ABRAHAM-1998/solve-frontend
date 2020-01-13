import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintstatusComponent } from './complaintstatus.component';

describe('ComplaintstatusComponent', () => {
  let component: ComplaintstatusComponent;
  let fixture: ComponentFixture<ComplaintstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
