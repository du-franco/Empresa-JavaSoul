import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/servicos/cargo.service';
import { DepartamentoService } from 'src/app/servicos/departamento.service';
import { Cargo } from 'src/app/models/cargoModel';
import { Departamento } from 'src/app/models/departamentoModel';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  id_cargo: any

  cargos:Cargo[] = []

  departamento:Departamento = {
    id_departamento:'',
    dep_nome:'',
    dep_equipe:'',
    dep_descricao:''
  }

  cargo:Cargo = {
    id_cargo:'',
    car_nome:'',
    car_descricao:'',
  }

  departamentoCadastrado:boolean = false
  departamentosSemCargo:any
  departamentoSemCargo:any = []


  constructor(private depService:DepartamentoService,
    private route:ActivatedRoute,
    private router:Router,
    private cargoService:CargoService) { }

  ngOnInit(): void {
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo');
    this.buscarCargo();
    this.buscarDepartamentoDoCargo();
    this.buscarDepartamentoSemCargo();
  }

  buscarCargo(){
    this.cargoService.mostrarUmCargo(this.id_cargo).subscribe(resultado => {
      this.cargo = resultado
    })
  }

  buscarDepartamentoDoCargo(){
    this.depService.buscarDepartamentoDoCargo(this.id_cargo).subscribe((resultado)=>{

      if(resultado==undefined){
        alert("Para esse cargo não está definido um departamento")
        this.departamentoCadastrado = false
      }else{
      this.departamento = resultado
      this.departamentoCadastrado = true
      }
    })
  }

  buscarDepartamentoSemCargo(){
    this.depService.buscarDepartamentoSemCargo().subscribe((resultado) => {
      this.departamentoSemCargo = resultado
      console.log(this.departamentoSemCargo)
    })
  }

  mostrarDepartamento(){
    this.departamento = this.departamentoSemCargo
  }

  atribuirDepartamento(){
    this.cargoService.mostrarUmCargo(this.id_cargo).subscribe((resultado) => {
      this.cargo = resultado;
      console.log("primeiro" + resultado)
    })
    this.cargoService.atribuirDepartamento(this.cargo, this.id_cargo, this.departamento.id_departamento).subscribe({
      complete: () => {alert("O departamento foi atribuido para o cargo")
                          this.router.navigate(['/cargo'])},
      error: () => {alert("Erro: o departamento não foi atribuído")
                          this.router.navigate(['/cargo'])}
    })
  }

  deixarCargoSemDepartamento(){
    this.cargoService.deixarCargoSemDepartamento (this.cargo, this.id_cargo,this.departamento.id_departamento).subscribe({
      complete: () => {alert("O cargo agora está sem Departamento")
                      this.router.navigate(['/cargo'])},
      error: () => {alert("Erro: o departamento não foi retirado do cargo")
                    this.router.navigate(['/cargo']) }
    })
  }

}
