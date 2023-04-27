import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { authAdminGuard } from './auth-admin.guard';
import { PerfilComponent } from './perfil/perfil.component';
import { authUserGuard } from './auth-user.guard';
import { LigaComponent } from './liga/liga.component';
import { ClasificacionComponent } from './clasificacion/clasificacion.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminCreacionComponent } from './admin-creacion/admin-creacion.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'admin', component: AdminPanelComponent,canActivate:[authAdminGuard],
    children:[
      {path:"users", component:AdminUsersComponent},
      {path:"creacion", component:AdminCreacionComponent},
      {path:"signup", component:AdminSignupComponent}
    ]},
  {path: 'perfil', component: PerfilComponent,canActivate:[authUserGuard]},
  {path: 'clasificacion', component: ClasificacionComponent,canActivate:[authUserGuard]},
  {path: 'perfil/liga', component: LigaComponent,canActivate:[authUserGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
