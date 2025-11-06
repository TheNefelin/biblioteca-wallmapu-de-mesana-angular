import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../shared/services/book-service';
import { Book } from '../../shared/models/book';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  imports: [
    DatePipe,
  ],
  templateUrl: './book-detail.html',
  host: { 'ngSkipHydration': 'true' }
})
export class BookDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private bookService = inject(BookService);

  book = signal<Book | undefined>(undefined);
  loading = signal(true);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.bookService.getBookById(id).subscribe({
        next: (data) => {
          this.book.set(data);
          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
        }
      });
    }
  }  
}
