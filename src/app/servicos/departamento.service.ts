import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from '../models/departamentoModel';


@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  baseUrl: string = 'http://localhost:8080/empresa'

  constructor(private http:HttpClient) { }

  buscarUmDepartamento(id_departamento:String):Observable<Departamento>{
    const url = `${this.baseUrl}/departamento/${id_departamento}`
    return this.http.get<Departamento>(url)
  }


  buscarDepartamentoDoCargo(id_cargo:string):Observable<Departamento>{
    const url = `${this.baseUrl}/departamento-cargo/${id_cargo}`
    return this.http.get<Departamento>(url)
  }

  buscarDepartamentoSemCargo():Observable<Departamento[]>{
    const url = `${this.baseUrl}/departamentoSemCargo`
    return this.http.get<Departamento[]>(url)
  }

  buscarTodosDepartamentos():Observable<Departamento[]>{
    const url = `${this.baseUrl}/departamento`
    return this.http.get<Departamento[]>(url)
  }

  buscarDepartamentoPeloNome(dep_nome:String):Observable<Departamento>{
    const url = `${this.baseUrl}/departamento-nome/${dep_nome}`
    return this.http.get<Departamento>(url)
  }

  cadastrarDepartamento(departamento:Departamento):Observable<Departamento>{
    const url = `${this.baseUrl}/departamento`
    return this.http.post<Departamento>(url, departamento)
  }

  excluirDepartamento(id_departamento:String):Observable<void>{
    const url = `${this.baseUrl}/departamento/${id_departamento}`
    return this.http.delete<void>(url)
  }

  editarDepartamento(departamento:Departamento, id_departamento:String ):Observable<void>{
    const url = `${this.baseUrl}/departamento/${id_departamento}`
    return this.http.put<void>(url, departamento)
  }

}
