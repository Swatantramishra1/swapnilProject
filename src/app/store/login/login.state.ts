import { User } from 'src/app/type/login.type';

export interface LoginState {
  user: User;
  error: any;
}

export const initialState: LoginState = {
  user: null,
  error: null,
};
