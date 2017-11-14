import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StorageService} from '../../_services/storage.service';
import { IndivBookPage} from '../indivbook/indivbook';

@Component({
  selector: 'page-about',
  templateUrl: 'library.html'
})
export class LibraryPage {

  books = [];



  constructor(public navCtrl: NavController, public storage: StorageService) {
    this.storage.getBooks().then((books) => {
      this.books = books;
    })
  }
  openIndivBookPage (book) {
    this.navCtrl.push(IndivBookPage, {
    book_object: book }
  );
  }
}