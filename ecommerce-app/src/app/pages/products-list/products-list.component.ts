import { Component, signal } from '@angular/core';
import { IProduct } from '../../models/products.models';
import { mockProducts } from '../../mocks/products.mock';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styles: ``,
})
export class ProductsListComponent {
  async ngOnInit() {
    const res = await fetch(
      'https://fakestoreapi.com/products/category/electronics'
    );

    const data = await res.json();
    this.products.set(data);
  }

  products = signal<IProduct[]>([]);
  // products = signal<IProduct[]>(mockProducts);
}
