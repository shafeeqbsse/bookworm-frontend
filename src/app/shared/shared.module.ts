import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoggerService} from "./logger/logger.service";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {AppRoutingModule} from "../app-routing.module";
import {AuthModule} from "../auth/auth.module";

@NgModule({
    imports: [
        CommonModule,
        AuthModule,
        AppRoutingModule
    ],
    exports: [
        HeaderComponent, FooterComponent
    ],
    declarations: [HeaderComponent, FooterComponent]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [LoggerService]
        };
    }
}
