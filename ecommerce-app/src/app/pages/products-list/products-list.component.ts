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
  products = signal<IProduct[]>(mockProducts);
}
