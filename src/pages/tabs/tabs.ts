import { Component } from '@angular/core';

import { LibraryPage } from '../library/library';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';
import { HistoryPage } from '../history/history';
import { PreviewPage} from '../preview/preview';
import { LoginPage} from '../login/login';
import { RegisterPage} from '../register/register';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LibraryPage;
  tab3Root = SearchPage;
  tab4Root = HistoryPage;
  tab5Root = LoginPage;
  tab6Root = RegisterPage;
  tab7Root = PreviewPage;


  constructor() {

  }
}
