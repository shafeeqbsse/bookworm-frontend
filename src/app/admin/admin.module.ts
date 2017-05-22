import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {AddBookFormComponent} from "./add-book-form/add-book-form.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {PublisherSelectorComponent} from "./add-book-form/publisher-selector/publisher-selector.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {PublisherService} from "./services/publisher.service";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbModule,
        FormsModule,
        AdminRoutingModule
    ],
    declarations: [AdminPageComponent, AddBookFormComponent, PublisherSelectorComponent],
    providers: [PublisherService]
})
export class AdminModule {
}
