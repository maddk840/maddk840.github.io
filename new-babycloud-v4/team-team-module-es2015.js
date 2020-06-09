(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-team-module"],{

/***/ "./src/app/team/team-credit/team-credit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/team/team-credit/team-credit.component.ts ***!
  \***********************************************************/
/*! exports provided: TeamCreditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamCreditComponent", function() { return TeamCreditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function TeamCreditComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const supporter_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", supporter_r1.SRC, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", supporter_r1.ALT);
} }
class TeamCreditComponent {
    constructor(translate) {
        this.translate = translate;
        this.bError = false;
        this.supporters = [{
                ALT: '',
                SRC: ''
            }];
    }
    ngOnInit() {
        this.translate.get('RESEARCH.CREDITS.SUPPORTER.SUPPORTERS').subscribe((res) => {
            if (typeof (res) === 'string') {
                this.bError = true;
                this.supporters = [{
                        ALT: '',
                        SRC: ''
                    }];
            }
            else {
                this.supporters = res;
            }
        });
    }
}
TeamCreditComponent.ɵfac = function TeamCreditComponent_Factory(t) { return new (t || TeamCreditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TeamCreditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamCreditComponent, selectors: [["app-team-credit"]], decls: 11, vars: 4, consts: [["id", "team-credit", 1, "team-credit"], [1, "container-fluid"], [1, "row", "pt-5"], [1, "col-12", "text-center"], [1, "test123", "row", "d-flex", "justify-content-center", "pb-5"], [1, "col-10", "mx-auto"], [1, "row", "publications"], ["class", "col-6 col-md-4 col-lg-3 wow pulse p-3", 4, "ngFor", "ngForOf"], [1, "col-6", "col-md-4", "col-lg-3", "wow", "pulse", "p-3"], [1, "supporter-logo", "p-5"], [1, "mx-auto", 3, "src", "alt"]], template: function TeamCreditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TeamCreditComponent_div_10_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, "RESEARCH.CREDITS.SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.supporters);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLWNyZWRpdC90ZWFtLWNyZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamCreditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team-credit',
                templateUrl: './team-credit.component.html',
                styleUrls: ['./team-credit.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/team/team-join-us/team-join-us.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/team/team-join-us/team-join-us.component.ts ***!
  \*************************************************************/
/*! exports provided: TeamJoinUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamJoinUsComponent", function() { return TeamJoinUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





class TeamJoinUsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeamJoinUsComponent.ɵfac = function TeamJoinUsComponent_Factory(t) { return new (t || TeamJoinUsComponent)(); };
TeamJoinUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamJoinUsComponent, selectors: [["app-team-join-us"]], decls: 19, vars: 14, consts: [["id", "team-join-us", 1, "team-join-us"], [1, "container-fluid"], [1, "row", "d-flex", "align-items-center", "justify-content-center"], [1, "col-10", "mx-auto", "mx-md-0", "pb-4", "pb-md-0", "col-md-4", "join-us-image", "wow", "zoomIn"], ["src", "assets/images/team/join-our-team.png", "alt", "man and woman playing foosball", 1, ""], [1, "col-12", "mx-auto", "mx-md-0", "col-md-5", "text-center", "text-md-left", "offset-1"], [3, "routerLink"], ["mat-flat-button", "", "data-wow-delay", "1s", 1, "mt-4", "wow", "headShake", 3, "routerLink"]], template: function TeamJoinUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "TEAM.JOIN.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, "TEAM.JOIN.SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 10, "TEAM.JOIN.LINK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 12, "TEAM.JOIN.BUTTON"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["#team-join-us[_ngcontent-%COMP%] {\n  padding-top: 10vh;\n  padding-bottom: 10vh;\n}\n#team-join-us[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  border-radius: 25px;\n  color: var(--text-invert);\n  padding: 5px 25px 5px 25px;\n  width: 15em;\n}\n#team-join-us[_ngcontent-%COMP%]   .join-us-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib290cGhvbi9EZXNrdG9wL2VjaG9sYWxpYS9lY2hvbGFsaWEub3JnL3NyYy9hcHAvdGVhbS90ZWFtLWpvaW4tdXMvdGVhbS1qb2luLXVzLmNvbXBvbmVudC5zY3NzIiwidGVhbS1qb2luLXVzL3RlYW0tam9pbi11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNDRjtBRENFO0VBQ0Usc0NBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDQ0o7QURHSTtFQUNFLFdBQUE7QUNETiIsImZpbGUiOiJ0ZWFtLWpvaW4tdXMvdGVhbS1qb2luLXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RlYW0tam9pbi11c3tcbiAgcGFkZGluZy10b3A6IDEwdmg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHZoO1xuXG4gIGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWludmVydCk7XG4gICAgcGFkZGluZzogNXB4IDI1cHggNXB4IDI1cHg7XG4gICAgd2lkdGg6IDE1ZW07XG4gIH1cblxuICAuam9pbi11cy1pbWFnZXtcbiAgICBpbWd7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cbiIsIiN0ZWFtLWpvaW4tdXMge1xuICBwYWRkaW5nLXRvcDogMTB2aDtcbiAgcGFkZGluZy1ib3R0b206IDEwdmg7XG59XG4jdGVhbS1qb2luLXVzIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1pbnZlcnQpO1xuICBwYWRkaW5nOiA1cHggMjVweCA1cHggMjVweDtcbiAgd2lkdGg6IDE1ZW07XG59XG4jdGVhbS1qb2luLXVzIC5qb2luLXVzLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamJoinUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team-join-us',
                templateUrl: './team-join-us.component.html',
                styleUrls: ['./team-join-us.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/team/team-main/team-main.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/team/team-main/team-main.component.ts ***!
  \*******************************************************/
/*! exports provided: TeamMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMainComponent", function() { return TeamMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function TeamMainComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", member_r1.IMG.SRC, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", member_r1.IMG.ALT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1.NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1.ROLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1.ORGANIZATION);
} }
class TeamMainComponent {
    constructor(translate) {
        this.translate = translate;
        this.bError = false;
        // Team Carousel
        this.members = [{
                NAME: 'Loading',
                ROLE: 'Loading...',
                ORGANIZATION: 'Loading...',
                IMG: {
                    ALT: '',
                    SRC: ''
                }
            }];
    }
    ngOnInit() {
        this.translate.get('TEAM.MAIN.MEMBERS').subscribe((res) => {
            if (typeof (res) === 'string') {
                this.bError = true;
                this.members = [{
                        NAME: 'An error occurred',
                        ROLE: 'Cannot get translation',
                        ORGANIZATION: 'Cannot get translation',
                        IMG: {
                            ALT: '',
                            SRC: ''
                        }
                    }];
            }
            else {
                this.members = res;
            }
        });
    }
}
TeamMainComponent.ɵfac = function TeamMainComponent_Factory(t) { return new (t || TeamMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TeamMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamMainComponent, selectors: [["app-team-main"]], decls: 21, vars: 10, consts: [["id", "team-main", 1, "team-main"], [1, "container-fluid"], [1, "row"], [1, "main-image"], ["src", "assets/images/team/portraits6x2.jpg", "alt", "twelve silhouette portraits of men and women", 1, ""], [1, "row", "py-5"], [1, "col-10", "col-md-8", "col-lg-6", "mx-auto", "text-center"], [1, "col-10", "mx-auto"], [1, "row", "team-members"], ["class", "col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center py-4 mx-auto", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-lg-4", "d-flex", "align-items-center", "justify-content-center", "py-4", "mx-auto"], [1, "team-member-container"], [1, "member-image", "mx-auto", "my-4"], [1, "", 3, "src", "alt"], [1, "mx-4"], [1, "mb-0"], [1, "mt-n1"]], template: function TeamMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TeamMainComponent_div_20_Template, 14, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, "TEAM.MAIN.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 6, "TEAM.MAIN.SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 8, "TEAM.MAIN.SECTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.members);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["#team-main[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 110px;\n}\n#team-main[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#team-main[_ngcontent-%COMP%]   .team-members[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n#team-main[_ngcontent-%COMP%]   .team-members[_ngcontent-%COMP%]:after {\n  content: \"\";\n  flex: auto;\n}\n#team-main[_ngcontent-%COMP%]   .team-member-container[_ngcontent-%COMP%] {\n  box-shadow: var(--box-shadow1);\n}\n#team-main[_ngcontent-%COMP%]   .team-member-container[_ngcontent-%COMP%]   .member-image[_ngcontent-%COMP%] {\n  width: 50%;\n  border-radius: 50%;\n  box-shadow: var(--box-shadow1);\n  overflow: hidden;\n}\n#team-main[_ngcontent-%COMP%]   .team-member-container[_ngcontent-%COMP%]   .member-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#team-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n}\n#team-main[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib290cGhvbi9EZXNrdG9wL2VjaG9sYWxpYS9lY2hvbGFsaWEub3JnL3NyYy9hcHAvdGVhbS90ZWFtLW1haW4vdGVhbS1tYWluLmNvbXBvbmVudC5zY3NzIiwidGVhbS1tYWluL3RlYW0tbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEQ0k7RUFDRSxXQUFBO0FDQ047QURHRTtFQUVFLGFBQUE7RUFDQSxlQUFBO0FDRko7QURJSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDRk47QURNRTtFQUNFLDhCQUFBO0FDSko7QURNSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNKTjtBREtNO0VBQ0UsV0FBQTtBQ0hSO0FEU0k7RUFDRSw2QkFBQTtBQ1BOO0FEV0U7RUFDRSxnQkFBQTtBQ1RKIiwiZmlsZSI6InRlYW0tbWFpbi90ZWFtLW1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGVhbS1tYWlue1xuICAubWFpbi1pbWFnZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTEwcHg7XG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLnRlYW0tbWVtYmVyc3tcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBmbGV4OiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gIC50ZWFtLW1lbWJlci1jb250YWluZXJ7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdzEpO1xuXG4gICAgLm1lbWJlci1pbWFnZXtcbiAgICAgIHdpZHRoOjUwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cxKTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB7XG4gICAgc3BhbntcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xuICAgIH1cbiAgfVxuXG4gIGg2e1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cbiIsIiN0ZWFtLW1haW4gLm1haW4taW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDExMHB4O1xufVxuI3RlYW0tbWFpbiAubWFpbi1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiN0ZWFtLW1haW4gLnRlYW0tbWVtYmVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiN0ZWFtLW1haW4gLnRlYW0tbWVtYmVyczphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGZsZXg6IGF1dG87XG59XG4jdGVhbS1tYWluIC50ZWFtLW1lbWJlci1jb250YWluZXIge1xuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93MSk7XG59XG4jdGVhbS1tYWluIC50ZWFtLW1lbWJlci1jb250YWluZXIgLm1lbWJlci1pbWFnZSB7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdzEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI3RlYW0tbWFpbiAudGVhbS1tZW1iZXItY29udGFpbmVyIC5tZW1iZXItaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4jdGVhbS1tYWluIHAgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuI3RlYW0tbWFpbiBoNiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team-main',
                templateUrl: './team-main.component.html',
                styleUrls: ['./team-main.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/team/team-others/team-others.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/team/team-others/team-others.component.ts ***!
  \***********************************************************/
/*! exports provided: TeamOthersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamOthersComponent", function() { return TeamOthersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function TeamOthersComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member1_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", member1_r1.IMG.SRC, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", member1_r1.IMG.ALT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member1_r1.NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member1_r1.ROLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member1_r1.ORGANIZATION);
} }
class TeamOthersComponent {
    constructor(translate) {
        this.translate = translate;
        this.bError = false;
        // Team Carousel
        this.members1 = [{
                NAME: 'Loading',
                ROLE: 'Loading...',
                ORGANIZATION: 'Loading...',
                IMG: {
                    ALT: '',
                    SRC: ''
                }
            }];
        // Team Carousel
        this.members2 = [{
                NAME: 'Loading',
                ROLE: 'Loading...',
                ORGANIZATION: 'Loading...',
                IMG: {
                    ALT: '',
                    SRC: ''
                }
            }];
    }
    ngOnInit() {
        this.translate.get('TEAM.OTHERS.MEMBERS1').subscribe((res) => {
            if (typeof (res) === 'string') {
                this.bError = true;
                this.members1 = [{
                        NAME: 'An error occurred',
                        ROLE: 'Cannot get translation',
                        ORGANIZATION: 'Cannot get translation',
                        IMG: {
                            ALT: '',
                            SRC: ''
                        }
                    }];
            }
            else {
                this.members1 = res;
            }
        });
        this.translate.get('TEAM.OTHERS.MEMBERS2').subscribe((res) => {
            if (typeof (res) === 'string') {
                this.bError = true;
                this.members2 = [{
                        NAME: 'An error occurred',
                        ROLE: 'Cannot get translation',
                        ORGANIZATION: 'Cannot get translation',
                        IMG: {
                            ALT: '',
                            SRC: ''
                        }
                    }];
            }
            else {
                this.members2 = res;
            }
        });
    }
}
TeamOthersComponent.ɵfac = function TeamOthersComponent_Factory(t) { return new (t || TeamOthersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TeamOthersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamOthersComponent, selectors: [["app-team-others"]], decls: 10, vars: 4, consts: [["id", "team-others", 1, "team-others"], [1, "container-fluid"], [1, "row", "scientific-advisors", "pt-5", "pb-5"], [1, "col-10", "mx-auto"], [1, "row"], [1, "row", "team-members"], ["class", "col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center py-4 mx-auto", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-lg-4", "d-flex", "align-items-center", "justify-content-center", "py-4", "mx-auto"], [1, "team-member-container"], [1, "member-image", "mx-auto", "my-4"], [1, "", 3, "src", "alt"], [1, "mx-4"], [1, "mb-0"], [1, "mt-n1"]], template: function TeamOthersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TeamOthersComponent_div_9_Template, 14, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, "TEAM.OTHERS.TITLE1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.members1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["#team-others[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n#team-others[_ngcontent-%COMP%]   .scientific-advisors[_ngcontent-%COMP%] {\n  background: var(--team-background-light) no-repeat center bottom;\n  background-size: cover;\n  height: auto;\n  width: auto;\n  padding-top: 5vh;\n  padding-bottom: 5vh;\n}\n#team-others[_ngcontent-%COMP%]   .scientific-advisors[_ngcontent-%COMP%]   .team-member-container[_ngcontent-%COMP%] {\n  background-color: var(--color-quaternary);\n}\n#team-others[_ngcontent-%COMP%]   .scientific-advisors[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n}\n#team-others[_ngcontent-%COMP%]   .beta-testers[_ngcontent-%COMP%] {\n  background: var(--team-background-light) no-repeat center bottom;\n  background-size: cover;\n  height: auto;\n  width: auto;\n  padding-top: 5vh;\n  padding-bottom: 5vh;\n}\n#team-others[_ngcontent-%COMP%]   .beta-testers[_ngcontent-%COMP%]   .team-member-container[_ngcontent-%COMP%] {\n  background-color: var(--color-quaternary);\n}\n#team-others[_ngcontent-%COMP%]   .beta-testers[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n}\n#team-others[_ngcontent-%COMP%]   .team-members[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n#team-others[_ngcontent-%COMP%]   .team-members[_ngcontent-%COMP%]:after {\n  content: \"\";\n  flex: auto;\n}\n#team-others[_ngcontent-%COMP%]   .team-member-container[_ngcontent-%COMP%] {\n  box-shadow: var(--box-shadow1);\n}\n#team-others[_ngcontent-%COMP%]   .team-member-container[_ngcontent-%COMP%]   .member-image[_ngcontent-%COMP%] {\n  width: 50%;\n  border-radius: 50%;\n  box-shadow: var(--box-shadow1);\n  overflow: hidden;\n}\n#team-others[_ngcontent-%COMP%]   .team-member-container[_ngcontent-%COMP%]   .member-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib290cGhvbi9EZXNrdG9wL2VjaG9sYWxpYS9lY2hvbGFsaWEub3JnL3NyYy9hcHAvdGVhbS90ZWFtLW90aGVycy90ZWFtLW90aGVycy5jb21wb25lbnQuc2NzcyIsInRlYW0tb3RoZXJzL3RlYW0tb3RoZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsZ0JBQUE7QUNESjtBRElFO0VBT0UsZ0VBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1JKO0FEVUk7RUFFRSx5Q0FBQTtBQ1ROO0FEYU07RUFFRSw2QkFBQTtBQ1pSO0FEaUJFO0VBQ0UsZ0VBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2ZKO0FEaUJJO0VBQ0UseUNBQUE7QUNmTjtBRG1CTTtFQUNFLDZCQUFBO0FDakJSO0FEc0JFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNwQko7QURxQkk7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ25CTjtBRHVCRTtFQUNFLDhCQUFBO0FDckJKO0FEdUJJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ3JCTjtBRHNCTTtFQUNFLFdBQUE7QUNwQlIiLCJmaWxlIjoidGVhbS1vdGhlcnMvdGVhbS1vdGhlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGVhbS1vdGhlcnN7XG5cbiAgaDZ7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5zY2llbnRpZmljLWFkdmlzb3Jze1xuICAgIC8vIGJhY2tncm91bmQ6IHZhcigtLXRlYW0tYmFja2dyb3VuZC1kYXJrKTtcbiAgICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuXG4gICAgLy8gYmFja2dyb3VuZDogdmFyKC0tdGVhbS1iYWNrZ3JvdW5kLWRhcmspIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRlYW0tYmFja2dyb3VuZC1saWdodCkgbm8tcmVwZWF0IGNlbnRlciBib3R0b207XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDV2aDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXZoO1xuXG4gICAgLnRlYW0tbWVtYmVyLWNvbnRhaW5lcntcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1xdWF0ZXJuYXJ5KTtcbiAgICB9XG5cbiAgICBwe1xuICAgICAgc3BhbntcbiAgICAgICAgLy8gY29sb3I6IHZhcigtLXRleHQtaW52ZXJ0KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJldGEtdGVzdGVyc3tcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10ZWFtLWJhY2tncm91bmQtbGlnaHQpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiA1dmg7XG4gICAgcGFkZGluZy1ib3R0b206IDV2aDtcblxuICAgIC50ZWFtLW1lbWJlci1jb250YWluZXJ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1xdWF0ZXJuYXJ5KTtcbiAgICB9XG5cbiAgICBwe1xuICAgICAgc3BhbntcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnRlYW0tbWVtYmVyc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBmbGV4OiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gIC50ZWFtLW1lbWJlci1jb250YWluZXJ7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdzEpO1xuXG4gICAgLm1lbWJlci1pbWFnZXtcbiAgICAgIHdpZHRoOjUwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cxKTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4vLyAgICN0ZWFtLW90aGVyc3tcbi8vICAgICAuc2NpZW50aWZpYy1hZHZpc29yc3tcbi8vICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRlYW0tYmFja2dyb3VuZC1kYXJrLW1vYmlsZSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4vLyAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbi8vICAgICAgIGhlaWdodDogYXV0bztcbi8vICAgICAgIHdpZHRoOiBhdXRvO1xuLy8gICAgICAgcGFkZGluZy10b3A6IDV2aDtcbi8vICAgICAgIHBhZGRpbmctYm90dG9tOiA1dmg7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9IiwiI3RlYW0tb3RoZXJzIGg2IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiN0ZWFtLW90aGVycyAuc2NpZW50aWZpYy1hZHZpc29ycyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRlYW0tYmFja2dyb3VuZC1saWdodCkgbm8tcmVwZWF0IGNlbnRlciBib3R0b207XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmctdG9wOiA1dmg7XG4gIHBhZGRpbmctYm90dG9tOiA1dmg7XG59XG4jdGVhbS1vdGhlcnMgLnNjaWVudGlmaWMtYWR2aXNvcnMgLnRlYW0tbWVtYmVyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXF1YXRlcm5hcnkpO1xufVxuI3RlYW0tb3RoZXJzIC5zY2llbnRpZmljLWFkdmlzb3JzIHAgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuI3RlYW0tb3RoZXJzIC5iZXRhLXRlc3RlcnMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZWFtLWJhY2tncm91bmQtbGlnaHQpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogNXZoO1xuICBwYWRkaW5nLWJvdHRvbTogNXZoO1xufVxuI3RlYW0tb3RoZXJzIC5iZXRhLXRlc3RlcnMgLnRlYW0tbWVtYmVyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXF1YXRlcm5hcnkpO1xufVxuI3RlYW0tb3RoZXJzIC5iZXRhLXRlc3RlcnMgcCBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG4jdGVhbS1vdGhlcnMgLnRlYW0tbWVtYmVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiN0ZWFtLW90aGVycyAudGVhbS1tZW1iZXJzOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZmxleDogYXV0bztcbn1cbiN0ZWFtLW90aGVycyAudGVhbS1tZW1iZXItY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdzEpO1xufVxuI3RlYW0tb3RoZXJzIC50ZWFtLW1lbWJlci1jb250YWluZXIgLm1lbWJlci1pbWFnZSB7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdzEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI3RlYW0tb3RoZXJzIC50ZWFtLW1lbWJlci1jb250YWluZXIgLm1lbWJlci1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamOthersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team-others',
                templateUrl: './team-others.component.html',
                styleUrls: ['./team-others.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-wow */ "./node_modules/ngx-wow/__ivy_ngcc__/esm2015/ngx-wow.js");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _team_main_team_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-main/team-main.component */ "./src/app/team/team-main/team-main.component.ts");
/* harmony import */ var _team_others_team_others_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team-others/team-others.component */ "./src/app/team/team-others/team-others.component.ts");
/* harmony import */ var _team_join_us_team_join_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-join-us/team-join-us.component */ "./src/app/team/team-join-us/team-join-us.component.ts");
/* harmony import */ var _team_credit_team_credit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team-credit/team-credit.component */ "./src/app/team/team-credit/team-credit.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");









class TeamComponent {
    constructor(wowService) {
        this.wowService = wowService;
    }
    ngOnInit() {
        this.wowService.init();
    }
    reset() {
        this.wowService.init();
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_1__["NgwWowService"])); };
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 6, vars: 0, template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-team-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-team-others");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-team-join-us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-team-credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _team_main_team_main_component__WEBPACK_IMPORTED_MODULE_3__["TeamMainComponent"], _team_others_team_others_component__WEBPACK_IMPORTED_MODULE_4__["TeamOthersComponent"], _team_join_us_team_join_us_component__WEBPACK_IMPORTED_MODULE_5__["TeamJoinUsComponent"], _team_credit_team_credit_component__WEBPACK_IMPORTED_MODULE_6__["TeamCreditComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team',
                templateUrl: './team.component.html',
                styleUrls: ['./team.component.scss']
            }]
    }], function () { return [{ type: ngx_wow__WEBPACK_IMPORTED_MODULE_1__["NgwWowService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/team/team.module.ts":
/*!*************************************!*\
  !*** ./src/app/team/team.module.ts ***!
  \*************************************/
/*! exports provided: TeamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamModule", function() { return TeamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/__ivy_ngcc__/fesm2015/ngx-page-scroll.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _team_main_team_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./team-main/team-main.component */ "./src/app/team/team-main/team-main.component.ts");
/* harmony import */ var _team_others_team_others_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./team-others/team-others.component */ "./src/app/team/team-others/team-others.component.ts");
/* harmony import */ var _team_join_us_team_join_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./team-join-us/team-join-us.component */ "./src/app/team/team-join-us/team-join-us.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-wow */ "./node_modules/ngx-wow/__ivy_ngcc__/esm2015/ngx-wow.js");
/* harmony import */ var _team_credit_team_credit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./team-credit/team-credit.component */ "./src/app/team/team-credit/team-credit.component.ts");





// 3rd party










// Routes
const routes = [
    {
        path: '',
        component: _team_component__WEBPACK_IMPORTED_MODULE_4__["TeamComponent"]
    }
];
class TeamModule {
}
TeamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamModule });
TeamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamModule_Factory(t) { return new (t || TeamModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            // 3rd party
            ngx_page_scroll__WEBPACK_IMPORTED_MODULE_5__["NgxPageScrollModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            ngx_wow__WEBPACK_IMPORTED_MODULE_11__["NgwWowModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamModule, { declarations: [_team_component__WEBPACK_IMPORTED_MODULE_4__["TeamComponent"], _team_main_team_main_component__WEBPACK_IMPORTED_MODULE_7__["TeamMainComponent"], _team_others_team_others_component__WEBPACK_IMPORTED_MODULE_8__["TeamOthersComponent"], _team_join_us_team_join_us_component__WEBPACK_IMPORTED_MODULE_9__["TeamJoinUsComponent"], _team_credit_team_credit_component__WEBPACK_IMPORTED_MODULE_12__["TeamCreditComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        // 3rd party
        ngx_page_scroll__WEBPACK_IMPORTED_MODULE_5__["NgxPageScrollModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
        ngx_wow__WEBPACK_IMPORTED_MODULE_11__["NgwWowModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_team_component__WEBPACK_IMPORTED_MODULE_4__["TeamComponent"], _team_main_team_main_component__WEBPACK_IMPORTED_MODULE_7__["TeamMainComponent"], _team_others_team_others_component__WEBPACK_IMPORTED_MODULE_8__["TeamOthersComponent"], _team_join_us_team_join_us_component__WEBPACK_IMPORTED_MODULE_9__["TeamJoinUsComponent"], _team_credit_team_credit_component__WEBPACK_IMPORTED_MODULE_12__["TeamCreditComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(routes),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    // 3rd party
                    ngx_page_scroll__WEBPACK_IMPORTED_MODULE_5__["NgxPageScrollModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                    ngx_wow__WEBPACK_IMPORTED_MODULE_11__["NgwWowModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=team-team-module-es2015.js.map