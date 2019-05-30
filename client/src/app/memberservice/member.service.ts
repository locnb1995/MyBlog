import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getAllMember(urlConfig) {
    return this.http.get(urlConfig + '/getAllMember');
  }
}
