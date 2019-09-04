import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotosNavComponent } from './pilotos-nav.component';

describe('PilotosNavComponent', () => {
  let component: PilotosNavComponent;
  let fixture: ComponentFixture<PilotosNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotosNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotosNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
