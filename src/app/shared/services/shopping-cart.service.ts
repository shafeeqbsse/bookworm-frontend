import {Injectable} from "@angular/core";
import {Book} from "../../models/Book";
import {GLOBALS} from "../../globals";

@Injectable()
export class ShoppingCartService {

    private cart:Array<ShoppingCartEntry>;

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
        let found:number = -1;
        this.cart.forEach((item, index) => {
            if(item.id === book.bookId) {
                found = index;
                return;
            }
        });
        if (found === -1) {
            this.cart.push(new ShoppingCartEntry(book));
        } else {
            this.cart[found].amount++;
        }
        window.localStorage.setItem(GLOBALS.LOCAL_CART_KEY, JSON.stringify(this.cart));
    }

    removeFromCart(book:Book) {
        this.cart.forEach((item, index) => {
            if(item.id === book.bookId) {
                this.cart.splice(index, 1);
                window.localStorage.setItem(GLOBALS.LOCAL_CART_KEY, JSON.stringify(this.cart));
                return;
            }
        });
    }

    decreaseAmountInCart(book:Book) {
        this.cart.forEach((item, index) => {
            if(item.id === book.bookId) {
                if (this.cart[index].amount > 1) {
                    this.cart[index].amount--;
                    window.localStorage.setItem(GLOBALS.LOCAL_CART_KEY, JSON.stringify(this.cart));
                }
                return;
            }
        });
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
    constructor(book: Book) {
        this.id = book.bookId;
        this.amount = 1;
        this.book = book;
    }

    id: number;
    amount: number;
    book:Book;
}
