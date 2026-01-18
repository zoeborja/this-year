import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.page.html',
  styleUrls: ['./board.page.scss'],
  standalone: true,
  imports: [RouterModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonList, IonItem, IonLabel]
})
export class BoardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  intentions = [
    { id: 1, title: 'move my body with care', imageUrl: ''},
    { id: 2, title: 'say yes to travel', imageUrl: ''},
    { id: 3, title: 'feel at home with myself', imageUrl: ''}
  ]

}
