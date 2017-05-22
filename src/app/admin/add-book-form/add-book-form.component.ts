import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from "@angular/forms";

@Component({
    selector: 'app-add-book-form',
    templateUrl: './add-book-form.component.html',
    styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent implements OnInit {

    bookForm:FormGroup;

    constructor(public fb: FormBuilder) {
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm(): void {
        this.bookForm = this.fb.group({
            title: ['', Validators.compose([Validators.required])]
        });
    }

}
