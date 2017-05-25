import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowseBooksPageComponent} from './browse-books-page/browse-books-page.component';
import {BrowseBooksRoutingModule} from "./browse-books-routing.module";
import {BookService} from "./services/book.service";
import {GenreService} from "./services/genre.service";
import { GenreListComponent } from './genre-list/genre-list.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        BrowseBooksRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule
    ],
    declarations: [BrowseBooksPageComponent, GenreListComponent],
    providers: [BookService, GenreService]
})
export class BrowseBooksModule {
}
