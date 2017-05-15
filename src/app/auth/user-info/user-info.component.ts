import { Component, OnInit } from '@angular/core';
import {AuthHttp} from "angular2-jwt";
import {GLOBALS} from "../../globals";
import {Response} from "@angular/http";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
    private id: string;
    private name: string;
    private admin: boolean;

  constructor(private http:AuthHttp) { }

  ngOnInit() {
      this.http.get(GLOBALS.API.ROOT + "/me")
          .map((res:Response) => res.json())
          .subscribe(res => {
          console.debug("Result:",res);
          this.id = res.id;
          this.name = res.username;
          this.admin = res.admin;
      });
  }
}
