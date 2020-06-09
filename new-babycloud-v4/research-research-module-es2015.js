(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["research-research-module"],{

/***/ "./src/app/research/credit/credit.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/research/credit/credit.component.ts ***!
  \*****************************************************/
/*! exports provided: CreditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditComponent", function() { return CreditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CreditComponent_div_13_Template(rf, ctx) { if (rf & 1) {
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
class CreditComponent {
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
CreditComponent.ɵfac = function CreditComponent_Factory(t) { return new (t || CreditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
CreditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreditComponent, selectors: [["app-credit"]], decls: 14, vars: 7, consts: [["id", "research-credit", 1, "research-credit"], [1, "container-fluid"], [1, "row", "pt-5"], [1, "col-12", "text-center", "pt-5"], [1, "test123", "row", "d-flex", "justify-content-center", "pb-5"], [1, "col-10", "mx-auto"], [1, "row", "publications"], ["class", "col-6 col-md-4 col-lg-3 wow pulse p-3", 4, "ngFor", "ngForOf"], [1, "col-6", "col-md-4", "col-lg-3", "wow", "pulse", "p-3"], [1, "supporter-logo", "p-5"], [1, "mx-auto", 3, "src", "alt"]], template: function CreditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreditComponent_div_13_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "RESEARCH.CREDITS.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, "RESEARCH.CREDITS.SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.supporters);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9yZXNlYXJjaC9jcmVkaXQvY3JlZGl0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-credit',
                templateUrl: './credit.component.html',
                styleUrls: ['./credit.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/research/publications/publications.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/research/publications/publications.component.ts ***!
  \*****************************************************************/
/*! exports provided: PublicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsComponent", function() { return PublicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function PublicationsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", publication_r1.LINK, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", publication_r1.IMG.SRC, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", publication_r1.IMG.ALT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](publication_r1.TITLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](publication_r1.SUBTITLE);
} }
class PublicationsComponent {
    constructor(translate) {
        this.translate = translate;
        this.bError = false;
        // Team Carousel
        this.publications = [{
                TITLE: 'Loading',
                SUBTITLE: 'Loading...',
                LINK: 'Loading...',
                IMG: {
                    ALT: '',
                    SRC: ''
                }
            }];
    }
    ngOnInit() {
        this.translate.get('RESEARCH.PUBLICATIONS.PUBLICATION').subscribe((res) => {
            if (typeof (res) === 'string') {
                this.bError = true;
                this.publications = [{
                        TITLE: 'An error occurred',
                        SUBTITLE: 'Cannot get translation',
                        LINK: 'Cannot get translation',
                        IMG: {
                            ALT: '',
                            SRC: ''
                        }
                    }];
            }
            else {
                this.publications = res;
            }
        });
    }
}
PublicationsComponent.ɵfac = function PublicationsComponent_Factory(t) { return new (t || PublicationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
PublicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicationsComponent, selectors: [["app-publications"]], decls: 11, vars: 4, consts: [["id", "publications", 1, "publications"], [1, "container-fluid"], [1, "row", "pt-5"], [1, "col-12", "text-center", "pt-5"], [1, "py-4"], [1, "test123", "row", "d-flex", "justify-content-center", "pb-5"], [1, "col-10", "mx-auto"], [1, "row", "publications"], ["class", "col-12 col-md-6 col-lg-4 wow pulse p-3", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-lg-4", "wow", "pulse", "p-3"], [1, "d-flex", "flex-column", "p-3", "publication", "h-100", 3, "href"], [3, "src", "alt"], [1, "pt-3"]], template: function PublicationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PublicationsComponent_div_10_Template, 7, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, "RESEARCH.PUBLICATIONS.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.publications);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["#publications[_ngcontent-%COMP%] {\n  background-color: var(--color-quaternary);\n}\n#publications[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n#publications[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n#publications[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]:after {\n  content: \"\";\n  flex: auto;\n}\n#publications[_ngcontent-%COMP%]   .publication[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: var(--box-shadow1);\n  box-sizing: border-box;\n}\n#publications[_ngcontent-%COMP%]   .publication[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#publications[_ngcontent-%COMP%]   .publication[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n@media screen and (max-width: 768px) {\n  #mission-values[_ngcontent-%COMP%] {\n    background-color: var(--text-invert);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib290cGhvbi9EZXNrdG9wL2VjaG9sYWxpYS9lY2hvbGFsaWEub3JnL3NyYy9hcHAvcmVzZWFyY2gvcHVibGljYXRpb25zL3B1YmxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsIi4uL3Jlc2VhcmNoL3B1YmxpY2F0aW9ucy9wdWJsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQ0NGO0FEQ0U7RUFDRSxpQkFBQTtBQ0NKO0FEUUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ05KO0FET0k7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ0xOO0FEU0U7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBSUEsc0JBQUE7QUNWSjtBRE9JO0VBQ0Usa0JBQUE7QUNMTjtBRGFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNYTjtBRGdCQTtFQUNFO0lBQ0Usb0NBQUE7RUNiRjtBQUNGIiwiZmlsZSI6Ii4uL3Jlc2VhcmNoL3B1YmxpY2F0aW9ucy9wdWJsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHVibGljYXRpb25ze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1xdWF0ZXJuYXJ5KTtcblxuICAuY29udGFpbmVyLWZsdWlke1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoIDtcbiAgfVxuICAudGVzdDEyM3tcbiAgICAvLyBtaW4taGVpZ2h0OiAxMDB2aCA7XG4gICAgLy8gbWluLWhlaWdodDpjYWxjKDEwMHZoKTtcbiAgICAvLyBwYWRkaW5nLXRvcDogMTIwcHg7XG4gICAgLy8gcGFkZGluZy1ib3R0b206IDEyMHB4O1xuICB9XG5cbiAgLnB1YmxpY2F0aW9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBmbGV4OiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gIC5wdWJsaWNhdGlvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93MSk7XG4gICAgaDR7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLy8gcGFkZGluZzogNWVtO1xuICAgIC8vIGJvcmRlcjogMWVtIHNvbGlkIHJnYigwLDAsMCwwLjApO1xuICB9XG5cbiAgLnB1YmxpY2F0aW9ue1xuICAgIGltZ3tcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNtaXNzaW9uLXZhbHVlc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWludmVydCk7XG4gIH1cbn1cbiIsIiNwdWJsaWNhdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1xdWF0ZXJuYXJ5KTtcbn1cbiNwdWJsaWNhdGlvbnMgLmNvbnRhaW5lci1mbHVpZCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuI3B1YmxpY2F0aW9ucyAucHVibGljYXRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuI3B1YmxpY2F0aW9ucyAucHVibGljYXRpb25zOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZmxleDogYXV0bztcbn1cbiNwdWJsaWNhdGlvbnMgLnB1YmxpY2F0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cxKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbiNwdWJsaWNhdGlvbnMgLnB1YmxpY2F0aW9uIGg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3B1YmxpY2F0aW9ucyAucHVibGljYXRpb24gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI21pc3Npb24tdmFsdWVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWludmVydCk7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-publications',
                templateUrl: './publications.component.html',
                styleUrls: ['./publications.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publications/publications.component */ "./src/app/research/publications/publications.component.ts");
/* harmony import */ var _credit_credit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./credit/credit.component */ "./src/app/research/credit/credit.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");






class ResearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResearchComponent.ɵfac = function ResearchComponent_Factory(t) { return new (t || ResearchComponent)(); };
ResearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResearchComponent, selectors: [["app-research"]], decls: 4, vars: 0, template: function ResearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-publications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _publications_publications_component__WEBPACK_IMPORTED_MODULE_2__["PublicationsComponent"], _credit_credit_component__WEBPACK_IMPORTED_MODULE_3__["CreditComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9yZXNlYXJjaC9yZXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-research',
                templateUrl: './research.component.html',
                styleUrls: ['./research.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/research/research.module.ts":
/*!*********************************************!*\
  !*** ./src/app/research/research.module.ts ***!
  \*********************************************/
/*! exports provided: ResearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearchModule", function() { return ResearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _research_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./research.component */ "./src/app/research/research.component.ts");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/__ivy_ngcc__/fesm2015/ngx-page-scroll.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./publications/publications.component */ "./src/app/research/publications/publications.component.ts");
/* harmony import */ var _credit_credit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./credit/credit.component */ "./src/app/research/credit/credit.component.ts");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-wow */ "./node_modules/ngx-wow/__ivy_ngcc__/esm2015/ngx-wow.js");





// 3rd party








// Routes
const routes = [
    {
        path: '',
        component: _research_component__WEBPACK_IMPORTED_MODULE_4__["ResearchComponent"]
    }
];
class ResearchModule {
}
ResearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResearchModule });
ResearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ResearchModule_Factory(t) { return new (t || ResearchModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            // 3rd party
            ngx_page_scroll__WEBPACK_IMPORTED_MODULE_5__["NgxPageScrollModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            ngx_wow__WEBPACK_IMPORTED_MODULE_10__["NgwWowModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResearchModule, { declarations: [_research_component__WEBPACK_IMPORTED_MODULE_4__["ResearchComponent"], _publications_publications_component__WEBPACK_IMPORTED_MODULE_8__["PublicationsComponent"], _credit_credit_component__WEBPACK_IMPORTED_MODULE_9__["CreditComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        // 3rd party
        ngx_page_scroll__WEBPACK_IMPORTED_MODULE_5__["NgxPageScrollModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
        ngx_wow__WEBPACK_IMPORTED_MODULE_10__["NgwWowModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResearchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_research_component__WEBPACK_IMPORTED_MODULE_4__["ResearchComponent"], _publications_publications_component__WEBPACK_IMPORTED_MODULE_8__["PublicationsComponent"], _credit_credit_component__WEBPACK_IMPORTED_MODULE_9__["CreditComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    // 3rd party
                    ngx_page_scroll__WEBPACK_IMPORTED_MODULE_5__["NgxPageScrollModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                    ngx_wow__WEBPACK_IMPORTED_MODULE_10__["NgwWowModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=research-research-module-es2015.js.map