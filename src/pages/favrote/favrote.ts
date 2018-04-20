import { Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github-service';
import { ProfilePage } from '../profile/profile';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the FavrotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-favrote',
  templateUrl: 'favrote.html',
})
export class FavrotePage {

  private favroteList = [];

  constructor(public navCtrl: NavController,   public alertCtrl: AlertController, public navParams: NavParams,private _githubService: GithubServiceProvider) {
   
  }

  clearFavrote(){
    var that = this;
    let confirm = this.alertCtrl.create({
      title: 'Confirmation ?',
      message: 'Do you agree to delete all favroite search ?',
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
            that._githubService.removeFavroute();
            that.ionViewWillEnter();
          }
        }
      ]
    });
    confirm.present();
  }


  ionViewWillEnter() {
    this.favroteList = this._githubService.getFavrote();
  }  


  loadProfile(data){
    this.navCtrl.push(ProfilePage, data)
  }

}
