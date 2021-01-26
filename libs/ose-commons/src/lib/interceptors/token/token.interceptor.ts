import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OseSession } from '../../services/session/session.service';

@Injectable()
export class OseTokenInterceptor implements HttpInterceptor {

  constructor( private session: OseSession ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.session.isAuthenticated) {
      const headers = {
        Authorization: `Bearer ${this.session.token}`
      };

      const req = request.clone({
        setHeaders: headers
      });

      return next.handle(req);
    }

    return next.handle(request);
  }
}
