import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap, tap, finalize } from 'rxjs/operators';

import * as loginActions from './login.actions';
import { ApiService } from 'src/app/services/data/api.service';

@Injectable()
export class LoginStoreEffects {
  constructor(private apiService: ApiService, private actions$: Actions) {}

  @Effect()
  loginEffect$: Observable<Action> = this.actions$.pipe(
    ofType<loginActions.SignInRequestAction>(loginActions.ActionTypes.LOGIN_REQUEST),
    switchMap(action => {
      const url = action.payload.userid + '/' + action.payload.password;
      return this.apiService.signIn(url).pipe(
        map(response => new loginActions.SignInSuccessAction(response)),

        catchError(error => observableOf(new loginActions.SignInErrorAction(error)))

        // finalize(() => this.modalService.closeModal())
      );
    })
  );
}
