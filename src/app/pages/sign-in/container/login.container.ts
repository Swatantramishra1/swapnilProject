import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { SignInPageAdapter as Adapter } from './../service/signIn.adapter';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-container',
  template: `
    <app-sign (handleSignIn)="signIn($event)" [error]="error$ | async"> </app-sign>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageContainer implements OnInit {
  error$: Observable<any>;

  constructor(private adapter: Adapter) {}

  signIn(data: { userid; password }) {
    this.adapter.signIn(data.userid, data.password);
  }

  ngOnInit() {
    this.error$ = this.adapter.error$;
  }
}
