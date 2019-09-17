import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitoFichaComponent } from './circuito-ficha.component';

describe('CircuitoFichaComponent', () => {
  let component: CircuitoFichaComponent;
  let fixture: ComponentFixture<CircuitoFichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircuitoFichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitoFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
