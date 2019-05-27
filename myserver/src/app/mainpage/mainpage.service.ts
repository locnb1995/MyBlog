import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable()

export class MainPageService {
    constructor(private http: Http) { }

    getAllPost(urlConfig) {
        return this.http.get(urlConfig + '/listPost')
            .pipe(map(res => res.json()));
    }
}
