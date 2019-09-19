import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoFichaComponent } from './equipo-ficha.component';

describe('EquipoFichaComponent', () => {
  let component: EquipoFichaComponent;
  let fixture: ComponentFixture<EquipoFichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipoFichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
