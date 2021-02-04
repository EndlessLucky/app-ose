import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminCommonsModule } from './commons/commons.module';
import { WorkshopsComponent } from './views/workshops/workshops.component';
import { WorkshopCreateView } from './views/workshop-create/workshop-create.view';
import { WorkshopUpdateView } from './views/workshop-update/workshop-update.view';
import { InstructorsComponent } from './views/instructors/instructors.component';
import { DashboardView } from './views/dashboard/dashboard.view';

import { UiModule } from './../auth/commons/ui/ui.module';
import { UsersComponent } from './views/users/users.component';
import { UsersEditComponent } from './views/users-edit/users-edit.component';
import { ReceiptComponent } from './views/receipt/receipt.component';

@NgModule({
  declarations: [
    AdminComponent,
    WorkshopsComponent,
    WorkshopCreateView,
    WorkshopUpdateView,
    InstructorsComponent,
    DashboardView,
    UsersComponent,
    UsersEditComponent,
    ReceiptComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminCommonsModule,
    UiModule,
    FormsModule
  ]
})
export class AdminModule { }
