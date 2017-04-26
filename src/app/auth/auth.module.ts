import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginPageComponent} from './login-page/login-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {LoginFormComponent} from './login-form/login-form.component';
import {AuthService} from "./services/auth.service";
import { UserInfoComponent } from './user-info/user-info.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthRoutingModule
    ],
    exports: [LoginFormComponent],
    declarations: [LoginPageComponent, LoginFormComponent, UserInfoComponent, RegisterFormComponent],
    providers: [AuthService]
})
export class AuthModule {
}
