import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div
      class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center"
    >
      <button class="text-xl" routerLink="/">{{ headerTitle() }}</button>
      <app-primary-button
        [label]="cartLabel() + ' (' + cartService.cart().length + ')'"
        routerLink="/cart"
      />
      <!-- (btnClicked)="showBtnClicked()" -->
    </div>
  `,
  styles: `
  `,
})
export class HeaderComponent {
  headerTitle = signal<string>('My Store');
  cartLabel = signal<string>('Cart');
  // showBtnClicked() {
  //   console.log('clicked');
  // }
  cartService = inject(CartService);
}
