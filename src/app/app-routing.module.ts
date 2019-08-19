import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { SharedModule } from "../app/shared/shared.module";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
      },
      {
        path: "home",
        loadChildren: "./pages/home/home.module#HomePageModule",
        data: { preload: true }
      },
      {
        path: "login",
        loadChildren: "./pages/sign-in/sign-in.module#SignInPageModule",
        data: { preload: true }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: "reload"
    }),
    SharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
