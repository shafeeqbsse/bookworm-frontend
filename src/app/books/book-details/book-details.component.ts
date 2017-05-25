import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Book} from "../../models/Book";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

    book: Book;

    constructor(private route: ActivatedRoute, private bookService: BookService) { }

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

}
