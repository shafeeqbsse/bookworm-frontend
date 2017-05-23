import {Review} from "./Review";

export class BookData {
    bookId: number;
    authors: Array<any>;
    description: string;
    format: string;
    genre: string;
    isbn: string;
    pages: number;
    price: number;
    publisher: any;
    reviews: Array<Review>;
    stock: number;
    title: string;
}
