import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StorageService} from '../../_services/storage.service';
import { IndivBookPage} from '../indivbook/indivbook';

@Component({
  selector: 'page-about',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {

  books = [];

  constructor(public navCtrl: NavController, public storage: StorageService) {}

  openIndivBookPage (book) {
    this.navCtrl.push(IndivBookPage, {
    book_object: book }
  );
  }

  ngOnInit() {
    this.storage.getBooks().then((books) => {
      this.books = books;
    })
  }
}