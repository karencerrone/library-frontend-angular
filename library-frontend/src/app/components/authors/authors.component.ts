import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/models/Author';
import { Book } from 'src/app/models/Book';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  @Input() authorParam!:Author;
  authors!: Author[];
  books!: Book[];
  constructor(private authorsService: AuthorsService) {}

  ngOnInit(): void {
    this.authorsService.getAuthors().subscribe(a => console.log(a));
    this.authorsService.getAuthors().subscribe(a => this.authors=a);
  }
}
