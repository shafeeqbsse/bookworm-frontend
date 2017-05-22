import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Book} from "../../models/Book";
import {BookService} from "../../books/services/book.service";

@Component({
    selector: 'app-add-book-form',
    templateUrl: './add-book-form.component.html',
    styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent implements OnInit {

    bookForm: FormGroup;

    public addBookFailed: boolean;

    constructor(public fb: FormBuilder, private bookService: BookService) {
        this.addBookFailed = false;
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm(): void {
        this.bookForm = this.fb.group({
            title: ['', Validators.compose([Validators.required])],
            description: ['', Validators.compose([Validators.required])],
            genre: ['', Validators.compose([Validators.required])],
            format: ['', Validators.compose([Validators.required])],
            price: ['', Validators.compose([Validators.required])],
            stock: ['', Validators.compose([Validators.required])],
            pages: ['', Validators.compose([Validators.required])]
        });
    }

    onSubmit(formData) {
        let book: Book = new Book();
        book.title = formData.title;
        book.description = formData.description;
        this.bookService.saveBook(book).subscribe(
            result => {
                console.debug("Saved book", result);
            },
            error => {
                console.error("Error saving book", error);
            }
        );
    }

}
