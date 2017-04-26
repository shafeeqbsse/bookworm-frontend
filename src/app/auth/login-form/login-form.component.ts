import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {LoggerService} from "../../shared/logger/logger.service";
import {AuthService} from "../services/auth.service";
import {LoginCredentials} from "../../models/LoginCredentials";

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    loginForm: FormGroup;

    @Input() isMini:boolean = false;

    constructor(private logger: LoggerService, public fb: FormBuilder, private auth: AuthService) {
    }


    ngOnInit() {
        this.buildForm();
    }

    onSubmit(formData) {
        this.logger.msg(formData, 1);
        let user: LoginCredentials = new LoginCredentials();
        user.username = formData.username;
        user.password = formData.password;
        this.auth.authenticate(user).subscribe(result => {
                this.logger.msg(result.headers.get("authorization"), 1);
            },
            error => {
                this.logger.msg(error, 1);
            });
    }

    buildForm(): void {
        this.loginForm = this.fb.group({
            username: ['', Validators.compose([Validators.required])],
            password: ['', Validators.compose([Validators.required])]
        });
    }
}
