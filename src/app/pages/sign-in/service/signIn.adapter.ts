import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { LoginStoreActions, StoreState } from 'src/app/store';

@Injectable()
export class SignInPageAdapter {
  constructor(private store: Store<StoreState>) {}

  signIn(userid: string, password: string) {
    this.store.dispatch(new LoginStoreActions.SignInRequestAction({ userid, password }));
  }
}
