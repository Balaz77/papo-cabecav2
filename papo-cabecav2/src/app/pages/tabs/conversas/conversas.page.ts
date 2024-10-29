import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonAvatar, IonItem, IonList,  IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircle } from 'ionicons/icons';

@Component({
  selector: 'app-conversas',
  templateUrl: './conversas.page.html',
  styleUrls: ['./conversas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonAvatar, IonItem, IonList, IonButton, IonButtons, IonIcon]
})
export class ConversasPage implements OnInit {

  chats = Array(10);

  constructor() {
    addIcons({
      addCircle
    });
   }

  ngOnInit() {
  }

}
