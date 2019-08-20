import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManageItemsPage } from './manage-items.page';
import { ToolbarComponentModule } from '../components/toolbar/toolbar.component.module';

const routes: Routes = [
  {
    path: '',
    component: ManageItemsPage
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
  declarations: [ManageItemsPage]
})
export class ManageItemsPageModule {}
