import { Component, OnInit } from '@angular/core';
import { ListaTareas } from '../ObjectTareas/lista-tareas';


@Component({
  selector: 'app-agregar-comp',
  templateUrl: './agregar-comp.component.html',
  styleUrls: ['./agregar-comp.component.css']
})
export class AgregarCompComponent implements OnInit {
     
  captarTarea:string="";
  ListArray:ListaTareas[]=[];
  habilitar=false;
  
  
  
  
  constructor() { }

  ngOnInit(): void {
     
  }
   addTask(){
       if(this.captarTarea==""){
        this.habilitar=true;
      }else{
       this.ListArray.push(new ListaTareas(this.captarTarea)) ;
       this.captarTarea=""; 
       this.habilitar=false;
      
      }   
    }

   elimiList(valor:number){
    this.ListArray.splice(valor,1);
    
   }
    
    
  
   
  
   

}
