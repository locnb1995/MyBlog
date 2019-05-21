import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable()

export class DetailService {
    constructor(private http: Http) {}

    getPostById(urlConfig , Id) {
        return this.http.get(urlConfig + '/PostDetail/' + Id)
        .pipe(map(res => res.json()));
    }

    getRelatedPost(urlConfig , Id) {
        return this.http.get(urlConfig + '/relatedPost/' + Id)
        .pipe(map(res => res.json()));
    }
}