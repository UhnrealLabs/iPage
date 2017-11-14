import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { LibraryPage } from '../pages/library/library';
import { SearchPage } from '../pages/search/search';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddBookPage } from '../pages/addbook/addbook';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StorageService } from '../_services/storage.service';
import { IndivBookPage} from '../pages/indivbook/indivbook';
@NgModule({
  declarations: [
    MyApp,
    LibraryPage,
    SearchPage,
    HomePage,
    TabsPage,
    AddBookPage,
    IndivBookPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LibraryPage,
    SearchPage,
    HomePage,
    TabsPage,
    AddBookPage,
    IndivBookPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StorageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
