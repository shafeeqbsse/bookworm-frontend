import {Component, OnInit, Input} from "@angular/core";
import {Review} from "../../models/Review";

@Component({
    selector: 'app-review-list',
    templateUrl: 'review-list.component.html',
    styleUrls: ['review-list.component.css']
})
export class ReviewListComponent implements OnInit {

    @Input() reviews: Array<Review>;

    constructor() {
    }

    ngOnInit() {
    }
}
