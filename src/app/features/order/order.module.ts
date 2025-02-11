import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';


@NgModule({
  declarations: [
    OrderHistoryComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
