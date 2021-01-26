import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SignInView } from './views/sign-in/sign-in.view';
import { SignUpView } from './views/sign-up/sign-up.view';

const routes: Routes = [
  { path: '', redirectTo: 'ingresar' },
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'ingresar', component: SignInView },
      { path: 'registrarse', component: SignUpView }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
