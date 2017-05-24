import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {AdminGuard} from "../auth/guards/AdminGuard";

const routes: Routes = [
    {path: 'admin', canActivate: [AdminGuard], component: AdminPageComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
