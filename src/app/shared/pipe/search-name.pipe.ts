import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    if (!value) return value;
    if (searchText.name === '' && +searchText.category === 0) {
      return value;
    }

    if (searchText.name !== '' && +searchText.category === 0) {
      return value.filter((val: any) => (val.name.toLowerCase().indexOf(searchText.name.toLowerCase()) !== -1));
    }

    return value.filter((val: any) => (val.name.indexOf(searchText.name) !== -1 && val.category.indexOf(+searchText.category) !== -1));
  }
}
