import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github-service';
import { ProfilePage } from '../profile/profile';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage implements OnInit {
  
  private historyList = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public _githubService: GithubServiceProvider) {
  }

  ngOnInit(){
    this.historyList = this._githubService.getHistoryList();
    console.log( this.historyList);
  }

  clearHistory(){
    var that = this;

    let confirm = this.alertCtrl.create({
      title: 'Confirmation ?',
      message: 'Do you agree to delete all history search ?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            that._githubService.removeHistory();
            that.ngOnInit();
          }
        }
      ]
    });
    confirm.present();
  }

  
  loadProfile(data){
    this.navCtrl.push(ProfilePage, data)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
