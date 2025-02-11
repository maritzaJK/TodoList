import { Component } from '@angular/core';
import {TodoapiService} from '../shared/services/todoapi.service';
import { User,login } from '../shared/model/user';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  Alogin:login[]=[];


constructor(private servicio:TodoapiService){}

autentification(user: string,passworduser: string){
  const xlogin ={
    username:user,
    password:passworduser,
    expiresInMins:30,
  }

  this.Alogin.push(xlogin);
  this.servicio.login(xlogin)
  .subscribe( result =>console.log(result))


}
}
