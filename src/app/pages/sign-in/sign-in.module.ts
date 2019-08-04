import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { SignInComponent } from './components/sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [SignInComponent],
})
export class SignInPageModule {}
