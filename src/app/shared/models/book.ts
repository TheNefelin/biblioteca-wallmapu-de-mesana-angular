export interface Book {
  id: string;
  title: string;
  description: string;
  author: string;
  publishedDate: Date;
  isbn: string;
  coverImageUrl: string;
  stars: number;
  category?: string;
  editorial?: string;
}
