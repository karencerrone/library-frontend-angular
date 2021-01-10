import { Book } from "./Book";

export class Author {
    Id!: number;
    Name!: string;
    Books!: Book[];
}