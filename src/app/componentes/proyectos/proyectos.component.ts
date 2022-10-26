import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {LoginServiceService} from 'src/app/servicios/login-service.service';
import { ProyectoServiceService } from 'src/app/servicios/proyecto-service.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectoForm:FormGroup;
  proyectos:any =[];
  camposModal:any=[];


  constructor(
    public loginService:LoginServiceService,
    private formBuilder: FormBuilder,
    private proyectoService : ProyectoServiceService,
  ) {

    this.proyectoForm=this.formBuilder.group({
      tipo: new FormControl ("",[Validators.required]),
      descripcion: new FormControl ("",[Validators.required]),
      multimedia: new FormControl (""),
      
      

    });




   }

  ngOnInit(): void {

  //LISTAR PROYECTOS
  this.proyectoService.listarProyectos().subscribe(
    (data:any)=>{
      this.proyectos= data;
      
    });
}

//AGREGAR PROYECTO
public agregarProyecto(){
  this.proyectoService.agregarProyecto(this.proyectoForm.value).subscribe(
    (data)=>{
      console.log(this.proyectoForm.value);
    } );

    //despues de cargar los valores    
  window.location.reload();
}

//ELIMINAR PROYECTO
eliminarProyecto(proyectoId:any){
  this.proyectoService.eliminarProyecto(proyectoId).subscribe(
    (data)=>{
      this.proyectos = this.proyectos.filter((proyecto:any)=>proyecto.proyectoId !=proyectoId );
    });
  window.location.reload();
}





public resetProyecto(){
  this.proyectoForm.reset()
}

//CAPTURAR EVENTO MODAL
mostrarModal(eventoObjeto: any){
 
 this.camposModal=eventoObjeto;
 
  

}



}
