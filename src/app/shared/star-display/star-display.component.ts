import {Component, OnInit, Input} from "@angular/core";

@Component({
    selector: 'app-star-display',
    templateUrl: './star-display.component.html',
    styleUrls: ['./star-display.component.css']
})
export class StarDisplayComponent implements OnInit {

    @Input() label;
    @Input() rating;

    constructor() {
    }

    ngOnInit() {
    }

}
