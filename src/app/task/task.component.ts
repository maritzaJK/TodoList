import { Component, ElementRef, input, ViewChild } from '@angular/core';
import {Taks} from '../shared/model/taks';
import { Taskcomplete } from '../shared/model/taskcomplete';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    MatInputModule
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {


  @ViewChild('Atarea')
  miElemento!: ElementRef;

  tareas:Taks[] = [];
  campotarea: string ='';
  tareascomplete: Taskcomplete[]=[];

  taskterminada:Taskcomplete[] = [];




AgregarTarea(tareas:string){
if(tareas === '')
{
  alert('Por favor agrega tarea');
}else{
  this.tareas.push({
    task: tareas,
    date:new Date(),
    status:true
  });
}
this.miElemento.nativeElement.value='';//aqui se reicia el textarea a vacio.

console.log('la tarea que se agrega es:',tareas);
}

Taskcomplete(tareaTerminada:string)
{
  this.tareascomplete.push({
    task: tareaTerminada,
    date:new Date(),
    status:false
  });
console.log('la tarea terminada es',tareaTerminada);

//this.removetask(this.tareascomplete,tareaTerminada);
}

removetask(taskremoved:string)
{

  for (var i = 0; i < this.tareas.length; i++) {
    if (this.tareas[i].task === taskremoved) {
      this.taskterminada.push(this.tareas[i]);
      this.tareas.splice(i,1);
      //console.log('resultado task',this.tareas);
    }
  }
  //console.log('array modificado',this.taskterminada);
}

}



