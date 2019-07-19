import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainMenuPage } from './main-menu.page';

const routes: Routes = [
  {
    path: '',
    component: MainMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainMenuPage],
  exports: [MainMenuPage]
})
export class MainMenuPageModule {}
