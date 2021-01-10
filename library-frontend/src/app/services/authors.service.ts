import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../models/Author';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  url!:string;
  books!:Book[];
  constructor(private http: HttpClient) {}

  getAuthors(): Observable<Author[]> {
    this.url = "/api/Author"
    return this.http.get<Author[]>(this.url);
  }

  getAuthorBooks(author:Author):Book[]{
    
    return this.books;
  }
}
