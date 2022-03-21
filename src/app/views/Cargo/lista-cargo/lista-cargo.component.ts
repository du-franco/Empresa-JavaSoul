import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/models/cargoModel';
import { CargoService } from 'src/app/servicos/cargo.service';

@Component({
  selector: 'app-lista-cargo',
  templateUrl: './lista-cargo.component.html',
  styleUrls: ['./lista-cargo.component.css']
})
export class ListaCargoComponent implements OnInit {

  cargos: Cargo[] = []

  constructor(private cargoService:CargoService) { }

  ngOnInit(): void {
    this.mostrarTodosCargos();
  }

  mostrarTodosCargos(){
    this.cargoService.mostrarTodosCargos().subscribe(resposta => {
      this.cargos = resposta;
    })
  }

}
