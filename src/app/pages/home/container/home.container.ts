import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";

import { HomePageAdapter as Adapter } from "./../service/home.adapter";
import { Observable } from "rxjs";
import { User } from "src/app/type/login.type";

@Component({
  selector: "app-login-container",
  template: `
    <app-home
      [user]="user$ | async"
      [navbar]="navbar$ | async"
      (handleNavBar)="fetchNavBar($event)"
    >
    </app-home>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageContainer implements OnInit {
  user$: Observable<User>;
  navbar$: Observable<any>;

  constructor(private adapter: Adapter) {}

  ngOnInit() {
    this.user$ = this.adapter.user$;
    this.navbar$ = this.adapter.navbar$;
  }

  fetchNavBar(userid: string) {
    this.adapter.fetchNavBar(userid);
  }
}
