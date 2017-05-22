import {Injectable} from "@angular/core";
import {GLOBALS} from "../../globals";
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class PublisherService {

  constructor(private http:AuthHttp) { }

    search(term: string) {
        let url: string = GLOBALS.API.ROOT + "/publishers?search=" + term;
        return this.http.get(url)
            .map(response => {
                console.debug("Publishers:", response.json());
                return response.json();
            });
    }
}
