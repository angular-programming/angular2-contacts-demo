import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(val:string):string {
    if(!val) return '';
    if(val.length === 11) {
      return val.replace(/(\d{3})(\d{4})(\d{4})/, (m, m1, m2, m3) => {
        return [m1, m2, m3].join('-');
      })
    }
    return val;
  }
}
