import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";
import {GLOBALS} from "../../globals";
import {Book} from "../../models/Book";
import {Headers} from "@angular/http";

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

    saveBook(book: Book) {
        const url: string = GLOBALS.API.ROOT + "/books/";
        const headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post(url, book)
            .map(response => {
                return response.json();
            });
    }
}
