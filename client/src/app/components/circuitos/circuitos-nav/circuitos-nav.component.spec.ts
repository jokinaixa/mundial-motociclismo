import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitosNavComponent } from './circuitos-nav.component';

describe('CircuitosNavComponent', () => {
  let component: CircuitosNavComponent;
  let fixture: ComponentFixture<CircuitosNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircuitosNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitosNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
