import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotosEquipoComponent } from './pilotos-equipo.component';

describe('PilotosEquipoComponent', () => {
  let component: PilotosEquipoComponent;
  let fixture: ComponentFixture<PilotosEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotosEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotosEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
