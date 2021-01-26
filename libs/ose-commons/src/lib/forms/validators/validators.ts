import { AbstractControl } from '@angular/forms';

export class OseValidators {

  static email(control: AbstractControl) {
    const valid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(control.value);

    return valid ? null : { emailValidator: 'El formato del email es incorrecto' };
  }

}
