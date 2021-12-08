import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appInputInvalid]'
})
export class InputInvalidDirective {

  element: ElementRef;

  constructor(element: ElementRef) {
    this.element = element;
  }

  /**
   * Modification du background de l'input s'il est valide ou pas
   */
  @HostListener('change') validityInput() {
    this.element.nativeElement.style.backgroundColor = this.element.nativeElement.checkValidity() ? "" : "red";
  }
}
