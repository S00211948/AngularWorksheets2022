import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { DummybookService } from '../dummybook.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private BookService: DummybookService) {}
  books: Book[] = [];
  message: String = ''


  ngOnInit(): void 
  {
    this.BookService.getBooks().subscribe({
      next: (value: Book[]) => this.books = value,
      complete: () => console.log('book service finished'),
      error: (message) => this.message = message}) 
  }

}
