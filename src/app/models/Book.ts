import {Author} from "./Author";
import {Publisher} from "./Publisher";
import {Review} from "./Review";

export class Book {
    bookId: number;
    authors: Array<Author>;
    description: string;
    format: string;
    genre: string;
    isbn: string;
    pages: number;
    price: number;
    publisher: Publisher;
    reviews: Array<Review>;
    stock: number;
    title: string;
}
