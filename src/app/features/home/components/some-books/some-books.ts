import { Component, inject, signal } from '@angular/core';
import { BookService } from '../../../../shared/services/book-service';
import { Book } from '../../../../shared/models/book';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-some-books',
  imports: [
    // JsonPipe,
  ],
  templateUrl: './some-books.html',
})
export class SomeBooksComponent {
  private bookService = inject(BookService);
  books = signal<Book[]>([]);

  ngOnInit() {
    this.bookService.getTopRandomBooks(10).subscribe(
      data => this.books.set(data)
    );
  }
}
