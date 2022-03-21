import { CargoService } from './../../../servicos/cargo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionarioModel';
import { FuncionarioService } from 'src/app/servicos/funcionario.service';

@Component({
  selector: 'app-lista-funcionario',
  templateUrl: './lista-funcionario.component.html',
  styleUrls: ['./lista-funcionario.component.css']
})
export class ListaFuncionarioComponent implements OnInit {

  id_cargo: string = ''
  nomeCargo: any
  funcionarios: Funcionario[] = []

  constructor(
    private funcionarioService:FuncionarioService, private route:ActivatedRoute,
    private router:Router, private cargoService:CargoService
    ) { }

  ngOnInit(): void {
    this.id_cargo = this.route.snapshot.paramMap.get("id_cargo")!;
    this.buscarFuncionariosCargo();
    this.buscarCargoFuncionario();
  }

  buscarFuncionariosCargo(){
    this.funcionarioService.buscarFuncionariosCargo(this.id_cargo).subscribe((resultado) => {
      this.funcionarios = resultado;
      console.log(resultado)
    })
  }

  chamarFormularioCadastro(){
    this.router.navigate([`/cadastroFuncionario/${this.id_cargo}`])
  }

  buscarCargoFuncionario(){
    this.cargoService.mostrarUmCargo(this.id_cargo).subscribe((resultado) => {
      this.nomeCargo = resultado.car_descricao

    })
  }

}
