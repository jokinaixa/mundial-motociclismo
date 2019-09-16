import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionFormComponent } from './clasificacion-form.component';

describe('ClasificacionFormComponent', () => {
  let component: ClasificacionFormComponent;
  let fixture: ComponentFixture<ClasificacionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificacionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
