import { Component, inject, input } from '@angular/core';
import { IProduct } from '../../../models/products.models';
import { ButtonComponent } from '../../../components/button/button.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
    <div
      class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items-center"
    >
      <img [src]="cartItem().image" class="w-[50px] h-[50px] object-contain" />
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ cartItem().title }}</span>
        <span class="text-sm">{{ '$' + cartItem().price }}</span>
      </div>
      <div class="flex-1"></div>
      <app-button
        label="Remove"
        (btnClicked)="cartService.removeFromCart(cartItem())"
      />
    </div>
  `,
  styles: ``,
})
export class CartItemComponent {
  cartItem = input.required<IProduct>();
  cartService = inject(CartService);
}
