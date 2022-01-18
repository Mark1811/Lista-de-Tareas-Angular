export class ListaTareas {
   
    nameList:string="";
    id:number;
    completo:boolean;
    editar:boolean;
 

constructor(nameList:string,id:number,completo:boolean,editar:boolean){
    this.nameList=nameList;
    this.id=id;
    this.completo=completo;
    this.editar=editar;
}

}