import { Component, OnInit } from '@angular/core';
import { ListaTareas } from '../ObjectTareas/lista-tareas';


@Component({
  selector: 'app-agregar-comp',
  templateUrl: './agregar-comp.component.html',
  styleUrls: ['./agregar-comp.component.css']
})
export class AgregarCompComponent implements OnInit {
     
  captarTarea:string="";
   
  ListArray:ListaTareas[]=[
    
   ];

  constructor() { }

  ngOnInit(): void {
  }
   addTask(){
       this.ListArray.push(new ListaTareas(this.captarTarea));
   }
}
