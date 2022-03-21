import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonificacaoComponent } from './bonificacao.component';

describe('BonificacaoComponent', () => {
  let component: BonificacaoComponent;
  let fixture: ComponentFixture<BonificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonificacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
