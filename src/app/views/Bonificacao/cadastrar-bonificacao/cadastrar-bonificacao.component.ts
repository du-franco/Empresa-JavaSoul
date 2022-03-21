import { ActivatedRoute, Router } from '@angular/router';
import { BonificacaoService } from './../../../servicos/bonificacao.service';
import { Component, OnInit } from '@angular/core';
import { Bonificacao } from 'src/app/models/bonificacaoModel';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-cadastrar-bonificacao',
  templateUrl: './cadastrar-bonificacao.component.html',
  styleUrls: ['./cadastrar-bonificacao.component.css']
})
export class CadastrarBonificacaoComponent implements OnInit {

  id_funcionario:any

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
    this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
  }

  cadastrarBonificacao(){
    this.bonificacaoService.cadastrarBonificacao(this.bonificacao, this.id_funcionario).subscribe({
      complete: () => {alert("Bonificação cadastrada com sucesso")
                       this.location.back() },
      error: () => {alert("Erro: bonificação não cadastrado")
                    this.location.back()}
    })
  }

  cancelarCadastro(){
    this.router.navigate([`/listaBonificacoes/${this.id_funcionario}`])
  }

}
