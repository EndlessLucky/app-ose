import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminCommonsModule } from './commons/commons.module';
import { WorkshopsComponent } from './views/workshops/workshops.component';
import { WorkshopCreateView } from './views/workshop-create/workshop-create.view';
import { WorkshopUpdateView } from './views/workshop-update/workshop-update.view';
import { InstructorsComponent } from './views/instructors/instructors.component';
import { DashboardView } from './views/dashboard/dashboard.view';

@NgModule({
  declarations: [
    AdminComponent,
    WorkshopsComponent,
    WorkshopCreateView,
    WorkshopUpdateView,
    InstructorsComponent,
    DashboardView
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminCommonsModule,
  ]
})
export class AdminModule { }
