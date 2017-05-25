import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

    bookId:number;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.bookId = +params["bookId"];
            }, error => {
                console.error("Route param error", error);
            }
        )
    }

}
