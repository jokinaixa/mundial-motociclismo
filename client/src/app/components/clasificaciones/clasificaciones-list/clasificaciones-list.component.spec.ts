import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionesListComponent } from './clasificaciones-list.component';

describe('ClasificacionesListComponent', () => {
  let component: ClasificacionesListComponent;
  let fixture: ComponentFixture<ClasificacionesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificacionesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificacionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
