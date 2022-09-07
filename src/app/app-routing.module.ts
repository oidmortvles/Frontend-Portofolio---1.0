import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';


const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"inicio", component:InicioComponent},
  {path:"sobre-mi",component:SobreMiComponent},
  {path:"proyectos",component:ProyectosComponent},
  {path:"contacto",component:ContactoComponent},
  {path:"**",component:InicioComponent},
  
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
