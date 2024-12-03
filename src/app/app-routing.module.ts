import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './ihc/home-page/home-page.component';
import { ListaFormadosComponent } from './ihc/lista-formados/lista-formados.component';
import { ReservaSalaComponent } from './ihc/reserva-sala/reserva-sala.component';
import { ConfirmarReservaComponent } from './ihc/confirmar-reserva/confirmar-reserva.component';
import { SucessoReservaComponent } from './ihc/sucesso-reserva/sucesso-reserva.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'bioinfo.ufpr.br',
    pathMatch: 'full'
  },

  {
    path: 'bioinfo.ufpr.br',
    component: HomePageComponent
  },

  {
    path: 'bioinfo.ufpr.br/formados',
    component: ListaFormadosComponent
  },

  {
    path: 'bioinfo.ufpr.br/reserva',
    component: ReservaSalaComponent
  },

  {
    path: 'bioinfo.ufpr.br/confirmar',
    component: ConfirmarReservaComponent
  },

  {
    path: 'bioinfo.ufpr.br/sucesso-reserva',
    component: SucessoReservaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
