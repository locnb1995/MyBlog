import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: Http) { }

  getHeroes() {
    return 1;
  }

  getAllPost(urlConfig) {
    return this.http.get(urlConfig + '/listPost')
      .pipe(map(res => res.json()));
  }

  getPostDetail(urlConfig, Id) {
    return this.http.get(urlConfig + '/PostDetail/' + Id)
      .pipe(map(res => res.json()));
  }

  getRelatedPost(urlConfig, Id) {
    return this.http.get(urlConfig + '/relatedPost/' + Id)
      .pipe(map(res => res.json()));
  }

}
