import {Injectable} from "@angular/core";
import {Book} from "../../models/Book";
import {GLOBALS} from "../../globals";

@Injectable()
export class ShoppingCartService {

    private cart:Array<Book>;

    constructor() {
        this.loadFromLocalStorage();
    }

    private loadFromLocalStorage() {
        const text:string  = window.localStorage.getItem(GLOBALS.LOCAL_CART_KEY);
        this.cart = JSON.parse(text);
        if (!this.cart) {
            this.cart = [];
        }
    }

    addToCart(book: Book) {
        this.cart.push(book);
        window.localStorage.setItem(GLOBALS.LOCAL_CART_KEY, JSON.stringify(this.cart));
    }

    getCart() {
        this.loadFromLocalStorage();
        return this.cart;
    }

    clearCart() {
        window.localStorage.removeItem(GLOBALS.LOCAL_CART_KEY);
    }
}

class ShoppingCartEntry {
    id: number;
    amount: number;
    book:Book;
}
