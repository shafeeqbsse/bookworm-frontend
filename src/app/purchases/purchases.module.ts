import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PurchasesRoutingModule} from "./purchases-routing.module";
import {PurchaseService} from "./services/purchase.service";
import {PurchasesPageComponent} from "./purchases-page/purchases-page.component";

@NgModule({
    imports: [
        CommonModule,
        PurchasesRoutingModule
    ],
    declarations: [PurchasesPageComponent],
    providers: [PurchaseService]
})
export class PurchasesModule {
}
