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
  secondsLeftPerDay: number = 0;
  helperText: string = "";
  helperText2: string = "";
  helperText3: string = "";
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
    this.secondsLeftPerDay = Math.floor(this.secondsPerDay % 60);
    this.helperText2 = (`At this pace, you would need to read ${this.pagesPerDay} pages in ${this.minutesPerDay} minutes and ${this.secondsLeftPerDay} seconds each day to finish this book in ${this.totalDays} days.`);
    this.helperText3 = (`Please click the button below to receive daily notifications to read your book. Otherwise, daily reminders will be posted in the "Today" tab for each book you read.`)
  }
}