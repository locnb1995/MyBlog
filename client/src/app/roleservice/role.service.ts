import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getAllRole(urlConfig) {
    return this.http.get(urlConfig + '/getUserRole');
  }
}
