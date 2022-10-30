import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  user:any =[];

  constructor(
    public usuarioService:UsuarioService,
    public loginService : LoginServiceService
    ){ }

  ngOnInit(): void {
    //TRAER DATOS USUARIO
    this.usuarioService.usuarios().subscribe(
      (data)=>{
      this.user=data;});

      
}



  

}

