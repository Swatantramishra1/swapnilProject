import { LoginStoreState } from './login';
import { RouterStoreState } from './router';

export interface StoreState {
  login: LoginStoreState.LoginState;
  // rating: RatingStoreState.RatingState;
  router: RouterStoreState.RouterReducerState;
}
