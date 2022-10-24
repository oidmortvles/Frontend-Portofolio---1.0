import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EducacionServiceService } from 'src/app/servicios/educacion-service.service';
import { ExperienciaServiceService } from 'src/app/servicios/experiencia-service.service';
import { SkillServiceService } from 'src/app/servicios/skill-service.service';
import {LoginServiceService} from 'src/app/servicios/login-service.service';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  instituciones:any =[];
  experiencias:any = [];
  skills:any = [];

  educacionForm:FormGroup;
  

  constructor(private educacionService: EducacionServiceService, private experienciaService: ExperienciaServiceService, private skillService: SkillServiceService, private formBuilder: FormBuilder, private router: Router, public loginService:LoginServiceService ) {
    
    //EDUCACION
    this.educacionForm=this.formBuilder.group({
      titulo: new FormControl ("",[Validators.required]),
      institucion: new FormControl (""),
      actual: new FormControl (""),
      finalizado: new FormControl (""),
      logoInst: new FormControl (""),

    });


  }

  

  ngOnInit(): void {
    //LISTAR EDUCACION
    this.educacionService.listarEducacion().subscribe(
      (data:any)=>{
        this.instituciones= data;
        
      }
    );

    //LISTAR EXPERIENCIA
    this.experienciaService.listarExperiencias().subscribe(
      (data:any)=>{
        this.experiencias=data;
        
      }
    );

    //LISTAR SKILLS
    this.skillService.listarSkills().subscribe(
      (data:any)=>{
        this.skills=data;
        
      }
    );
    
  }

  //EDUCACION METODOS
  agregarEducacion(){
    
    this.educacionService.agregarInstitucion(this.educacionForm.value).subscribe(
      (data)=>{
        console.log(this.educacionForm.value);
      } );
      //despues de cargar los valores
    console.log(this.educacionForm.value);
    window.location.reload();
  }

  //METODO FORMULARIO EDUCACION
  public resetEducacion(){
    this.educacionForm.reset()
  }

  public finalizadoEd(){
    if(this.instituciones.actual==true){
      return true;
    }else{
      return false;
    }
    
    
    }
 
  


}
