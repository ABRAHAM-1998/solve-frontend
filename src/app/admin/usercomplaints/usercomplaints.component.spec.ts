import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercomplaintsComponent } from './usercomplaints.component';

describe('UsercomplaintsComponent', () => {
  let component: UsercomplaintsComponent;
  let fixture: ComponentFixture<UsercomplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercomplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
