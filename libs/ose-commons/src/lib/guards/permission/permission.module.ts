import { NgModule } from '@angular/core';
import { OseSessionModule } from '../../services/session/session.module';

@NgModule({
  imports: [
    OseSessionModule
  ]
})
export class OsePermissionGuardModule { }
