import { Injectable, signal } from '@angular/core';
import { IProduct } from '../models/products.models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<IProduct[]>([]);

  addToCart(product: IProduct) {
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(product: IProduct) {
    this.cart.set(this.cart().filter((p) => p.id !== product.id));
  }

  constructor() {}
}
