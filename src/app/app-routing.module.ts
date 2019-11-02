import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsPageModule', canActivate: [AuthGuard] },
  { path: 'fill-order', loadChildren: './fill-order/fill-order.module#FillOrderPageModule', canActivate: [AuthGuard]  },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule', canActivate: [AuthGuard] },
  { path: 'summary', loadChildren: './summary/summary.module#SummaryPageModule', canActivate: [AuthGuard] },
  { path: 'order-history', loadChildren: './order-history/order-history.module#OrderHistoryPageModule', canActivate: [AuthGuard] },
  { path: 'manage-items', loadChildren: './manage-items/manage-items.module#ManageItemsPageModule' },
  { path: 'verify-students', loadChildren: './verify-students/verify-students.module#VerifyStudentsPageModule', canActivate: [AuthGuard] }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
