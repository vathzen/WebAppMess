import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerifyStudentsPage } from './verify-students.page';
import { ToolbarComponentModule } from '../components/toolbar/toolbar.component.module';

const routes: Routes = [
  {
    path: '',
    component: VerifyStudentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolbarComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerifyStudentsPage]
})
export class VerifyStudentsPageModule {}
