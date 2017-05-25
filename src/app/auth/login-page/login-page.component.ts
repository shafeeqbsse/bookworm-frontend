import {Component, OnInit} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    loggedIn: boolean;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        this.loggedIn = this.authService.isAuthenticated;
        if (this.loggedIn) {
            this.router.navigate(["/browse"]);
        }
    }
}
