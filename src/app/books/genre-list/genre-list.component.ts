import {Component, OnInit} from '@angular/core';
import {GenreService} from "../services/genre.service";
import {Genre} from "../../models/Genre";

@Component({
    selector: 'app-genre-list',
    templateUrl: './genre-list.component.html',
    styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {

    genres: Array<Genre>;

    constructor(private genreService: GenreService) {
    }

    ngOnInit() {
        this.genreService.getGenres().subscribe(
            result => {
                this.genres = result;
            },
            error => {
                console.error("Failed to get genres!", error);
            }
        )
    }
}
