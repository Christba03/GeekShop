import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  standalone: false,
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  isLoading = true;

  constructor() {
    setTimeout(() => {
      this.isLoading = false; // Simula la carga
    }, 4000);
  }
}
