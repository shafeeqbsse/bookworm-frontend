import {Component, OnInit, Input} from "@angular/core";

@Component({
    selector: 'app-review-tabbed-container',
    templateUrl: './review-tabbed-container.component.html',
    styleUrls: ['./review-tabbed-container.component.css']
})
export class ReviewTabbedContainerComponent implements OnInit {

    tab: string = 'review';

    @Input() bookId;

    constructor() {
    }

    ngOnInit() {
    }

    showTab(tab: string) {
        this.tab = tab;
    }

    isActive(tabName: string) {
        return this.tab == tabName;
    }

}
