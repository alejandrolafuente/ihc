import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from './email-validator';
import { Reserva } from '../../models/reserva.model';

@Component({
  selector: 'app-reserva-sala',
  templateUrl: './reserva-sala.component.html',
  styleUrl: './reserva-sala.component.css'
})
export class ReservaSalaComponent implements OnInit {

  @ViewChild('formRegister')
  formRegister!: NgForm;

  reserva!: Reserva;
  responseMessage: string = '';

  emailFormControl: FormControl = new FormControl('', [Validators.required, emailValidator()]);

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reserva = new Reserva();
    this.reserva.equipamentos = [];
  }

  onEquipamentoChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const value = checkbox.value;

    // Garante que 'equipamentos' seja inicializado como um array vazio
    if (!this.reserva.equipamentos) {
      this.reserva.equipamentos = [];
    }

    if (checkbox.checked) {
      // Adiciona o equipamento se estiver selecionado
      this.reserva.equipamentos.push(value);
    } else {
      // Remove o equipamento se não estiver selecionado
      this.reserva.equipamentos = this.reserva.equipamentos.filter(item => item !== value);
    }
  }

  register(): void {
    
      // Armazenando dados preenchidos no localStorage
      localStorage.setItem('reservaData', JSON.stringify(this.reserva));
      this.router.navigate(['/bioinfo.ufpr.br/confirmar']);  // Navega para a tela de confirmação
    
  }
}
