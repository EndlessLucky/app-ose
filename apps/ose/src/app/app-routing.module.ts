import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OseAuthenticatedGuard, OseRolesGuard } from '@ose/commons/guards';
import { UserRol } from '@ose/commons/models';

const routes: Routes = [
  { path: '', redirectTo: 'administrador', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./features/portal/portal.module').then(m => m.PortalModule)
  },
  {
    path: 'administrador',
    canActivate: [OseAuthenticatedGuard, OseRolesGuard],
    data: { roles: [ UserRol.admin, UserRol.intructor ] },
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'autenticacion',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
