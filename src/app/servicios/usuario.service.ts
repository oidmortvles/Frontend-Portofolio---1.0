import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './base';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient ) { }

//TRAER USUARIO
public usuarios(){
  return this.http.get(`${baseUrl}/usuarios`);
} 

//EDITAR USUARIO
public editarUsuario(usuario:any){
  return this.http.put(`${baseUrl}/usuario/edit/`,usuario);
}



}
