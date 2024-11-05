import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({"projectId":"papo-cabeca-chat","appId":"1:248189669438:web:233947c8dcdb951db4c16f","databaseURL":"https://papo-cabeca-chat-default-rtdb.firebaseio.com","storageBucket":"papo-cabeca-chat.firebasestorage.app","apiKey":"AIzaSyDXmdm-O0VNmzoIuTJF-RXHg8X8KTu4wKk","authDomain":"papo-cabeca-chat.firebaseapp.com","messagingSenderId":"248189669438","measurementId":"G-YNVJ3JGNS6"})), provideAuth(() => getAuth()), provideDatabase(() => getDatabase()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage()),
  ],
});
