import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { UsersComponent } from './pages/users/users.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: AdminPanelComponent, 
    children: [
    { path: 'usuarios', component: UsersComponent },
    { path: 'clientes', component: ClientsComponent },
    { path: 'empleados', component: EmployeesComponent },
    { path: 'pedidos', component: OrdersComponent },
    { path: 'productos', component: ProductsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', redirectTo: 'dashboard' } // Redirección por defecto
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
