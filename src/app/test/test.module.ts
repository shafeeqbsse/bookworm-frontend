import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TestRoutingModule} from "./test-routing.module";
import {TestPageComponent} from "./test-page/test-page.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TestRoutingModule
    ],
    declarations: [TestPageComponent]
})
export class TestModule {
}
