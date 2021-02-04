import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { WorkshopsComponent } from './views/workshops/workshops.component';
import { WorkshopCreateView } from './views/workshop-create/workshop-create.view';
import { WorkshopUpdateView } from './views/workshop-update/workshop-update.view';
import { InstructorsComponent } from './views/instructors/instructors.component';
import { OseRolesGuard } from '@ose/commons/guards';
import { UserRol } from '@ose/commons/models';
import { DashboardView } from './views/dashboard/dashboard.view';

import { UsersComponent } from './views/users/users.component';
import { UsersEditComponent } from './views/users-edit/users-edit.component';
import { ReceiptComponent } from './views/receipt/receipt.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardView },
      { path: 'talleres', component: WorkshopsComponent },
      { path: 'talleres/nuevo', component: WorkshopCreateView },
      { path: 'talleres/actualizar/:id', component: WorkshopUpdateView },
      {
        path: 'instructores',
        canActivate: [ OseRolesGuard ],
        data: { roles: [ UserRol.admin ] },
        component: InstructorsComponent
      },
      {
        path: 'users', component: UsersComponent
      },
      {
        path: 'users/:phone', component: UsersEditComponent
      },
      {
        path: 'receipt', component: ReceiptComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
