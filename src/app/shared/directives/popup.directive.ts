import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appPopup]',
  exportAs: 'appPopup',
})
export class PopupDirective {
  @Input() message;

  constructor(elementRef: ElementRef) {
    console.log(elementRef);
  }

  @HostListener('click') displayMessage(): void {
    alert(this.message);
  }
}
