import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from 'src/app/servicos/departamento.service';
import { Departamento } from 'src/app/models/departamentoModel';

@Component({
  selector: 'app-lista-departamento',
  templateUrl: './lista-departamento.component.html',
  styleUrls: ['./lista-departamento.component.css']
})
export class ListaDepartamentoComponent implements OnInit {

  departamentos:Departamento[] = []

  constructor(private depService:DepartamentoService,
    private router:Router) { }

  ngOnInit(): void {
    this.mostrarTodosDepartamentos();
  }

  mostrarTodosDepartamentos(){
    this.depService.buscarTodosDepartamentos().subscribe(resultado => {
      this.departamentos = resultado;
    })
  }

}
