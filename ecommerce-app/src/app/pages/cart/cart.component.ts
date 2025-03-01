import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent],
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h2 class="text-2xl">Shopping Cart</h2>
      @for (cartItem of cartService.cart(); track cartItem.id) {
      <app-cart-item [cartItem]="cartItem" />
      }
    </div>
  `,
  styles: ``,
})
export class CartComponent {
  cartService = inject(CartService);
}
