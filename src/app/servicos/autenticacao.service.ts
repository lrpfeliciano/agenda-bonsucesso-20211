import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } 
  from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private auth: Auth) { }

  registrar(email:any, senha:any){
    console.log("Email: " + email);
    console.log("Senha: " + senha);
    const usuario = createUserWithEmailAndPassword(
      this.auth, email, senha);
    return usuario;  
  }
}
