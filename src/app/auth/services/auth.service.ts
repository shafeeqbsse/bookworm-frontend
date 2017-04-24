import {Injectable} from '@angular/core';
import {UserCredentials} from "../../models/UserCredentials";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

    constructor() {
    }

    authenticate(user: UserCredentials): Observable<any> {
        return null;
    }

}
