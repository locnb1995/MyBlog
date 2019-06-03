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

  getPostByUser(urlConfig) {
    let token = '';
    if (localStorage.getItem('key') !== null) {
      token = localStorage.getItem('key');
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization : token
      })
    };
    return this.http.get(urlConfig + '/getPostByUser', httpOptions);
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

  editPost(urlConfig, value: Post) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put(urlConfig + '/editPost', value, httpOptions);
  }

  deletePost(urlConfig, Id) {
    return this.http.delete(urlConfig + '/deletePost/' + Id);
  }
}
