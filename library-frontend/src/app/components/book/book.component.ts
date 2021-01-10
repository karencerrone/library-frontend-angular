import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() bookParam!: Book;

  constructor() { }

  ngOnInit(): void {
  }

  setCssClasses(): any {
    const cssClasses: any = {
      clase1: true,
      clase2: this.bookParam.IsBorrowed
    };
    return cssClasses;
  }

}
