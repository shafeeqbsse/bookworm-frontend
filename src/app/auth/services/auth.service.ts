import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {LoginCredentials} from "../../models/LoginCredentials";
import {Http, Response} from "@angular/http";
import {GLOBALS} from "../../globals";

@Injectable()
export class AuthService {

    constructor(private http: Http) {
    }

    authenticate(user: LoginCredentials): Observable<any> {
        return this.http.post(GLOBALS.API.LOGIN, user)
            .catch(this.handleError);
    }


    private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        return Observable.throw(error);
    }
}
