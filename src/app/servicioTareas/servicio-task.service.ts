import { Injectable } from '@angular/core';
import { ListaTareas } from '../ObjectTareas/lista-tareas';

@Injectable({
  providedIn: 'root'
})
export class ServicioTaskService {

  constructor() {}

    ListAdd:ListaTareas[]=[
   
  ];

  addTaskServicio(Tarea:ListaTareas){
    console.log(this.ListAdd.push(Tarea));
  }



}
