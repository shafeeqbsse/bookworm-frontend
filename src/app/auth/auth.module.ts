import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginPageComponent} from './login-page/login-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {LoginFormComponent} from './login-form/login-form.component';
import {AuthService} from "./services/auth.service";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthRoutingModule
    ],
    declarations: [LoginPageComponent, LoginFormComponent],
    providers: [AuthService]
})
export class AuthModule {
}
