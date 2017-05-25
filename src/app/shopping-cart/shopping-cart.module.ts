import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ShoppingCartRoutingModule} from "./shopping-cart-routing.module";
import {ShoppingCartPageComponent} from "./shopping-cart-page/shopping-cart-page.component";
import {BookService} from "../books/services/book.service";
import {AuthModule} from "../auth/auth.module";

@NgModule({
    imports: [
        CommonModule,
        ShoppingCartRoutingModule,
        AuthModule
    ],
    declarations: [ShoppingCartPageComponent],
    providers: [BookService]
})
export class ShoppingCartModule {
}
