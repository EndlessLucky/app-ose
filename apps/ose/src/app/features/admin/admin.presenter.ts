import { Injectable } from '@angular/core';
import { MenuOption } from './interfaces/menu-option.interface';
import { OseSession } from '@ose/commons/services';
import { UserRol } from '@ose/commons/models';
import { Router } from '@angular/router';

@Injectable()
export class AdminPresenter {
  private allMenuOpts: MenuOption[] =  [
    { title: 'Talleres', icon: 'bookmark', url: '/administrador/talleres', roles: [ UserRol.admin, UserRol.intructor ] },
    { title: 'Instructores', icon: 'bookmark', url: '/administrador/instructores', roles: [ UserRol.admin ] },
  ];

  get name() {
    return this.session.user.fullName;
  }

  get menuOpts(): MenuOption[] {
    return this.allMenuOpts.filter(option => option.roles.includes(this.session.user.rol));
  }

  constructor(
    private session: OseSession,
    private router: Router
  ) { }

  closeSession() {
    this.session.destroy();
    this.router.navigateByUrl('/');
  }
}
