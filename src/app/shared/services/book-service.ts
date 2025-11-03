import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getTopRandomBooks(limit: number = 10): Observable<Book[]> {
    return this.http.get<Book[]>('/assets/data/books.json')
      .pipe(
        map(books => this.getRandomBooks(books, limit))
      );
  }

  private getRandomBooks(books: Book[], limit: number): Book[] {
    return books
      .sort(() => Math.random() - 0.5)
      .slice(0, limit);
  }
}
