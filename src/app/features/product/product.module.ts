import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SharedModule } from '../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductPageComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatToolbarModule,
    SharedModule,
    MatCardModule
  ]
})
export class ProductModule { }
