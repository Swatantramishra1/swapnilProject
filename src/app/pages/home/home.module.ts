import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { SharedModule } from "src/app/shared/shared.module";
import { HomeComponent } from "./components/home.component";
import { HomeContentComponent } from "./components/content/content.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { HomePageAdapter } from "./service/home.adapter";
import { HomePageContainer } from "./container/home.container";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageContainer
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [
    HomeComponent,
    HomeContentComponent,
    SignInComponent,
    HomePageContainer,
    NavBarComponent
  ],
  providers: [HomePageAdapter]
})
export class HomePageModule {}
