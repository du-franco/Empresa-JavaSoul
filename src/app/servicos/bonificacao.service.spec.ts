import { TestBed } from '@angular/core/testing';

import { BonificacaoService } from './bonificacao.service';

describe('BonificacaoService', () => {
  let service: BonificacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonificacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
