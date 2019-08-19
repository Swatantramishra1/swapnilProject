import { LoginStoreState } from "./login";
import { RouterStoreState } from "./router";
import { NavBarStoreState } from "./navbar";

export interface StoreState {
  login: LoginStoreState.LoginState;
  navbar: NavBarStoreState.NavBarState;
  // rating: RatingStoreState.RatingState;
  router: RouterStoreState.RouterReducerState;
}
