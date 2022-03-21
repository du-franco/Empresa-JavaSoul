import { ActivatedRoute, Router } from '@angular/router';
import { BonificacaoService } from './../../../servicos/bonificacao.service';
import { Component, OnInit } from '@angular/core';
import { Bonificacao } from 'src/app/models/bonificacaoModel';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-editar-bonificacao',
  templateUrl: './editar-bonificacao.component.html',
  styleUrls: ['./editar-bonificacao.component.css']
})
export class EditarBonificacaoComponent implements OnInit {

  codigo:any
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
    this.codigo = this.route.snapshot.paramMap.get('codigo')
    this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
    this.buscarBonificacao()
  }

  buscarBonificacao(){
    this.bonificacaoService.buscarUmaBonificacao(this.codigo).subscribe(resultado =>{
      this.bonificacao = resultado
      console.log(resultado.bo_dataPagamento)
      this.bonificacao.bo_dataPagamento = resultado.bo_dataPagamento.slice(0,10)
      console.log(this.bonificacao.bo_dataPagamento)
    })
  }

  editarBonificacao(){
    this.bonificacaoService.editarBonificacao(this.bonificacao,this.codigo,this.id_funcionario).subscribe({
      complete: () =>{alert("boleto alterado com sucesso")
                      this.location.back()  },
      error: () =>{ alert("Erro: boleto não editado")
                    this.location.back()}
    })
  }



  cancelarEdicao(){
    this.router.navigate([`/listaBonificacoes/${this.id_funcionario}`])
  }

}
