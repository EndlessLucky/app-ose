import { NgModule } from '@angular/core';
import { OseSessionModule } from '../../services/session/session.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OseTokenInterceptor } from './token.interceptor';

@NgModule({
  imports: [
    OseSessionModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OseTokenInterceptor,
      multi: true
    }
  ]
})
export class OseTokenInterceptorModule { }
