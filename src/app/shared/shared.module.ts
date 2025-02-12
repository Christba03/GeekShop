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
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { BackgroundComponent } from './components/background/background.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Importar MatSnackBar



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    RatingComponent,
    HoverHighlightDirective,
    CurrencyFormatPipe,
    FormLoginRegisterComponent,
    SearchbarComponent,
    BackgroundComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule, 
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    RatingComponent,
    HoverHighlightDirective,
    CurrencyFormatPipe,
    FormLoginRegisterComponent,
    SearchbarComponent,
    BackgroundComponent
  ]
})
export class SharedModule { }
