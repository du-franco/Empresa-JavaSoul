
import { HttpClient } from '@angular/common/http';
import { CargoService } from 'src/app/servicos/cargo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/servicos/funcionario.service';
import { Funcionario } from 'src/app/models/funcionarioModel';


@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  funcionarioCadastrado:boolean = false
  funcCadastrado:any
  id_cargo: string = ''
  cargos:any
  cargoAtribuir:any
  cargoEscolhido:any = []
  cargoAceito:any = []
  nomeCargo:any

  funcionario:Funcionario ={
    id_funcionario:'',
    func_nome:'',
    func_foto:'',
    func_cidade:'',
    func_cargo:'',
  }

  foto:any
  idFuncionarioCadastrado:any

  constructor(
    private funcionarioService:FuncionarioService,
    private cargoService:CargoService,
    private router:Router,
    private route:ActivatedRoute,
    private http:HttpClient,
    ) {

  }

  ngOnInit(): void {
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')!
    this.buscarTodosCargos();
    this.buscarCargoFuncionario();

  }

  cadastrarFuncionario(){
    this.funcionarioService.cadastrarFuncionario(this.funcionario, this.id_cargo)
    .subscribe({
      complete: () => {alert("Funcionário cadastrado no cargo com sucesso!")
        this.funcionarioService.buscarFuncionarioPeloNome(this.funcionario.func_nome).subscribe(resultado => {
          this.idFuncionarioCadastrado = resultado.id_funcionario
          this.funcionarioCadastrado = true
        })},
      error: () => {alert("Ocorreu um erro no cadastro do funcionario")
              this.router.navigate(['/funcCargo'])},
      next: () => {console.log("Funcionário cadastrdo")}
    })
    console.log("Erro")
  }

  subirFoto(event:any){
    if(event.target.files && event.target.files[0]){
      this.foto = event.target.files[0]
      const formData = new FormData
      formData.append("foto", this.foto)

      const nome:string = this.funcionario.func_nome + "-" + event.target.files[0].name

      this.http.post(`http://localhost:8080/empresa/envio/${this.idFuncionarioCadastrado}?nome=${nome}`, formData).subscribe({
        complete: () => console.log("Foto enviada")

      })
      alert("Foto anexado ao funcionário")
      this.router.navigate(['/funcCargo'])
    }
  }



  cancelarCadastro(){
    this.router.navigate(['/cargo'])
  }



  buscarTodosCargos(){
    this.cargoService.mostrarTodosCargos().subscribe(resultado => {
      this.cargos = resultado
    })
  }

  buscarCargoFuncionario(){
    this.cargoService.mostrarUmCargo(this.id_cargo).subscribe((resultado) => {
      this.nomeCargo = resultado.car_descricao

    })
  }


  escolherCargo(){
    console.log(this.cargoEscolhido)
  }


}
