import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RatingComponent } from './components/rating/rating.component';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { FormLoginRegisterComponent } from './components/form-login-register/form-login-register.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    RatingComponent,
    HoverHighlightDirective,
    CurrencyFormatPipe,
    FormLoginRegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    RatingComponent,
    HoverHighlightDirective,
    CurrencyFormatPipe,
    FormLoginRegisterComponent  
  ]
})
export class SharedModule { }
