import { TestBed } from '@angular/core/testing';

import { FuncionarioCargoService } from './funcionario-cargo.service';

describe('FuncionarioCargoService', () => {
  let service: FuncionarioCargoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionarioCargoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
