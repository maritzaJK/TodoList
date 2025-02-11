import { Component, ElementRef, input, OnInit, ViewChild } from '@angular/core';
import { Taks, Todo, Atodo, Utodo, Deltodo } from '../shared/model/taks';
import { Taskcomplete } from '../shared/model/taskcomplete';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {TodoapiService} from '../shared/services/todoapi.service';
import {MatIconModule} from '@angular/material/icon';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    NgbAlertModule,
    NgbDropdownModule
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export default class TaskComponent implements OnInit {

  @ViewChild('Atarea')
  miElemento!: ElementRef;

  tareas: Taks[] = [];
  atarea: Atodo[]=[];
  utarea: Utodo[]=[];
  Dtarea: Deltodo[]=[];

  campotarea: string = '';


constructor(private servicio:TodoapiService){}

  ngOnInit(): void {
    this.servicio.getTodo().subscribe((data:Todo)=>{
      console.log('resultado',data);
      this.tareas=data.todos;
    })

  }

  //queda pendiente como llamar funciones dentro de la clase
  getTarea(tareas:[]){

  }

AgregarTarea(tareas: string) {
const x ={
  todo: tareas,
  completed:false,
  userId: 5,
}

if (!tareas) {
  alert('Por favor agrega tarea');
} else {
this.atarea.push(x);
this.servicio.Addtodo(x)
.subscribe(result => this.tareas.push(
    {
      id: result.id,
      todo: result.todo,
      completed: result.completed,
      userId : result.userId
    }
  ))
  this.miElemento.nativeElement.value = '';
}
// muestra en colsola todo el resultado de la peticion
// .subscribe(result =>console.log(result)

    /*if (!tareas) {
      alert('Por favor agrega tarea');
    } else {
      this.tareas.push({
        task: tareas,
        date: new Date(),
        status: true,
      });
    }*/
    //this.miElemento.nativeElement.value = ''; //aqui se reicia el textarea a vacio.
  }

EditTask(tareas: number, tarea: string) {

//constante para envio no es el mismo que se usa para el manejo de respuesta no siempre
const uptarea = {
  completed:false
}
this.miElemento.nativeElement.value = tarea;
this.utarea.push(uptarea);
this.servicio.UpdateTodo(uptarea)
.subscribe(result => console.log(result))

// for (var i = 0; i < this.taskterminada.length; i++) {
    //   if (this.taskterminada[i].task === tareaEditada) {
    //     this.tareas.push(this.taskterminada[i]);
    //     this.taskterminada.splice(i, 1);
    //   }
    // }

    // Js array lampda expressions
    // const taskIndex = this.taskterminada.findIndex((task) => task.task === tareaEditada);
    // this.tareas.push(this.taskterminada[taskIndex]);
    // this.taskterminada.splice(taskIndex, 1);
  }

removetask(taskremoved: number, tarea: string) {
  this.servicio.DeleteTodo()
// .subscribe(result => console.log(result))
    .subscribe(result => this.Dtarea.push(
        {
          id: result.id,
          todo: tarea,
          completed: result.completed,
          userId: result.userId,
          isDeleted: result.isDeleted,
          deletedOn:result.deletedOn
        }
      ))

    for (var i = 0; i < this.tareas.length; i++) {
      if (this.tareas[i].id === taskremoved ) {
        this.tareas.splice(i, 1);
      }
    }
  }
}
