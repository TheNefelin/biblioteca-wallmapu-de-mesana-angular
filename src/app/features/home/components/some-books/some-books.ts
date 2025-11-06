import { Component, inject, OnInit, signal } from '@angular/core';
import { BookService } from '../../../../shared/services/book-service';
import { Book } from '../../../../shared/models/book';
import { BookCardComponent } from '../../../../shared/components/book-card/book-card';
import { ActivatedRoute, RouterLink } from '@angular/router';
// import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-some-books',
  imports: [
    // JsonPipe,
    RouterLink,
    BookCardComponent,
  ],
  templateUrl: './some-books.html',
})
export class SomeBooksComponent implements OnInit {
  private bookService = inject(BookService);

  books = signal<Book[]>([]);

  ngOnInit() {
    this.bookService.getTopRandomBooks(10).subscribe(
      data => this.books.set(data)
    );      
  }
}
