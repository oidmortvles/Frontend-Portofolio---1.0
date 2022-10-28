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

  //AGREGAR SKILL
  public agregarSkill(skill:any){
    return this.http.post(`${baseUrl}/skill/new`,skill); 
  }

  //ELIMINAR SKILL
  public eliminarSkill(skillId:any){
    return this.http.delete(`${baseUrl}/skill/delete/${skillId}`);
  }

  //TRAER UN INSTITUTO
  public traerSkill(skillId:any){
    return this.http.get(`${baseUrl}/skill/${skillId}`);
  }

  //EDITAR INSTITUTO
  public editarSkill(skill:any){
    return this.http.put(`${baseUrl}/skill/edit`,skill);
  }
 
}
