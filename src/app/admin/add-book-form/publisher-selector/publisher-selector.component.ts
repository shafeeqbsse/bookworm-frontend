import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {PublisherService} from "../../services/publisher.service";
import {Publisher} from "../../../models/Publisher";

@Component({
    selector: 'app-publisher-selector',
    templateUrl: './publisher-selector.component.html',
    styleUrls: ['./publisher-selector.component.css']
})
export class PublisherSelectorComponent implements OnInit {

    public selectedPublisher: Publisher;

    searching: boolean = false;
    searchFailed: boolean = false;

    constructor(private publisherService: PublisherService) {
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

    formatter = (p: Publisher) => {
        return p.name + ", " + p.city + ", " + p.country;
    };


    showSelected() {
        if (this.selectedPublisher.publisherId) {
            console.debug("Selected Publisher:", this.selectedPublisher);
        } else {
            console.debug("Selected Publisher:", "None yet");
        }
    }

}
