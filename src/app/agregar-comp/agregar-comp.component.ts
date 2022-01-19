
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaTareas } from '../ObjectTareas/lista-tareas';
import { ServicioTaskService } from '../servicioTareas/servicio-task.service';


@Component({
  selector: 'app-agregar-comp',
  templateUrl: './agregar-comp.component.html',
  styleUrls: ['./agregar-comp.component.css']
})
export class AgregarCompComponent implements OnInit {
     
  captarTarea:string="";
  editid:string;
  habilitar=false;
  habili=true;
  capturaredit:string="";

  
  
  ListArray:ListaTareas[]=[];

  
  constructor(private router:Router, private ServApp:ServicioTaskService) {
    this.ListArray=this.ServApp.ListAdd;
   }

  ngOnInit(): void {
     
  }
   addTask(){
       if(this.captarTarea==""){
        this.habilitar=true;
      }else{
       
       let NuevaTarea = new ListaTareas(this.captarTarea,this.ListArray.length+1,false,false);
       this.ServApp.addTaskServicio(NuevaTarea);
       this.captarTarea=""; 
       this.habilitar=false;
      
    
      }   
    }

   elimiList(elem:number){
    this.ListArray.splice(elem,1);
   }

   editar(elem:ListaTareas){
       elem.nameList=this.capturaredit;
       elem.editar=!elem.editar;
       this.capturaredit="";

   }

 ActEdit(event:ListaTareas){
   event.editar=!event.editar;
   this.habili=false;
   }

}