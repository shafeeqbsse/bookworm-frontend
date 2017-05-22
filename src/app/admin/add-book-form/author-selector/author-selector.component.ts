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

            this.addAuthorIfNotExists(this.selectedAuthor);
            console.debug("Selected Author:", this.selectedAuthor);
            this.selectedAuthor = null;
            console.log("Authors:", this.authors);
        } else {
            console.debug("Selected Author:", "None yet");
        }
    }

    removeAuthor(id: number) {
        this.authors.forEach((a, index) => {
            if (a.authorId === id) {
                this.authors.splice(index, 1);
                return;
            }
        })
    }

    private addAuthorIfNotExists(author: Author) {

        let found: boolean = false;
        this.authors.forEach((a) => {
            if (a.authorId === author.authorId) {
                found = true;
                return;
            }
        });

        if (!found) {
            this.authors.push(author);
        }
    }

    onSelectAuthor(item: any) {
        const selected: Author = item.item;
        console.debug("Item selected from lookahead", selected);
        if (selected.authorId) {
            this.addAuthorIfNotExists(selected);
            console.debug("Selected Author:", selected);
            this.selectedAuthor = null;
            console.log("Authors:", this.authors);
        } else {
            console.debug("Selected Author:", "None yet");
        }

        setTimeout(() => {
            this.clear();
        }, 100)
    }

    clear() {
        console.debug("Clear called in author selector");
        this.selectedAuthor = null;
    }
}
