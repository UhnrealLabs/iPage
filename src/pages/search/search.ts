import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { AddBookPage } from '../addbook/addbook';

import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  query: string = '';
  books: Array<Object> = [];

  inputSearch(query) {
    this.query = query.target.value;
    this.query = this.query.trim().replace(/\s/g, '+');

    this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${this.query}`)
      .toPromise().then((data) => {
        this.books = data.json().items

        // Important values:
        // Page Count: item.volumeInfo.pageCount
        // Description: item.volumeInfo.description
        // Authors: item.volumeInfo.authors
        // Title: item.volumeInfo.title
      })
  }

  addBook(book) {
    /*this.storage.get('books').then((books) => {
      if (books === null) {
        books = []
      }
      books.push(book)
      this.storage.set('books', books)
    })*/
    this.navCtrl.push(AddBookPage, {
      book_object: book
    })
  }

  constructor(public navCtrl: NavController, private http: Http, private storage: Storage) {

  }

}
