import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionarioModel';
import { FuncionarioService } from 'src/app/servicos/funcionario.service';

@Component({
  selector: 'app-exclusao-funcionario',
  templateUrl: './exclusao-funcionario.component.html',
  styleUrls: ['./exclusao-funcionario.component.css']
})
export class ExclusaoFuncionarioComponent implements OnInit {

  id_cargo: string =''

  funcionario:Funcionario ={
    id_funcionario:'',
    func_nome:'',
    func_foto:'',
    func_cidade:'',
    func_cargo:'',
  }

  constructor(
    private funcionarioService:FuncionarioService, private route:ActivatedRoute,
    private router:Router
    ) {}

  ngOnInit(): void {

    this.funcionario.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')

    this.buscarUmFuncionario();

  }

  buscarUmFuncionario(){
    this.funcionarioService.buscarUmFuncionario(this.funcionario.id_funcionario).subscribe((resultado) => {
      this.funcionario = resultado
    })
  }

  excluirFuncionario(){
    this.funcionarioService.excluirFuncionario(this.funcionario.id_funcionario).subscribe({
      complete: () => {alert("Funcionário excluído com sucesso!"),
                   this.router.navigate(['/cargo'])},
      error: () => {alert("Ocorreu um erro ao excluir funcionário")
              this.router.navigate(['/cargo'])},
      next: () => {console.log("Funcionário excluído")}
    })
  }

  cancelarExclusao(){
    this.router.navigate(['/funcCargo'])
  }

}
