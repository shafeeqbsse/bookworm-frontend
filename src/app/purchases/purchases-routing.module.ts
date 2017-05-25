import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AdminGuard} from "../auth/guards/AdminGuard";
import {PurchasesPageComponent} from "./purchases-page/purchases-page.component";

const routes: Routes = [

    {path: "purchases", canActivate: [AdminGuard], component: PurchasesPageComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurchasesRoutingModule {
}
