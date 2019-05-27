import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable()

export class CategoryService {
    constructor(private http: Http) { }

    getPostByTypeId(urlConfig , Id) {
        return this.http.get(urlConfig + '/getPostByTypeId/' + Id)
            .pipe(map(res => res.json()));
    }
}
