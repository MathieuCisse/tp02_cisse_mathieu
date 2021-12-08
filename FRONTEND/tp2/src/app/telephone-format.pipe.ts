import { Pipe, PipeTransform } from '@angular/core';
import { parsePhoneNumber } from 'libphonenumber-js/min';

@Pipe({
  name: 'telephoneFormat'
})
export class TelephoneFormatPipe implements PipeTransform {

  transform(phoneValue: string): string {
    try {
      const phoneNumber = parsePhoneNumber(phoneValue + '', "FR");
      return phoneNumber.formatNational();
    } catch (error) {
      return phoneValue;
    }
  }

}
