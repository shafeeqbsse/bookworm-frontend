import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {LoginCredentials} from "../../models/LoginCredentials";

@Injectable()
export class AuthService {

    constructor() {
    }

    authenticate(user: LoginCredentials): Observable<any> {
        return null;
    }

}
