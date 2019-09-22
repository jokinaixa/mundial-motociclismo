import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionesCircuitoComponent } from './clasificaciones-circuito.component';

describe('ClasificacionesCircuitoComponent', () => {
  let component: ClasificacionesCircuitoComponent;
  let fixture: ComponentFixture<ClasificacionesCircuitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificacionesCircuitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificacionesCircuitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
