import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { ConfigApp } from '../model/ConfigApp';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  configApp = new ConfigApp();

  constructor(private http: HttpClient) { }

  checkUserInfo(value) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.configApp.url + '/checkUserInfo', value, httpOptions);
  }
}
