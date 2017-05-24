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

    public total: number = 10;

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
        this.total = this.calculateTotal();
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

    private calculateTotal(): number {
        let total: number = 0;
        this.data.forEach((entry) => {
            total += entry.book.price * entry.amount;
        });
        console.debug("calculateTotal", total);
        return total;
    }
}
