import { initialState, LoginState } from './login.state';
import { Actions, ActionTypes } from './login.actions';

export function loginReducer(state = initialState, action: Actions): LoginState {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST: {
      return {
        ...state,
        error: null,
      };
    }
    case ActionTypes.LOGIN_SUCCESSFULL: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case ActionTypes.LOGIN_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
  }
}
