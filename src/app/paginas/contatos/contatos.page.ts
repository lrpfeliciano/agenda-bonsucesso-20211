import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { Contato, ContatoService } 
  from 'src/app/servicos/contato.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContatosPage implements OnInit {
  contatos: Contato[] = [];

  constructor(private service: ContatoService,
              private nav: NavController,
              private alerta: AlertController) {}


  ngOnInit() {
    this.service.listar().subscribe(abc => {
      this.contatos = abc;
      console.log(this.contatos);
    });
    
  }

  novo(){
    this.nav.navigateForward("incluircontato");
  }

  iniciarEdicao(id:any){
    this.nav.navigateForward(["incluircontato",
     {idcontato: id}]);
  }

  async excluir(id:any){
    const mensagem = await this.alerta.create({
      header: "Excluir contato",
      message: "Deseja excluir esse contato?",
      buttons:[
        {text: "Sim",
         handler: res => {
          this.service.excluir(id);
         } 
        },
        {text: "Não"}
      ]
    });
    await mensagem.present();
//    this.service.excluir(id);
  }
}
