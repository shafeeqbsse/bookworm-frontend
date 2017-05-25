import {Component, OnInit} from "@angular/core";
import {BookService} from "../services/book.service";
import {Book} from "../../models/Book";
import {ActivatedRoute} from "@angular/router";
import {FormGroup, FormBuilder} from "@angular/forms";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";

@Component({
    selector: 'app-browse-books-page',
    templateUrl: './browse-books-page.component.html',
    styleUrls: ['./browse-books-page.component.css']
})
export class BrowseBooksPageComponent implements OnInit {

    books: Array<Book>;
    searchForm: FormGroup;
    page: number;
    genre: string;
    totalItems: number;
    state: number;

    constructor(private fb: FormBuilder, private cartService: ShoppingCartService, private bookService: BookService, private route: ActivatedRoute) {
        this.books = [];
        this.state = 0;
        this.page = 1;
        this.genre = "";
        this.searchForm = this.fb.group({
            searchWord: ['']
        });
    }

    addToCart(book: Book) {
        this.cartService.addToCart(book);
    }

    search() {
        this.genre = "";
        if (this.searchForm.value.searchWord && this.searchForm.value.searchWord != "") {
            this.getBooksBySearch();
        } else {
            this.getBooks();
        }
        this.page = 0;
    }

    onPager(event: any) {
        this.page = event;
        if (this.state == 2) {
            this.getBooksBySearch();
        } else if (this.state == 1) {
            this.getBookByGenre();
        } else {
            this.getBooks();
        }
    }

    ngOnInit() {
        this.getBooks();

        this.route.params.subscribe(
            params => {
                if (!params.search) {
                    this.searchForm = this.fb.group({
                        searchWord: ['']
                    });
                } else {
                    this.searchForm = this.fb.group({
                        searchWord: [params.search]
                    });
                    this.search();
                }

                if (params.genre) {
                    if (params.genre == 'all') {
                        this.genre = "";
                        this.getBooks();
                    } else {
                        this.genre = params.genre;
                        this.getBookByGenre();
                    }
                }
                this.page = 0;
            }, error => {
                console.error("Route param error", error);
            }
        )
    }

    getBooks() {
        this.state = 0;
        this.bookService.getBooks(this.page).subscribe(response => {
                this.books = response.content;
                this.totalItems = response.totalElements;
            },
            error => {
                console.error("Getting books failed:", error);
            });
    }

    getBookByGenre() {

        if (this.genre && this.genre != "") {
            this.state = 1;
            this.bookService.getBooksByGenre(this.page, this.genre).subscribe(response => {
                    this.books = response.content;
                    this.totalItems = response.totalElements;
                },
                error => {
                    console.error("Getting books failed:", error);
                });
        }
    }

    getBooksBySearch() {
        this.state = 2;
        this.bookService.searchBooks(this.page, this.searchForm.value.searchWord).subscribe(response => {
                this.books = response.content;
                this.totalItems = response.totalElements;
            },
            error => {
                console.error("Getting books failed:", error);
            });
    }
}
