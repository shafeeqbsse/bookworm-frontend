import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TestRoutingModule} from "./test-routing.module";
import {TestPageComponent} from "./test-page/test-page.component";
import {SharedModule} from "../shared/shared.module";
import {ReviewsModule} from "../reviews/reviews.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReviewsModule,
        TestRoutingModule
    ],
    declarations: [TestPageComponent]
})
export class TestModule {
}
