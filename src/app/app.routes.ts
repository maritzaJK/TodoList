import { Routes } from '@angular/router';
// import {TaskComponent} from './task/task.component';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [
{
  path:'',loadChildren: () => import('./task/task.routes')
  // path:'',
  // component:TaskComponent
},
{
  path:'Registro',
  component: LoginComponent
}

];
