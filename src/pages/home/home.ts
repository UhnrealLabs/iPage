import { Component, OnInit } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';
import { IndivBookPage} from '../indivbook/indivbook';
import { Storage } from '@ionic/storage';
import { StorageService } from '../../_services/storage.service';
import { secondsToTime, pagesEveryDay } from '../../time';
import { isCheckedProperty } from 'ionic-angular/util/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  currentBooks = [];
  finishedBooks = [];
  loading = true;
  book : any
  isCheckedProperty: any;
  doneReading: false;
  myDate: any;

  ngOnInit() {
    this.storage.get('books').then((books) => {
      console.log(books);
      this.currentBooks = books.filter((book) => {
        return book.isReading;
      });
      console.log(this.currentBooks);
    })
  }
  getPagesEveryDay(book) {
    return pagesEveryDay(book.pagesPerDay, book.totalDays)
  }
  getTimeOfBook(book) {
    return secondsToTime(book.durationLeft)
  }
  addToFinishedBooks(book) {
    this.finishedBooks.push(book);
    var myBookIndex = this.currentBooks.indexOf(book);
    this.currentBooks.splice(myBookIndex, 1);
  }
  getDateOfTermination() {
    this.finishedBooks.forEach(finishedBook => {
      var myDate = new Date();
      alert(myDate);
      });
    // how do I convert this date to the human readable form and make this "date" a property of the finishedBook? 
      // that way I can do what I want on the history page.
    // how do I pass this to my history page??
  }


  constructor(
    public navCtrl: NavController, private storage: Storage,
    public storageService: StorageService
  ) {
  }
}
