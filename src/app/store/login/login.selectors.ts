import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LoginState } from './login.state';

export const selectFeature = createFeatureSelector<LoginState>('login');

export const selectuser = createSelector(
  selectFeature,
  (state: LoginState) => state.user
);

export const selecterror = createSelector(
  selectFeature,
  (state: LoginState) => {
    if (state) {
      return state.error;
    } else {
      return null;
    }
  }
);
