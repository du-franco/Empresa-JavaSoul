import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgModule, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { CurrencyMaskConfig, CurrencyMaskInputMode, NgxCurrencyModule } from "ngx-currency";
import { LoginComponent } from './views/Login/login.component';
import { ListaDepartamentoComponent } from './views/Departamento/lista-departamento/lista-departamento.component';

import { DepartamentoComponent } from './views/Departamento/departamento/departamento.component';
import { FuncionarioCargoComponent } from './views/Funcionario/funcionario-cargo/funcionario-cargo.component';
import { CadastroFuncionarioComponent } from './views/Funcionario/cadastro-funcionario/cadastro-funcionario.component';

import { ListaFuncionarioComponent } from './views/Funcionario/lista-funcionario/lista-funcionario.component';
import { ExclusaoFuncionarioComponent } from './views/Funcionario/exclusao-funcionario/exclusao-funcionario.component';
import { EdicaoFuncionarioComponent } from './views/Funcionario/edicao-funcionario/edicao-funcionario.component';

import { ListaCargoComponent } from './views/Cargo/lista-cargo/lista-cargo.component';
import { HomeComponent } from './templates/home/home.component';
import { HeaderComponent } from './templates/header/header.component';

import { FooterComponent } from './templates/footer/footer.component';
import { ExclusaoCargoComponent } from './views/Cargo/exclusao-cargo/exclusao-cargo.component';
import { EdicaoCargoComponent } from './views/Cargo/edicao-cargo/edicao-cargo.component';

import { CadastroCargoComponent } from './views/Cargo/cadastro-cargo/cadastro-cargo.component';
import { AtribuirCargoComponent } from './views/Funcionario/atribuir-cargo/atribuir-cargo.component';
import { CadastrarDepartamentoComponent } from './views/Departamento/cadastrar-departamento/cadastrar-departamento.component';

import { ExcluirDepartamentoComponent } from './views/Departamento/excluir-departamento/excluir-departamento.component';
import { EditarDepartamentoComponent } from './views/Departamento/editar-departamento/editar-departamento.component';
import { CadastrarBonificacaoComponent } from './views/Bonificacao/cadastrar-bonificacao/cadastrar-bonificacao.component';

import { EditarBonificacaoComponent } from './views/Bonificacao/editar-bonificacao/editar-bonificacao.component';
import { CancelarBonificacaoComponent } from './views/Bonificacao/cancelar-bonificacao/cancelar-bonificacao.component';
import { BonificacaoComponent } from './views/Bonificacao/bonificacao/bonificacao.component';

import { registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
registerLocaleData(localePt)

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  allowZero: false,
  nullable: false,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};


@NgModule({
  declarations: [
    AppComponent,
    CadastroCargoComponent,
    EdicaoCargoComponent,
    ExclusaoCargoComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ListaCargoComponent,
    EdicaoFuncionarioComponent,
    ExclusaoFuncionarioComponent,
    ListaFuncionarioComponent,
    CadastroFuncionarioComponent,
    LoginComponent,
    FuncionarioCargoComponent,
    DepartamentoComponent,
    ListaDepartamentoComponent,
    AtribuirCargoComponent,
    CadastrarDepartamentoComponent,
    ExcluirDepartamentoComponent,
    EditarDepartamentoComponent,
    CadastrarBonificacaoComponent,
    EditarBonificacaoComponent,
    CancelarBonificacaoComponent,
    BonificacaoComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    // NgxCurrencyModule,
    // CurrencyMaskModule

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: "pt-BR"
  },
      { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
        CurrencyPipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
