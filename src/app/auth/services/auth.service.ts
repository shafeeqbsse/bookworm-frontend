import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {LoginCredentials} from "../../models/LoginCredentials";
import {Http, Response} from "@angular/http";

@Injectable()
export class AuthService {

    constructor(private http: Http) {
    }

    authenticate(user: LoginCredentials): Observable<any> {
        let url = "http://localhost:8080/login";
        return this.http.post(url, user)
            .map(this.extractData)
            .catch(this.handleError);    }


    private extractData(res: Response) {
        const body = res.json();
        return body || { };
    }

    private handleError (error: Response | any) {
        return Observable.throw(error);
    }
}
