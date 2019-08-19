import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of as observableOf } from "rxjs";
import { catchError, map, switchMap, tap, finalize } from "rxjs/operators";

import * as navbarActions from "./navbar.actions";
import { ApiService } from "src/app/services/data/api.service";

@Injectable()
export class NavBarStoreEffects {
  constructor(private apiService: ApiService, private actions$: Actions) {}

  @Effect()
  fetchNavBarEffect$: Observable<Action> = this.actions$.pipe(
    ofType<navbarActions.NavBarRequestAction>(
      navbarActions.ActionTypes.NAVBAR_REQUEST
    ),
    switchMap(action => {
      const url = action.payload.userid;
      return this.apiService.fetchNavBar(url).pipe(
        map(response => new navbarActions.NavBarSuccessAction(response)),

        catchError(error =>
          observableOf(new navbarActions.NavBarErrorAction(error))
        )

        // finalize(() => this.modalService.closeModal())
      );
    })
  );
}
