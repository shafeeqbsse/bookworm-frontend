import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TestRoutingModule} from "./test-routing.module";
import {TestPageComponent} from "./test-page/test-page.component";
import {SharedModule} from "../shared/shared.module";
import {StarRatingModule} from "angular-star-rating/dist";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        StarRatingModule,
        TestRoutingModule
    ],
    declarations: [TestPageComponent]
})
export class TestModule {
}
