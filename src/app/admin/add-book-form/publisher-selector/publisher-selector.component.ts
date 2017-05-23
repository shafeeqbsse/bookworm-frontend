import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {Observable} from "rxjs";
import {PublisherService} from "../../services/publisher.service";
import {Publisher} from "../../../models/Publisher";

@Component({
    selector: 'app-publisher-selector',
    templateUrl: './publisher-selector.component.html',
    styleUrls: ['./publisher-selector.component.css']
})
export class PublisherSelectorComponent implements OnInit {

    @Output() onPublisherChanged = new EventEmitter();

    selectedPublisher: any;

    searching: boolean = false;
    searchFailed: boolean = false;
    hasPublisher: boolean;

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

    removePublisher() {
        console.debug("removePublisher");
        this.hasPublisher = false;
        this.onPublisherChanged.emit(null);
        this.selectedPublisher = null;
    }

    onSelectPublisher(item: any) {
        const selected: Publisher = item.item;
        console.debug("Item selected from lookahead", selected);
        if (selected.publisherId) {
            this.onPublisherChanged.emit(selected);
        } else {
            this.onPublisherChanged.emit(null);
            console.debug("Selected Author:", "None yet");
        }
        this.hasPublisher = true;
        console.debug("HasPublisher", this.hasPublisher);
    }
}
