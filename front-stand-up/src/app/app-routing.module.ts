import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/components/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SalaComponent } from './modules/sala/components/sala.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'inicio',
    component: InicioComponent,
    children: [
      {
        path: 'sala',
        loadChildren: 'src/app/modules/sala/sala.module#SalaModule'
      },
    ],
    //canActivate: [EstaLogeadoGuard]
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
