import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";
import {GLOBALS} from "../../globals";

@Injectable()
export class ReviewService {

    constructor(private http:AuthHttp) {
    }

    getReviewsForBook(bookId: number) {
        let url: string = GLOBALS.API.ROOT + "/books/" + bookId + "/reviews";
        return this.http.get(url)
            .map(response => {
                return response.json();
            });
    }
}
