import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StorageService } from '../../_services/storage.service';
import { NgFor } from '@angular/common/src/directives';
import { ShowWhen } from 'ionic-angular/components/show-hide-when/show-when';

@Component({
  selector: 'page-addbook',
  templateUrl: 'addbook.html'  
})
export class AddBookPage {
  book = {};
  books = [];
  constructor(public navCtrl: NavController, private nav: NavParams, private storage: StorageService) {
    this.book = this.nav.get('book_object');
  }
  addBook () {
    let copyBook: any = this.book;
    copyBook.isReading = false;
    this.storage.addBook(this.book);
  }
  addMessage () {
    var x = document.getElementById("bookmessage");
    x.className = "show";
    setTimeout(function() {x.className = x.className.replace("show","")}, 3000)
  }
}