import {Component, OnInit, Input} from "@angular/core";
import {Review} from "../../models/Review";
import {ReviewService} from "../services/review.service";

@Component({
    selector: 'app-review-tabbed-container',
    templateUrl: './review-tabbed-container.component.html',
    styleUrls: ['./review-tabbed-container.component.css']
})
export class ReviewTabbedContainerComponent implements OnInit {

    tab: string = 'review';

    @Input() bookId;

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

    showTab(tab: string) {
        this.tab = tab;
    }

    isActive(tabName: string) {
        return this.tab == tabName;
    }

}
