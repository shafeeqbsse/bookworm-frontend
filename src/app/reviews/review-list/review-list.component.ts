import {Component, OnInit, Input} from "@angular/core";
import {Review} from "../../models/Review";
import {ReviewService} from "../services/review.service";

@Component({
    selector: 'app-review-list',
    templateUrl: 'review-list.component.html',
    styleUrls: ['review-list.component.css']
})
export class ReviewListComponent implements OnInit {

    @Input() bookId: number;

    reviews: Array<Review>;

    constructor(private reviewService: ReviewService) {
    }

    ngOnInit() {
        this.reviewService.getReviewsForBook(this.bookId).subscribe(
            result => {
                console.debug("Got Reviews", result);
                this.reviews = result.map(rev => {
                        return {text: rev.text, stars: rev.stars};
                    }
                );
            }, error => {
                console.error("Error getting reviews for list", error);
            }
        );
    }
}
