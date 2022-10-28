import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './base';

@Injectable({
  providedIn: 'root'
})
export class EducacionServiceService {

  constructor(private http: HttpClient ) { }

  //LISTAR EDUCACION
    public listarEducacion(){
      return this.http.get(`${baseUrl}/instituciones`);
    }

    
    //AGREGAR EDUCACION
    public agregarInstitucion(institucion:any){
      return this.http.post(`${baseUrl}/educacion/new`,institucion);
    }

    //ELIMINAR EDUCACION
    public eliminarEducacion(educacionId:any){
      return this.http.delete(`${baseUrl}/educacion/delete/${educacionId}`);
    }


    //TRAER UN INSTITUTO
    public traerInstituto(institutoId:any){
      return this.http.get(`${baseUrl}/instituto/${institutoId}`);
    }

    //EDITAR INSTITUTO
    public editarEducacion(instituto:any){
      return this.http.put(`${baseUrl}/instituto/edit`,instituto);
    }
}
