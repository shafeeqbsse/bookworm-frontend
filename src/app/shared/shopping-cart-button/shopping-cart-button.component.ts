import {Component, OnInit} from "@angular/core";
import {ShoppingCartService} from "../services/shopping-cart.service";

@Component({
    selector: 'app-shopping-cart-button',
    templateUrl: './shopping-cart-button.component.html',
    styleUrls: ['./shopping-cart-button.component.css']
})
export class ShoppingCartButtonComponent implements OnInit, OnShoppingCartChange {

    public amount: number;

    constructor(private shoppingCartService: ShoppingCartService) {
    }

    ngOnInit() {
        this.shoppingCartService.registerChangeListener(this);
        this.amount = this.shoppingCartService.getAmount();
    }

    onShoppingCartChange() {
        this.amount = this.shoppingCartService.getAmount();
    }

}
