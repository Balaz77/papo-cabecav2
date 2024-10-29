import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlName, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonTabButton, IonTabBar, IonText, IonTabs, IonButtons, IonButton, IonInput, IonList, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSpinner, IonBackButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline, personOutline, newspaperOutline, callOutline } from 'ionicons/icons';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
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
                     RouterLink,
                    IonBackButton]
})
export class SignupPage implements OnInit {

  form!: FormGroup;
  isSignup = signal<boolean>(false);

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
      Nome: ['', [Validators.required, Validators.minLength(256)]],
      CPF: ['', [Validators.required, Validators.minLength(11)]],
      Telefone: ['', [Validators.required, Validators.minLength(11)]],

    });
    
   
    addIcons({mailOutline,lockClosedOutline,personOutline,newspaperOutline,callOutline,});
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
