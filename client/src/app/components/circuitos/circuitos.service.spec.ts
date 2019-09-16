import { TestBed } from '@angular/core/testing';

import { CircuitosService } from './circuitos.service';

describe('CircuitosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CircuitosService = TestBed.get(CircuitosService);
    expect(service).toBeTruthy();
  });
});
