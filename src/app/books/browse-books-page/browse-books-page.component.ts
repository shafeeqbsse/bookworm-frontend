import {Component, OnInit} from "@angular/core";
import {BookService} from "../services/book.service";
import {Book} from "../../models/Book";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-browse-books-page',
    templateUrl: './browse-books-page.component.html',
    styleUrls: ['./browse-books-page.component.css']
})
export class BrowseBooksPageComponent implements OnInit {

    public books: Array<Book>;

    constructor(private bookService: BookService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.bookService.getBooks().subscribe(response => {
                this.books = response;
                console.debug("Got Books:", response);
            },
            error => {
                console.error("Getting books failed:", error);
            });

        this.route.params.subscribe(params => {
                console.debug("Genre from route: ", params['genre']);

            }, error => {
                console.error("Route param error", error);
            }
        )
    }
}
