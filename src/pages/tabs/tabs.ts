import { Component } from '@angular/core';

import { LibraryPage } from '../library/library';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LibraryPage;
  tab3Root = SearchPage;

  constructor() {

  }
}
