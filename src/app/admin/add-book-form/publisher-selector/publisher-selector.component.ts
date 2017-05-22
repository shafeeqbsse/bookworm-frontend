import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PublisherService} from "../../services/publisher.service";
import {Genre} from "../../../models/Genre";

@Component({
    selector: 'app-publisher-selector',
    templateUrl: './publisher-selector.component.html',
    styleUrls: ['./publisher-selector.component.css']
})
export class PublisherSelectorComponent implements OnInit {

    searching:boolean = false;
    searchFailed:boolean = false;

    constructor(private publisherService:PublisherService) {
    }

    ngOnInit() {
    }

    search = (text$: Observable<string>) => {
        return text$
            .debounceTime(300)
            .distinctUntilChanged()
            .do(() => this.searching = true)
            .switchMap(term =>
                this.publisherService.search(term)
                    .do(() => this.searchFailed = false)
                    .catch(() => {
                        this.searchFailed = true;
                        return Observable.of([]);
                    }))
            .do(() => this.searching = false);
    };

    formatter = (g:Genre) => {
        return g.name;
    }


}
