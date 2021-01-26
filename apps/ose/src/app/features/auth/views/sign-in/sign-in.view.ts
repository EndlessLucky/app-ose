import { Component, OnInit } from '@angular/core';
import { SignInPresenter } from './sign-in.presenter';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.view.html',
  styleUrls: ['./sign-in.view.scss'],
  providers: [ SignInPresenter ]
})
export class SignInView implements OnInit {

  constructor(public presenter: SignInPresenter) { }

  ngOnInit(): void {
  }

}
