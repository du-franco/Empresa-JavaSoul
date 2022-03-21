import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirDepartamentoComponent } from './excluir-departamento.component';

describe('ExcluirDepartamentoComponent', () => {
  let component: ExcluirDepartamentoComponent;
  let fixture: ComponentFixture<ExcluirDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
