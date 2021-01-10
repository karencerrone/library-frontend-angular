import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url !: string;
  constructor(private http : HttpClient) { }

  getBooks(): Observable<Book[]> {
    this.url = "/api/Book"
    return this.http.get<Book[]>(this.url);
  }
}
