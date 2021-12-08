import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephoneFormat'
})
export class TelephoneFormatPipe implements PipeTransform {

  /**
   * Formattage des numéros de téléphone dans les normes nationales de france
   * @param phoneValue
   */
  transform(phoneValue: string): string {
    return '+33'+phoneValue.substr(1);
  }

}
