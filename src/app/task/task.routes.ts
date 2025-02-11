import {  Routes } from "@angular/router";

export const taskRoutes: Routes =[
{
  path:'',
  loadComponent:() => import('./task.component')
}
]
export default taskRoutes
