import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTabs',
})
export class FilterTabsPipe implements PipeTransform {
  transform(items: any[], id: string): any {
    if (!items || !id) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter((item) => item.tab == id);
  }
}
