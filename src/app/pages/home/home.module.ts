import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home.component';
import { HomeContentComponent } from './components/content/content.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [HomeComponent, HomeContentComponent],
})
export class HomePageModule {}
