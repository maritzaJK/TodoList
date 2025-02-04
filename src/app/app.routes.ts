import { Routes } from '@angular/router';
import {TaskComponent} from '../app/task/task.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'task',
    component:TaskComponent
  }

];
