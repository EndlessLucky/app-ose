import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { OsePermissionGuardModule } from './permission.module';
import { OseSession } from '../../services/session/session.service';

@Injectable({
  providedIn: OsePermissionGuardModule
})
export class OseRolesGuard implements CanActivate {

  constructor(
    private session: OseSession,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    const roles = next.data.roles;
    const rol = this.session.user.rol;

    return roles.includes(rol) || this.router.parseUrl(this.session.user.startUrl);
  }
}
