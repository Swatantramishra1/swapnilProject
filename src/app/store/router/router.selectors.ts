import { createSelector, createFeatureSelector } from "@ngrx/store";
import { routerStateConfig } from "./router-store.module";
import { RouterReducerState, RouterState } from "./router.state";

export const selectFeature = createFeatureSelector<RouterReducerState>(
    routerStateConfig.stateKey
);

export const selectRouterState = createSelector(
    selectFeature,
    routerReducerState => routerReducerState.state
);

export const selectQueryParams = createSelector(
    selectRouterState,
    (state: RouterState) => state.queryParams
);

export const selectUrlParams = createSelector(
    selectRouterState,
    (state: RouterState) => state.params
);
