import { ListaCargoComponent } from './../views/Cargo/lista-cargo/lista-cargo.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../models/cargoModel';


@Injectable({
  providedIn: 'root'
})
export class CargoService {

  baseUrl: string = 'http://localhost:8080/empresa'

  constructor(private http:HttpClient) { }

  mostrarTodosCargos():Observable<Cargo[]>{

    const url = `${this.baseUrl}/cargo`

    return this.http.get<Cargo[]>(url)
  }

  mostrarCargo():Observable<Cargo>{
    const url = `${this.baseUrl}/cargo/todosCargos`
    return this.http.get<Cargo>(url)
  }

  mostrarUmCargo(id:string):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo/${id}`
    return this.http.get<Cargo>(url)
  }

  cadastrarCargo(cargo:Cargo):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo`
    return this.http.post<Cargo>(url, cargo)
  }

  excluirCargo(id:String):Observable<void>{
    const url = `${this.baseUrl}/cargo/${id}`
    return this.http.delete<void>(url)
  }

  editarCargo(cargo:Cargo):Observable<void>{
    const url = `${this.baseUrl}/cargo/${cargo.id_cargo}`
    return this.http.put<void>(url, cargo)
  }

  atribuirDepartamento(cargo:Cargo, id_cargo:String, id_departamento:String):Observable<void>{
      const url = `${this.baseUrl}/cargo/definirDepartamento/${id_cargo}/${id_departamento}`
      return this.http.put<void>(url, cargo)
  }

  deixarCargoSemDepartamento(cargo:Cargo, id_cargo:String, id_departamento:String):Observable<void>{
    const url = `${this.baseUrl}/cargo/tirarDepartamento/${id_cargo}/${id_departamento}`
    return this.http.put<void>(url, cargo)
  }

}
