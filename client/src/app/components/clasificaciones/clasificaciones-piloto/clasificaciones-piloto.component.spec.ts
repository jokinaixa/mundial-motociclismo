import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionesPilotoComponent } from './clasificaciones-piloto.component';

describe('ClasificacionesPilotoComponent', () => {
  let component: ClasificacionesPilotoComponent;
  let fixture: ComponentFixture<ClasificacionesPilotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificacionesPilotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificacionesPilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
