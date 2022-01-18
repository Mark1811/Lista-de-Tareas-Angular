import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarCompComponent } from './agregar-comp/agregar-comp.component';
import { FormsModule } from '@angular/forms';
import { EditarCompComponent } from './editar-comp/editar-comp.component';
import { RouterModule, Routes } from '@angular/router';
import { MostrarAlertComponent } from './mostrar-alert/mostrar-alert.component';
import { ServicioTaskService } from './servicioTareas/servicio-task.service';

const RutasApp:Routes=[

   { path:'',component:AgregarCompComponent},
   { path:'Editar', component:EditarCompComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AgregarCompComponent,
    EditarCompComponent,
    MostrarAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(RutasApp)
  ],
  providers: [ServicioTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
