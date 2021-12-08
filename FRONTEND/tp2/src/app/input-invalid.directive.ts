import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appInputInvalid]'
})
export class InputInvalidDirective {

  element: ElementRef;

  constructor(element: ElementRef) {
    this.element = element;
  }

  @HostListener('change') validityInput() {
    this.element.nativeElement.style.backgroundColor = this.element.nativeElement.checkValidity() ? "" : "red";
  }
}
