import { Router, ActivatedRoute } from '@angular/router';
import { DepartamentoService } from 'src/app/servicos/departamento.service';
import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamentoModel';

@Component({
  selector: 'app-editar-departamento',
  templateUrl: './editar-departamento.component.html',
  styleUrls: ['./editar-departamento.component.css']
})
export class EditarDepartamentoComponent implements OnInit {



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
    this.departamento.id_departamento = this.route.snapshot.paramMap.get('id_departamento')
    this.mostrarUmDepartamento();
  }

  mostrarUmDepartamento(){
    this.depService.buscarUmDepartamento(this.departamento.id_departamento).subscribe(resposta => {
      this.departamento = resposta
    })
  }

  editarDepartamento(){
    this.depService.editarDepartamento(this.departamento, this.departamento.id_departamento).subscribe({
      complete: () => { alert("Departamento editado com sucesso")
                      this.router.navigate(['/listaDepartamento'])
                    console.log("erro")},
    error: () => { alert("Erro: Não foi possível editar esse departamento")

                  this.router.navigate(['/listaDepartamento']) },
    next: () => { console.log("Departamento editado com sucesso")}
    })
  }


  cancelarEdicao(){
    this.router.navigate(['/listaDepartamento'])
  }

}
