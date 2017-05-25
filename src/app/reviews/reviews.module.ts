import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AddReviewFormComponent} from "./add-review-form/add-review-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ReviewService} from "./services/review.service";
import {ReviewListComponent} from "./review-list/review-list.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [AddReviewFormComponent, ReviewListComponent],
    exports: [AddReviewFormComponent, ReviewListComponent],
    providers: [ReviewService]
})
export class ReviewsModule {
}
