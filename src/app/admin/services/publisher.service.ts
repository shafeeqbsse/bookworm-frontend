import { Injectable } from '@angular/core';
import {GLOBALS} from "../../globals";
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class PublisherService {

  constructor(private http:AuthHttp) { }

    search(term: string) {
        let url: string = GLOBALS.API.ROOT + "/genres";
        return this.http.get(url)
            .map(response => {
                return response.json();
            });
    }
}
