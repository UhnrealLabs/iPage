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
import { HistoryPage} from '../pages/history/history';
import { PreviewPage} from '../pages/preview/preview';
import { LoginPage} from '../pages/login/login';
import { RegisterPage} from '../pages/register/register';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
const firebaseAuth = {
  apiKey: "AIzaSyDpgZOOMmjQp2QLJXvDKBv-uDRt5Ad-iq4",
  authDomain: "ipage-d0be0.firebaseapp.com",
  databaseURL: "https://ipage-d0be0.firebaseio.com",
  projectId: "ipage-d0be0",
  storageBucket: "ipage-d0be0.appspot.com",
  messagingSenderId: "956796096726"
};


@NgModule({
  declarations: [
    MyApp,
    LibraryPage,
    SearchPage,
    HomePage,
    TabsPage,
    AddBookPage,
    IndivBookPage,
    HistoryPage,
    LoginPage,
    RegisterPage,
    PreviewPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LibraryPage,
    SearchPage,
    HomePage,
    TabsPage,
    AddBookPage,
    IndivBookPage,
    HistoryPage,
    LoginPage, 
    RegisterPage, 
    PreviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StorageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
