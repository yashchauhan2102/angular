import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button
      class=" text-black w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-bg-slate-100"
      (click)="handleButtonClick()"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  label = input<string>('');
  btnClicked = output();

  handleButtonClick() {
    this.btnClicked.emit();
  }
}
