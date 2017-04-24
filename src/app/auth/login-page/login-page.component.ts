import {Component, OnInit} from "@angular/core";
import {LoggerService} from "../../shared/logger/logger.service";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    constructor(private logger: LoggerService) {
    }


    ngOnInit() {
        this.logger.msg("Hello from LoginPageComponent 1", 1);
        this.logger.msg("Hello from LoginPageComponent 2", 2);
        this.logger.msg("Hello from LoginPageComponent 3", 3);
        this.logger.msg("Hello from LoginPageComponent 4", 4);
        this.logger.msg("Hello from LoginPageComponent 5", 5);
    }
}
