import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FillOrderPage } from './fill-order.page';
import { ToolbarComponentModule } from '../components/toolbar/toolbar.component.module';

const routes: Routes = [
  {
    path: '',
    component: FillOrderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ToolbarComponentModule
  ],
  declarations: [FillOrderPage],
})
export class FillOrderPageModule {}
