import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button
      [disabled]="isBtnDisabled()"
      (click)="handleButtonClick()"
      [class]="
        isBtnDisabled()
          ? 'bg-gray-300 text-white'
          : 'bg-blue-500 text-white hover:opacity-90'
      "
      class="w-full border px-5 py-2 rounded-xl shadow-md"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class PrimaryButtonComponent {
  label = input<string>('');
  isBtnDisabled = input<boolean>(false);

  btnClicked = output();

  handleButtonClick() {
    this.btnClicked.emit();
  }
}
