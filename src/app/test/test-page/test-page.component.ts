import {Component, OnInit} from "@angular/core";
import {Book} from "../../models/Book";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {BookService} from "../../books/services/book.service";

@Component({
    selector: 'app-test-page',
    templateUrl: './test-page.component.html',
    styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

    public books:Array<Book>;

    constructor(private bookService: BookService, private shoppingCartService:ShoppingCartService) {
    }

    ngOnInit() {
        this.bookService.getBooks().subscribe(response => {
                this.books = response;
                console.debug("Got Books:", response);
            },
            error => {
                console.error("Getting books failed:", error);
            });

        let book: Book = new Book();

        this.bookService.getBook(2).subscribe(response => {
                console.debug("Got Book 2:", response);
                book = response;

                book.description = "Description of test book";
                book.format = "Format of text book";
                book.genre = "JS";
                book.isbn = "1234567TEST";
                book.pages = 500;
                book.price = 19.95;
                book.stock = 10;
                book.title = "This is a test book title";

                console.debug("New Book: ", book);

                this.bookService.saveBook(book).subscribe(result => {
                        console.debug("Saved test book:", result);
                    },
                    error => {
                        console.error("Saving book failed", error);
                    });
            },
            error => {
                console.error("Getting book 2 failed:", error);
            });



    }

    addToCart() {
        this.bookService.getBook(1).subscribe(response => {
                console.debug("Got Book 1:", response);
                this.shoppingCartService.addToCart(response);
            },
            error => {
                console.error("Getting book 1 failed:", error);
            });
    }

    showCartContents() {
        console.log(this.shoppingCartService.getCart());
    }

    clearCart() {
        this.shoppingCartService.clearCart();
    }

}
