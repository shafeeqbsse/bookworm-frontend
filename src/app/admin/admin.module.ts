import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminPageComponent} from './admin-page/admin-page.component';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AdminRoutingModule
    ],
    declarations: [AdminPageComponent, AddBookFormComponent]
})
export class AdminModule {
}
