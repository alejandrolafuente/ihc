import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from '../../models/reserva.model';

@Component({
  selector: 'app-confirmar-reserva',
  templateUrl: './confirmar-reserva.component.html',
  styleUrl: './confirmar-reserva.component.css'
})
export class ConfirmarReservaComponent implements OnInit {

  reserva!: Reserva;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Recuperando os dados armazenados do localStorage
    this.reserva = JSON.parse(localStorage.getItem('reservaData')!);
  }

  confirmarReserva() {
    // Exibir a tela de sucesso após confirmação
    this.router.navigate(['/bioinfo.ufpr.br/sucesso-reserva']);
  }
}
