import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  formLogin!:FormGroup;

  constructor(private readonly fb:FormBuilder) { }

  ngOnInit(): void {

    this.formLogin= this.initForm();


    }

 
  
    send():void{
      console.log('Formulario Ok')
    }

    initForm():FormGroup{
      return this.fb.group({
        email: ['',[Validators.required,Validators.email]],
        clave: ['',[Validators.required,Validators.minLength(6)]]

      })
    }
 
  
}
