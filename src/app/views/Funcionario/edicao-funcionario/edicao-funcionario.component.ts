import { CargoService } from './../../../servicos/cargo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/servicos/funcionario.service';
import { Funcionario } from 'src/app/models/funcionarioModel';

@Component({
  selector: 'app-edicao-funcionario',
  templateUrl: './edicao-funcionario.component.html',
  styleUrls: ['./edicao-funcionario.component.css']
})
export class EdicaoFuncionarioComponent implements OnInit {

  id_cargo: string = ''

  cargoEscolhido:any = []
  cargos:any
  nomeCargo: any

  funcionario:Funcionario ={
    id_funcionario:'',
    func_nome:'',
    func_foto:'',
    func_cidade:'',
    func_cargo:'',
  }

  constructor(
    private funcionarioService:FuncionarioService,
    private route:ActivatedRoute,
    private router:Router,
    private cargoService:CargoService
    ) {}

  ngOnInit(): void {

    this.funcionario.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario');
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')!;

    this.buscarUmFuncionario();
    
  }

  buscarUmFuncionario(){
    this.funcionarioService.buscarUmFuncionario(this.funcionario.id_funcionario).subscribe((resultado) => {
      this.funcionario = resultado
    })
  }

  editarFuncionario(){
    this.funcionarioService.editarFuncionario(this.funcionario, this.funcionario.id_funcionario, this.id_cargo ).subscribe({
      complete: () => {alert("Funcionário editado com sucesso!")
                   this.router.navigate(['/funcCargo'])},
      error: () => {alert("Ocorreu um erro ao editar funcionário")
              this.router.navigate(['/funcCargo'])},
      next: () => {console.log("Funcionário editado")}
    })
  }



  buscarCargoFuncionario(){
    this.cargoService.mostrarUmCargo(this.id_cargo).subscribe((resultado) => {
      this.nomeCargo = resultado.car_descricao

    })
  }

  cancelarEdicao(){
    this.router.navigate(['/funcCargo'])
  }

}
