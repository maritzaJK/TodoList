import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Atodo, Taks, Todo, Utodo, Deltodo } from '../model/taks';
import {User,login} from '../model/user';

const URL='https://dummyjson.com';
const GETTODO='/todos';
const ADDTODO='/todos/add';
const UPDATETODO='/todos/1';
const DELETETODO='/todos/1';
const LOGINURL='/user/login';

@Injectable({
  providedIn: 'root'
})
export class TodoapiService {

  constructor(private httpClient:HttpClient) { }

  getTodo(): Observable<Todo>{
    return this.httpClient.get<Todo>(URL+GETTODO);
  }

  Addtodo(atarea:Atodo): Observable<Taks>{
    return this.httpClient.post<Taks>(URL+ADDTODO, atarea);
  }

UpdateTodo(uptarea:Utodo): Observable<Taks>{
  return this.httpClient.put<Taks>(URL+UPDATETODO,uptarea);

}

DeleteTodo():Observable<Deltodo>{
return this.httpClient.delete<Deltodo>(URL+DELETETODO);
}

login(login:login): Observable<User>{
  return this.httpClient.post<User>(URL+LOGINURL,login);
}






}

