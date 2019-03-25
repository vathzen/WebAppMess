
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsPageModule' },
  { path: 'fill-order', loadChildren: './fill-order/fill-order.module#FillOrderPageModule' },
  { path: 'past-menu', loadChildren: './past-menu/past-menu.module#PastMenuPageModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
