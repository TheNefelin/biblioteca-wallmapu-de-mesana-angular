import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../models/book';
import { BookFilters } from '../models/book-filter';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  // Obtener todos los libros (con paginación y filtros)
  getBooks(
    page: number = 1, 
    limit: number = 10, 
    filters?: BookFilters
  ): Observable<Book[]> {
    return this.http.get<Book[]>('/assets/data/books.json')
      .pipe(
        map(books => this.filterAndPaginateBooks(books, page, limit, filters))
      );
  }
  // Obtener libro por ID
  getBookById(id: string): Observable<Book | undefined> {
    return this.http.get<Book[]>('/assets/data/books.json')
      .pipe(
        map(books => books.find(b => b.id === id))
      );
  }

  // Obtener 10 aleatorios (como ahora)
  getTopRandomBooks(limit: number = 10): Observable<Book[]> {
    return this.http.get<Book[]>('/assets/data/books.json')
      .pipe(
        map(books => this.getRandomBooks(books, limit))
      );
  }

 private filterAndPaginateBooks(
    books: Book[], 
    page: number, 
    limit: number, 
    filters?: BookFilters
  ): Book[] {
    let filtered = books;

    if (filters?.author) {
      filtered = filtered.filter(b => 
        b.author.toLowerCase().includes(filters.author!.toLowerCase())
      );
    }
    if (filters?.title) {
      filtered = filtered.filter(b => 
        b.title.toLowerCase().includes(filters.title!.toLowerCase())
      );
    }
    if (filters?.category) {
      filtered = filtered.filter(b => b.category === filters.category);
    }
    if (filters?.editorial) {
      filtered = filtered.filter(b => b.editorial === filters.editorial);
    }

    const start = (page - 1) * limit;
    return filtered.slice(start, start + limit);
  }

  private getRandomBooks(books: Book[], limit: number): Book[] {
    return books.sort(() => Math.random() - 0.5).slice(0, limit);
  }
}
