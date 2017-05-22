import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {AddBookFormComponent} from "./add-book-form/add-book-form.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {PublisherSelectorComponent} from "./add-book-form/publisher-selector/publisher-selector.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {PublisherService} from "./services/publisher.service";
import {AuthorSelectorComponent} from "./add-book-form/author-selector/author-selector.component";
import {AuthorService} from "./services/author.service";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbModule,
        FormsModule,
        AdminRoutingModule
    ],
    declarations: [AdminPageComponent, AddBookFormComponent, PublisherSelectorComponent, AuthorSelectorComponent],
    providers: [PublisherService, AuthorService]
})
export class AdminModule {
}
