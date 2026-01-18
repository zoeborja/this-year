import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-year-reflection',
  templateUrl: './year-reflection.page.html',
  styleUrls: ['./year-reflection.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class YearReflectionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
