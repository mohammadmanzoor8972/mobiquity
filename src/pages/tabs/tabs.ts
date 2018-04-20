import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { FavrotePage } from '../favrote/favrote';
import { SettingsPage } from '../settings/settings';
import { HistoryPage } from '../history/history';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = FavrotePage;
  tab4Root = SettingsPage;
  tab5Root = HistoryPage

  constructor() {

  }
}
