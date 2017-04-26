import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseBooksPageComponent } from './browse-books-page/browse-books-page.component';
import {BrowseBooksRoutingModule} from "./browse-books-routing.module";

@NgModule({
  imports: [
    CommonModule,
    BrowseBooksRoutingModule
  ],
  declarations: [BrowseBooksPageComponent]
})
export class BrowseBooksModule { }
