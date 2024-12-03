import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-reserva',
  templateUrl: './confirmar-reserva.component.html',
  styleUrl: './confirmar-reserva.component.css'
})
export class ConfirmarReservaComponent implements OnInit {

  reservaData: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Recuperando os dados armazenados do localStorage
    this.reservaData = JSON.parse(localStorage.getItem('reservaData')!);
  }

  confirmarReserva() {
    // Exibir a tela de sucesso após confirmação
    this.router.navigate(['/bioinfo.ufpr.br/sucesso-reserva']);
  }
}
