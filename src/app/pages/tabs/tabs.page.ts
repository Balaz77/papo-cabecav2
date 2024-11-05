import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonTabButton, IonTabBar, IonText, IonTabs, IonButtons, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {atOutline, chatboxEllipsesOutline, chatboxOutline, chatbubble, chatbubbleOutline, cogOutline, settings, settingsOutline} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonTabButton, IonTabs, IonTabBar, CommonModule, FormsModule,IonButton, IonButtons, IonText ]
})
export class TabsPage implements OnInit {

  selectedTab = signal<string>('conversas');
  

  constructor() {
    addIcons({
     chatboxOutline,
      settingsOutline,
      chatbubbleOutline,
      chatbubble,
      settings
    });
  }

  ngOnInit() {
  }

  getSelected(event: any){
      console.timeLog(event);
      this.selectedTab.set(event?.tab);
  }
}
