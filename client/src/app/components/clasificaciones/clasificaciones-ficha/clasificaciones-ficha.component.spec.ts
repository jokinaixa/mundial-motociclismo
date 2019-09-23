import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionesFichaComponent } from './clasificaciones-ficha.component';

describe('ClasificacionesFichaComponent', () => {
  let component: ClasificacionesFichaComponent;
  let fixture: ComponentFixture<ClasificacionesFichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificacionesFichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificacionesFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
