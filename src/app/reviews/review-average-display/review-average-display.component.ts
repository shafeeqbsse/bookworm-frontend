import {Component, OnInit, OnChanges, SimpleChanges, Input} from "@angular/core";
import {Review} from "../../models/Review";

@Component({
    selector: 'app-review-average-display',
    templateUrl: './review-average-display.component.html',
    styleUrls: ['./review-average-display.component.css']
})
export class ReviewAverageDisplayComponent implements OnInit, OnChanges {

    @Input() reviews: Array<Review>;
    average: number;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("onChanges");

        if (this.reviews) {
            this.calculateAverage();
        }
    }

    private calculateAverage() {
        let sum = 0;
        this.reviews.forEach((review => {
            sum += review.stars;
        }));

        this.average = sum / this.reviews.length;
    }
}
