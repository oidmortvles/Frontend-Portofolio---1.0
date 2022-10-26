import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './base';

@Injectable({
  providedIn: 'root'
})
export class ProyectoServiceService {

  constructor(private http: HttpClient) { }

  //LISTAR PROYECTOS
  public listarProyectos(){
    return this.http.get(`${baseUrl}/proyectos`);
  }

  //AGREGAR PROYECTO
  public agregarProyecto(proyecto:any){
    return this.http.post(`${baseUrl}/proyecto/new`,proyecto);
  }

  //ELIMINAR PROYECTO
  public eliminarProyecto(proyectoId:any){
    return this.http.delete(`${baseUrl}/proyecto/delete/${proyectoId}`);
  }

}
