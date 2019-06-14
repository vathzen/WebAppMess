import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrdersPage } from './orders.page';
import { ToolbarComponentModule } from '../components/toolbar/toolbar.component.module';

import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: OrdersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ToolbarComponentModule
  ],
  declarations: [OrdersPage]
})
export class OrdersPageModule {}
