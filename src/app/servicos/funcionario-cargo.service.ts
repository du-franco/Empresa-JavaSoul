import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionarioCargoModel';




@Injectable({
  providedIn: 'root'
})
export class FuncionarioCargoService {

  baseUrl:string = 'http://localhost:8080/empresa'

  constructor(private http:HttpClient) { }

  buscarTodosFuncionarios():Observable<Funcionario[]>{
    const url = `${this.baseUrl}/funcionario`
    return this.http.get<Funcionario[]>(url);
  }

  buscarFuncCargo():Observable<Funcionario[]>{
    const url = `${this.baseUrl}/funcionario-cargo`
    return this.http.get<Funcionario[]>(url)
  }

  buscarTodosCargos():Observable<any>{
    const url = `${this.baseUrl}/cargo/cargo-funcionario`
    return this.http.get<any>(url)
  }

  buscarFuncionariosCargo(id_cargo: string):Observable<Funcionario[]>{
    const url = `${this.baseUrl}/funcionario/busca-cargo/${id_cargo}`
    return this.http.get<Funcionario[]>(url);
  }

  buscarUmFuncionario(id_funcionario:string):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/${id_funcionario}`
    return this.http.get<Funcionario>(url)
  }

  excluirFuncionario(id_funcionario:string):Observable<void>{
    const url = `${this.baseUrl}/funcionario/${id_funcionario}`
    return this.http.delete<void>(url)
  }

  editarFuncionario(id_cargo:string, id_funcionario:string, funcionario:Funcionario):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/${id_funcionario}?cargo=${id_cargo}`
    return this.http.put<Funcionario>(url, funcionario)
  }

  atribuirFuncionario(){

  }

}
