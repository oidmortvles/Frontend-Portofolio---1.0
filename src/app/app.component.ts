import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import baseUrl from './servicios/base';
import { LoginServiceService } from './servicios/login-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{  
  
  formLogin:FormGroup;

  constructor(private formBuilder: FormBuilder,public loginService:LoginServiceService) {
    this.formLogin= this.formBuilder.group({
      username: new FormControl ("",[Validators.required,Validators.minLength(5)]),
      password : new FormControl ("", [Validators.required,Validators.minLength(3),Validators.maxLength(15)])

    })
    }

  ngOnInit(): void {
  }

  loginData= {
  username: "argentinaprograma",
  password: "argentina"}
    
  public Reset(){
      this.formLogin.reset()
    }

    public Login(){

      if (this.formLogin.value.username == this.loginData.username && 
        this.formLogin.value.password == this.loginData.password ){

          this.loginService.generarToken(this.loginData).subscribe(
            (data:any)=>{console.log(data)
            this.loginService.sesion(data.accessToken)
          console.log(data.accessToken)},
           
            (error)=> console.log(error)

        )}
          
        else{
            this.formLogin.reset(),
            console.log("Credenciales no validas"),
            console.log(this.formLogin.value);
          }
      }


      public cerrarSesion(){
        this.loginService.cerrarSesion();
        window.location.reload();
      }

    
   
 
  
}
