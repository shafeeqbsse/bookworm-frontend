import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BrowseBooksPageComponent} from "./browse-books-page/browse-books-page.component";

const routes: Routes = [
    {path: 'browse', component: BrowseBooksPageComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrowseBooksRoutingModule {
}