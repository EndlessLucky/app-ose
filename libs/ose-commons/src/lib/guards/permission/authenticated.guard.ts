import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { OsePermissionGuardModule } from './permission.module';
import { OseSession } from '../../services/session/session.service';

@Injectable({
  providedIn: OsePermissionGuardModule
})
export class OseAuthenticatedGuard implements CanActivate {

  constructor(
    private session: OseSession,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

    if (!this.session.isAuthenticated) {
      // para rutas con parametros
      // this.router.createUrlTree([]); // similar a .navigate([])

      // para rutas sin parametros
      return this.router.parseUrl('/autenticacion/ingresar'); // similar a .navigateByUrl('')
    }

    return this.session.isAuthenticated;
  }
}
