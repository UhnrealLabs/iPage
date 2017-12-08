import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StorageService } from '../../_services/storage.service';
import { NgFor } from '@angular/common/src/directives';
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
  helperText: string = "Repeating Your Input";
  helperText2: string = "Giving You Your Calculations";
  helperText3: string = "Sign up for Notifications";
  helperText4: string = "";
  
  constructor(public navCtrl: NavController, private nav: NavParams, private storage: StorageService) {
    this.book = this.nav.get('book_object')
  }

  getInput () {
    this.helperText = (`You can read ${this.secondsPerPage} seconds per page and have ${this.totalDays} days to finish this book`);
  }
  getTimePerDay () {
    // Math.ceil ... better to read too many pages than not enough.
    this.pagesPerDay = Math.ceil(this.book.volumeInfo.pageCount / this.totalDays);    
    this.secondsPerDay = (this.pagesPerDay * this.secondsPerPage);
    this.minutesPerDay = Math.floor(this.secondsPerDay / 60);
    this.minutesLeftPerDay = (this.minutesPerDay % 60)
    this.hoursPerDay = Math.floor(this.minutesPerDay/ 60);    
    this.secondsLeftPerDay = (this.secondsPerDay % 60);
    this.helperText2 = (`At this pace, you would need to read ${this.pagesPerDay} pages in ${this.hoursPerDay} hours ${this.minutesLeftPerDay} minutes and ${this.secondsLeftPerDay} seconds each day to finish this book in ${this.totalDays} days.`);
    this.helperText3 = (`Please click the button below to receive daily notificaitons to read this book.`);
    if (this.hoursPerDay > 60) {
      this.helperText4 = ('You cannot finish this book before your deadline.');
    }
    else {
      this.helperText4 = ('Get on to reading!');
    }

  }
}