import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlName, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonTabButton, IonTabBar, IonText, IonTabs, IonButtons, IonButton, IonInput, IonList, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSpinner } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent,
             IonHeader,
              IonTitle,
               IonToolbar,
                IonIcon,
                 IonTabButton,
                  IonTabs,
                   IonTabBar,
                    CommonModule,
                     FormsModule,
                     IonButton,
                      IonButtons,
                       IonText,
                        IonInput,
                         IonList,
                          ReactiveFormsModule,
                           IonCard,
                            IonCardContent,
                             IonCardHeader,
                              IonCardSubtitle,
                               IonCardTitle,
                              IonSpinner,
                              RouterLink]
})
export class LoginPage implements OnInit {

  form!: FormGroup;
  isLogin = signal<boolean>(false);

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(8)]]
    });
    
   
    addIcons({mailOutline,lockClosedOutline,});
  }

  ngOnInit() {
  }

  onSubmit(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;

    }
    console.log(this.form.value);
  }
}
