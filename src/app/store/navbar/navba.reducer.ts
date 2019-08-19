import { initialState, NavBarState } from "./navbar.state";
import { Actions, ActionTypes } from "./navbar.actions";

export function navbarReducer(
  state = initialState,
  action: Actions
): NavBarState {
  switch (action.type) {
    case ActionTypes.NAVBAR_REQUEST: {
      return {
        ...state,
        error: null
      };
    }
    case ActionTypes.NAVBAR_SUCCESSFULL: {
      return {
        ...state,
        navBar: action.payload
      };
    }
    case ActionTypes.NAVBAR_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
  }
}
