import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";


@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) {

    }

    canActivate() {
        if (this.authService.user.admin) {
            // logged in as admin so return true
            return true;
        }
        // not logged in as admin so redirect to back
        this.router.navigate([this.router.url]);
        return false;
    }
}
