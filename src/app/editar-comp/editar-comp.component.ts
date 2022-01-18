import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaTareas } from '../ObjectTareas/lista-tareas';


@Component({
  selector: 'app-editar-comp',
  templateUrl: './editar-comp.component.html',
  styleUrls: ['./editar-comp.component.css']
})
export class EditarCompComponent implements OnInit {

  captarEdicion:string="";
  ListArray:ListaTareas[]=[];
 
  constructor(private router:Router) { }

  ngOnInit(): void {
   
  }
  editarTarea(){
    this.router.navigate(['']);
  }


}
