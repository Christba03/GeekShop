import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UsersComponent } from './pages/users/users.component';
import { ProductsComponent } from './pages/products/products.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { PromotionBannersComponent } from './pages/promotion-banners/promotion-banners.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { SharedModule } from "../../shared/shared.module";
import { SearchbarComponent } from '../../shared/components/searchbar/searchbar.component';


@NgModule({
  declarations: [
    AdminPanelComponent,
    SideBarComponent,
    UsersComponent,
    ProductsComponent,
    OrdersComponent,
    ClientsComponent,
    EmployeesComponent,
    PromotionBannersComponent,
    DashboardComponent,
    AdminHeaderComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    SharedModule
],
  exports: [
    AdminPanelComponent,
    SideBarComponent,
    AdminHeaderComponent
  ]
})
export class AdminPanelModule { }
