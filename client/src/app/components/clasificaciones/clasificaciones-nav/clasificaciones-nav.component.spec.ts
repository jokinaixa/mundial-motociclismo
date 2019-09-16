import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionesNavComponent } from './clasificaciones-nav.component';

describe('ClasificacionesNavComponent', () => {
  let component: ClasificacionesNavComponent;
  let fixture: ComponentFixture<ClasificacionesNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificacionesNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificacionesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
