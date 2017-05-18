import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";
import {GLOBALS} from "../../globals";

@Injectable()
export class BookService {

    constructor(private http: AuthHttp) {
    }

    getBooks() {
        let url: string = GLOBALS.API.ROOT + "/books";
        return this.http.get(url)
            .map(response => {
                return response.json();
            });
    }

    getBook(id: number) {
        let url: string = GLOBALS.API.ROOT + "/books/" + id;
        return this.http.get(url)
            .map(response => {
                return response.json();
            });
    }
}
