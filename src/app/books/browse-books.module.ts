import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseBooksPageComponent } from './browse-books-page/browse-books-page.component';
import {BrowseBooksRoutingModule} from "./browse-books-routing.module";
import { BookListComponent } from './book-list/book-list.component';
import {BookService} from "./services/book.service";

@NgModule({
  imports: [
    CommonModule,
    BrowseBooksRoutingModule
  ],
  declarations: [BrowseBooksPageComponent, BookListComponent],
  providers: [
    BookService
  ]
})
export class BrowseBooksModule { }
