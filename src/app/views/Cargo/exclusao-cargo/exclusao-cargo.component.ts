import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/servicos/cargo.service';
import { Cargo } from 'src/app/models/cargoModel';

@Component({
  selector: 'app-exclusao-cargo',
  templateUrl: './exclusao-cargo.component.html',
  styleUrls: ['./exclusao-cargo.component.css']
})
export class ExclusaoCargoComponent implements OnInit {

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
      console.log(this.cargo)
    })
  }

  excluirCargo(){
    this.cargoService.excluirCargo(this.cargo.id_cargo).subscribe({
      complete: () => {
            alert("Cargo excluído com sucesso!")
            this.router.navigate(['/cargo'])
      },
      error:() => {
            alert("Esse cargo possui funcionários associados, não pode ser excluído!")
      }
    })
    this.router.navigate(['/cargo'])
  }

}
