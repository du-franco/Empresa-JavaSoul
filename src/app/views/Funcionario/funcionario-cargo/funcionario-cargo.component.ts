import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FuncionarioCargoService } from 'src/app/servicos/funcionario-cargo.service';
import { Funcionario } from 'src/app/models/funcionarioCargoModel';
import { Cargo } from 'src/app/models/cargoModel';


@Component({
  selector: 'app-funcionario-cargo',
  templateUrl: './funcionario-cargo.component.html',
  styleUrls: ['./funcionario-cargo.component.css']
})
export class FuncionarioCargoComponent implements OnInit {

  func:Funcionario[] = []

  funcionarios:Funcionario[] = []

  filter:string = ''

  constructor(
    private funcService: FuncionarioCargoService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.mostrarFuncECargos();
    this.buscarTodosFuncionarios();
  }



  mostrarFuncECargos(){
    this.funcService.buscarTodosCargos().subscribe(resultado => {
      console.log("AQUI" + resultado)
      resultado.forEach((funcionario: any[]) => {
        let funcionariosComCargo: any ={
          id_funcionario:'',
          func_nome:'',
          func_cidade:'',
          func_foto:'',
          id_cargo:'',
          car_nome:'',
          car_descricao:'',
        }

          funcionariosComCargo.id_cargo = funcionario[0]
          funcionariosComCargo.car_nome = funcionario[1]
          funcionariosComCargo.car_descricao = funcionario[2]
        if(funcionario[4] != null){
          funcionariosComCargo.id_funcionario = funcionario[3]
          funcionariosComCargo.func_nome = funcionario[4]
          funcionariosComCargo.func_cidade = funcionario[5]
          funcionariosComCargo.func_foto = funcionario[6]
        }else{
          funcionariosComCargo.id_cargo = 0
          funcionariosComCargo.car_nome = "----"
          funcionariosComCargo.car_descricao = "----"
        }

        this.func.push(funcionariosComCargo)

      })
    })
  }

  buscarTodosFuncionarios(){

    this.funcService.buscarTodosFuncionarios().subscribe(resultado =>{
      this.funcionarios = resultado
    })
  }


}
