import {Injectable} from "@angular/core";
import {GLOBALS} from "../../globals";
import {Http} from "@angular/http";

@Injectable()
export class GenreService {

    constructor(private http: Http) {
    }


    getGenres() {
        let url: string = GLOBALS.API.ROOT + "/genres";
        return this.http.get(url)
            .map(response => {
                return response.json();
            });
    }
}


