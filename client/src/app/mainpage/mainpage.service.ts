import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable()

export class MainPageService {
    constructor(private http: Http) { }

    getAllPost(urlConfig) {
        return this.http.get(urlConfig + '/listPost')
            .pipe(map(res => res.json()));
    }

    viewDetailPost(urlConfig, postId) {
        const url = urlConfig + '/viewDetailPost/' + postId;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({
            headers: headers
        });
        const a = [];
        const body = JSON.stringify({});
        return this.http.put(url, body, options)
            .pipe(map(res => res.json));
    }

}