import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterFormComponent} from "./register-form/register-form.component";

const routes: Routes = [
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterFormComponent},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
