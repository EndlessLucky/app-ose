import { Component, OnInit } from '@angular/core';
import { SignUpPresenter } from './sign-up.presenter';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.view.html',
  styleUrls: ['./sign-up.view.scss'],
  providers: [ SignUpPresenter ]
})
export class SignUpView implements OnInit {

  constructor(public presenter: SignUpPresenter) { }

  ngOnInit(): void {
  }

}
