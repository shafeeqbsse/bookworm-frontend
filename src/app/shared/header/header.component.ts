import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../auth/services/auth.service";
import {Router, NavigationEnd} from "@angular/router";
import {AppRoutingModule} from "../../app-routing.module";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    url: string;

    constructor(public authService: AuthService, private router: Router,
    private routes: AppRoutingModule) {
    }

    ngOnInit() {
        this.router.events.subscribe(e => {
            if (e instanceof NavigationEnd) {
                this.url = e.urlAfterRedirects;
            }
        })

    }

    logout() {
        // this.authService.logout();
        this.router.navigate(['/login']);
    }
}
