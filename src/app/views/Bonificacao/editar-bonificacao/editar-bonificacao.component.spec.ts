import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBonificacaoComponent } from './editar-bonificacao.component';

describe('EditarBonificacaoComponent', () => {
  let component: EditarBonificacaoComponent;
  let fixture: ComponentFixture<EditarBonificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarBonificacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarBonificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
