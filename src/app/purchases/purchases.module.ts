import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PurchasesRoutingModule} from "./purchases-routing.module";
import {PurchaseService} from "./services/purchase.service";

@NgModule({
    imports: [
        CommonModule,
        PurchasesRoutingModule
    ],
    declarations: [],
    providers: [PurchaseService]
})
export class PurchasesModule {
}
