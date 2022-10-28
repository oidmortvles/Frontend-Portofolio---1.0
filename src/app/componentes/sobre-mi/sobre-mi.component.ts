import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EducacionServiceService } from 'src/app/servicios/educacion-service.service';
import { ExperienciaServiceService } from 'src/app/servicios/experiencia-service.service';
import { SkillServiceService } from 'src/app/servicios/skill-service.service';
import {LoginServiceService} from 'src/app/servicios/login-service.service';
import { CursandoPipe } from 'src/app/servicios/cursando.pipe';
import { ActualmenteExpPipe } from 'src/app/servicios/actualmente-exp.pipe';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  public educacionForm:FormGroup;
  public experienciaForm: FormGroup;
  public skillForm : FormGroup;

  //EDUCACION
  instituciones:any =[];
  instituto: any={
    id:"",
    titulo:"",
    institucion:"",
    actual:"",
    inicio:""};

  //EXPERIENCIA
  experiencias:any = [];
  experiencia:any={
      id:"",
      empresa: "",
      cargo: "",
      inicio: "",
      actual: "",
      finalDate: "",
      descripcion: ""};

  //SKILLS
  skills:any = [];
  skill: any={
    id:"",
    skill:"",
    dominio:""};

  editar:boolean= false;
  mostrar:boolean= false;



  
  

  constructor(private educacionService: EducacionServiceService, 
    private experienciaService: ExperienciaServiceService, 
    private skillService: SkillServiceService, 
    private formBuilder: FormBuilder, 
    private router: Router, 
    public loginService:LoginServiceService, 
    public cursando:CursandoPipe,
    public actualmenteExp: ActualmenteExpPipe ) {
    
    //EDUCACION
    this.educacionForm=this.formBuilder.group({
      id:new FormControl (""),
      titulo: new FormControl ("",[Validators.required]),
      institucion: new FormControl (""),
      actual: new FormControl (""),
      inicio: new FormControl ("",[Validators.required]),
      

    });

    //EXPERIENCIA
    this.experienciaForm=this.formBuilder.group({
      id:new FormControl (""),
      empresa: new FormControl ("",[Validators.required]),
      cargo: new FormControl ("",[Validators.required]),
      inicio: new FormControl ("",[Validators.required]),
      actual: new FormControl (""),
      finalDate: new FormControl (""),
      descripcion: new FormControl ("",[Validators.required]),

    });

    //SKILLS
    this.skillForm=this.formBuilder.group({
      id:new FormControl (""),
      skill: new FormControl ("",[Validators.required]),
      dominio: new FormControl ("",[Validators.required])
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
public agregarEducacion(){    
    this.educacionService.agregarInstitucion(this.educacionForm.value).subscribe(
      (data)=>{
        console.log(this.educacionForm.value);
      } );

      //despues de cargar los valores    
    window.location.reload();
    }

public eliminarEducacion(educacionId:any){
      this.educacionService.eliminarEducacion(educacionId).subscribe(
        (data)=>{
          this.instituciones = this.instituciones.filter((institucion:any)=>institucion.educacionId !=educacionId );
        });
      window.location.reload();
    }

public traerEducacion(id:any){
      
        //CARGAMOS EL MODAL CON LOS DATOS
        this.editar=true;
        this.instituto=id;
        this.educacionForm.patchValue({
          id:this.instituto.id,
          titulo:this.instituto.titulo,
          institucion:this.instituto.institucion,
          actual:this.instituto.actual,
          inicio:this.instituto.inicio});
        }


public editarInstituto(value:any){
          this.educacionService.editarEducacion(value).subscribe(
            (resp) => {
              console.log(resp);
            });
            this.educacionForm.reset();
            //despues de cargar los valores    
            window.location.reload();
        }

  //METODO FORMULARIO EDUCACION
  public resetEducacion(){
    this.educacionForm.reset()
  }


  //EXPERIENCIA METODOS
public agregarExperiencia(){
    this.experienciaService.agregarExperiencia(this.experienciaForm.value).subscribe(
      (data)=>{
        console.log(this.experienciaForm.value);
      });

      //despues de cargar los valores
      window.location.reload();
    }

public eliminarExperiencia(experienciaId:any){
      this.experienciaService.eliminarExperiencia(experienciaId).subscribe(
        (data)=>{
          this.experiencias = this.experiencias.filter((exper:any)=>exper.experienciaId !=experienciaId );
        });

       //despues de cargar los valores 
      window.location.reload();
    }

public traerExperiencia(id:any){
  //CARGAMOS EL MODAL CON LOS DATOS
  this.editar=true;
  this.experiencia=id;
  this.experienciaForm.patchValue({
    id:this.experiencia.id,
      empresa: this.experiencia.empresa,
      cargo: this.experiencia.cargo,
      inicio: this.experiencia.inicio,
      actual: this.experiencia.actual,
      finalDate: this.experiencia.finalDate,
      descripcion: this.experiencia.descripcion});
  }    

  public editarExp(value:any){
    this.experienciaService.editarExp(value).subscribe(
      (resp) => {
        console.log(resp);
      });
      this.experienciaForm.reset();
      //despues de cargar los valores    
      window.location.reload();
  }  

  //METODO FORMULARIO EXPERIENCIA
  public resetExperiencia(){
    this.experienciaForm.reset()
  }
 
  //SKILL METODOS
public agregarSkill(){
    this.skillService.agregarSkill(this.skillForm.value).subscribe(
      (data)=>{
        console.log(this.skillForm.value);
      });

      //despues de cargar los valores
      window.location.reload();
  }

public eliminarSkill(skillId:any){
    this.skillService.eliminarSkill(skillId).subscribe(
      (data)=>{
        this.skills = this.skills.filter((skill:any)=>skill.skillId !=skillId );
      });

      //despues de cargar los valores
      window.location.reload();
    }

public traerSkill(id:any){
    //CARGAMOS EL MODAL CON LOS DATOS
    this.editar=true;
    this.skill=id;
    this.skillForm.patchValue({
    id: this.skill.id,
    skill: this.skill.skill,
    dominio: this.skill.dominio});
    
}

public editarSkill(value:any){
  this.skillService.editarSkill(value).subscribe(
    (resp) => {
      console.log(resp);
    });  
    this.skillForm.reset();
    //despues de cargar los valores    
    window.location.reload();

}

  //METODO FORMULARIO SKILL
  public resetSkill(){
    this.skillForm.reset()
  }


}
