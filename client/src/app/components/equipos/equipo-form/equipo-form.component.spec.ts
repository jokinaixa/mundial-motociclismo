import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoFormComponent } from './equipo-form.component';

describe('EquipoFormComponent', () => {
  let component: EquipoFormComponent;
  let fixture: ComponentFixture<EquipoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
