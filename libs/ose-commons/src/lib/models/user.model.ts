export interface IUser {
  email: string;
  id: string;
  names: string;
  lastNames: string;
  rol: string;
}

export enum UserRol {
  student = 'STUDENT',
  intructor = 'INSTRUCTOR',
  admin = 'ADMIN'
}

const urlStart: Map<UserRol, string> = new Map([
  [ UserRol.student, '/' ],
  [ UserRol.intructor, '/administrador' ],
  [ UserRol.admin, '/administrador' ],
]);

export class User {
  email: string;
  names: string;
  lastNames: string;
  rol: UserRol;

  constructor(data: IUser) {
    this.email = data ? data.email : '';
    this.names = data ? data.names : '';
    this.lastNames = data ? data.lastNames : '';
    this.rol = data ? data.rol as UserRol : null;
  }

  get fullName() {
    return `${this.names} ${this.lastNames}`;
  }

  get startUrl() {
    return urlStart.get(this.rol);
  }

}
