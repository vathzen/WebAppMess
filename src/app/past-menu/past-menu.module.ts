import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PastMenuPage } from './past-menu.page';

import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: PastMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [PastMenuPage]
})
export class PastMenuPageModule {}
