import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { OseValidators } from '@ose/commons/forms';
import { SignInCredentials } from '../../../interfaces/sign-in-credentials.interface';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
  @Output() signIn: EventEmitter<SignInCredentials> = new EventEmitter<SignInCredentials>();
  signInForm: FormGroup;

  get emailError() {
    const email = this.signInForm.get('email') as FormControl;
    if (email.hasError('required')) {
      return 'Este campo es requerido';
    }

    if (email.hasError('emailValidator')) {
      return email.errors.emailValidator;
    }

    return null;
  }

  constructor(
    private fb: FormBuilder,
    private primengConfig: PrimeNGConfig
  ) {
    this.signInForm = this.fb.group({
      email: ['josuebejarano@outlook.com', [Validators.required, OseValidators.email]],
      password: ['jbejarano2020', Validators.required]
    });
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  sendData() {
    if (this.signInForm.valid) {
      this.signIn.emit(this.signInForm.value);
    }
  }

}
