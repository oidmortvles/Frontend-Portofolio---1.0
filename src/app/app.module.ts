import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { authInterceptorProviders } from './servicios/auth-interceptor';
import { CursandoPipe } from './servicios/cursando.pipe';
import { ActualmenteExpPipe } from './servicios/actualmente-exp.pipe';
import { environment } from '../environments/environment';
import { AngularFireStorageModule  } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';












@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    ProyectosComponent,
    ContactoComponent,
    InicioComponent,
    CursandoPipe,
    ActualmenteExpPipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    
    
    

    
   
    

  ],
  providers: [authInterceptorProviders,CursandoPipe,ActualmenteExpPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
