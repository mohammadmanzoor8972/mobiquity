webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_github_service_github_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, navParams, alertCtrl, _githubService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this._githubService = _githubService;
        this.historyList = [];
    }
    HistoryPage.prototype.ionViewWillEnter = function () {
        this.historyList = this._githubService.getHistoryList();
        console.log(this.historyList);
    };
    HistoryPage.prototype.deleteHistoryItem = function (item) {
        console.log(item);
        this.historyList.splice(this.historyList.indexOf(item), 1);
    };
    HistoryPage.prototype.clearHistory = function () {
        var that = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirmation ?',
            message: 'Do you agree to delete all history search ?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        that._githubService.removeHistory();
                        that.historyList = that._githubService.getHistoryList();
                    }
                }
            ]
        });
        confirm.present();
    };
    HistoryPage.prototype.loadProfile = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], data);
    };
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"C:\Learn\ionic\mobiquity\src\pages\history\history.html"*/'<!--\n  Generated template for the FavrotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar>\n        <ion-navbar>\n            <ion-title>History</ion-title>\n          </ion-navbar>\n      <ion-buttons end>\n        <button ion-button icon-only color="royal" (click)="clearHistory()">\n          <ion-icon name="trash" ion-text color="light" *ngIf="historyList.length>0"  ></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n      <div *ngIf="historyList.length==0" center text-center padding>No history available</div>\n      <ion-list>\n          <ion-item-sliding *ngFor="let item of historyList;let i=index">\n           <ion-item (click)="loadProfile(item)">\n              <ion-avatar item-start>\n                <img src="{{item.user.avatar_url}}">\n              </ion-avatar>\n              <h2>{{item.user.name}}</h2>\n              <p>{{item.user.login}}</p>\n            </ion-item>\n            <ion-item-options side="right">\n              <button ion-button color="blue" (click)="deleteHistoryItem(item)">\n                <ion-icon name="delete"></ion-icon>\n                Delete\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"C:\Learn\ionic\mobiquity\src\pages\history\history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_github_service_github_service__["a" /* GithubServiceProvider */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__effects_validators_validator__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__effects_animations_sliding_entrances_slide_in_left_animation__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__effects_animations_sliding_entrances_slide_in_up_with_delay_animation__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { LoggerService } from '@services/log4ts/logger.service';


// import { SANTA_STATE_ANIMATION } from '@pages/animations/sliding-entrances/slide-in-santa.animation';
var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.component = __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */];
        this.santaState = 'in';
        this.credentialsForm = this.formBuilder.group({
            email: [
                'malam@mobiquity.co.us',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__effects_validators_validator__["a" /* regexValidators */].email), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
            ],
            password: [
                'India123#',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__effects_validators_validator__["a" /* regexValidators */].password), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
            ]
            /*
      
            email: [''],
            password: ['']
      
            email: ['', Validators.required],
            password: ['', Validators.required]
      
            email: [
              'chunkylover53@aol.com',
              Validators.compose([Validators.pattern(regexValidators.email), Validators.required])
            ],
            password: [
              'NoM@reSecrets1',
              Validators.compose([Validators.pattern(regexValidators.password), Validators.required])
            ]
      
            */
        });
    }
    SignInPage.prototype.ngOnInit = function () {
        //  this.logger.info('SignInPage: ngOnInit()');
        // this.setDisableScroll(true);
    };
    SignInPage.prototype.toggleSantaState = function () {
        if (this.santaState === 'in') {
            this.santaState = 'out';
        }
        else {
            this.santaState = 'in';
        }
        // this.logger.info('SignInPage: toggleSantaState(): ' + this.santaState);
    };
    /**
     * @param {boolean} disable  Show/Hide the vertical scrollbar
     *
     * @example
     * this.setDisableScroll(true);
     *
     * @returns {void}
     */
    SignInPage.prototype.setDisableScroll = function (disable) {
        var scroll = this.content.getScrollElement();
        scroll.style.overflowY = disable ? 'hidden' : 'scroll';
    };
    /*
  
    <ion-input [formControl]="credentialsForm.controls['email']"
               (keyup)="onKeyUp($event)"
               type="email">
    </ion-input>
  
    // const NUMBER_REGEXP = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/;
  
    public onKeyUp(event: any) {
  
      let newValue = event.target.value;
      let regExp = new RegExp(NUMBER_REGEXP);
  
      if (!regExp.test(newValue)) {
        event.target.value = newValue.slice(0, -1);
      }
    }
  
    public onKeyUp(event: any) {
  
      this.logger.info('SignInPage: onKeyUp()');
  
      let newValue = event.target.value;
  
      // Alphanumberic + space
      let regExp = new RegExp('^[A-Za-z0-9? ]+$');
  
      if (regExp.test(newValue)) {
        this.logger.info('value: ' + event.target.value);
      } else {
        event.target.value = newValue.slice(0, -1);
        this.logger.info('value: ' + event.target.value);
      }
    }
  
    */
    SignInPage.prototype.onSignIn = function () {
        this.submitted = true;
        // this.logger.info('SignInPage: onSignIn()');
        // this.logger.info('Email: ' + this.credentialsForm.controls['email'].value);
        // this.logger.info('Password: ' + this.credentialsForm.controls['password'].value);
        var navOptions = {
            animation: 'slide-transition'
        };
        if (this.credentialsForm.valid) {
            this.navCtrl.push(this.component, null, navOptions);
        }
    };
    SignInPage.prototype.onForgotPassword = function () {
        this.toggleSantaState();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], SignInPage.prototype, "content", void 0);
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"C:\Learn\ionic\mobiquity\src\pages\sign-in\sign-in.html"*/'<ion-header no-border>\n\n  <!--\n  <ion-navbar transparent>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n  -->\n\n</ion-header>\n\n<ion-content no-bounce padding>\n\n  <!-- Sign in -->\n\n  <ion-row class="app-icon-container">\n    <ion-col text-center>\n    \n      <img [@slideInUpWithDelay]="\'in\'" src="https://www.mobiquityinc.com/hs-fs/hubfs/si-images/global/Mobiquity-Logo.png?t=1523973945511&width=219&name=Mobiquity-Logo.png" />\n\n    </ion-col>\n  </ion-row>\n\n  <form [formGroup]="credentialsForm">\n\n    <!--\n    <ion-input doesn\'t support autofocus\n    -->\n    <ion-item [@slideInLeft]="\'in\'">\n      <ion-label floating>\n        Email\n      </ion-label>\n      <!--\n      <ion-input [formControl]="credentialsForm.controls[\'email\']"\n                 (keyup)="onKeyUp($event)"\n                 type="email">\n      </ion-input>\n\n      <ion-input [formControl]="credentialsForm.controls[\'email\']" type="email">\n      </ion-input>\n      -->\n      <ion-input [formControl]="credentialsForm.controls[\'email\']" type="email">\n      </ion-input>\n    </ion-item>\n\n    <div *ngIf="!credentialsForm.controls.email.valid &&\n        (credentialsForm.controls.email.dirty || submitted)" class="validator-error">\n      Please enter a valid email.\n    </div>\n\n    <ion-item [@slideInLeft]="\'in\'">\n      <ion-label floating>\n        Password\n      </ion-label>\n      <ion-input [formControl]="credentialsForm.controls[\'password\']" type="password"></ion-input>\n    </ion-item>\n\n    <div *ngIf="credentialsForm.controls.password.hasError(\'pattern\') &&\n        (credentialsForm.controls.password.dirty || submitted)"\n        class="validator-error">\n      Passwords should be at least 8 characters long and contain one number, one character and one special character.\n    </div>\n\n    <ion-row class="sign-in-button-container">\n      <ion-col text-center>\n        <button [@slideInLeft]="\'in\'" ion-button block color="secondary"\n                [disabled]="!credentialsForm.valid" (click)="onSignIn()">\n          Sign in\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col text-center>\n        <button [@slideInLeft]="\'in\'" ion-button clear color="light" (click)="onForgotPassword()">\n          Forgot your password?\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <div class="fab-container" style="padding-top: 80px;">\n        <ion-fab left bottom>\n          <button [@slideInLeft]="\'in\'" ion-fab color="primary"><ion-icon name="log-in"></ion-icon></button>\n          <ion-fab-list side="right">\n            <button ion-fab color="light"><ion-icon name="logo-facebook"></ion-icon></button>\n            <button ion-fab color="light"><ion-icon name="logo-twitter"></ion-icon></button>\n            <button ion-fab color="light"><ion-icon name="logo-googleplus"></ion-icon></button>\n            <button ion-fab color="light"><ion-icon name="logo-github"></ion-icon></button>\n          </ion-fab-list>\n        </ion-fab>\n      </div>\n    </ion-row>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Learn\ionic\mobiquity\src\pages\sign-in\sign-in.html"*/,
            animations: [__WEBPACK_IMPORTED_MODULE_5__effects_animations_sliding_entrances_slide_in_left_animation__["a" /* SLIDE_IN_LEFT_ANIMATION */], __WEBPACK_IMPORTED_MODULE_6__effects_animations_sliding_entrances_slide_in_up_with_delay_animation__["a" /* SLIDE_IN_UP_WITH_DELAY_ANIMATION */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SignInPage);
    return SignInPage;
}());

/*

 if (this.credentialsForm.dirty && this.credentialsForm.valid) {

  email: AbstractControl;

*/
//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favrote_favrote__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_history__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__favrote_favrote__["a" /* FavrotePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__history_history__["a" /* HistoryPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Learn\ionic\mobiquity\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab> \n  <ion-tab [root]="tab3Root" tabTitle="Favorite" tabIcon="star"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="History" tabIcon="alarm"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Setings" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Learn\ionic\mobiquity\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Learn\ionic\mobiquity\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <img src="./assets/imgs/giback.png"/>\n    <h3>What we do</h3>\n  <p>Mobiquity is a digital engagement provider for the world’s leading brands. We create compelling digital experiences to help you show you care to the people who matter most.</p>\n<h3>Our services</h3>\n<p>We offer end-to-end services to help our clients envision, deliver, and continuously improve digital experiences that show their users they really care.</p>\n</ion-content>\n'/*ion-inline-end:"C:\Learn\ionic\mobiquity\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_history__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.searchPage = __WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */];
        this.historyPage = __WEBPACK_IMPORTED_MODULE_3__history_history__["a" /* HistoryPage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Learn\ionic\mobiquity\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding  center text-center>\n\n \n <img src="./assets/imgs/github-profile.png"/>\n  <button ion-button [navPush]="searchPage" >Profile Search</button>\n  <button ion-button [navPush]="historyPage" >History</button>\n</ion-content>\n'/*ion-inline-end:"C:\Learn\ionic\mobiquity\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_github_service_github_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, _githubService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._githubService = _githubService;
        this.toastCtrl = toastCtrl;
        this.githubUser = { "user": "", "userName": "", "repos": "" };
        this.userUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.searchQuery = '';
    }
    SearchPage.prototype.ngOnInit = function () {
        console.log(this.githubUser);
        if (this.githubUser) {
            this.githubUser.user = false;
            this.getUserInformation();
        }
    };
    SearchPage.prototype.searchUser = function () {
        setTimeout(function () { }, 2000);
        if (this.githubUser.userName && this.githubUser.userName.length > 2) {
            this._githubService.updateUser(this.githubUser.userName);
            this.getUserInformation();
        }
        else {
            this.githubUser.user = false;
        }
    };
    SearchPage.prototype.getUserInformation = function () {
        var _this = this;
        if (this.githubUser.userName && this.githubUser.userName.length > 0) {
            this._githubService.getUser().subscribe(function (user) {
                _this.githubUser.user = user;
                _this.userUpdated.emit(_this.githubUser);
                _this._githubService.addToHistory(_this.githubUser);
                console.log(_this.githubUser.user);
            }, function (err) {
                console.log('err:' + err);
                _this.githubUser.user = false;
            }, function () { return console.log('Done'); });
            this._githubService.getRepos().subscribe(function (repos) {
                // console.log(repos);
                _this.githubUser.repos = repos;
                _this.userUpdated.emit(_this.githubUser);
            }, function (err) {
                console.log('err:' + err);
                _this.githubUser.user = false;
            }, function () { return console.log('Done'); });
        }
    };
    SearchPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SearchPage.prototype.addtoFavrouties = function () {
        this._githubService.saveFavrote(this.githubUser);
        this.toastCtrl.create({
            message: 'profile added to favroites',
            duration: 3000
        }).present();
    };
    SearchPage.prototype.loadProfile = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */], this.githubUser);
    };
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchPage.prototype, "githubUser", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SearchPage.prototype, "userUpdated", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\Learn\ionic\mobiquity\src\pages\search\search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Git Profile Search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <input type="text" name="username" class="form-control" placeholder="Enter A Github Username..." [(ngModel)]="githubUser.userName"\n    (keyup)="searchUser()"> -->\n  <ion-searchbar name="username" (ionInput)="searchUser($event)" placeholder="Enter A Github Username..." [(ngModel)]="githubUser.userName"></ion-searchbar>\n  <ion-list>\n    <ion-item>\n      <div *ngIf="githubUser && githubUser.user && (githubUser.userName && githubUser.userName.length > 0)">\n\n        <div class="card">\n        \n          <div class="card-block">\n            <div class="row">\n              <div class="col-xl-4 m-b-1">\n                <img src="{{githubUser.user.avatar_url}}" class="profile-img img-thumbnail m-b-1" />\n               \n              </div>\n\n              <ion-row>\n                  <ion-col>\n                      <button ion-button  center text-center (click)="loadProfile(githubUser)" >View Profile</button>\n                  </ion-col>\n                  <ion-col pull-right>\n                      <button ion-button center text-center (click)="addtoFavrouties()">Add to Favroties</button>\n                  </ion-col>                \n                </ion-row>\n\n             \n              <div class="col-xl-8">\n\n\n                <ul class="list-group">\n                  <li class="list-group-item">\n                    <b>Username: </b> {{githubUser.user.login}}</li>\n                  <li class="list-group-item">\n                    <b>Location: </b> {{githubUser.user.location}}</li>\n                  <li class="list-group-item">\n                    <b>E-Mail: </b> {{githubUser.user.email}}</li>\n                  <li class="list-group-item">\n                    <b>Blog Link: </b> {{githubUser.user.blog}}</li>\n                  <li class="list-group-item">\n                    <b>Member Since: </b> {{githubUser.user.created_at}}</li>\n                </ul>\n\n              </div>\n            </div>\n\n            <div class="status m-t-1">\n\n              <span class="p-a-05 bg-info text-xs-center"> {{githubUser.user.public_repos}} Public Repos </span>\n              <span class="p-a-05 bg-primary m-t-1 text-xs-center"> {{githubUser.user.public_gists}} Public Gists </span>\n              <span class="p-a-05 bg-danger m-t-1 text-xs-center"> {{githubUser.user.followers}} Followers </span>\n              <span class="p-a-05 bg-inverse m-t-1 text-xs-center"> {{githubUser.user.following}} Followings </span>\n\n\n            </div>\n\n          </div>\n        </div>\n\n\n\n      </div>\n    </ion-item>\n  </ion-list>\n  <div class="m-x-auto" *ngIf="githubUser.user == false && (githubUser.userName && githubUser.userName.length > 0)">\n\n    <div class="starter-template text-xs-center">\n      <h5>User Profile not found.</h5>\n      <p class="lead">Please enter a different\n        <b>username</b>.</p>\n    </div>\n\n  </div>\n\n  <div class="m-x-auto" *ngIf="(githubUser.userName.length == 0)">\n\n    <div class="starter-template text-xs-center center text-center">\n      <h5 center text-center>Search any user</h5>\n      <p class="lead" center text-center>Please enter a\n        <b>username</b>.</p>\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Learn\ionic\mobiquity\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_github_service_github_service__["a" /* GithubServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavrotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_github_service_github_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FavrotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavrotePage = /** @class */ (function () {
    function FavrotePage(navCtrl, alertCtrl, navParams, _githubService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this._githubService = _githubService;
        this.favroteList = [];
    }
    FavrotePage.prototype.clearFavrote = function () {
        var that = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirmation ?',
            message: 'Do you agree to delete all favroite search ?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        that._githubService.removeFavroute();
                        that.ionViewWillEnter();
                    }
                }
            ]
        });
        confirm.present();
    };
    FavrotePage.prototype.ionViewWillEnter = function () {
        this.favroteList = this._githubService.getFavrote();
    };
    FavrotePage.prototype.loadProfile = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], data);
    };
    FavrotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favrote',template:/*ion-inline-start:"C:\Learn\ionic\mobiquity\src\pages\favrote\favrote.html"*/'<!--\n  Generated template for the FavrotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar>\n        <ion-navbar>\n            <ion-title>Favroite</ion-title>\n          </ion-navbar>\n      <ion-buttons end>\n        <button ion-button icon-only color="royal" (click)="clearFavrote()">\n          <ion-icon name="trash" ion-text color="light" *ngIf="favroteList.length>0"  ></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="favroteList.length==0" center text-center padding>No favroite available</div>\n    <ion-list>\n        <ion-item-sliding *ngFor="let item of favroteList">\n          <ion-item (click)="loadProfile(item)">\n            <ion-avatar item-start>\n              <img src="{{item.user.avatar_url}}">\n            </ion-avatar>\n            <h2>{{item.user.name}}</h2>\n            <p>{{item.user.login}}</p>\n          </ion-item>\n          <ion-item-options side="right">\n            <button ion-button>\n              <ion-icon name="delete"></ion-icon>\n              Delete\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Learn\ionic\mobiquity\src\pages\favrote\favrote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_github_service_github_service__["a" /* GithubServiceProvider */]])
    ], FavrotePage);
    return FavrotePage;
}());

//# sourceMappingURL=favrote.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Learn\ionic\mobiquity\src\pages\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n\n        <ion-item>\n          <ion-label>Encryption</ion-label>\n          <ion-toggle [(ngModel)]="pepperoni"></ion-toggle>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Security</ion-label>\n          <ion-toggle [(ngModel)]="sausage" ></ion-toggle>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Notification</ion-label>\n          <ion-toggle [(ngModel)]="mushrooms"></ion-toggle>\n        </ion-item>\n      \n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Learn\ionic\mobiquity\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__effects_transitions_slide_transition__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_github_service_github_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_sign_in_sign_in__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_favrote_favrote__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_history_history__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_search_search__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// Bespoke Page Transitions

// Services

// All pages









var AppModule = /** @class */ (function () {
    function AppModule(config) {
        this.config = config;
        this.config.setTransition('slide-transition', __WEBPACK_IMPORTED_MODULE_9__effects_transitions_slide_transition__["a" /* SlideTransition */]);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_favrote_favrote__["a" /* FavrotePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_favrote_favrote__["a" /* FavrotePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_github_service_github_service__["a" /* GithubServiceProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Config */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sign_in_sign_in__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_sign_in_sign_in__["a" /* SignInPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Learn\ionic\mobiquity\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Learn\ionic\mobiquity\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return regexValidators; });
// The Angular email validator accepts an email like "rob@example", perhaps because "rob@localhost" could be valid.
// The pureEmail regex does not accept "ryan@example" as a valid email address, which I think is a good thing.
// See: EMAIL_REGEXP from https://github.com/angular/angular.js/blob/ffb6b2fb56d9ffcb051284965dd538629ea9687a/src/ng/directive/input.js#L16
var PURE_EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// Passwords should be at least 8 characters long and should contain one number, one character and one special character.
var PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
var regexValidators = {
    email: PURE_EMAIL_REGEXP,
    password: PASSWORD_REGEXP
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SLIDE_IN_LEFT_ANIMATION; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(43);

var SLIDE_IN_LEFT_ANIMATION = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('slideInLeft', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translate3d(0, 0, 0)' })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('void => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            opacity: 0,
            transform: 'translate3d(-100%, 0, 0)'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1s 500ms ease-in')
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('* => void', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1s 500ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            opacity: 0,
            transform: 'translate3d(0, 0, 0)'
        }))
    ])
]);
// https://angular.io/guide/animations#example-entering-and-leaving
// Note that in this case the styles are applied to the void state directly in the transition definitions, and not in
// a separate state(void) definition. Thus, the transforms are different on enter and leave: the element enters from
// the left and leaves to the right.
/*

export const SLIDE_IN_LEFT_ANIMATION =
  trigger('slideInLeft', [
      state('in', style({opacity: 1, transform: 'translate3d(0, 0, 0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translate3d(-100%, 0, 0)'
        }),
        animate('1s 500ms ease-in')
      ]),
      transition('* => void', [
        animate('1s 500ms ease-out', style({
          opacity: 0,
          transform: 'translate3d(0, 0, 0)'
        }))
      ])
    ]
  );

*/
//# sourceMappingURL=slide-in-left.animation.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SLIDE_IN_UP_WITH_DELAY_ANIMATION; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(43);

var SLIDE_IN_UP_WITH_DELAY_ANIMATION = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('slideInUpWithDelay', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translate3d(0, 0, 0)' })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('void => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            opacity: 0,
            transform: 'translate3d(0, 2000px, 0)'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('2s ease-in')
    ])
]);
// transform: 'translate3d(0, 100%, 0)'
/*

export const SLIDE_IN_UP_WITH_DELAY_ANIMATION =
  trigger('slideInUpWithDelay', [
      state('in', style({opacity: 1, transform: 'translate3d(0, 0, 0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translate3d(0, 2000px, 0)'
        }),
        animate('2s ease-in')
      ])
    ]
  );

*/
//# sourceMappingURL=slide-in-up-with-delay.animation.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_animations_animation__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_transitions_page_transition__ = __webpack_require__(29);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var TRANSLATEY = 'translateY';
var OFF_BOTTOM = '40px';
var CENTER = '0px';
var SHOW_BACK_BTN_CSS = 'show-back-button';
var SlideTransition = /** @class */ (function (_super) {
    __extends(SlideTransition, _super);
    function SlideTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlideTransition.prototype.init = function () {
        _super.prototype.init.call(this);
        var plt = this.plt;
        var enteringView = this.enteringView;
        var leavingView = this.leavingView;
        var opts = this.opts;
        // what direction is the transition going
        var backDirection = (opts.direction === 'back');
        if (enteringView) {
            if (backDirection) {
                this.duration(Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(opts.duration) ? opts.duration : 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
            }
            else {
                this.duration(Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(opts.duration) ? opts.duration : 280).easing('cubic-bezier(0.36,0.66,0.04,1)');
                this.enteringPage
                    .fromTo(TRANSLATEY, OFF_BOTTOM, CENTER, true)
                    .fromTo('opacity', 0.01, 1, true);
            }
            if (enteringView.hasNavbar()) {
                var enteringPageEle = enteringView.pageRef().nativeElement;
                var enteringNavbarEle = enteringPageEle.querySelector('ion-navbar');
                var enteringNavBar = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular_animations_animation__["a" /* Animation */](plt, enteringNavbarEle);
                this.add(enteringNavBar);
                var enteringBackButton = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular_animations_animation__["a" /* Animation */](plt, enteringNavbarEle.querySelector('.back-button'));
                this.add(enteringBackButton);
                if (enteringView.enableBack()) {
                    enteringBackButton.beforeAddClass(SHOW_BACK_BTN_CSS);
                }
                else {
                    enteringBackButton.beforeRemoveClass(SHOW_BACK_BTN_CSS);
                }
            }
        }
        // setup leaving view
        if (leavingView && backDirection) {
            // leaving content
            this.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
            var leavingPage = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular_animations_animation__["a" /* Animation */](plt, leavingView.pageRef());
            this.add(leavingPage.fromTo(TRANSLATEY, CENTER, OFF_BOTTOM).fromTo('opacity', 1, 0));
        }
    };
    return SlideTransition;
}(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_transitions_page_transition__["a" /* PageTransition */]));

// https://github.com/shprink/ionic-native-transitions
// https://github.com/ionic-team/ionic/issues/8186
//# sourceMappingURL=slide-transition.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GithubServiceProvider = /** @class */ (function () {
    function GithubServiceProvider(_http) {
        this._http = _http;
        this.clientId = '60b9f23dedffbdfc476c';
        this.clientSecret = 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a';
        this.favrouteList = [];
        this.historyList = [];
        console.log('Hello GithubServiceProvider Provider');
        this.userName = '';
        this.favrouteList = [];
    }
    GithubServiceProvider.prototype.getUser = function () {
        if (this.userName) {
            return this._http.get('http://api.github.com/users/' + this.userName
                + '?client_id=' + this.clientId
                + '&client_secret=' + this.clientSecret)
                .map(function (resp) { return resp; })
                .catch(this.handleError);
        }
    };
    GithubServiceProvider.prototype.getRepos = function () {
        if (this.userName) {
            return this._http.get('http://api.github.com/users/' + this.userName
                + '/repos?client_id=' + this.clientId
                + '&client_secret=' + this.clientSecret)
                .map(function (res) { return res; })
                .catch(this.handleError);
        }
    };
    GithubServiceProvider.prototype.saveFavrote = function (obj) {
        debugger;
        this.favrouteList = JSON.parse(localStorage.getItem("favrouteList")) || [];
        this.favrouteList.push(JSON.parse(JSON.stringify(obj)));
        localStorage.setItem("favrouteList", JSON.stringify(this.favrouteList));
    };
    GithubServiceProvider.prototype.getFavrote = function () {
        this.favrouteList = JSON.parse(localStorage.getItem("favrouteList")) || [];
        return this.favrouteList;
    };
    GithubServiceProvider.prototype.removeFavroute = function () {
        this.favrouteList = [];
        localStorage.removeItem("favrouteList");
        return [];
    };
    GithubServiceProvider.prototype.removeHistory = function () {
        this.historyList = [];
        localStorage.removeItem("historyList");
        return [];
    };
    GithubServiceProvider.prototype.addToHistory = function (obj) {
        this.historyList = JSON.parse(localStorage.getItem("historyList")) || [];
        this.historyList.push(JSON.parse(JSON.stringify(obj)));
        localStorage.setItem("historyList", JSON.stringify(this.historyList));
    };
    GithubServiceProvider.prototype.getHistoryList = function () {
        this.historyList = JSON.parse(localStorage.getItem("historyList")) || [];
        return this.historyList;
    };
    GithubServiceProvider.prototype.updateUser = function (userName) {
        this.userName = userName;
    };
    GithubServiceProvider.prototype.handleError = function (error) {
        if (error.status === 401) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.status);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.status || 'Server error');
        }
    };
    GithubServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GithubServiceProvider);
    return GithubServiceProvider;
}());

//# sourceMappingURL=github-service.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.ngOnInit = function () {
        this.githubUser = this.navParams.data;
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Learn\ionic\mobiquity\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    \n    <div class="row">\n    \n        <div class="col-md-5">\n            <div *ngIf="githubUser && githubUser.user && (githubUser.userName && githubUser.userName.length > 0)">\n    \n                <div class="card">\n                    <h4 class="card-header" center text-center>{{githubUser.user.name}}</h4>\n                    <div class="card-block">\n                        <div class="row">\n                            <div class="col-xl-4 m-b-1">\n                                <img src="{{githubUser.user.avatar_url}}" class="profile-img img-thumbnail m-b-1" />\n                                <a class="btn btn-sm btn-outline-primary btn-block m-t-1" href="{{githubUser.user.html_url}}" target="_blank">View Profile</a>\n                            </div>\n    \n                            <div class="col-xl-8">\n    \n    \n                                <ul class="list-group">\n                                    <li class="list-group-item"><b>Username: </b> {{githubUser.user.login}}</li>\n                                    <li class="list-group-item"><b>Location: </b> {{githubUser.user.location}}</li>\n                                    <li class="list-group-item"><b>E-Mail: </b> {{githubUser.user.email}}</li>\n                                    <li class="list-group-item"><b>Blog Link: </b> {{githubUser.user.blog}}</li>\n                                    <li class="list-group-item"><b>Member Since: </b> {{githubUser.user.created_at}}</li>\n                                </ul>\n    \n                            </div>\n                        </div>\n    \n                        <div class="status m-t-1">\n    \n                            <span class="p-a-05 bg-info text-xs-center"> {{githubUser.user.public_repos}} Public Repos </span>\n                            <span class="p-a-05 bg-primary m-t-1 text-xs-center"> {{githubUser.user.public_gists}} Public Gists </span>\n                            <span class="p-a-05 bg-danger m-t-1 text-xs-center"> {{githubUser.user.followers}} Followers </span>\n                            <span class="p-a-05 bg-inverse m-t-1 text-xs-center"> {{githubUser.user.following}} Followings </span>\n    \n    \n                        </div>\n    \n                    </div>\n                </div>\n    \n    \n    \n            </div>\n    \n        </div>\n        <div class="col-md-7">\n    \n            <div *ngIf="githubUser && githubUser.user && (githubUser.userName && githubUser.userName.length > 0)">\n                <div class="card">\n                    <h5 class="card-header">Repos</h5>\n                    <div class="card-block">\n    \n                        <div class="list-group">\n    \n                            <a *ngFor="let repo of githubUser.repos" href="{{repo.html_url}}" target="_blank" class="list-group-item list-group-item-action">\n                                <span class="tag tag-info pull-xs-right">{{repo.watchers}} Watchers</span>\n                                <span class="tag tag-success pull-xs-right m-r-05">{{repo.forks}} Forks</span>\n                                <h6 class="list-group-item-heading">{{repo.name}}</h6>\n                                <p class="list-group-item-text">{{repo.description}}</p>\n                            </a>\n    \n    \n                        </div>\n    \n                    </div>\n                </div>\n            </div>\n    \n        </div>\n    \n    </div>\n    \n    \n</ion-content>\n'/*ion-inline-end:"C:\Learn\ionic\mobiquity\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map