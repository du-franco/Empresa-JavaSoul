import { Router, ActivatedRoute } from '@angular/router';
import { DepartamentoService } from 'src/app/servicos/departamento.service';
import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamentoModel';

@Component({
  selector: 'app-excluir-departamento',
  templateUrl: './excluir-departamento.component.html',
  styleUrls: ['./excluir-departamento.component.css']
})
export class ExcluirDepartamentoComponent implements OnInit {


  departamento:Departamento = {
    id_departamento:'',
    dep_nome:'',
    dep_descricao:'',
    dep_equipe:'',
  }

  constructor(
    private depService:DepartamentoService,
    private router:Router,
    private route:ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.departamento.id_departamento = this.route.snapshot.paramMap.get('id')
    this.mostrarUmDepartamento();
  }

  mostrarUmDepartamento(){
    this.depService.buscarUmDepartamento(this.departamento.id_departamento).subscribe(resposta => {
      this.departamento = resposta
    })
  }

  excluirDepartamento(){
    this.depService.excluirDepartamento(this.departamento.id_departamento).subscribe({
      complete: () => { alert("Departamento excluído com sucesso")
                      this.router.navigate(['/listaDepartamento'])},
    error: () => { alert("Esse Departamento possui cargo ou funcionários associados, não pode ser deletado")

                  this.router.navigate(['/listaDepartamento']) },
    next: () => { console.log("Departamento excluído com sucesso")}
    })
  }



  cancelarExclusao(){
    this.router.navigate(['/listaDepartamento'])
  }

}
