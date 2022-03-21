import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargoModel';
import { CargoService } from 'src/app/servicos/cargo.service';

@Component({
  selector: 'app-cadastro-cargo',
  templateUrl: './cadastro-cargo.component.html',
  styleUrls: ['./cadastro-cargo.component.css']
})
export class CadastroCargoComponent implements OnInit {

  cargo:Cargo ={
    car_nome:'',
    car_descricao:'',
  }

  constructor(private cargoService:CargoService, private router:Router) { }

  ngOnInit(): void {
  }

  cadastrarCargo(){
    this.cargoService.cadastrarCargo(this.cargo)
    .subscribe((resultado) => {
      alert("Cargo cadastrado com sucesso!")
      this.router.navigate(['/cargo'])
    })
  }

}
