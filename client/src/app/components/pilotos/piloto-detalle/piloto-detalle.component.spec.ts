import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotoDetalleComponent } from './piloto-detalle.component';

describe('PilotoDetalleComponent', () => {
  let component: PilotoDetalleComponent;
  let fixture: ComponentFixture<PilotoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
