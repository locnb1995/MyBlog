import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './model/Post';

@Pipe({
  name: 'post'
})
export class PostPipe implements PipeTransform {
  result: Array<Post> = [];
  transform(value: Array<Post>, type: string , param?: number): Array<Post> {
    this.result = value;
    if (type === 'hot') {
      this.result.sort((obj1, obj2) => {
        if (obj1.view_total > obj2.view_total) {
          return 1;
        }
        if (obj1.view_total < obj2.view_total) {
          return -1;
        }
        return 0;
      });
      return this.result;
    }
    if (type === 'type') {
      value.forEach(element => {
        if (element.postType.id === param) {
          this.result.push(element);
        }
      });
      return this.result;
    }
    return null;
  }

}
