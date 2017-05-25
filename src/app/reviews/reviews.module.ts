import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AddReviewFormComponent} from "./add-review-form/add-review-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ReviewService} from "./services/review.service";
import {ReviewListComponent} from "./review-list/review-list.component";
import {SharedModule} from "../shared/shared.module";
import {ReviewTabbedContainerComponent} from "./review-tabbed-container/review-tabbed-container.component";
import {ReviewAverageDisplayComponent} from "./review-average-display/review-average-display.component";
import {AuthModule} from "../auth/auth.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        AuthModule
    ],
    declarations: [AddReviewFormComponent, ReviewListComponent, ReviewTabbedContainerComponent, ReviewAverageDisplayComponent],
    exports: [AddReviewFormComponent, ReviewListComponent, ReviewTabbedContainerComponent, ReviewAverageDisplayComponent],
    providers: [ReviewService]
})
export class ReviewsModule {
}
