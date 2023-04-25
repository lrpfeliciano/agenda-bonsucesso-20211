import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor(private nav: NavController) {}

  irParaTarefas(){
    this.nav.navigateForward("tarefas");
  }

  irParaContatos(){
    this.nav.navigateForward("contatos");
  }

  sair(){

  }
}
