import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-intention',
  templateUrl: './intention.page.html',
  styleUrls: ['./intention.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class IntentionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
