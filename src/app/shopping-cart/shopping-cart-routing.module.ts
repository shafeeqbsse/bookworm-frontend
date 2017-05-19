import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ShoppingCartPageComponent} from "./shopping-cart-page/shopping-cart-page.component";

const routes: Routes = [
    {path:"shopping-cart", component: ShoppingCartPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
