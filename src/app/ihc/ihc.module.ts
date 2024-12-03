import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { CursosTadsComponent } from './cursos-tads/cursos-tads.component';
import { ListaFormadosComponent } from './lista-formados/lista-formados.component';
import { ReservaSalaComponent } from './reserva-sala/reserva-sala.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmarReservaComponent } from './confirmar-reserva/confirmar-reserva.component';
import { SucessoReservaComponent } from './sucesso-reserva/sucesso-reserva.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [
    HomePageComponent,
    CursosTadsComponent,
    ListaFormadosComponent,
    ReservaSalaComponent,
    ConfirmarReservaComponent,
    SucessoReservaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class IhcModule { }
