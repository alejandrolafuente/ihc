import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from './email-validator';
@Component({
  selector: 'app-reserva-sala',
  templateUrl: './reserva-sala.component.html',
  styleUrl: './reserva-sala.component.css'
})
export class ReservaSalaComponent implements OnInit {

  reservaForm!: FormGroup;
  emailFormControl!: FormControl;
  // emailFormControl: FormControl = new FormControl('', [Validators.required, emailValidator()]);


  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.reservaForm = this.fb.group({
      nomeSolicitante: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email], emailValidator()],
      departamento: ['', [Validators.required]],
      numeroSala: ['', [Validators.required]],
      dataReserva: ['', [Validators.required]],
      horarioUnico: ['', [Validators.required]],
      horarioTermino: ['', [Validators.required]],
      quantidadeParticipantes: ['', [Validators.required]],
      tipoEvento: ['', [Validators.required]],
      equipamentoProjetor: [false],
      equipamentoControleAr: [false],
      equipamentoMicrofone: [false],
      confSala: ['', [Validators.required]],
      necessidadeSuporte: ['', [Validators.required]],
      necessidadeInterprete: ['', [Validators.required]],
      infoAdicional: ['', [Validators.required]]
    });
    // Definindo emailFormControl separadamente e adicionando no formGroup
    this.emailFormControl = new FormControl('', [Validators.required, Validators.email, emailValidator()]);
    this.reservaForm.setControl('email', this.emailFormControl);
  }

  onSubmit() {
    if (this.reservaForm.valid) {
      // Armazenando dados preenchidos no localStorage
      localStorage.setItem('reservaData', JSON.stringify(this.reservaForm.value));
      this.router.navigate(['/bioinfo.ufpr.br/confirmar']);  // Navega para a tela de confirmação
    } else {
      console.log("Formulário inválido");
    }
  }
}
