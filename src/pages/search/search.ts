import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github-service';
import 'rxjs/add/operator/map';
import { GithubUser } from '../../model/githubuser';
import { ProfilePage } from '../profile/profile';

@Component({
    selector: 'page-search',
    templateUrl: 'search.html',
})
export class SearchPage implements OnInit {
    @Input() githubUser: any = { "user": "", "userName": "", "repos": "" };
    @Output() userUpdated: EventEmitter<GithubUser> = new EventEmitter<GithubUser>();

    searchQuery: string = '';
    items: string[];
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private _githubService: GithubServiceProvider,
        public toastCtrl: ToastController) {
    }

    ngOnInit() {
        console.log(this.githubUser)
        if (this.githubUser) {
            this.githubUser.user = false;
            this.getUserInformation();
        }

    }

    searchUser() {
        setTimeout(function(){},2000)
        if (this.githubUser.userName && this.githubUser.userName.length > 4) {
            this._githubService.updateUser(this.githubUser.userName);
            this.getUserInformation();
        } else {
            this.githubUser.user = false;
        }
    }

    getUserInformation() {
        if (this.githubUser.userName && this.githubUser.userName.length > 0) {

            this._githubService.getUser().subscribe(user => {
                this.githubUser.user = user;
                this.userUpdated.emit(this.githubUser);
                this._githubService.addToHistory(this.githubUser);
                console.log(this.githubUser.user)
            },
                (err) => {
                    console.log('err:' + err);
                    this.githubUser.user = false;
                },
                () => console.log('Done')
            );



            this._githubService.getRepos().subscribe(repos => {
                // console.log(repos);
                this.githubUser.repos = repos;
                this.userUpdated.emit(this.githubUser);
            },
                (err) => {
                    console.log('err:' + err);
                    this.githubUser.user = false;
                },
                () => console.log('Done')
            );

        }
    }


    getItems(ev: any) {
        // Reset items back to all of the items

        // set val to the value of the searchbar
        let val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

    addtoFavrouties() {
        this._githubService.saveFavrote(this.githubUser);
        this.toastCtrl.create({
            message: 'profile added to favroites',
            duration: 3000
        }).present();
    }

    loadProfile(data) {
        this.navCtrl.push(ProfilePage, this.githubUser)
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad SearchPage');
    }

}
