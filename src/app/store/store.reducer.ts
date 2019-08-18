import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer, ActionReducer, Action } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { loginReducer } from './login/login.reducer';
import { StoreState } from './store.state';
import { LoginStoreActions } from './login';

export const rootReducer: ActionReducerMap<StoreState> = {
  login: loginReducer,
  router: routerReducer,
};

export function clearStore(reducer: ActionReducer<StoreState>): ActionReducer<StoreState> {
  return function(state: StoreState, action: Action): StoreState {
    // if (action.type === LoginStoreActions.ActionTypes.LOGOUT) {
    //   state = undefined;
    // }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<StoreState>[] = true
  ? [storeFreeze, clearStore]
  : [clearStore];
