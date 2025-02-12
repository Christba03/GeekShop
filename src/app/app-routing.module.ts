import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'products', loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule) },
  { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule) },
  { path: 'checkout', loadChildren: () => import('./features/checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'orders', loadChildren: () => import('./features/order/order.module').then(m => m.OrderModule) },
  { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'admin', loadChildren: () => import('./features/admin-panel/admin-panel.module').then(m => m.AdminPanelModule) },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
