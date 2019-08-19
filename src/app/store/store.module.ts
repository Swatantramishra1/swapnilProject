import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { LoginStoreModule } from "./login";
import { NavBarStoreModule } from "./navbar/navbar-store.module";

@NgModule({
  imports: [
    CommonModule,
    LoginStoreModule,
    NavBarStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
  ],
  declarations: [],
  providers: []
})
export class RootStoreModule {}
