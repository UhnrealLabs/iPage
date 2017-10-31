import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  loading = true;

  ngOnInit() {
    this.storage.get('books').then((books) => {
      console.log(books);
    })
  }

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

}
