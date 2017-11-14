import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StorageService } from '../../_services/storage.service';
import { NgFor } from '@angular/common/src/directives';

@Component({
  selector: 'page-addbook',
  templateUrl: 'addbook.html'  
})
export class AddBookPage {
  book = {};
  constructor(public navCtrl: NavController, private nav: NavParams, private storage: StorageService) {
    this.book = this.nav.get('book_object');
  }
  addBook () {
    this.storage.addBook(this.book);
    }
  }
