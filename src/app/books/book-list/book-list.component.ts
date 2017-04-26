import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/Book";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {


  books:Book[];

  constructor(private bookService: BookService) {
    console.log(this.bookService.getBooks());
    this.books = this.bookService.getBooks();
  }

  ngOnInit() {
  }

}
