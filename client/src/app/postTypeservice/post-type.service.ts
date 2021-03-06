import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostTypeService {

  constructor(private http: HttpClient) { }

  getAllPostType(urlConfig) {
    return this.http.get(urlConfig + '/getAllPostType');
  }
}
