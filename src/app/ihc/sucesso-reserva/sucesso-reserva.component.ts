import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucesso-reserva',
  templateUrl: './sucesso-reserva.component.html',
  styleUrl: './sucesso-reserva.component.css'
})
export class SucessoReservaComponent {

  constructor(private router: Router) { }

  irParaHome() {
    this.router.navigate(['/bioinfo.ufpr.br']); // Aqui vai para a home
  }
}
