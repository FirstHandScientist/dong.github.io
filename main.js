(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _pubs_pubs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pubs/pubs.component */ "./src/app/pubs/pubs.component.ts");
/* harmony import */ var _research_research_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./research/research.component */ "./src/app/research/research.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'publications', component: _pubs_pubs_component__WEBPACK_IMPORTED_MODULE_3__["PubsComponent"] },
    { path: 'biography', component: _bio_bio_component__WEBPACK_IMPORTED_MODULE_5__["BioComponent"] },
    { path: 'research', component: _research_research_component__WEBPACK_IMPORTED_MODULE_4__["ResearchComponent"] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    anchorScrolling: 'disabled',
                    scrollPositionRestoration: 'disabled'
                })
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-light bg-light shadow-sm\">\n  <div class=\"container-fluid mx-auto\">\n\n    <a class=\"navbar-brand p-0\" routerLink=\"\">\n      Dong Liu\n    </a>\n\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" aria-controls=\"collapseToggler\" [attr.aria-expanded]=\"!isCollapsed\" aria-label=\"Toggle navigation\" (click)=\"toggleMenu()\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"collapseToggler\" [ngbCollapse]=\"isCollapsed\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item mx-1\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a class=\"nav-link\" routerLink=\"\">\n            <fa-icon [icon]=\"faHome\" size=\"lg\"></fa-icon> Home\n          </a>\n        </li>\n        <!-- <li class=\"nav-item mx-1\" routerLinkActive=\"active\"> -->\n        <!--   <a class=\"nav-link\" routerLink=\"cv\"> -->\n        <!--     <fa-icon [icon]=\"faUser\" size=\"lg\"></fa-icon> Curriculum Vitae -->\n        <!--   </a> -->\n        <!-- </li> -->\n        <!-- <li class=\"nav-item mx-1\" routerLinkActive=\"active\"> -->\n        <!--   <a class=\"nav-link\" routerLink=\"biography\"> -->\n        <!--     <fa-icon [icon]=\"faUser\" size=\"lg\"></fa-icon> Bio -->\n        <!--   </a> -->\n        <!-- </li> -->\n        <!-- <li class=\"nav-item mx-1\" routerLinkActive=\"active\"> -->\n        <!--   <a class=\"nav-link\" routerLink=\"research\"> -->\n        <!--     <fa-icon [icon]=\"faPuzzlePiece\" size=\"lg\"></fa-icon> Research -->\n        <!--   </a> -->\n        <!-- </li> -->\n        <li class=\"nav-item mx-1\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"publications\">\n            <fa-icon [icon]=\"faFile\" size=\"lg\"></fa-icon> Publications\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n</nav>\n\n<div class=\"container-fluid mx-auto pt-3\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppComponent, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _pubs_pubs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pubs/pubs.component */ "./src/app/pubs/pubs.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _research_research_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./research/research.component */ "./src/app/research/research.component.ts");
/* harmony import */ var _citation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./citation.service */ "./src/app/citation.service.ts");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./news.service */ "./src/app/news.service.ts");
/* harmony import */ var _publication_publication_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./publication/publication.component */ "./src/app/publication/publication.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isCollapsed = true;
        // icons
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faHome"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"];
        this.faPuzzlePiece = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPuzzlePiece"];
        this.faFile = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faFile"];
        this.faGamepad = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGamepad"];
    }
    AppComponent.prototype.toggleMenu = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                AppComponent,
                _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                _pubs_pubs_component__WEBPACK_IMPORTED_MODULE_9__["PubsComponent"],
                _bio_bio_component__WEBPACK_IMPORTED_MODULE_10__["BioComponent"],
                _research_research_component__WEBPACK_IMPORTED_MODULE_11__["ResearchComponent"],
                _pubs_pubs_component__WEBPACK_IMPORTED_MODULE_9__["FilteredPipe"],
                _publication_publication_component__WEBPACK_IMPORTED_MODULE_14__["PublicationComponent"],
                _publication_publication_component__WEBPACK_IMPORTED_MODULE_14__["BibtexmodalComponent"],
            ],
            entryComponents: [
                _publication_publication_component__WEBPACK_IMPORTED_MODULE_14__["BibtexmodalComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]
            ],
            providers: [
                _citation_service__WEBPACK_IMPORTED_MODULE_12__["CitationService"],
                _news_service__WEBPACK_IMPORTED_MODULE_13__["NewsService"]
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bio/bio.component.html":
/*!****************************************!*\
  !*** ./src/app/bio/bio.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\nquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\nconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\ncillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\nproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\nquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\nconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\ncillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\nproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"

/***/ }),

/***/ "./src/app/bio/bio.component.ts":
/*!**************************************!*\
  !*** ./src/app/bio/bio.component.ts ***!
  \**************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BioComponent = /** @class */ (function () {
    function BioComponent() {
    }
    BioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bio',
            template: __webpack_require__(/*! ./bio.component.html */ "./src/app/bio/bio.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BioComponent);
    return BioComponent;
}());



/***/ }),

/***/ "./src/app/citation.service.ts":
/*!*************************************!*\
  !*** ./src/app/citation.service.ts ***!
  \*************************************/
/*! exports provided: CitationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitationService", function() { return CitationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// get data of publiction
function getDate(pub) {
    if (pub.Fields.Month) {
        return new Date(Date.parse(pub.Fields.Month + " 1, " + pub.Fields.Year));
    }
    else {
        return new Date(Date.parse("Jan 1, " + pub.Fields.Year));
    }
}
// replace all but last occurrence of token
function replaceAllButLast(str, token) {
    if (str.indexOf(token) == -1) {
        return str;
    }
    var parts = str.split(token);
    return parts.slice(0, -1) + token + parts.slice(-1);
}
// handle list of references
function handleData(rawdata) {
    var rawjson = BibtexParser(rawdata).entries;
    // Remove `and' between authors
    for (var index in rawjson) {
        rawjson[index].Fields.Author_noand =
            replaceAllButLast(rawjson[index].Fields.Author, ' and');
    }
    return rawjson.sort(function (e1, e2) { return -getDate(e1).getTime() + getDate(e2).getTime(); });
}
// filter complete list by cite keys
function subset(publist, keys) {
    return publist.filter(function (entry) { return keys.findIndex(function (key) { return key == entry.EntryKey; }) >= 0; });
}
var CitationService = /** @class */ (function () {
    function CitationService(http) {
        this.http = http;
    }
    // return publications matching citekey
    CitationService.prototype.citeSubset = function (keys) {
        return this.citeAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (publist) { return subset(publist, keys); }));
    };
    // return all publications sorted by date (descending)
    CitationService.prototype.citeAll = function () {
        return this.http.get('assets/bibfile.bib', { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rawdata) { return handleData(rawdata); }));
    };
    CitationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CitationService);
    return CitationService;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-8 col-12 order-last order-sm-first\">\n    <p>\n      I am a Ph.D. candidate in the division of Information Science of Engineering at KTH Royal Institute of Technology. <br>\n      My research interests include probabilistic graphical models, Bayesian inference, machine learning, optimization. I also worked with stochastic models and complex networks. The algorithms/models of my research work are applicable to a wide variety of problems, and demonstrated cases include data representation, image processing, speech recognition, communication networks, social networks. My recent work is mainly on the practical inference & learning algorithm/model development within probabilistic graphical models.\n      <br>\n\n    </p>\n\n\n    <h4> Software/Codes </h4>\n    <p> Software associated with a paper can be found on its corresponding page </p>\n    <ul>\n      <li>\n        <a style=\"padding-right: 1px;\" href=\"\">RENN</a>: a inference neural network. To be released soon.\n      </li>\n      <li>\n        <a style=\"padding-right: 1px;\" href=\"https://github.com/FirstHandScientist/genhmm\">GenHMM</a>: a neural network based hidden Markov model.\n      </li>\n      <li>\n        <a style=\"padding-right: 1px;\" href=\"https://github.com/FirstHandScientist/EM-GM\">GenMM</a>: a mixture of normalizing flow models within expectation maximization.\n      </li>\n      <li>\n        <a style=\"padding-right: 1px;\" href=\"https://github.com/FirstHandScientist/amp\">AlphaBP</a>: a message passing algorithm.\n      </li>\n      <li>\n        <a style=\"padding-right: 1px;\" href=\"https://github.com/FirstHandScientist/eotgms\">EOTGM/EOTGAN</a>: A generative model trained with optimal transport.\n      </li>\n    </ul>\n\n\n    <h4> Research Literature Collection </h4>\n    A collection of literature that I find delightful to read, please check this <a style=\"padding-right: 1px;\" href=\"https://github.com/FirstHandScientist/mind_map\"> repos </a> out. To be released.\n    <h4> Teaching </h4>\n    <p> I am the teaching assistant for the graduate course\n      <a href=\"https://www.kth.se/student/kurser/kurs/EQ2341?l=en\"> Pattern Recognition and Machine Learning, EECS, KTH, in 2017-2020 </a>. The graduated course considers fundamental and advanced Bayesian methods for classification tasks in pattern recognition </p>\n\n   <!-- <h3 class=\"mt-2\">Recent News</h3> -->\n    <!-- <ul class=\"list-group\"> -->\n    <!--   <li class=\"list-group-item p-2\" *ngFor=\"let item of news_items.slice(0, news_number)\" [innerHTML]=item></li> -->\n    <!--   <li class=\"list-group-item p-2 btn btn-sm text-left mt-1 color-theme\" *ngIf=\"news_number < news_items.length\" (click)=\"news_number = news_number+5\">More</li> -->\n    <!-- </ul> -->\n\n  </div>\n\n  <div class=\"col-sm-4 col-12 order-first order-sm-last\">\n    <!-- profile image here -->\n    <!-- <img id=\"portrait\" class=\"img-fluid rounded\" src=\"https://via.placeholder.com/200\"> -->\n    <h3>Dong Liu <br>\n      <small><em> Ph.D. Canditate <br>\n          KTH Royal Institute of Technology, Stockholm, Sweden.</em></small></h3>\n\n    <h5>\n      <a href=\"assets/cv/cv_Dong.pdf\">My Curriculum Vitae</a>\n    </h5>\n    <br>\n    <a style=\"padding-right: 1px;\" ngbPopover=\"Malvinas Väg 10, Stockholm\" placement=\"bottom\"> <fa-icon [icon]=\"faUniversity\" size=\"2x\"></fa-icon>Office Address</a>\n    <br>\n    <a style=\"padding-right: 1px;\" ngbPopover=\"doli@kth.se\" placement=\"bottom\"><fa-icon [icon]=\"faEnvelopeSquare\" size=\"2x\"></fa-icon>Email</a>\n    <br>\n    <!-- <a style=\"padding-right: 1px;\" ngbPopover=\"phone\" placement=\"bottom\"><fa-icon [icon]=\"faPhoneSquare\" size=\"2x\"></fa-icon></a> -->\n    <a style=\"padding-right: 1px;\" href=\"https://github.com/FirstHandScientist\"><fa-icon [icon]=\"faGithubSquare\" size=\"2x\"></fa-icon>Github</a>\n    <br>\n    <a style=\"padding-right: 1px;\" href=\"https://www.linkedin.com/in/dong-liu-59ab12a1/\"><fa-icon [icon]=\"faLinkedin\" size=\"2x\"></fa-icon>LinkedIn</a>\n    <!-- <a style=\"padding-right: 1px;\" href=\"https://orcid.org/\"><i class=\"ai ai-orcid-square ai-2x\"></i></a>&ensp; -->\n    <br>\n    <a style=\"padding-right: 1px;\" href=\"https://scholar.google.com/citations?user=eK9LoQMAAAAJ&hl=en\"><i class=\"ai ai-google-scholar-square ai-2x\"></i>Google Scholar</a>\n\n  </div>\n\n</div>\n\n<br />\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = /** @class */ (function () {
    function MainComponent(newsService) {
        this.newsService = newsService;
        // icons
        this.faUniversity = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUniversity"];
        this.faEnvelopeSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelopeSquare"];
        this.faPhoneSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPhoneSquare"];
        this.faGithubSquare = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGithubSquare"];
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLinkedin"];
        this.news_items = [];
        this.news_number = 5;
    }
    MainComponent.prototype.populateNews = function (news_items) {
        this.news_items = news_items;
    };
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getNews()
            .subscribe(function (response) { return _this.populateNews(response); });
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html")
        }),
        __metadata("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/news.service.ts":
/*!*********************************!*\
  !*** ./src/app/news.service.ts ***!
  \*********************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



function separate(data) {
    return data.replace(/\r\n/g, "\r").replace(/\n/g, "\r").split(/\r/).filter(function (i) { return i.length; });
}
var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
    }
    NewsService.prototype.getNews = function () {
        return this.http.get('assets/news.txt', { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return separate(data); }));
    };
    NewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/publication/publication.component.css":
/*!*******************************************************!*\
  !*** ./src/app/publication/publication.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pubButtons > a.badge {\r\n  color: white;\r\n  background-color: #428bca;\r\n  cursor: pointer;\r\n  margin-right: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljYXRpb24vcHVibGljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHViQnV0dG9ucyA+IGEuYmFkZ2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/publication/publication.component.html":
/*!********************************************************!*\
  !*** ./src/app/publication/publication.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span [ngSwitch]=\"pub_data.EntryType\">\n\t\n\t<span (click) = \"show_more = !show_more\">\n\t\t\n\t\t<a id={{pub_data.EntryKey}}>\n\n\t\t<span *ngSwitchCase=\"'article'\">\n\t\t\t{{pub_data.Fields.Author_noand}}, <strong>{{pub_data.Fields.Title}}</strong>, \n\t\t\t<em>{{pub_data.Fields.Journal}}</em>, \n\t\t\t<span *ngIf=\"pub_data.Fields.Volume\">vol. {{pub_data.Fields.Volume}}, </span>\n\t\t\t<span *ngIf=\"pub_data.Fields.Number\">no. {{pub_data.Fields.Number}}, </span>\n\t\t\t<span *ngIf=\"pub_data.Fields.Pages\">pp. {{pub_data.Fields.Pages}}, </span>\n\t\t\t{{pub_data.Fields.Year}} \n\t\t</span>\n\n\t\t<span *ngSwitchCase=\"'inproceedings'\">\n\t\t\t{{pub_data.Fields.Author_noand}}, <strong>{{pub_data.Fields.Title}}</strong>, in <em>{{pub_data.Fields.Booktitle}}</em>,\n\t\t\t<span *ngIf=\"pub_data.Fields.Pages\">pp. {{pub_data.Fields.Pages}},</span> {{pub_data.Fields.Year}}\n\t\t</span>\n\n\t\t<span *ngSwitchCase=\"'incollection'\">\n\t\t\t{{pub_data.Fields.Author_noand}}, <strong>{{pub_data.Fields.Title}}</strong>, in <em>{{pub_data.Fields.Booktitle}}</em>,\n\t\t\t<span *ngIf=\"pub_data.Fields.Pages\">pp. {{pub_data.Fields.Pages}},</span> {{pub_data.Fields.Year}}\n\t\t</span>\n\n\t\t<span *ngSwitchCase=\"'phdthesis'\">\n\t\t\t{{pub_data.Fields.Author_noand}}, <strong>{{pub_data.Fields.Title}}</strong>, Ph.D thesis at <em>{{pub_data.Fields.School}}</em>, {{pub_data.Fields.Year}}\t\n\t\t</span>\n\n\t\t<span *ngSwitchCase=\"'mastersthesis'\">\n\t\t\t{{pub_data.Fields.Author_noand}}, <strong>{{pub_data.Fields.Title}}</strong>, <span *ngIf=\"pub_data.Fields.Type\">{{pub_data.Fields.Type}}</span> at <em>{{pub_data.Fields.School}}</em>, {{pub_data.Fields.Year}}\t\n\t\t</span>\n\n\t\t<span class=\"color-theme\">\n\t\t\t<fa-icon [icon]=\"show_more? faArrowDown : faArrowRight\"></fa-icon>\n\t\t</span>\n\n\t\t</a>\n\t\t\n\t</span>\n\n\t<div *ngIf=\"show_more\" id=\"pubhidden\">\n\t\t<span *ngIf=\"pub_data.Fields.Abstract\"><strong>Abstract: </strong>{{pub_data.Fields.Abstract}}</span>\n\t\t<div class=\"pubButtons\">\n\t\t\t<a class=\"badge color-theme badge-primary\" *ngIf=\"pub_data.Fields.Doi\" href=\"https://doi.org/{{pub_data.Fields.Doi}}\">DOI: {{pub_data.Fields.Doi}}</a>\n\t\t\t<a class=\"badge color-theme badge-primary\" *ngIf=\"pub_data.Fields.Eprint\" href=\"http://arxiv.org/abs/{{pub_data.Fields.Eprint}}\">arXiv: {{pub_data.Fields.Eprint}} [{{pub_data.Fields.Eprintclass}}]</a> \n\t\t\t<a class=\"badge color-theme badge-primary\" *ngIf=\"pub_data.Fields.Url\" href=\"{{pub_data.Fields.Url}}\">Link</a> \n\t\t\t<a class=\"badge color-theme badge-primary\" *ngIf=\"pub_data.Fields.Slides\" href=\"{{pub_data.Fields.Slides}}\">Slides</a>\n\t\t\t<a class=\"badge color-theme badge-primary\" (click)=\"open()\">BibTeX</a>\n\t\t</div>\n\t</div>      \n\n</span>\n\n"

/***/ }),

/***/ "./src/app/publication/publication.component.ts":
/*!******************************************************!*\
  !*** ./src/app/publication/publication.component.ts ***!
  \******************************************************/
/*! exports provided: BibtexmodalComponent, PublicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BibtexmodalComponent", function() { return BibtexmodalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationComponent", function() { return PublicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BibtexmodalComponent = /** @class */ (function () {
    function BibtexmodalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BibtexmodalComponent.prototype, "text", void 0);
    BibtexmodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bibtexmodal',
            template: "\n\t<div class=\"modal-header\">\n\t\t<h4 class=\"modal-title\">BibTeX Entry</h4>\n\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n\t</div>\n\t<div class=\"modal-body\">\n\t\t<pre class=\"p-2 bg-light border rounded\"><code>{{text}}</code></pre>\n\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], BibtexmodalComponent);
    return BibtexmodalComponent;
}());

function setBib(pub_data) {
    var text = '@' + pub_data.EntryType + '{' + pub_data.EntryKey;
    Object.keys(pub_data.Fields).forEach(function (key) {
        if (key != 'Abstract' && key != 'Author_noand'
            && key != 'Url' && key != 'Slides') {
            text += ', \n  ' + key + ' = {' + pub_data.Fields[key] + '}';
        }
    });
    text += '\n}';
    return text;
}
;
var PublicationComponent = /** @class */ (function () {
    function PublicationComponent(modalService) {
        this.modalService = modalService;
        this.faArrowDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowDown"];
        this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowRight"];
    }
    PublicationComponent.prototype.open = function () {
        var modalRef = this.modalService.open(BibtexmodalComponent, { size: 'lg' });
        modalRef.componentInstance.text = setBib(this.pub_data);
    };
    PublicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-publication',
            template: __webpack_require__(/*! ./publication.component.html */ "./src/app/publication/publication.component.html"),
            inputs: ['pub_data', 'show_more'],
            styles: [__webpack_require__(/*! ./publication.component.css */ "./src/app/publication/publication.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], PublicationComponent);
    return PublicationComponent;
}());



/***/ }),

/***/ "./src/app/pubs/pubs.component.css":
/*!*****************************************!*\
  !*** ./src/app/pubs/pubs.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.list-group-item > i {\r\n  font-size: 22px;\r\n}\r\n*/\r\n.pub_active {\r\n\tbackground-color: aliceblue;\r\n\tborder-color: #428bca;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVicy9wdWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFO0FBQ0Y7Q0FDQyw0QkFBNEI7Q0FDNUIsc0JBQXNCO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcHVicy9wdWJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5saXN0LWdyb3VwLWl0ZW0gPiBpIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuKi9cclxuLnB1Yl9hY3RpdmUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuXHRib3JkZXItY29sb3I6ICM0MjhiY2E7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pubs/pubs.component.html":
/*!******************************************!*\
  !*** ./src/app/pubs/pubs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=col-sm-8>\n    <h2>List of publications</h2>\n  </div>\n  <div class=\"col-sm-4\">\n    <input [(ngModel)]=\"filter_text\" type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n  </div>\n</div>\n\n\n<span *ngIf=\"(conference | filteredPipe: filter_text).length\">\n\n  <h3 class=\"mt-2\">Peer-Reviewed Conference Proceedings</h3>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item publist_row p-2\" *ngFor=\"let pub_data of (conference | filteredPipe: filter_text)\" [class.pub_active]=\"pub_data.EntryKey == routeFragment\">\n      <fa-icon [icon]=\"faFileAlt\"></fa-icon>\n      <app-publication [pub_data]=\"pub_data\" [show_more]=\"pub_data.EntryKey == routeFragment\"></app-publication>\n    </li>\n  </ul>\n\n</span>\n\n\n<span *ngIf=\"(articles | filteredPipe: filter_text).length\">\n\n  <h3 class=\"mt-2\">Journal Papers</h3>\n  <ul class=\"list-group\">\n    <li *ngFor=\"let pub_data of (articles | filteredPipe: filter_text)\" class=\"list-group-item publist_row p-2\" [class.pub_active]=\"pub_data.EntryKey == routeFragment\">\n      <fa-icon [icon]=\"faScroll\"></fa-icon>\n      <app-publication [pub_data]=\"pub_data\" [show_more]=\"pub_data.EntryKey == routeFragment\"></app-publication>\n    </li>\n  </ul>\n</span>\n\n<span *ngIf=\"(chapters | filteredPipe: filter_text).length\">\n\n  <h3 class=\"mt-2\">Book Chapters</h3>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item publist_row p-2\" *ngFor=\"let pub_data of (chapters | filteredPipe: filter_text)\" [class.pub_active]=\"pub_data.EntryKey == routeFragment\">\n      <fa-icon [icon]=\"faBookOpen\"></fa-icon>\n      <app-publication [pub_data]=\"pub_data\" [show_more]=\"pub_data.EntryKey == routeFragment\"></app-publication>\n    </li>\n  </ul>\n\n</span>\n\n<span *ngIf=\"(theses | filteredPipe: filter_text).length\">\n\n  <h3 class=\"mt-2\">Theses</h3>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item publist_row p-2\" *ngFor=\"let pub_data of (theses | filteredPipe: filter_text)\">\n      <fa-icon [icon]=\"faBook\"></fa-icon>\n      <app-publication [pub_data]=\"pub_data\" [show_more]=\"pub_data.EntryKey == routeFragment\"></app-publication>\n    </li>\n  </ul>\n\n</span>\n\n<br />\n"

/***/ }),

/***/ "./src/app/pubs/pubs.component.ts":
/*!****************************************!*\
  !*** ./src/app/pubs/pubs.component.ts ***!
  \****************************************/
/*! exports provided: FilteredPipe, PubsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilteredPipe", function() { return FilteredPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubsComponent", function() { return PubsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _citation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../citation.service */ "./src/app/citation.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilteredPipe = /** @class */ (function () {
    function FilteredPipe() {
    }
    FilteredPipe.prototype.transform = function (list, filter_string) {
        return list.filter(function (entry) { return JSON.stringify(entry).toLowerCase()
            .search(filter_string.toLowerCase()) >= 0; });
    };
    FilteredPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'filteredPipe' })
    ], FilteredPipe);
    return FilteredPipe;
}());

var PubsComponent = /** @class */ (function () {
    function PubsComponent(citationService, route) {
        this.citationService = citationService;
        this.route = route;
        // icons
        this.faScroll = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faScroll"];
        this.faFileAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFileAlt"];
        this.faBookOpen = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBookOpen"];
        this.faBook = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBook"];
        this.articles = [];
        this.conference = [];
        this.theses = [];
        this.chapters = [];
    }
    PubsComponent.prototype.separatePubs = function (pub_list) {
        this.articles = pub_list.filter(function (entry) { return entry.EntryType == 'article'; });
        this.conference = pub_list.filter(function (entry) { return entry.EntryType == 'inproceedings'; });
        this.chapters = pub_list.filter(function (entry) { return entry.EntryType == 'incollection'; });
        this.theses = pub_list.filter(function (entry) { return entry.EntryType == 'phdthesis' || entry.EntryType == 'mastersthesis'; });
    };
    PubsComponent.prototype.scrollToPub = function () {
        if (!this.didscroll && this.routeFragment && document.getElementById(this.routeFragment) != null) {
            document.getElementById(this.routeFragment).scrollIntoView({ behavior: "smooth" });
            this.didscroll = true;
        }
    };
    PubsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.fragment.subscribe(function (f) {
            _this.routeFragment = f;
        });
        this.citationService.citeAll().subscribe(function (value) { return _this.separatePubs(value); });
        this.filter_text = '';
    };
    PubsComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToPub();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PubsComponent.prototype, "filter_text", void 0);
    PubsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pubs',
            template: __webpack_require__(/*! ./pubs.component.html */ "./src/app/pubs/pubs.component.html"),
            styles: [__webpack_require__(/*! ./pubs.component.css */ "./src/app/pubs/pubs.component.css")]
        }),
        __metadata("design:paramtypes", [_citation_service__WEBPACK_IMPORTED_MODULE_2__["CitationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PubsComponent);
    return PubsComponent;
}());



/***/ }),

/***/ "./src/app/research/research.component.html":
/*!**************************************************!*\
  !*** ./src/app/research/research.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-tabset justify=\"fill\">\n\t<ngb-tab title=\"Main\">\n\t\t<ng-template ngbTabContent>\n\n\t\t\t<div class=\"card-body\">\n\n\t\t\t\t<p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t\t\t\t</p>\n\t\t\t</div>\n\n\t\t</ng-template>\n\t</ngb-tab>\n\n\t<ngb-tab title=\"Topic 1\">\n\t\t<ng-template ngbTabContent>\n\n\t\t\t<div class=\"card-body\">\n\n\t\t\t\t<h3 class=\"card-title\">Research topic 1</h3>\n\n\t\t\t\t<p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, [{{cite('conf1', 0)}}]\n\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo \n\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non [{{cite('conf1', 0)}}]\n\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum [{{cite('art1', 0)}}].</p>\n\n\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t<li class=\"list-group-item p-2\" *ngFor=\"let pub_data of ref_lists[0]; let i=index\">\n\t\t\t\t\t\t[{{i+1}}]<app-publication [pub_data]=\"pub_data\"></app-publication>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</ng-template>\n\t</ngb-tab>\n\n\t<ngb-tab title=\"Topic 2\">\n\t\t<ng-template ngbTabContent>\n\n\t\t\t<div class=\"card-body\">\n\n\t\t\t\t<h3 class=\"card-title\">Research topic 2</h3>\n\n\t\t\t\t<p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, [{{cite('conf2', 0)}}]\n\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo \n\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non [{{cite('conf2', 0)}}]\n\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum [{{cite('art2', 0)}}].</p>\n\n\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t<li class=\"list-group-item p-2\" *ngFor=\"let pub_data of ref_lists[1]; let i=index\">\n\t\t\t\t\t\t[{{i+1}}]<app-publication [pub_data]=\"pub_data\"></app-publication>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</ng-template>\n\t</ngb-tab>\n\n\n</ngb-tabset>"

/***/ }),

/***/ "./src/app/research/research.component.ts":
/*!************************************************!*\
  !*** ./src/app/research/research.component.ts ***!
  \************************************************/
/*! exports provided: ResearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearchComponent", function() { return ResearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _citation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../citation.service */ "./src/app/citation.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResearchComponent = /** @class */ (function () {
    function ResearchComponent(citationService, config) {
        this.citationService = citationService;
        this.ref_lists = [];
        this.keylists = [['art1', 'conf1'],
            ['art2', 'conf2']];
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
    }
    ResearchComponent.prototype.cite = function (key, listindex) {
        var found = this.ref_lists[listindex].find(function (item) { return item.EntryKey == key; });
        return this.ref_lists[listindex].indexOf(found) + 1;
    };
    ResearchComponent.prototype.grabReferences = function (citekeys, i) {
        var _this = this;
        this.citationService.citeSubset(citekeys)
            .subscribe(function (res) { return _this.ref_lists[i] = res; });
    };
    ResearchComponent.prototype.ngOnInit = function () {
        // TODO: automate this
        this.ref_lists = [[], []];
        this.grabReferences(this.keylists[0], 0);
        this.grabReferences(this.keylists[1], 1);
    };
    ResearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-research',
            template: __webpack_require__(/*! ./research.component.html */ "./src/app/research/research.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]]
        }),
        __metadata("design:paramtypes", [_citation_service__WEBPACK_IMPORTED_MODULE_1__["CitationService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]])
    ], ResearchComponent);
    return ResearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dong/Documents/linux/academic_homepage2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map