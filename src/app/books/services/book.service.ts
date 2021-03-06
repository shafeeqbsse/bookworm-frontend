import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";
import {GLOBALS} from "../../globals";
import {Book} from "../../models/Book";
import {Headers, Http} from "@angular/http";

@Injectable()
export class BookService {

    constructor(private authHttp: AuthHttp, private http: Http) {
    }

    getBooks(page: number) {
        let url: string = GLOBALS.API.ROOT + "/books?page=" + page;
        return this.http.get(url)
            .map(response => {
                return response.json();
            });
    }

    getBooksByGenre(page:number, genre: string) {
        let url: string = GLOBALS.API.ROOT + "/books/genre?genre=" + genre + "&page=" + page;
        return this.http.get(url)
            .map(response => {
                return response.json();
            })
    }

    searchBooks(page: number, searchWord: string) {
        let url: string = GLOBALS.API.ROOT + "/books/search?search=" + searchWord + "&page=" + page;
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
        console.log(book);
        const url: string = GLOBALS.API.ROOT + "/books/";
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.authHttp.post(url, book)
            .map(response => {
                return response.json();
            });
    }


    buyBook(id: number, amount: number) {
        const url: string = GLOBALS.API.ROOT + "/books/" + id + "/buy";
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.authHttp.put(url, amount, {'headers': headers})
            .map(response => {
                return response.json();
            });
    }

    deleteBook(id: number) {
        const url: string = GLOBALS.API.ROOT + "/books/" + id;
        return this.authHttp.delete(url)
            .map(response => {
                return response.json();
            });
    }

    addNotificationForRestock(bookId: number) {
        const url: string = GLOBALS.API.ROOT + "/books/" + bookId + "/notifications";
        return this.authHttp.post(url, null)
            .map(response => {
                return response.json();
            });
    }
}
