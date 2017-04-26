import { Injectable } from '@angular/core';
import {AuthHttp} from "angular2-jwt";
import {GLOBALS} from "../../globals";

@Injectable()
export class BookService {

  constructor(private authHttp: AuthHttp) {}

  getBooks() {
    console.log(GLOBALS);
    return this.authHttp.get(GLOBALS.API.ROOT + "/books")
      .map(response => {
        return response.json();
      });
  }
}