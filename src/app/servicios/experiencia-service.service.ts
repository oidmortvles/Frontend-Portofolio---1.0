import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './base';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaServiceService {

  constructor(private http: HttpClient) { }

  //LISTAR EXPERIENCIAS
  public listarExperiencias(){
    return this.http.get(`${baseUrl}/experiencias`);
  }
}
