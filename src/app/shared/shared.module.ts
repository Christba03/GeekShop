import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RatingComponent } from './components/rating/rating.component';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    RatingComponent,
    HoverHighlightDirective,
    CurrencyFormatPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
