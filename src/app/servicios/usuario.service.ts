import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './base';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient:HttpClient ) { }

  public guardarUsuario(usuario:any){
    return this.httpClient.post(`${baseUrl}/usuario/new`,usuario);
  }

  public TraerUsuarios(url:'/usuario'){
    return this.httpClient.get(url)
  }


}
