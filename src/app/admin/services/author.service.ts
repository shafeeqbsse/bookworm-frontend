import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";
import {GLOBALS} from "../../globals";

@Injectable()
export class AuthorService {

    constructor(private http: AuthHttp) {
    }

    search(term: string) {
        let url: string = GLOBALS.API.ROOT + "/authors?search=" + term;
        return this.http.get(url)
            .map(response => {
                console.debug("Authors:", response.json());
                return response.json();
            });
    }
}
