import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StorageService } from '../../_services/storage.service';
import { NgFor } from '@angular/common/src/directives';

@Component({
    selector: 'page-indivbook',
    templateUrl: 'indivbook.html'  
  })
  export class IndivBookPage {
    book = {};
    constructor(public navCtrl: NavController, private nav: NavParams, private storage: StorageService) {
      this.book = this.nav.get('book_object')
    }

  private newMethod(): string {
    return 'book_object';
  }
  }
  