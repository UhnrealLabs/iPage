import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StorageService} from '../../_services/storage.service';
import { IndivBookPage} from '../indivbook/indivbook';
import { HomePage} from '../home/home';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {

    currentBooks = [];
    book : any;
    isFinished = false;
  
    constructor(
      public navCtrl: NavController,
      public storageService: StorageService
    ) {}
}