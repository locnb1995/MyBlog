import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable()

export class HotNewService {
    constructor(private http: Http) { }

    getPostByView(urlConfig) {
        return this.http.get(urlConfig + '/getPostByView')
            .pipe(map(res => res.json()));
    }
}
