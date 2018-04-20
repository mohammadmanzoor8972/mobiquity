import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { HistoryPage } from '../history/history';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private searchPage = SearchPage;
  private historyPage = HistoryPage;
  constructor(public navCtrl: NavController) {
    
  }

}
