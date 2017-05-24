import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AddReviewFormComponent} from "./add-review-form/add-review-form.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [AddReviewFormComponent],
    exports: [AddReviewFormComponent]
})
export class ReviewsModule {
}
