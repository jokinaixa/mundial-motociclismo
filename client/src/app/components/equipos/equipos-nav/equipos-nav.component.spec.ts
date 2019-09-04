import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposNavComponent } from './equipos-nav.component';

describe('EquiposNavComponent', () => {
  let component: EquiposNavComponent;
  let fixture: ComponentFixture<EquiposNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
