import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './base';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  //GENERAR TOKEN   
  public generarToken (loginData : any){
    return this.http.post(`${baseUrl}/auth/login`,loginData);
  }

  //INICIAR SESION Y GUARDAMOS TOKEN
  public sesion(token:any){
    localStorage.setItem('accessToken',token);
    }

    public isLogged(){
      let tokenStr = localStorage.getItem('accessToken');
      if(tokenStr == undefined || tokenStr== ''|| tokenStr ==null){
        return false;
      }else {
        return true;
      }
    }

    public obtenerToken(){
       return localStorage.getItem('accessToken');
    }

    public setUsuario(usuario:any){
      localStorage.setItem('usuario',JSON.stringify(usuario));
    }

    public getUsuario(){
      let userStr = localStorage.getItem('usuario');
      if(userStr!= null){
        return JSON.parse(userStr);
      }else{
        this.cerrarSesion();
        return null;
      }
    }

    //CERRAMOS SESION Y ELIMINAMOS TOKEN

    public cerrarSesion(){
      localStorage.removeItem('accessToken');
      localStorage.removeItem('usuario');
      return true;
    }





}
