import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";
import {GLOBALS} from "../../globals";
import {Review} from "../../models/Review";
import {Headers} from "@angular/http";

@Injectable()
export class ReviewService {

    constructor(private http:AuthHttp) {
    }

    getReviewsForBook(bookId: number) {
        const url: string = GLOBALS.API.ROOT + "/books/" + bookId + "/reviews";
        return this.http.get(url)
            .map(response => {
                return response.json();
            });
    }

    saveReviewForBook(bookId:number, review:Review) {
        const url: string = GLOBALS.API.ROOT + "/books/" + bookId + "/reviews";
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(url, review)
            .map(response => {
                return response.json();
            });
    }
}
