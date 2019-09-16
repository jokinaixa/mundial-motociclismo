import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitosListComponent } from './circuitos-list.component';

describe('CircuitosListComponent', () => {
  let component: CircuitosListComponent;
  let fixture: ComponentFixture<CircuitosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircuitosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
