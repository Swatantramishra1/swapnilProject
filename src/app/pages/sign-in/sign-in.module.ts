import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { SignInComponent } from './components/sign-in.component';
import { SignInPageAdapter } from './service/signIn.adapter';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [SignInComponent],
  providers: [SignInPageAdapter],
})
export class SignInPageModule {}
