import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargoModel';
import { CargoService } from 'src/app/servicos/cargo.service';

@Component({
  selector: 'app-edicao-cargo',
  templateUrl: './edicao-cargo.component.html',
  styleUrls: ['./edicao-cargo.component.css']
})
export class EdicaoCargoComponent implements OnInit {

  cargo:Cargo ={
    id_cargo:'',
    car_nome:'',
    car_descricao:'',
  }

  constructor(private cargoService:CargoService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.cargo.id_cargo = this.route.snapshot.paramMap.get('id');
    this.mostrarUmCargo();
  }

  mostrarUmCargo(){
    this.cargoService.mostrarUmCargo(this.cargo.id_cargo).subscribe((resultado) => {
      this.cargo = resultado
    })
  }

  editarCargo(){
    this.cargoService.editarCargo(this.cargo).subscribe({
      complete: () => alert("Cargo editado com sucesso!"),
      error: () => alert("Erro: Cargo não pode ser editado")
    })
    this.router.navigate(['/cargo'])
  }

}
