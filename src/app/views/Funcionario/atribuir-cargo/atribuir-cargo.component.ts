import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from 'src/app/servicos/funcionario.service';
import { CargoService } from 'src/app/servicos/cargo.service';
import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/models/cargoModel';
import { Funcionario } from 'src/app/models/funcionarioModel';

@Component({
  selector: 'app-atribuir-cargo',
  templateUrl: './atribuir-cargo.component.html',
  styleUrls: ['./atribuir-cargo.component.css']
})
export class AtribuirCargoComponent implements OnInit {

  cargos:Cargo[] = []
  cargoEscolhido:any = []
  id_cargo:any
  id_funcionario:any
  cargoDoFuncionario:any = []

  funcionario:Funcionario ={
    id_funcionario:'',
    func_nome:'',
    func_foto:'',
    func_cidade:'',
    func_cargo:'',
  }

  constructor(
    private cargoService:CargoService,
    private funcService:FuncionarioService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario');

    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo');

    this.buscarTodosCargos();

    this.mostrarFuncionario();

    this.buscarCargo();

  }

  buscarTodosCargos(){
    this.cargoService.mostrarTodosCargos().subscribe(resultado => {
      this.cargos = resultado
    })
  }

  mostrarCargo(){
    console.log(this.cargoEscolhido)
  }

  mostrarFuncionario(){
    this.funcService.buscarUmFuncionario(this.id_funcionario).subscribe(resultado => {
      this.funcionario = resultado
    })
  }

  buscarCargo(){
    this.cargoService.mostrarUmCargo(this.id_cargo).subscribe(resultado => {
      this.cargoEscolhido = resultado
    })
  }

  atribuirCargo(){
    this.funcService.atribuirCargo(this.cargoEscolhido, this.id_funcionario).subscribe({
      complete: () => { alert("Funcionário cadastrado no cargo com sucesso")
                  this.router.navigate(['/cargo'])
                      },
      error: () => { alert("Erro: Funcionário não cadastrado no cargo")
                  this.router.navigate(['/cargo'])
                      },
      next: () => { console.log("Funcionário cadastrado com sucesso")}

      });
  }

  deixarFuncionarioSemCargo(){
    this.funcService.deixarFuncionarioSemCargo (this.funcionario, this.id_funcionario).subscribe({
      complete: () => { alert("Funcionário ficou sem cargo")
                  this.router.navigate(['/funcionariosComCargo'])
                      },
      error: () => { alert("Erro: Funcionário não ficou sem cargo")
                  this.router.navigate(['/funcionariosComCargo'])
                      },
      next: () => { console.log("Funcionário editado com sucesso")}

      });

  }

}
