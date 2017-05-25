import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../../models/Book";
import {BookService} from "../services/book.service";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

    book: Book;

    constructor(private route: ActivatedRoute, private bookService: BookService,
                private cartService: ShoppingCartService, public authService: AuthService,
                private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.bookService.getBook(+params["bookId"]).subscribe(response => {
                        this.book = response;
                    },
                    error => {
                        console.error("Getting book failed:", error);
                    });
            }, error => {
                console.error("Route param error", error);
            }
        )
    }

    addToCart() {
        this.cartService.addToCart(this.book);
    }

    deleteBook() {
        this.bookService.deleteBook(this.book.bookId).subscribe(
            result => {
                this.router.navigate(["browse"]);
            },
            error => {
                console.error("Error saving book", error);
            }
        );
    }
}
