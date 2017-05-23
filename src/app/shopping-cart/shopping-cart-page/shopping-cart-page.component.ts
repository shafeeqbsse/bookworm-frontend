import {Component, OnInit} from "@angular/core";
import {ShoppingCartEntry, ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {BookService} from "../../books/services/book.service";

@Component({
    selector: 'app-shopping-cart-page',
    templateUrl: './shopping-cart-page.component.html',
    styleUrls: ['./shopping-cart-page.component.css']
})
export class ShoppingCartPageComponent implements OnInit {

    public data:Array<ShoppingCartEntry>;

    constructor(private shoppingCartService: ShoppingCartService, private bookService: BookService) {
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

    buyAllInCart() {
        this.refresh();
        this.data.forEach((entry) => {
            this.bookService.buyBook(entry.id, entry.amount).subscribe(result => {
                    console.debug("Bought", entry);
                },
                error => {
                    console.error("Error buying a book", error);
                })
        });

        this.shoppingCartService.clearCart();
        this.refresh();
    }
}
