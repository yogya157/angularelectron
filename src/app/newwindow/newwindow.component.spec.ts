import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewwindowComponent } from './newwindow.component';

describe('NewwindowComponent', () => {
  let component: NewwindowComponent;
  let fixture: ComponentFixture<NewwindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewwindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
