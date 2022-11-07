import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {LoginServiceService} from 'src/app/servicios/login-service.service';
import { ProyectoServiceService } from 'src/app/servicios/proyecto-service.service';
import { AngularFireStorage } from  '@angular/fire/compat/storage';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public proyectoForm:FormGroup;
  proyectos:any =[];
  editar:boolean= false;
  mostrar:boolean= false;

  proyectoEdit:any={
    id:"",
    tipo:"",
    descripcion:"",
    multimedia:""};

  proyecto:any={
    id:"",
    tipo:"",
    descripcion:"",
    multimedia:""};

    imagenes:string[]=[];
    img:string="";

    fotos:any={
      id:"",
      tipo:"",
      descripcion:"",
      multimedia:""};
    
  
  

  constructor(
    public loginService:LoginServiceService,
    private formBuilder: FormBuilder,
    public proyectoService : ProyectoServiceService,
    private storage:AngularFireStorage,
    private router : Router

  ) {

    this.proyectoForm=this.formBuilder.group({
      id: new FormControl (""),
      tipo: new FormControl ("",[Validators.required,]),
      descripcion: new FormControl ("",[Validators.required]),
      multimedia: new FormControl (""),
      updateOn: 'change'
   });

}

  ngOnInit(): void {

  //LISTAR PROYECTOS
  this.proyectoService.listarProyectos().subscribe(
    (data:any)=>{
      this.proyectos= data;});

    this.obtenerImg();
}

//AGREGAR PROYECTO
public agregarProyecto(){ 
  
       this.proyectoService.agregarProyecto(this.proyectoForm.value).subscribe(
      (data)=>{
        console.log(this.proyectoForm.value);});
      this.proyectoForm.reset();
        
}

//ELIMINAR PROYECTO
eliminarProyecto(proyectoId:any){
  this.proyectoService.eliminarProyecto(proyectoId).subscribe(
    (data)=>{
      this.proyectos = this.proyectos.filter((proyecto:any)=>proyecto.proyectoId !=proyectoId );
    });
  //window.location.reload();
}



//TRAER FORM CON INFO CARGADA
public traerProyecto(id:any){
//CARGAMOS EL MODAL CON LOS DATOS
  this.editar=true;
  this.proyectoEdit=id;
  this.proyectoForm.patchValue({
    id: this.proyectoEdit.id,
    tipo: this.proyectoEdit.tipo,
    descripcion: this.proyectoEdit.descripcion,
    multimedia: this.proyectoEdit.multimedia});
}
 



//EDITAR EL PROYECTO
public editarProyecto(value:any){
  this.proyectoService.editarProyecto(value).subscribe(
    (resp) => {
      console.log(resp);
    });  
    this.proyectoForm.reset();
    //despues de cargar los valores    
    //window.location.reload();
}


public resetProyecto(){
  this.proyectoForm.reset()
}

  public mostrarModal(form:any){
    this.proyecto=form;
    this.proyectoForm.patchValue({
      id: form.id,
      tipo: form.tipo,
      descripcion: form.descripcion,
    multimedia:form.multimedia});
      console.log(this.proyectoForm.value);
      this.proyectoForm.reset()
}


alCargar(e:any){
  let id=e.target.files[0].name
  const file= e.target.files[0];
  const filePath= id;
  const ref= this.storage.ref(filePath);
  const upload= this.storage.upload(filePath,file);
  
}

obtenerImg(){
  const almacenamiento=getStorage();
  const imgRef= ref(almacenamiento);
  
  listAll(imgRef).then(async (res) => {
    this.imagenes=[];
    for(let img of res.items ){
      const url= await getDownloadURL(img);
      this.imagenes.push(url);
      }
      
    });}


traerImg(a:any){
  const storage = getStorage();
  const b= a.multimedia.replace("C:\\fakepath\\", "");
  getDownloadURL(ref(storage, b))
  .then((url) => {
    this.img=""
    this.img= url;
  })
  
}




}
//COMIENZAN