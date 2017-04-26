import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/Book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {


  books:Book[];

  constructor() {
    this.books = [new Book("hello"), new Book("moro")];
  }

  ngOnInit() {
  }

}
