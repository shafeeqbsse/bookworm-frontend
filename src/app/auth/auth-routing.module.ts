import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {UserInfoComponent} from "./user-info/user-info.component";

const routes: Routes = [
    {path: 'login', component: LoginPageComponent},
    {path: 'me', component: UserInfoComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
