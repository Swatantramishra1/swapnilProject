import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootStoreModule } from './../app/store/store.module';
import { rootReducer, metaReducers } from './../app/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RootStoreModule,
    StoreModule.forRoot(rootReducer, { metaReducers }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
