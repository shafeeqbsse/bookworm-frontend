import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";
import {AppRoutingModule} from "../../app-routing.module";
import { GLOBALS } from '../../globals';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    isCollapsed: boolean = true;
    member: number;

    constructor(public authService: AuthService, private router: Router,
    private routes: AppRoutingModule) {
    }

    ngOnInit() {
        // this.member = GLOBALS.USER.ROLES.MEMBER;
    }

    logout() {
        // this.authService.logout();
        this.router.navigate(['/login']);
    }

    checkUserRole() {
        // if (this.authService.user.role != GLOBALS.USER.ROLES.MEMBER) {
        //     return true;
        // }
        //
        // return false;
    }
}
