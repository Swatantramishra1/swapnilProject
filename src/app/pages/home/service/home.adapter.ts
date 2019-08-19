import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { StoreState, LoginStoreSelectors } from "src/app/store";
import { NavBarStoreActions, NavBarStoreSelectors } from "src/app/store/navbar";

@Injectable()
export class HomePageAdapter {
  constructor(private store: Store<StoreState>) {}

  user$ = this.store.pipe(select(LoginStoreSelectors.selectuser));
  navbar$ = this.store.pipe(select(NavBarStoreSelectors.selectnavbar));

  fetchNavBar(userid: string) {
    this.store.dispatch(new NavBarStoreActions.NavBarRequestAction({ userid }));
  }
}
