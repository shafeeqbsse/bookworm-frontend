import {Injectable} from '@angular/core';
import {GLOBALS} from "../../globals";
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class GenreService {

    constructor(private http:AuthHttp) {
    }


    getGenres() {
        let url: string = GLOBALS.API.ROOT + "/genres";
        return this.http.get(url)
            .map(response => {
                return response.json();
            });
    }
}


