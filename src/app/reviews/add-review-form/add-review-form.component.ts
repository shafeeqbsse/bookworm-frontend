import {Component, OnInit, Input} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Review} from "../../models/Review";
import {ReviewService} from "../services/review.service";

@Component({
    selector: 'app-add-review-form',
    templateUrl: './add-review-form.component.html',
    styleUrls: ['./add-review-form.component.css']
})
export class AddReviewFormComponent implements OnInit {

    reviewForm: FormGroup;

    @Input() bookId: number;

    constructor(private reviewService: ReviewService, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm(): void {
        this.reviewForm = this.fb.group({
            stars: ['', Validators.compose([Validators.required])],
            text: ['', Validators.compose([Validators.required])]
        });
    }

    onSubmit(formData) {
        let review: Review = new Review();
        review.stars = formData.stars;
        review.text = formData.text;

        this.reviewService.saveReviewForBook(this.bookId, review).subscribe(
            result => {
                console.debug("Saved revieww", result);
            },
            error => {
                console.error("Error saving review", error);
            }
        );
    }

    isFormValid(): boolean {
        return this.reviewForm.valid;
    }

}
