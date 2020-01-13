import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotefoundComponent } from './pagenotefound.component';

describe('PagenotefoundComponent', () => {
  let component: PagenotefoundComponent;
  let fixture: ComponentFixture<PagenotefoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenotefoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotefoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
