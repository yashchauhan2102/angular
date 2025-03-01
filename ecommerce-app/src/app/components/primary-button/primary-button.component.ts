import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button
      (click)="handleButtonClick()"
      class="bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class PrimaryButtonComponent {
  label = input<string>('');

  btnClicked = output();

  handleButtonClick() {
    this.btnClicked.emit();
  }
}
