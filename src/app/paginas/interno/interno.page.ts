import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-interno',
  templateUrl: './interno.page.html',
  styleUrls: ['./interno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InternoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
