import { CancelarBonificacaoComponent } from './views/Bonificacao/cancelar-bonificacao/cancelar-bonificacao.component';
import { EditarBonificacaoComponent } from './views/Bonificacao/editar-bonificacao/editar-bonificacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonificacaoComponent } from './views/Bonificacao/bonificacao/bonificacao.component';
import { CadastrarBonificacaoComponent } from './views/Bonificacao/cadastrar-bonificacao/cadastrar-bonificacao.component';
import { EditarDepartamentoComponent } from './views/Departamento/editar-departamento/editar-departamento.component';
import { ExcluirDepartamentoComponent } from './views/Departamento/excluir-departamento/excluir-departamento.component';
import { CadastrarDepartamentoComponent } from './views/Departamento/cadastrar-departamento/cadastrar-departamento.component';
import { AtribuirCargoComponent } from './views/Funcionario/atribuir-cargo/atribuir-cargo.component';
import { HomeComponent } from './templates/home/home.component';
import { ListaDepartamentoComponent } from './views/Departamento/lista-departamento/lista-departamento.component';
import { DepartamentoComponent } from './views/Departamento/departamento/departamento.component';
import { FuncionarioCargoComponent } from './views/Funcionario/funcionario-cargo/funcionario-cargo.component';
import { LoginComponent } from './views/Login/login.component';
import { EdicaoFuncionarioComponent } from './views/Funcionario/edicao-funcionario/edicao-funcionario.component';
import { ExclusaoFuncionarioComponent } from './views/Funcionario/exclusao-funcionario/exclusao-funcionario.component';
import { CadastroFuncionarioComponent } from './views/Funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { ListaFuncionarioComponent } from './views/Funcionario/lista-funcionario/lista-funcionario.component';
import { EdicaoCargoComponent } from './views/Cargo/edicao-cargo/edicao-cargo.component';
import { ExclusaoCargoComponent } from './views/Cargo/exclusao-cargo/exclusao-cargo.component';
import { CadastroCargoComponent } from './views/Cargo/cadastro-cargo/cadastro-cargo.component';
import { ListaCargoComponent } from './views/Cargo/lista-cargo/lista-cargo.component';



const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"cargo", component:ListaCargoComponent},
  {path:"cadastroCargo", component:CadastroCargoComponent},
  {path:"exclusaoCargo/:id", component:ExclusaoCargoComponent},
  {path:"edicaoCargo/:id", component:EdicaoCargoComponent},
  {path:"funcionario/:id_cargo", component:ListaFuncionarioComponent},
  {path:"cadastroFuncionario/:id_cargo", component:CadastroFuncionarioComponent},
  {path:"exclusaoFuncionario/:id_funcionario", component:ExclusaoFuncionarioComponent},
  {path:"edicaoFuncionario/:id_funcionario/:id_cargo", component:EdicaoFuncionarioComponent},
  {path:"login", component:LoginComponent},
  {path:"funcCargo", component:FuncionarioCargoComponent},
  {path:"departamento/:id_cargo", component:DepartamentoComponent},
  {path:"listaDepartamento", component:ListaDepartamentoComponent},
  {path:"atribuirCargo/:id_funcionario/:id_cargo", component:AtribuirCargoComponent},
  {path:"cadastroDepartamento", component:CadastrarDepartamentoComponent},
  {path:"exclusaoDepartamento/:id", component:ExcluirDepartamentoComponent},
  {path:"edicaoDepartamento/:id_departamento", component:EditarDepartamentoComponent},
  {path:"listaBonificacoes/:id_funcionario", component:BonificacaoComponent},
  {path:"cadastrarBonificacao/:id_funcionario", component:CadastrarBonificacaoComponent},
  {path:"editarBonificacao/:codigo/:id_funcionario", component:EditarBonificacaoComponent},
  {path:"excluirBonificacao/:codigo/:id_funcionario", component:CancelarBonificacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
