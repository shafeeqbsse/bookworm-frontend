import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AddReviewFormComponent} from "./add-review-form/add-review-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ReviewService} from "./services/review.service";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [AddReviewFormComponent],
    exports: [AddReviewFormComponent],
    providers: [ReviewService]
})
export class ReviewsModule {
}
