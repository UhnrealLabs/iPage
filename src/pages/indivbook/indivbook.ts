import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StorageService } from '../../_services/storage.service';
import { NgFor } from '@angular/common/src/directives';
import * as moment from 'moment';

@Component({
  selector: 'page-indivbook',
  templateUrl: 'indivbook.html'  
})
export class IndivBookPage {
  book: any;
  seconds: number = 0;
  secondsPerPage: number = 0;
  totalDays: number = 0;
  pagesPerDay: number = 0;
  secondsPerDay: number = 0;
  minutesPerDay: number = 0;
  minutesLeftPerDay: number = 0;
  hoursPerDay: number = 0;
  secondsLeftPerDay: number = 0;
  hasClickedSubmit: boolean = false;
  canFinishBook: boolean = false;
  hasClickedStartReading: boolean = false;
  isReading = false;

  constructor(public navCtrl: NavController, private nav: NavParams, private storage: StorageService) {
    this.book = this.nav.get('book_object')
  }

  showTimePerDay () {
    this.hasClickedSubmit = true;
    if (this.hoursPerDay > 24) {
      this.canFinishBook = false;
    }
    else {
      this.canFinishBook = true;
    }
  }
  getTimePerDay () {
    // Math.ceil ... better to read too many pages than not enough.
    this.pagesPerDay = Math.ceil(this.book.volumeInfo.pageCount / this.totalDays);    
    this.secondsPerDay = (this.pagesPerDay * this.secondsPerPage);
    this.minutesPerDay = Math.floor(this.secondsPerDay / 60);
    this.minutesLeftPerDay = (this.minutesPerDay % 60)
    this.hoursPerDay = Math.floor(this.minutesPerDay / 60);    
    this.secondsLeftPerDay = (this.secondsPerDay % 60);
  }

  showMessage () {
    let currentTime = new Date();
    let futureTime = moment(currentTime).add(this.totalDays, 'days');
    if (moment(currentTime).isBefore(futureTime)) {
      this.isReading = true;
    }
    else if (moment(currentTime).isAfter(futureTime)) {
      this.isReading = false;
    }
  }

  sendReading () {
    this.showMessage();
    this.storage.storeReading(this.book, this.isReading).then(() => {
      this.storage.storeTimes(this.book, this.secondsPerDay);
    });
  }
  startReadingMessage () {
    var y = document.getElementById("isReadingMessage");
    y.className = "show";
    setTimeout(function() {y.className = y.className.replace("show","")}, 3000)
  }
}