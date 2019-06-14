import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaterialModule } from '../material.module';

import { SummaryPage } from './summary.page';
import { ToolbarComponentModule } from '../components/toolbar/toolbar.component.module';

const routes: Routes = [
  {
    path: '',
    component: SummaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ToolbarComponentModule
  ],
  declarations: [SummaryPage],
})
export class SummaryPageModule {}
