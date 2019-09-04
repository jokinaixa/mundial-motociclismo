import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotosListComponent } from './pilotos-list.component';

describe('PilotosListComponent', () => {
  let component: PilotosListComponent;
  let fixture: ComponentFixture<PilotosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
