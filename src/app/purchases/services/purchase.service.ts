import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";
import {GLOBALS} from "../../globals";

@Injectable()
export class PurchaseService {

    constructor(private http: AuthHttp) {
    }

    getPurchases() {
        let url: string = GLOBALS.API.ROOT + "/purchases";
        return this.http.get(url)
            .map(response => {
                return response.json();
            });
    }
}
