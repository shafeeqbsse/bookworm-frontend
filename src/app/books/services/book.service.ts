import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";
import {GLOBALS} from "../../globals";

@Injectable()
export class BookService {

    constructor(private http: AuthHttp) {
    }

    getBooks() {
        let url: string = GLOBALS.API.ROOT + "/books";
        //
        // let headers = new Headers();
        // headers.append('Content-Type','application/json');

        return this.http.get(url)
            .map(response => {
                return response.json();
            });
    }
}
