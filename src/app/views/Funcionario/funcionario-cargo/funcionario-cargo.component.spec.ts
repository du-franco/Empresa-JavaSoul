import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioCargoComponent } from './funcionario-cargo.component';

describe('FuncionarioCargoComponent', () => {
  let component: FuncionarioCargoComponent;
  let fixture: ComponentFixture<FuncionarioCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
