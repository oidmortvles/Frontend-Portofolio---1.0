import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  public contactoForm:FormGroup;

    user:any =[];
    mostrar:boolean= false;
    userMod:any={
    id:"",
    nombre: "",
    apellido: "",
    descripcion:"",
    mail:"",
    password:"",
    telefono:"",
    domicilio:"",
    fechaNac:"",
    sobreMi:"",
    fotoPerfil: "",
    fotoPortada:"",
    instagram:"",
    linkedin:"",
    github:"",
    otro:"",
    username:""};

  constructor(
    public loginService:LoginServiceService,
    public usuarioService:UsuarioService,
    private formBuilder: FormBuilder

  ){
    this.contactoForm=this.formBuilder.group({
    id:new FormControl (""),
    nombre: new FormControl ("",[Validators.required]),
    apellido: new FormControl (""),
    descripcion:new FormControl ("",[Validators.required]),
    mail:new FormControl ("",[Validators.required]),
    password:new FormControl (""),
    telefono:new FormControl ("",[Validators.required]),
    domicilio:new FormControl ("",[Validators.required]),
    fecha_nac:new FormControl ("",[Validators.required]),
    sobre_mi:new FormControl (""),
    foto_perfil: new FormControl (""),
    foto_portada:new FormControl (""),
    instagram:new FormControl (""),
    linkedin:new FormControl (""),
    github:new FormControl (""),
    otro:new FormControl (""),
    username:new FormControl (""),
    updateOn: 'change'
   });
   }

  ngOnInit(): void {

  //TRAER DATOS USUARIO
  this.usuarioService.usuarios().subscribe(
    (data)=>{
      this.user=data;});
  }

//TRAER FORM CON INFO CARGADA
public traerDatos(id:any){
  //CARGAMOS EL MODAL CON LOS DATOS
    
    this.userMod=id;
    this.contactoForm.patchValue({
      id:this.userMod.id,
    nombre: this.userMod.nombre,
    apellido: this.userMod.apellido,
    descripcion:this.userMod.descripcion,
    mail:this.userMod.mail,
    password:this.userMod.password,
    telefono:this.userMod.telefono,
    domicilio:this.userMod.domicilio,
    fecha_nac:this.userMod.fecha_nac,
    sobre_mi:this.userMod.sobre_mi,
    foto_perfil: this.userMod.foto_perfil,
    foto_portada:this.userMod.foto_portada,
    instagram:this.userMod.instagram,
    linkedin:this.userMod.linkedin,
    github:this.userMod.github,
    otro:this.userMod.otro,
    username:this.userMod.username});
  }




//METODO PARA EDITAR DATOS
public editarUsuario(value:any){
  this.usuarioService.editarUsuario(value).subscribe(
    (resp) => {
      console.log(resp);
    });  
    this.contactoForm.reset();
    //despues de cargar los valores    
    //window.location.reload();

}

//RESET DEL MODAL
public reset(){
  this.contactoForm.reset();
}




}
