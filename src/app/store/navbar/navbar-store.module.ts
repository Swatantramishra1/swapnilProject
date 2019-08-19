import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { navbarReducer } from "./navba.reducer";
import { NavBarStoreEffects } from "./navbar.effects";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("navbar", navbarReducer),
    EffectsModule.forFeature([NavBarStoreEffects])
  ],
  providers: []
})
export class NavBarStoreModule {}
