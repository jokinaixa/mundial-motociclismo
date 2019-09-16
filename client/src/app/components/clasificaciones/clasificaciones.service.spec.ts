import { TestBed } from '@angular/core/testing';

import { ClasificacionesService } from './clasificaciones.service';

describe('ClasificacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClasificacionesService = TestBed.get(ClasificacionesService);
    expect(service).toBeTruthy();
  });
});
