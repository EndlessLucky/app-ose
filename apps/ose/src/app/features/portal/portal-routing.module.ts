import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';
import { WorkshopsComponent } from './views/workshops/workshops.component';


const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      { path: 'talleres', component: WorkshopsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
