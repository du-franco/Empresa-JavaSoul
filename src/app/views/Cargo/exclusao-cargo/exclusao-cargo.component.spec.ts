import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusaoTurmaComponent } from './exclusao-turma.component';

describe('ExclusaoTurmaComponent', () => {
  let component: ExclusaoTurmaComponent;
  let fixture: ComponentFixture<ExclusaoTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExclusaoTurmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusaoTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
