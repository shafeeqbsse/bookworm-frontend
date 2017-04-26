import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {LoginCredentials} from "../../models/LoginCredentials";
import {Http, Response} from "@angular/http";
import {GLOBALS} from "../../globals";
import {JwtHelper, tokenNotExpired} from "angular2-jwt";
import {User} from "../../models/User";
import {RegisterDetails} from "../../models/RegisterDetails";

@Injectable()
export class AuthService {

    jwtHelper:JwtHelper = new JwtHelper();
    user: User;
    public isAuthenticated: boolean = false;

    constructor(private http: Http) {
        this.loadToken();
    }

    authenticate(user: LoginCredentials): Observable<any> {
        return this.http.post(GLOBALS.API.LOGIN, user)
            .map((res:Response) => {
                const token = this.extractToken(res.headers.get("authorization"));
                this.storeToken(token);
                this.createUserFromToken(token);
                return res;
            })
            .catch(this.handleError);
    }

    register(user: RegisterDetails): Observable<any>  {
        return this.http.post(GLOBALS.API.REGISTER, user)
            .map((res:Response) => {
                return res;
            })
            .catch(this.handleError);
    }

    logout() {
        window.localStorage.removeItem(GLOBALS.LOCAL_TOKEN_KEY);
        this.user = null;
        this.isAuthenticated = false;
    }


    private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        return Observable.throw(error);
    }

    private storeToken(token:string) {
        window.localStorage.setItem(GLOBALS.LOCAL_TOKEN_KEY, token);
    }

    private createUserFromToken(token: string) {
        const decoded = this.jwtHelper.decodeToken(token);
        this.user = new User(decoded.id, decoded.username, decoded.admin);
    }

    private extractToken(header: string) {
        return header.slice(7);
    }

    private loadToken() {
        const token = window.localStorage.getItem(GLOBALS.LOCAL_TOKEN_KEY);

        if (token) {
            if (tokenNotExpired(GLOBALS.LOCAL_TOKEN_KEY)) {
                this.createUserFromToken(token);
                this.isAuthenticated = true;
            }
        }
    }


}
