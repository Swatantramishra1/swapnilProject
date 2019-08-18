import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";

import { SignInPageAdapter as Adapter } from "./../service/signIn.adapter";
import { Observable } from "rxjs";
import { User } from "src/app/type/login.type";

@Component({
  selector: "app-login-container",
  template: `
    <app-sign
      (handleSignIn)="signIn($event)"
      [error]="error$ | async"
      [user]="user$ | async"
    >
    </app-sign>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageContainer implements OnInit {
  error$: Observable<any>;
  user$: Observable<User>;

  constructor(private adapter: Adapter) {}

  signIn(data: { userid; password }) {
    this.user$ = this.adapter.user$;
    this.adapter.signIn(data.userid, data.password);
  }

  ngOnInit() {
    this.error$ = this.adapter.error$;
  }
}
