import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule, Http, RequestOptions} from "@angular/http";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {AuthModule} from "./auth/auth.module";
import {LoggerService} from "./shared/logger/logger.service";
import {SharedModule} from "./shared/shared.module";
import {GLOBALS} from "./globals";
import {AuthConfig, AuthHttp} from "angular2-jwt";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowseBooksModule} from "./books/browse-books.module";
import {TestModule} from "./test/test.module";
import {ShoppingCartModule} from "./shopping-cart/shopping-cart.module";
import {AdminModule} from "./admin/admin.module";
import {AdminGuard} from "./auth/guards/AdminGuard";
import {PurchasesModule} from "./purchases/purchases.module";


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
        tokenGetter: (() => localStorage.getItem(GLOBALS.LOCAL_TOKEN_KEY)),
    }), http, options);
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AuthModule.forRoot(),
        SharedModule.forRoot(),
        NgbModule.forRoot(),
        ShoppingCartModule,
        TestModule,
        BrowseBooksModule,
        AdminModule,
        PurchasesModule,
        AppRoutingModule
    ],
    providers: [
        LoggerService,
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        },
        AdminGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
