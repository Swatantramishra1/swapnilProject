import { Action } from "@ngrx/store";

export enum ActionTypes {
  NAVBAR_REQUEST = "[Navbar] requesting for Navbar",
  NAVBAR_SUCCESSFULL = "[Navbar] Navbar successfull",
  NAVBAR_ERROR = "[Navbar] error in Navbar"
}

export class NavBarRequestAction implements Action {
  readonly type = ActionTypes.NAVBAR_REQUEST;
  constructor(public payload: { userid: string }) {}
}
export class NavBarSuccessAction implements Action {
  readonly type = ActionTypes.NAVBAR_SUCCESSFULL;
  constructor(public payload: any) {}
}

export class NavBarErrorAction implements Action {
  readonly type = ActionTypes.NAVBAR_ERROR;
  constructor(public payload: string) {}
}

export type Actions =
  | NavBarRequestAction
  | NavBarSuccessAction
  | NavBarErrorAction;
