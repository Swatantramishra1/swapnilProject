import { createSelector, createFeatureSelector } from "@ngrx/store";
import { NavBarState } from "./navbar.state";

export const selectFeature = createFeatureSelector<NavBarState>("navbar");

export const selectnavbar = createSelector(
  selectFeature,
  (state: NavBarState) => {
    if (state) {
      return state.navBar;
    } else return null;
  }
);

export const selecterror = createSelector(
  selectFeature,
  (state: NavBarState) => {
    if (state) {
      return state.error;
    } else {
      return null;
    }
  }
);
