import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable()

export class LoginService {
    constructor(private http: Http) { }

    checkUserExist(urlConfig , value) {
        const url = urlConfig + '/MemberInfo';
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({
            headers: headers
        });
        const body = JSON.stringify(value);
        return this.http.post(url, body, options)
            .pipe(map(res => res.json()));
    }

    checkLoginStatus(urlConfig){
        return this.http.get(urlConfig + '/checkLoginStatus')
            .pipe(map(res => res.json()));
    }

}