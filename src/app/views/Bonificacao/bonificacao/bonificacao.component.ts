import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from './../../../servicos/funcionario.service';
import { BonificacaoService } from './../../../servicos/bonificacao.service';
import { Bonificacao } from 'src/app/models/bonificacaoModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonificacao',
  templateUrl: './bonificacao.component.html',
  styleUrls: ['./bonificacao.component.css']
})
export class BonificacaoComponent implements OnInit {

  id_funcionario:any
  nomeFuncionario:any

  pago:boolean = false
  cancelado:boolean = false

  bonificacoes:Bonificacao[] = []

  bonificacao:Bonificacao ={
    codigo:'',
    bo_descricao:'',
    bo_dataPagamento:'',
    bo_status:'',
    bo_valor:0
  }

  constructor(
    private bonificacaoService:BonificacaoService,
    private funcService:FuncionarioService,
    private route:ActivatedRoute,
    private router:Router,
  ) {

  }

  ngOnInit(): void {
    this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
    this.listarBonificacaoDoFuncionario();
    this.buscarFuncionario();
  }

  listarBonificacaoDoFuncionario(){
    this.bonificacaoService.listarBonificacaoDoFuncionario(this.id_funcionario).subscribe(resultado => {
      this.bonificacoes = resultado
    })
  }

  buscarFuncionario(){
    this.funcService.buscarUmFuncionario(this.id_funcionario).subscribe(resultado => {
      this.nomeFuncionario = resultado.func_nome
    })
  }

  pagarBonificacao(codigo:any){

    this.bonificacaoService.buscarUmaBonificacao(codigo).subscribe(resultado =>{
      this.bonificacao = resultado

      console.log(this.bonificacao)

      this.bonificacaoService.pagarBonificacao(this.bonificacao,this.bonificacao.codigo).subscribe({
        complete: () => {alert("Bonificação paga com sucesso")
                         this.listarBonificacaoDoFuncionario()},
        error: () => {alert("Erro: Bonificação não paga")}
      })
    })


  }

  cancelarBonificacao(codigo:any){

    this.bonificacaoService.buscarUmaBonificacao(codigo).subscribe(resultado =>{
      this.bonificacao = resultado

      console.log(this.bonificacao)

      this.bonificacaoService.cancelarBonificacao(this.bonificacao,this.bonificacao.codigo).subscribe({
        complete: () => {alert("Bonificação cancelada com sucesso")
                         this.listarBonificacaoDoFuncionario()},
        error: () => {alert("Erro: Bonificação não cancelada")}
      })
    })


  }


}
