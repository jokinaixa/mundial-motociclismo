import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitoFormComponent } from './circuito-form.component';

describe('CircuitoFormComponent', () => {
  let component: CircuitoFormComponent;
  let fixture: ComponentFixture<CircuitoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircuitoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
