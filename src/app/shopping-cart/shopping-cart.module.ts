import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ShoppingCartRoutingModule} from "./shopping-cart-routing.module";
import {ShoppingCartPageComponent} from "./shopping-cart-page/shopping-cart-page.component";
import {BookService} from "../books/services/book.service";

@NgModule({
    imports: [
        CommonModule,
        ShoppingCartRoutingModule
    ],
    declarations: [ShoppingCartPageComponent],
    providers: [BookService]
})
export class ShoppingCartModule {
}
