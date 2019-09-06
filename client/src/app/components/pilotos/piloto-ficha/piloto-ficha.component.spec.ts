import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotoFichaComponent } from './piloto-ficha.component';

describe('PilotoFichaComponent', () => {
  let component: PilotoFichaComponent;
  let fixture: ComponentFixture<PilotoFichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotoFichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotoFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
