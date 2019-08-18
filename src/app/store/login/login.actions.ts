import { Action } from '@ngrx/store';
import { User } from 'src/app/type/login.type';

export enum ActionTypes {
  LOGIN_REQUEST = '[Login] requesting for login',
  LOGIN_SUCCESSFULL = '[Login] login successfull',
  LOGIN_ERROR = '[Login] error in login',
}

export class SignInRequestAction implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST;
  constructor(public payload: { userid: string; password: string }) {}
}
export class SignInSuccessAction implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESSFULL;
  constructor(public payload: User) {}
}

export class SignInErrorAction implements Action {
  readonly type = ActionTypes.LOGIN_ERROR;
  constructor(public payload: string) {}
}

export type Actions = SignInRequestAction | SignInSuccessAction | SignInErrorAction;
