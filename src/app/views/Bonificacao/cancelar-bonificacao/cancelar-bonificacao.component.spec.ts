import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarBonificacaoComponent } from './cancelar-bonificacao.component';

describe('CancelarBonificacaoComponent', () => {
  let component: CancelarBonificacaoComponent;
  let fixture: ComponentFixture<CancelarBonificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelarBonificacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarBonificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
