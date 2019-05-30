import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getHeroes() {
    return 1;
  }

  getAllPost(urlConfig) {
    return this.http.get(urlConfig + '/listPost');
  }

  getPostDetail(urlConfig, Id) {
    return this.http.get(urlConfig + '/PostDetail/' + Id);
  }

  getRelatedPost(urlConfig, Id) {
    return this.http.get(urlConfig + '/relatedPost/' + Id);
  }

  createPost(urlConfig, value: Post) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(urlConfig + '/addPost', value, httpOptions);
  }

}
