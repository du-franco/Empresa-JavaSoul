import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bonificacao } from '../models/bonificacaoModel';

@Injectable({
  providedIn: 'root'
})
export class BonificacaoService {

  baseUrl: String = 'http://localhost:8080/empresa'

  constructor(
    private http:HttpClient
  ) { }

    buscarTodasBonificacoes():Observable<any>{
      const url = `${this.baseUrl}/funcionario/bonficacao`
      return this.http.get<any>(url)
    }

    buscarUmaBonificacao(codigo:string):Observable<Bonificacao>{
      const url = `${this.baseUrl}/funcionario/bonificacao/${codigo}`
      return this.http.get<Bonificacao>(url)
    }

    listarBonificacaoDoFuncionario(id_funcionario:String):Observable<Bonificacao[]>{
      const url = `${this.baseUrl}/funcionario/bonificacoesDoFuncionario/${id_funcionario}`
      return this.http.get<Bonificacao[]>(url)
    }

    cadastrarBonificacao(bonificacao:Bonificacao, id_funcionario:String):Observable<Bonificacao>{
      const url = `${this.baseUrl}/funcionario/bonificacao/${id_funcionario}`
      return this.http.post<Bonificacao>(url,bonificacao);
    }

    editarBonificacao(bonificacao:Bonificacao, codigo:any, id_funcionario:any):Observable<Bonificacao>{
      const url = `${this.baseUrl}/funcionario/bonificacao/${codigo}/${id_funcionario}`
      return this.http.put<Bonificacao>(url,bonificacao)
    }

    excluirBonificacao(codigo:string):Observable<void>{
      const url = `${this.baseUrl}/funcionario/bonificacao/${codigo}`
      return this.http.delete<void>(url)
    }

    pagarBonificacao(bonificacao:Bonificacao, codigo:any):Observable<Bonificacao>{
      const url = `${this.baseUrl}/funcionario/receberBonificacao/${codigo}`
      return this.http.put<Bonificacao>(url,bonificacao)
    }

    cancelarBonificacao(bonificacao:Bonificacao, codigo:any):Observable<Bonificacao>{
      const url = `${this.baseUrl}/funcionario/cancelarBonificacao/${codigo}`
      return this.http.put<Bonificacao>(url,bonificacao)
    }

}
