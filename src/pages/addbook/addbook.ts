import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-addbook',
  templateUrl: 'addbook.html'
})
export class AddBookPage {
  book = {};
  constructor(public navCtrl: NavController, private nav: NavParams, private storage: Storage) {
    this.book = this.nav.get('book_object');
  }
}
