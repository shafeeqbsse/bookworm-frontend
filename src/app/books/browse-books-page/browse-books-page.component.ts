import {Component, OnInit} from "@angular/core";
import {BookService} from "../services/book.service";
import {Book} from "../../models/Book";
import {Publisher} from "../../models/Publisher";
import {Author} from "../../models/Author";
import {ActivatedRoute} from "@angular/router";
import {FormGroup, FormBuilder} from "@angular/forms";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";

@Component({
    selector: 'app-browse-books-page',
    templateUrl: './browse-books-page.component.html',
    styleUrls: ['./browse-books-page.component.css']
})
export class BrowseBooksPageComponent implements OnInit {

    public books: Array<Book>;
    searchForm: FormGroup;
    page: number;
    private genre: string;
    searchWord: string;
    totalItems: number;

    constructor(private fb: FormBuilder, private cartService: ShoppingCartService, private bookService: BookService, private route: ActivatedRoute) {
        this.books = [];
        this.page = 1;
        this.genre = "";
        this.searchWord = "";
        this.searchForm = this.fb.group({
            searchWord: ['']
        });
    }

    addToCart(book: Book) {
        this.cartService.addToCart(book);
    }

    onSubmit(values) {
        this.genre = "";
        if (values.searchWord && values.searchWord != "") {
            this.searchWord = values.searchWord;
            this.getBooksBySearch();
        } else {
            this.searchWord = "";
            this.getBooks();
        }
        this.page = 0;
    }

    onPager(event: any) {
        this.page = event;
        if (this.searchWord != "") {
            this.getBooksBySearch();
        } else if (this.genre != "") {
            this.getBookByGenre();
        } else {
            this.getBooks();
        }
    }

    ngOnInit() {
        this.getBooks();

        this.route.params.subscribe(
            params => {
                this.searchWord = "";
                if (params.genre == 'all') {
                    this.genre = "";
                    this.getBooks();
                } else {
                    this.genre = params.genre;
                    this.getBookByGenre();
                }
                this.page = 0;

            }, error => {
                console.error("Route param error", error);
            }
        )
    }

    getBooks() {
        this.bookService.getBooks(this.page).subscribe(response => {

                this.books = response.content;
                this.totalItems = response.totalElements;
            },
            error => {
                console.error("Getting books failed:", error);
            });
    }

    getBookByGenre() {
        this.bookService.getBooksByGenre(this.page, this.genre).subscribe(response => {
                this.books = response.content;
                this.totalItems = response.totalElements;
            },
            error => {
                console.error("Getting books failed:", error);
            });
    }

    getBooksBySearch() {
        this.bookService.searchBooks(this.page, this.searchWord).subscribe(response => {
                this.books = response.content;
                this.totalItems = response.totalElements;
            },
            error => {
                console.error("Getting books failed:", error);
            });
    }
}
