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
        console.log("hello2");
        if (this.searchForm.value.searchWord && this.searchForm.value.searchWord != "") {
            console.log("jell");
            this.getBooksBySearch();
        } else {
            console.log("haf");
            this.getBooks();
        }
        this.page = 0;
    }

    onPager(event: any) {
        console.log("hellofor" + this.state);
        this.page = event;
        console.log(this.page);
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
        console.log("hehhehhehehehehhehehehehehehehehehe");

        this.route.params.subscribe(
            params => {
                console.log(params);
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
                        console.log("set state to 1");
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
        console.log("all");

        this.state = 0;
        this.bookService.getBooks(this.page).subscribe(response => {

                this.books = response.content;
                this.totalItems = response.totalElements;
            console.log(response);
            },
            error => {
                console.error("Getting books failed:", error);
            });
    }

    getBookByGenre() {
        console.log("gen " + this.page + " " + this.genre);

        if (this.genre && this.genre != "") {
            console.log("genre search");
            this.state = 1;
            this.bookService.getBooksByGenre(this.page, this.genre).subscribe(response => {
                    this.books = response.content;
                    this.totalItems = response.totalElements;
                    console.log(response);

                },
                error => {
                    console.error("Getting books failed:", error);
                });
        }
    }

    getBooksBySearch() {
        console.log("sear");
        console.log(this.page);
        this.state = 2;
        this.bookService.searchBooks(this.page, this.searchForm.value.searchWord).subscribe(response => {
                this.books = response.content;
                this.totalItems = response.totalElements;
                console.log(response);

            },
            error => {
                console.error("Getting books failed:", error);
            });
    }
}
