import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { LoginStoreActions, StoreState, LoginStoreSelectors } from 'src/app/store';

@Injectable()
export class SignInPageAdapter {
  constructor(private store: Store<StoreState>) {}

  error$ = this.store.pipe(select(LoginStoreSelectors.selecterror));

  signIn(userid: string, password: string) {
    this.store.dispatch(new LoginStoreActions.SignInRequestAction({ userid, password }));
  }
}
