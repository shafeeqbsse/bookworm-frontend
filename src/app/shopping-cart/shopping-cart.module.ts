import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ShoppingCartRoutingModule} from "./shopping-cart-routing.module";
import {ShoppingCartPageComponent} from "./shopping-cart-page/shopping-cart-page.component";

@NgModule({
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ],
  declarations: [ShoppingCartPageComponent]
})
export class ShoppingCartModule { }
