import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { ConfigApp } from '../model/ConfigApp';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  configApp = new ConfigApp();

  constructor(private http: HttpClient) { }

  getUserInfo() {
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
    return this.http.get(this.configApp.url + '/getUserInfo', httpOptions);
  }

  logout() {
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
    return this.http.get(this.configApp.url + '/logout', httpOptions);
  }

  checkUserInfo(value) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.configApp.url + '/checkUserInfo', value, httpOptions);
  }
}
