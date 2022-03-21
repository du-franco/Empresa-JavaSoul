import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '../models/funcionarioModel';
import { Cargo } from '../models/cargoModel';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl:string = 'http://localhost:8080/empresa'

  constructor(private http:HttpClient) { }


  buscarTodosFuncionarios():Observable<Funcionario[]>{
    const url = `${this.baseUrl}/funcionario`
    return this.http.get<Funcionario[]>(url);
  }

  buscarFuncionariosCargo(id_cargo: string):Observable<Funcionario[]>{
    const url = `${this.baseUrl}/funcionario/busca-cargo/${id_cargo}`
    return this.http.get<Funcionario[]>(url);
  }
  

  cadastrarFuncionario(funcionario:Funcionario, id_cargo:string):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/?cargo=${id_cargo}`
    return this.http.post<Funcionario>(url, funcionario)
  }

  buscarUmFuncionario(id_funcionario:string):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/${id_funcionario}`
    return this.http.get<Funcionario>(url)
  }

  buscarFuncionarioPeloNome(func_nome:String):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario-nome/${func_nome}`
    return this.http.get<Funcionario>(url)
  }

  excluirFuncionario(id_funcionario:string):Observable<void>{
    const url = `${this.baseUrl}/funcionario/${id_funcionario}`
    return this.http.delete<void>(url)
  }

  editarFuncionario(funcionario:Funcionario, id_funcionario:string, id_cargo:string):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/${id_funcionario}?cargo=${id_cargo}`
    return this.http.put<Funcionario>(url, funcionario)
  }

  atribuirCargo(cargo:Cargo, id_funcionario:String):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/inserirCargo/${id_funcionario}`
    return this.http.put<Funcionario>(url, cargo)
  }

  deixarFuncionarioSemCargo(funcionario:Funcionario, id_funcionario:String):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/deixarSemCargo/${id_funcionario}`
    return this.http.put<Funcionario>(url, funcionario)
  }

}
