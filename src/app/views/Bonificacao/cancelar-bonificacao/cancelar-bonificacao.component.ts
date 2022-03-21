import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bonificacao } from 'src/app/models/bonificacaoModel';
import { BonificacaoService } from 'src/app/servicos/bonificacao.service';

@Component({
  selector: 'app-cancelar-bonificacao',
  templateUrl: './cancelar-bonificacao.component.html',
  styleUrls: ['./cancelar-bonificacao.component.css']
})
export class CancelarBonificacaoComponent implements OnInit {

  codigo:any
  id_funcionario:any

  statusEscolhidoNoSelect:any

  statusParaEscolha:string[] = []

  bonificacao:Bonificacao = {
    codigo:'',
    bo_descricao:'',
    bo_dataPagamento:'',
    bo_status: 'PENDENTE',
    bo_valor: 0
  }

  constructor(
    private bonificacaoService:BonificacaoService,
    private route:ActivatedRoute,
    private router:Router,
    private location:LocationStrategy,
  ) { }

  ngOnInit(): void {
    this.codigo = this.route.snapshot.paramMap.get('codigo')
    this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
    this.statusParaEscolha = ['RECEBIDO','CANCELADO','PENDENTE']
    this.mostrarBonificacao()
  }

  mostrarBonificacao(){
    this.bonificacaoService.buscarUmaBonificacao(this.codigo).subscribe(resultado =>{
      this.bonificacao = resultado
      this.bonificacao.bo_status = resultado.bo_status
    })
  }

  excluirBonificacao(){
    this.bonificacaoService.excluirBonificacao(this.codigo).subscribe({
      complete: () => {alert("Bonificação excluída com sucesso")
                                          this.location.back()},
      error: () => {alert("Erro: Bonificação não excluída")}
    })
  }

  statusEscolhido(){
    console.log(this.statusEscolhidoNoSelect)
    this.bonificacao.bo_status = this.statusEscolhidoNoSelect

  }

  cancelarExclusao(){
    this.router.navigate([`/listaBonificacoes/${this.id_funcionario}`])
  }

}
