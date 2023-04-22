import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { authAdminGuard } from './auth-admin.guard';
import { PerfilComponent } from './perfil/perfil.component';
import { authUserGuard } from './auth-user.guard';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'admin', component: AdminPanelComponent,canActivate:[authAdminGuard]},
  {path: 'perfil', component: PerfilComponent,canActivate:[authUserGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
