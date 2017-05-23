import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {Author} from "../../../models/Author";
import {Observable} from "rxjs";
import {AuthorService} from "../../services/author.service";

@Component({
    selector: 'app-author-selector',
    templateUrl: './author-selector.component.html',
    styleUrls: ['./author-selector.component.css']
})
export class AuthorSelectorComponent implements OnInit {

    @Output() onAuthorsChanged = new EventEmitter();

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

    removeAuthor(id: number) {
        this.authors.forEach((a, index) => {
            if (a.authorId === id) {
                this.authors.splice(index, 1);
                return;
            }
        });
        this.onAuthorsChanged.emit(this.authors);
    }

    onSelectAuthor(item: any) {
        const selected: Author = item.item;
        console.debug("Item selected from lookahead", selected);
        if (selected && selected.authorId) {
            this.addAuthorIfNotExists(selected);
            this.onAuthorsChanged.emit(this.authors);
        }

        setTimeout(() => {
            this.clear();
        }, 100)
    }

    private addAuthorIfNotExists(author: Author) {
        let found: boolean = false;
        this.authors.forEach((a) => {
            if (a.authorId === author.authorId) {
                found = true;
                return;
            }
            1
        });
        if (!found) {
            console.debug("Added to authors", author);
            this.authors.push(author);
        }
    }

    clear() {
        this.selectedAuthor = null;
    }
}
