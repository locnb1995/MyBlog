import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostTypeService {

  constructor(private http: Http) { }

  getAllPostType(urlConfig) {
    return this.http.get(urlConfig + '/getAllPostType')
      .pipe(map(res => res.json()));
  }
}
