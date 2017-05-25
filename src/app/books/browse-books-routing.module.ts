import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BrowseBooksPageComponent} from "./browse-books-page/browse-books-page.component";

const routes: Routes = [
    {path: 'browse', component: BrowseBooksPageComponent},
    {path: 'book/:bookId'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrowseBooksRoutingModule {
}
