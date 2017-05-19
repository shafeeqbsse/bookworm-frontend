import {Component, OnInit} from "@angular/core";
import {ShoppingCartEntry, ShoppingCartService} from "../../shared/services/shopping-cart.service";

@Component({
    selector: 'app-shopping-cart-page',
    templateUrl: './shopping-cart-page.component.html',
    styleUrls: ['./shopping-cart-page.component.css']
})
export class ShoppingCartPageComponent implements OnInit {

    public data:Array<ShoppingCartEntry>;

    constructor(private shoppingCartService:ShoppingCartService) {
    }

    ngOnInit() {
        this.refresh();
    }

    removeFromCart(item:ShoppingCartEntry) {
        this.shoppingCartService.removeFromCart(item.book);
        this.refresh();
    }

    increaseAmount(item:ShoppingCartEntry) {
        this.shoppingCartService.addToCart(item.book);
        this.refresh();
    }

    decreaseAmount(item:ShoppingCartEntry) {
        this.shoppingCartService.decreaseAmountInCart(item.book);
        this.refresh();
    }

    private refresh() {
        this.data = this.shoppingCartService.getCart();
    }
}
