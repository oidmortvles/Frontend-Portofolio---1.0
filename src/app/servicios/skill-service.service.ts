import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './base';

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {

  constructor(private http: HttpClient) { }

  //LISTAR SKILLS
  public listarSkills(){
    return this.http.get(`${baseUrl}/skills`);
  }

 
}
