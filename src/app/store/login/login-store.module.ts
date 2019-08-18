import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { loginReducer } from './login.reducer';
import { LoginStoreEffects } from './login.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('wallet', loginReducer),
    EffectsModule.forFeature([LoginStoreEffects]),
  ],
  providers: [],
})
export class LoginStoreModule {}
