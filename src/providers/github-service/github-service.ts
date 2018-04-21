import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GithubServiceProvider {
  private userName: string;
  private clientId: string = '60b9f23dedffbdfc476c';
  private clientSecret: string = 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a';
  private favrouteList: any = [];
  private historyList: any = [];

  constructor(public _http: HttpClient) {
    console.log('Hello GithubServiceProvider Provider');
    this.userName = '';
    this.favrouteList = [];
  }

  getUser() {
    if (this.userName) {
      return this._http.get('http://api.github.com/users/' + this.userName
        + '?client_id=' + this.clientId
        + '&client_secret=' + this.clientSecret)
        .map(resp => resp)
        .catch(this.handleError);
    }
  }

  getRepos() {
    if (this.userName) {
      return this._http.get('http://api.github.com/users/' + this.userName
        + '/repos?client_id=' + this.clientId
        + '&client_secret=' + this.clientSecret)
        .map(res => res)
        .catch(this.handleError);
    }

  }

  saveFavrote(obj) {    
    debugger;
    this.favrouteList = JSON.parse(localStorage.getItem("favrouteList")) || [];
    this.favrouteList.push(JSON.parse(JSON.stringify(obj)));
    localStorage.setItem("favrouteList", JSON.stringify(this.favrouteList));
  }

  getFavrote() {
    this.favrouteList = JSON.parse(localStorage.getItem("favrouteList")) || [];
    return this.favrouteList;
  }

  removeFavroute() {
    this.favrouteList = [];
    localStorage.removeItem("favrouteList")
    return [];
  }

  removeHistory() {
    this.historyList = [];
    localStorage.removeItem("historyList")
    return [];
  }

  addToHistory(obj) {
    this.historyList = JSON.parse(localStorage.getItem("historyList")) || [];
    this.historyList.push(JSON.parse(JSON.stringify(obj)));
    localStorage.setItem("historyList", JSON.stringify(this.historyList));
  }

  getHistoryList() {
    this.historyList = JSON.parse(localStorage.getItem("historyList")) || [];
    return this.historyList;
  }

  updateUser(userName: string) {
    this.userName = userName;
  }

  private handleError(error: any) {

    if (error.status === 401) {
      return Observable.throw(error.status);
    } else {
      return Observable.throw(error.status || 'Server error');
    }
  }

}
