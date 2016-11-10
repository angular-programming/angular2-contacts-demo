import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateReform'
})
export class DateReformPipe implements PipeTransform {
  transform(val:string, format:string):string {

    let date = new Date(val);
    let year = date.getFullYear() + '';
    let month = date.getMonth() + 1 + '';
    let day = date.getDate() + '';

    let yyyy = year;
    let MM = (month.length < 2 ? '0' : '') + month;
    let dd = (day.length < 2 ? '0' : '') + day;

    let result = '';
    switch(format) {
      case 'yyyy-MM-dd':
        result = [yyyy, MM, dd].join('-');
      break;
      case 'yyyyMMdd':
        result = [yyyy, MM, dd].join('');
      break;
      default:
        result = [yyyy, MM, dd].join('');
    }

    return result;
  }
}
