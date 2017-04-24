import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {LoggerService} from "../../shared/logger/logger.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private logger: LoggerService, public fb: FormBuilder) {
    }


    ngOnInit() {
        this.buildForm();
    }

    onSubmit(formData) {
        this.logger.msg(formData, 1);
    }

    buildForm(): void {
        this.loginForm = this.fb.group({
            username: ['', Validators.compose([Validators.required])],
            password: ['', Validators.compose([Validators.required])]
        });
    }
}
