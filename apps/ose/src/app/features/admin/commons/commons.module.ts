import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';
import { ComponentsModule } from './components/components.module';
import { HttpModule } from './http/http.module';
import { OseWorkshopsHttpModule } from '@ose/commons/http';
import { OseErrorsInterceptorModule, OseTokenInterceptorModule } from '@ose/commons/interceptors';
import { OseSessionModule } from '@ose/commons/services';

@NgModule({
  exports: [
    UiModule,
    ComponentsModule,
    HttpModule,

    OseWorkshopsHttpModule,
    OseErrorsInterceptorModule,
    OseSessionModule,
    OseTokenInterceptorModule
  ],
})
export class AdminCommonsModule { }
