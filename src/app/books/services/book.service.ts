import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";
import {GLOBALS} from "../../globals";
import {Book} from "../../models/Book";
import {Headers} from "@angular/http";

@Injectable()
export class BookService {

    constructor(private http: AuthHttp) {
    }

    getBooks(page: number) {
        let url: string = GLOBALS.API.ROOT + "/books?page=" + page;
        return this.http.get(url)
            .map(response => {
                return response.json();
            });
    }

    getBooksByGenre(page:number, genre: string) {
        let url: string = GLOBALS.API.ROOT + "/books?genre=" + genre + "&page=" + page;
        return this.http.get(url)
            .map(response => {
                return response.json();
            })
    }

    searchBooks(page: number, searchWord: string) {
        let url: string = GLOBALS.API.ROOT + "/books?search=" + searchWord + "&page=" + page;
        return this.http.get(url)
            .map(response => {
                return response.json();
            })
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
        headers.append('Content-Type', 'application/json');
        return this.http.post(url, book)
            .map(response => {
                return response.json();
            });
    }


    buyBook(id: number, amount: number) {
        const url: string = GLOBALS.API.ROOT + "/books/" + id + "/buy";
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(url, amount, {'headers': headers})
            .map(response => {
                return response.json();
            });
    }

    deleteBook(id: number) {
        const url: string = GLOBALS.API.ROOT + "/books/" + id;
        return this.http.delete(url)
            .map(response => {
                return response.json();
            });
    }
}
