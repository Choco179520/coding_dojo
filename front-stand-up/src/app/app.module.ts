import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { SalaModule } from './modules/sala/sala.module';
import { UsuarioFormularioComponent } from './formularios/usuario-formulario/usuario-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    SalaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


