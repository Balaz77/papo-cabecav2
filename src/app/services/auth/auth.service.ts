import { inject, Injectable, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uid = signal<string | null>(null);
  private fireAuth = inject(Auth);
  private api = inject(ApiService);

  constructor() { }

  setData(uid: string | null){
   if(!this.uid())
    this.uid.set(uid);
  }

  getId(){
    const auth = getAuth();
    const uid = auth.currentUser?. uid || null;
    this.setData(uid);
    return uid;
  }

  async register(data: {email:string, Password:string, Nome:string, cpf: string, Telefone: string}): Promise<{id: string}> {
    try{
      const register = await createUserWithEmailAndPassword(  
        this.fireAuth,
        data.email,
        data.Password
       );

       const id = register.user.uid;
       const userData = {
        Nome : data.Nome,
        Email : data.email,
        uid : id ,
        photo: 'https://i.pravatar.cc/' + this.randomIntFromInterval(200, 400)
       };

       await this.api.setData('users/${id}', userData)
       this.setData(id);

       return {id};
    
    }catch(e){
      console.error('erro no registro:' , e);
      throw e;
    }
  }

  randomIntFromInterval(min: number, max: number,): number {
    return Math.floor(Math.random() + (max - min + 1) + min);
  }


 async login(email:string, Password:string){
    try{
      const response = await signInWithEmailAndPassword(
        this.fireAuth,
        email,
        Password
      );

      if(response?.user){
        this.setData(response?.user?.uid);
      }

    }catch(e){
      console.error('erro no login:' , e);
      throw e;
    }
  }
}

