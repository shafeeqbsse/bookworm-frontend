import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {BookService} from "../../books/services/book.service";
import {Author} from "../../models/Author";
import {Publisher} from "../../models/Publisher";
import {BookData} from "../../models/BookData";

@Component({
    selector: 'app-add-book-form',
    templateUrl: './add-book-form.component.html',
    styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent implements OnInit {

    bookForm: FormGroup;

    public authors: Array<Author>;
    public selectedPublisher: Publisher;

    public addBookFailed: boolean;
    private isAuthorsValid: boolean;
    private isPublisherValid: boolean;

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
            pages: ['', Validators.compose([Validators.required])],
            isbn: ['', Validators.compose([Validators.required])]
        });
    }

    onSubmit(formData) {
        let book: BookData = new BookData();
        book.title = formData.title;
        book.description = formData.description;

        book.authors = [];
        this.authors.forEach((b) => {
            book.authors.push({'authorId': b.authorId})
        });
        book.publisher = {'publisherId': this.selectedPublisher.publisherId};
        book.format = formData.format;
        book.genre = formData.genre;
        book.isbn = formData.isbn;
        book.pages = formData.pages;
        book.price = formData.price;
        this.bookService.saveBook(book).subscribe(
            result => {
                console.debug("Saved book", result);
            },
            error => {
                console.error("Error saving book", error);
            }
        );
    }

    onAuthorsChange(authors: Array<Author>) {
        this.authors = authors;
        this.isAuthorsValid = authors.length > 0;
    }

    onPublisherChange(publisher: Publisher) {
        this.selectedPublisher = publisher;

        if (publisher !== null) {
            this.isPublisherValid = true;
        } else {
            this.isPublisherValid = false;
        }
    }

    isFormValid(): boolean {
        return this.isAuthorsValid && this.isPublisherValid && this.bookForm.valid;
    }
}
