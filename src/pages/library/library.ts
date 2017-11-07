import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StorageService} from '../../_services/storage.service';

@Component({
  selector: 'page-about',
  templateUrl: 'library.html'
})
export class LibraryPage {
 
  constructor(public navCtrl: NavController, public storage: StorageService) {
  }

}
