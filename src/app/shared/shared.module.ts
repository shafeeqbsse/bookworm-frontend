import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoggerService} from "./logger/logger.service";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {AppRoutingModule} from "../app-routing.module";
import {AuthModule} from "../auth/auth.module";
import {ShoppingCartService} from "./services/shopping-cart.service";
import {ShoppingCartButtonComponent} from "./shopping-cart-button/shopping-cart-button.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {StarDisplayComponent} from "./star-display/star-display.component";
import {StarRatingModule} from "angular-star-rating/src/star-rating.module";

@NgModule({
    imports: [
        CommonModule,
        StarRatingModule,
        AuthModule,
        NgbModule,
        AppRoutingModule
    ],
    exports: [
        HeaderComponent, FooterComponent, ShoppingCartButtonComponent, StarDisplayComponent
    ],
    declarations: [HeaderComponent, FooterComponent, ShoppingCartButtonComponent, StarDisplayComponent]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [LoggerService, ShoppingCartService]
        };
    }
}
