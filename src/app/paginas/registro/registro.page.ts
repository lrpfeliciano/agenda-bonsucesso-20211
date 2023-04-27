import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule
    , ReactiveFormsModule]
})
export class RegistroPage implements OnInit {
  credencial!: FormGroup;
  constructor(private service: AutenticacaoService,
              private fb: FormBuilder,
              private nav: NavController,
              private alerta: AlertController) { }

  ngOnInit() {
    this.credencial = this.fb.group({
      email: ['', [Validators.required, 
                   Validators.email]],
      senha: ['', [Validators.required,
                   Validators.minLength(6)]]
    });
  }

  
  async registrar(){
    console.log(this.credencial.get('email')?.value);
    const user = await this.service.registrar(
      this.credencial.get('email')?.value, 
      this.credencial.get('senha')?.value);
    if (user){
      this.nav.navigateForward("interno");
    } else {
      console.log("Erro");
    } 
  }
}
