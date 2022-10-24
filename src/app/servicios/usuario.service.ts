import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './base';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient:HttpClient ) { }

  //USUARIO
  public traerUsuario(){
    return this.httpClient.get(`${baseUrl}/usuario`);
  }

  public editarUsuario(user : any){
    return this.httpClient.put(`${baseUrl}/usuario/edit`,user);
  }





}
