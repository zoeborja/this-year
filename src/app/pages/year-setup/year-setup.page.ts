import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-year-setup',
  templateUrl: './year-setup.page.html',
  styleUrls: ['./year-setup.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButton],
})
export class YearSetupPage {
  constructor(private router: Router) {}

  createYear() {
    // v1: fake "year created"
    this.router.navigateByUrl('/board');
  }
}

