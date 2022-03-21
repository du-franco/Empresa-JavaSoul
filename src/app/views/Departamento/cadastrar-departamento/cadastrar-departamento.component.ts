import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DepartamentoService } from 'src/app/servicos/departamento.service';
import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamentoModel';

@Component({
  selector: 'app-cadastrar-departamento',
  templateUrl: './cadastrar-departamento.component.html',
  styleUrls: ['./cadastrar-departamento.component.css']
})
export class CadastrarDepartamentoComponent implements OnInit {

  departamento:Departamento = {
    id_departamento:'',
    dep_nome:'',
    dep_descricao:'',
    dep_equipe:'',
  }

  constructor(
    private depService:DepartamentoService,
    private router:Router,
    private http:HttpClient,
  ) { }

  ngOnInit(): void {
  }

  cadastrarDepartamento(){
    this.depService.cadastrarDepartamento(this.departamento).subscribe({
      complete: () => {alert("Departamento cadastrado com sucesso")
        this.router.navigate(['/listaDepartamento'])},
      error: () => {alert("Erro: Não foi possível cadastrar o departamento")
        this.router.navigate(['/listaDepartamento'])  }
    })
  }

  cancelarCadastro(){
    this.router.navigate(['/listaDepartamento'])
  }

}
