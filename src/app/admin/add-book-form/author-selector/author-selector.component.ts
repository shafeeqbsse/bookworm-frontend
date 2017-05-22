import {Component, OnInit} from "@angular/core";
import {Author} from "../../../models/Author";
import {Observable} from "rxjs";
import {AuthorService} from "../../services/author.service";

@Component({
    selector: 'app-author-selector',
    templateUrl: './author-selector.component.html',
    styleUrls: ['./author-selector.component.css']
})
export class AuthorSelectorComponent implements OnInit {

    public authors: Array<Author>;

    public selectedAuthor: Author;

    searching: boolean = false;
    searchFailed: boolean = false;


    constructor(private authorService: AuthorService) {
        this.authors = [];
    }

    ngOnInit() {
    }

    search = (text$: Observable<string>) => {
        return text$
            .debounceTime(300)
            .distinctUntilChanged()
            .do(() => this.searching = true)
            .switchMap(term =>
                this.authorService.search(term)
                    .do(() => this.searchFailed = false)
                    .catch(() => {
                        this.searchFailed = true;
                        return Observable.of([]);
                    }))
            .do(() => this.searching = false);
    };

    formatter = (a: Author) => {
        return a.firstName + " " + a.lastName;
    };

    addSelected() {
        if (this.selectedAuthor.authorId) {
            console.debug("Selected Author:", this.selectedAuthor);
        } else {
            console.debug("Selected Author:", "None yet");
        }
    }
}
