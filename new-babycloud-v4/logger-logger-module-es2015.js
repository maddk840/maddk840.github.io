(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logger-logger-module"],{

/***/ "./src/app/logger/logger-main/logger-main.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/logger/logger-main/logger-main.component.ts ***!
  \*************************************************************/
/*! exports provided: LoggerMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerMainComponent", function() { return LoggerMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");







const _c0 = function () { return { inquiry: "quote", product: "logger" }; };
function LoggerMainComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/contact")("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "LOGGER.MAIN.BUTTON2"));
} }
function LoggerMainComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/contact")("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "LOGGER.MAIN.BUTTON2"));
} }
class LoggerMainComponent {
    constructor(breakpointObserver) {
        this.bMobile = false;
        breakpointObserver.observe('(max-width: 375px)').subscribe(result => {
            this.bMobile = result.matches;
        });
    }
    ngOnInit() {
    }
}
LoggerMainComponent.ɵfac = function LoggerMainComponent_Factory(t) { return new (t || LoggerMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
LoggerMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoggerMainComponent, selectors: [["app-logger-main"]], decls: 16, vars: 8, consts: [["id", "logger-main", 1, "logger-main"], [1, "container-fluid"], [1, "row"], [1, "col-10", "col-md-8", "col-lg-7", "mx-auto", "d-flex", "align-items-end", "align-items-md-center", "justify-content-center"], ["data-wow-duration", "1s", 1, "logger-image", "pr-0", "pr-md-5", "pt-md-5", "mt-5", "wow", "fadeInDown"], ["src", "assets/images/logger/render.png", "alt", "3d render of the logger"], ["data-wow-duration", "0.5s", "data-wow-delay", "0.25s", 1, "col-11", "mx-auto", "col-lg-5", "d-flex", "align-items-start", "justify-content-center", "flex-column", "wow", "fadeInRight"], ["class", "logger-buttons pt-4 mb-5 mb-lg-0", 4, "ngIf", "ngIfElse"], ["mobile", ""], [1, "logger-buttons", "pt-4", "mb-5", "mb-lg-0"], ["mat-flat-button", "", "href", "#", 1, "mt-4", "link-button", 3, "routerLink", "state"], [1, "logger-buttons", "pt-4"], ["href", "#", 1, "mt-4", "link-button-mobile", 3, "routerLink", "state"]], template: function LoggerMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoggerMainComponent_div_13_Template, 4, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoggerMainComponent_ng_template_14_Template, 4, 6, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, "LOGGER.MAIN.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 6, "LOGGER.MAIN.SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.bMobile)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["#logger-main[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n#logger-main[_ngcontent-%COMP%]   .link-button[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  border-radius: 25px;\n  color: var(--text-invert);\n  padding: 5px 25px 5px 25px;\n}\n#logger-main[_ngcontent-%COMP%]   .link-button-mobile[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-weight: bold;\n}\n#logger-main[_ngcontent-%COMP%]   .link-button-mobile[_ngcontent-%COMP%]:hover {\n  color: var(--color-tertiary);\n}\n#logger-main[_ngcontent-%COMP%]   .logger-image[_ngcontent-%COMP%] {\n  width: 200%;\n}\n#logger-main[_ngcontent-%COMP%]   .logger-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib290cGhvbi9EZXNrdG9wL2VjaG9sYWxpYS9lY2hvbGFsaWEub3JnL3NyYy9hcHAvbG9nZ2VyL2xvZ2dlci1tYWluL2xvZ2dlci1tYWluLmNvbXBvbmVudC5zY3NzIiwiLi4vbG9nZ2VyL2xvZ2dlci1tYWluL2xvZ2dlci1tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFFO0VBQ0UsaUJBQUE7QUNQSjtBRFVFO0VBQ0Usc0NBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUNSSjtBRFdFO0VBQ0ksMkJBQUE7RUFDQSxpQkFBQTtBQ1ROO0FEVU07RUFDRSw0QkFBQTtBQ1JSO0FEWUU7RUFDRSxXQUFBO0FDVko7QURXSTtFQUNFLFdBQUE7QUNUTiIsImZpbGUiOiIuLi9sb2dnZXIvbG9nZ2VyLW1haW4vbG9nZ2VyLW1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nZ2VyLW1haW57XG5cbiAgLy8gYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1sb2dnZXItcG9ydGFsKTtcbiAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLy8gYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuXG5cbiAgLnJvd3tcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxuXG4gIC5saW5rLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWludmVydCk7XG4gICAgcGFkZGluZzogNXB4IDI1cHggNXB4IDI1cHg7XG4gIH1cblxuICAubGluay1idXR0b24tbW9iaWxle1xuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAmOmhvdmVye1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGVydGlhcnkpO1xuICAgICAgfVxuICB9XG5cbiAgLmxvZ2dlci1pbWFnZXtcbiAgICB3aWR0aDogMjAwJTtcbiAgICBpbWd7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbi8vIH1cbiIsIiNsb2dnZXItbWFpbiAucm93IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG4jbG9nZ2VyLW1haW4gLmxpbmstYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWludmVydCk7XG4gIHBhZGRpbmc6IDVweCAyNXB4IDVweCAyNXB4O1xufVxuI2xvZ2dlci1tYWluIC5saW5rLWJ1dHRvbi1tb2JpbGUge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2xvZ2dlci1tYWluIC5saW5rLWJ1dHRvbi1tb2JpbGU6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGVydGlhcnkpO1xufVxuI2xvZ2dlci1tYWluIC5sb2dnZXItaW1hZ2Uge1xuICB3aWR0aDogMjAwJTtcbn1cbiNsb2dnZXItbWFpbiAubG9nZ2VyLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logger-main',
                templateUrl: './logger-main.component.html',
                styleUrls: ['./logger-main.component.scss']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/logger/logger-more/logger-more.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/logger/logger-more/logger-more.component.ts ***!
  \*************************************************************/
/*! exports provided: LoggerMoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerMoreComponent", function() { return LoggerMoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");







const _c0 = function () { return { inquiry: "quote", product: "logger" }; };
function LoggerMoreComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 13, "LOGGER.MORE.ONE.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 15, "LOGGER.MORE.ONE.SUBTITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/coming-soon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 17, "LOGGER.MORE.ONE.BUTTON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 19, "LOGGER.MORE.TWO.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 21, "LOGGER.MORE.TWO.SUBTITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/coming-soon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 23, "LOGGER.MORE.TWO.BUTTON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 25, "LOGGER.MORE.THREE.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 27, "LOGGER.MORE.THREE.SUBTITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/contact")("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 29, "LOGGER.MORE.THREE.BUTTON"));
} }
function LoggerMoreComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 13, "LOGGER.MORE.ONE.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 15, "LOGGER.MORE.ONE.SUBTITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 17, "LOGGER.MORE.ONE.HREF"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 19, "LOGGER.MORE.ONE.BUTTON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 21, "LOGGER.MORE.TWO.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 23, "LOGGER.MORE.TWO.SUBTITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 25, "LOGGER.MORE.TWO.HREF"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 27, "LOGGER.MORE.TWO.BUTTON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 29, "LOGGER.MORE.THREE.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 31, "LOGGER.MORE.THREE.SUBTITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/contact")("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 33, "LOGGER.MORE.THREE.BUTTON"));
} }
class LoggerMoreComponent {
    constructor(breakpointObserver) {
        this.bMobile = false;
        breakpointObserver.observe('(max-width: 576px)').subscribe(result => {
            this.bMobile = result.matches;
        });
    }
    ngOnInit() {
    }
}
LoggerMoreComponent.ɵfac = function LoggerMoreComponent_Factory(t) { return new (t || LoggerMoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
LoggerMoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoggerMoreComponent, selectors: [["app-logger-more"]], decls: 4, vars: 2, consts: [["id", "logger-more", 1, "logger-more"], ["class", "container-fluid", 4, "ngIf", "ngIfElse"], ["mobile", ""], [1, "container-fluid"], [1, "row"], [1, "col-8", "mx-auto"], [1, "col-3", "col-lg-2", "offset-lg-1"], ["src", "assets/images/logger/documentation.svg", "alt", "documentation icon - image of book with settings and code icons on it"], [1, "col-8", "offset-1"], ["mat-flat-button", "", 1, "mt-4", "link-button", 3, "routerLink"], [1, "row", "py-5", "my-5"], ["src", "assets/images/logger/github.svg", "alt", "github icon"], ["src", "assets/images/logger/quote.svg", "alt", "quote icon - document with euro sign and calculator"], ["mat-flat-button", "", 1, "mt-4", "link-button", 3, "routerLink", "state"], [1, "col-8", "mx-auto", "pb-3", "more-image"], [1, "col-12", "mx-auto", "text-center"], ["mat-flat-button", "", 1, "mt-4", "link-button", 3, "href"]], template: function LoggerMoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoggerMoreComponent_div_1_Template, 42, 32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoggerMoreComponent_ng_template_2_Template, 43, 36, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.bMobile)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["#logger-more[_ngcontent-%COMP%] {\n  padding-top: 10vh;\n  padding-bottom: 10vh;\n}\n#logger-more[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--color-tertiary);\n  border-radius: 25px;\n  color: var(--text-invert);\n  padding: 5px 25px 5px 25px;\n  width: 15em;\n}\n#logger-more[_ngcontent-%COMP%]   .link-button[_ngcontent-%COMP%] {\n  background-color: var(--color-tertiary);\n  border-radius: 25px;\n  color: var(--text-invert);\n  padding: 5px 25px 5px 25px;\n  width: 15em;\n}\n@media screen and (max-width: 576px) {\n  button[_ngcontent-%COMP%] {\n    width: 10em;\n  }\n\n  .more-image[_ngcontent-%COMP%] {\n    max-width: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib290cGhvbi9EZXNrdG9wL2VjaG9sYWxpYS9lY2hvbGFsaWEub3JnL3NyYy9hcHAvbG9nZ2VyL2xvZ2dlci1tb3JlL2xvZ2dlci1tb3JlLmNvbXBvbmVudC5zY3NzIiwiLi4vbG9nZ2VyL2xvZ2dlci1tb3JlL2xvZ2dlci1tb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ0NGO0FEQ0U7RUFDRSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNDSjtBREVFO0VBQ0UsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDQUo7QURLQTtFQUNJO0lBQ0UsV0FBQTtFQ0ZKOztFRElFO0lBQ0UsZ0JBQUE7RUNESjtBQUNGIiwiZmlsZSI6Ii4uL2xvZ2dlci9sb2dnZXItbW9yZS9sb2dnZXItbW9yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dnZXItbW9yZXtcbiAgcGFkZGluZy10b3A6IDEwdmg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHZoO1xuXG4gIGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1pbnZlcnQpO1xuICAgIHBhZGRpbmc6IDVweCAyNXB4IDVweCAyNXB4O1xuICAgIHdpZHRoOiAxNWVtO1xuICB9XG5cbiAgLmxpbmstYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWludmVydCk7XG4gICAgcGFkZGluZzogNXB4IDI1cHggNXB4IDI1cHg7XG4gICAgd2lkdGg6IDE1ZW07XG4gIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIGJ1dHRvbntcbiAgICAgIHdpZHRoOiAxMGVtO1xuICAgIH1cbiAgICAubW9yZS1pbWFnZXtcbiAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgfVxufVxuIiwiI2xvZ2dlci1tb3JlIHtcbiAgcGFkZGluZy10b3A6IDEwdmg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHZoO1xufVxuI2xvZ2dlci1tb3JlIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgY29sb3I6IHZhcigtLXRleHQtaW52ZXJ0KTtcbiAgcGFkZGluZzogNXB4IDI1cHggNXB4IDI1cHg7XG4gIHdpZHRoOiAxNWVtO1xufVxuI2xvZ2dlci1tb3JlIC5saW5rLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgY29sb3I6IHZhcigtLXRleHQtaW52ZXJ0KTtcbiAgcGFkZGluZzogNXB4IDI1cHggNXB4IDI1cHg7XG4gIHdpZHRoOiAxNWVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICBidXR0b24ge1xuICAgIHdpZHRoOiAxMGVtO1xuICB9XG5cbiAgLm1vcmUtaW1hZ2Uge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerMoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logger-more',
                templateUrl: './logger-more.component.html',
                styleUrls: ['./logger-more.component.scss']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/logger/logger-specs/logger-specs.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/logger/logger-specs/logger-specs.component.ts ***!
  \***************************************************************/
/*! exports provided: LoggerSpecsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerSpecsComponent", function() { return LoggerSpecsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function LoggerSpecsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const spec_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", spec_r1.IMG.SRC, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", spec_r1.IMG.ALT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](spec_r1.TEXT);
} }
class LoggerSpecsComponent {
    constructor(translate) {
        this.translate = translate;
        this.bError = false;
        this.specs = [{
                IMG: {
                    ALT: '',
                    SRC: ''
                },
                TEXT: 'Loading'
            }];
    }
    ngOnInit() {
        this.translate.get('LOGGER.SPECS.SPEC').subscribe((res) => {
            if (typeof (res) === 'string') {
                this.bError = true;
                this.specs = [{
                        TEXT: 'Cannot get translation',
                        IMG: {
                            ALT: '',
                            SRC: ''
                        }
                    }];
            }
            else {
                this.specs = res;
            }
        });
    }
}
LoggerSpecsComponent.ɵfac = function LoggerSpecsComponent_Factory(t) { return new (t || LoggerSpecsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
LoggerSpecsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoggerSpecsComponent, selectors: [["app-logger-specs"]], decls: 6, vars: 1, consts: [["id", "logger-specs", 1, "logger-specs"], [1, "container-fluid"], [1, "row"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "specs-container", "d-flex", "align-items-center", "justify-content-center"], ["class", "spec d-flex align-items-center justify-content-center flex-column wow zoomIn", 4, "ngFor", "ngForOf"], [1, "spec", "d-flex", "align-items-center", "justify-content-center", "flex-column", "wow", "zoomIn"], [1, "spec-image"], [3, "src", "alt"]], template: function LoggerSpecsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoggerSpecsComponent_div_5_Template, 5, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.specs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["#logger-specs[_ngcontent-%COMP%] {\n  background-color: var(--color-quaternary);\n}\n#logger-specs[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n#logger-specs[_ngcontent-%COMP%]   .specs-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n#logger-specs[_ngcontent-%COMP%]   .spec[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: var(--box-shadow1);\n  width: 20vw;\n  height: 17vw;\n  margin: 2.5vw;\n  text-align: center;\n  padding: 2em;\n}\n#logger-specs[_ngcontent-%COMP%]   .spec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n#logger-specs[_ngcontent-%COMP%]   .spec-image[_ngcontent-%COMP%] {\n  width: 50%;\n  height: auto;\n  margin: auto;\n  padding-bottom: 5%;\n}\n#logger-specs[_ngcontent-%COMP%]   .spec-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 991px) and (min-width: 768px) {\n  #logger-specs[_ngcontent-%COMP%]   .spec[_ngcontent-%COMP%] {\n    width: 40vw;\n    height: 34vw;\n  }\n}\n@media (max-width: 767px) and (min-width: 576px) {\n  #logger-specs[_ngcontent-%COMP%]   .spec[_ngcontent-%COMP%] {\n    width: 40vw;\n    height: 34vw;\n  }\n}\n@media (max-width: 575px) {\n  #logger-specs[_ngcontent-%COMP%]   .spec[_ngcontent-%COMP%] {\n    width: 80vw;\n    height: 68vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib290cGhvbi9EZXNrdG9wL2VjaG9sYWxpYS9lY2hvbGFsaWEub3JnL3NyYy9hcHAvbG9nZ2VyL2xvZ2dlci1zcGVjcy9sb2dnZXItc3BlY3MuY29tcG9uZW50LnNjc3MiLCIuLi9sb2dnZXIvbG9nZ2VyLXNwZWNzL2xvZ2dlci1zcGVjcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FDQ0Y7QURBRTtFQUNFLGlCQUFBO0FDRUo7QURDRTtFQUNFLGVBQUE7QUNDSjtBREVFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERUk7RUFDRSxnQkFBQTtBQ0FOO0FES0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0hKO0FES0k7RUFDRSxXQUFBO0FDSE47QURjQTtFQUVJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUNaSjtBQUNGO0FEZ0JBO0VBRUk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ2ZKO0FBQ0Y7QURrQkE7RUFFSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDakJKO0FBQ0YiLCJmaWxlIjoiLi4vbG9nZ2VyL2xvZ2dlci1zcGVjcy9sb2dnZXItc3BlY3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nZ2VyLXNwZWNze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1xdWF0ZXJuYXJ5KTtcbiAgLnJvd3tcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxuXG4gIC5zcGVjcy1jb250YWluZXJ7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLnNwZWN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdzEpO1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIGhlaWdodDogMTd2dztcbiAgICBtYXJnaW46Mi41dnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJlbTtcblxuICAgIHB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICB9XG5cbiAgLnNwZWMtaW1hZ2V7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6YXV0bztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGhvdHBpbms7XG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cblxufVxuXG5AbWVkaWEobWluLXdpZHRoOjEyMDBweCl7XG59XG5AbWVkaWEobWF4LXdpZHRoOiAxMTk5cHgpIGFuZCAobWluLXdpZHRoOiA5OTJweCl7XG59XG5AbWVkaWEobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgI2xvZ2dlci1zcGVjc3tcbiAgICAuc3BlY3tcbiAgICAgIHdpZHRoOiA0MHZ3O1xuICAgICAgaGVpZ2h0OiAzNHZ3O1xuICAgIH1cbiAgfVxuXG59XG5AbWVkaWEobWF4LXdpZHRoOiA3NjdweCkgYW5kIChtaW4td2lkdGg6IDU3NnB4KXtcbiAgI2xvZ2dlci1zcGVjc3tcbiAgICAuc3BlY3tcbiAgICAgIHdpZHRoOiA0MHZ3O1xuICAgICAgaGVpZ2h0OiAzNHZ3O1xuICAgIH1cbiAgfVxufVxuQG1lZGlhKG1heC13aWR0aDogNTc1cHgpe1xuICAjbG9nZ2VyLXNwZWNze1xuICAgIC5zcGVje1xuICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICBoZWlnaHQ6IDY4dnc7XG4gICAgICAvLyB3aWR0aDogNDB2dztcbiAgICAgIC8vIGhlaWdodDogMzR2dztcbiAgICB9XG4gIH1cbn1cbiIsIiNsb2dnZXItc3BlY3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1xdWF0ZXJuYXJ5KTtcbn1cbiNsb2dnZXItc3BlY3MgLnJvdyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuI2xvZ2dlci1zcGVjcyAuc3BlY3MtY29udGFpbmVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuI2xvZ2dlci1zcGVjcyAuc3BlYyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93MSk7XG4gIHdpZHRoOiAyMHZ3O1xuICBoZWlnaHQ6IDE3dnc7XG4gIG1hcmdpbjogMi41dnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMmVtO1xufVxuI2xvZ2dlci1zcGVjcyAuc3BlYyBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiNsb2dnZXItc3BlY3MgLnNwZWMtaW1hZ2Uge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuI2xvZ2dlci1zcGVjcyAuc3BlYy1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgI2xvZ2dlci1zcGVjcyAuc3BlYyB7XG4gICAgd2lkdGg6IDQwdnc7XG4gICAgaGVpZ2h0OiAzNHZ3O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xuICAjbG9nZ2VyLXNwZWNzIC5zcGVjIHtcbiAgICB3aWR0aDogNDB2dztcbiAgICBoZWlnaHQ6IDM0dnc7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAjbG9nZ2VyLXNwZWNzIC5zcGVjIHtcbiAgICB3aWR0aDogODB2dztcbiAgICBoZWlnaHQ6IDY4dnc7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerSpecsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logger-specs',
                templateUrl: './logger-specs.component.html',
                styleUrls: ['./logger-specs.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/logger/logger.component.ts":
/*!********************************************!*\
  !*** ./src/app/logger/logger.component.ts ***!
  \********************************************/
/*! exports provided: LoggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerComponent", function() { return LoggerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-wow */ "./node_modules/ngx-wow/__ivy_ngcc__/esm2015/ngx-wow.js");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _logger_main_logger_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger-main/logger-main.component */ "./src/app/logger/logger-main/logger-main.component.ts");
/* harmony import */ var _logger_specs_logger_specs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger-specs/logger-specs.component */ "./src/app/logger/logger-specs/logger-specs.component.ts");
/* harmony import */ var _logger_more_logger_more_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logger-more/logger-more.component */ "./src/app/logger/logger-more/logger-more.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");








class LoggerComponent {
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
LoggerComponent.ɵfac = function LoggerComponent_Factory(t) { return new (t || LoggerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_1__["NgwWowService"])); };
LoggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoggerComponent, selectors: [["app-logger"]], decls: 5, vars: 0, template: function LoggerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-logger-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-logger-specs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-logger-more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _logger_main_logger_main_component__WEBPACK_IMPORTED_MODULE_3__["LoggerMainComponent"], _logger_specs_logger_specs_component__WEBPACK_IMPORTED_MODULE_4__["LoggerSpecsComponent"], _logger_more_logger_more_component__WEBPACK_IMPORTED_MODULE_5__["LoggerMoreComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9sb2dnZXIvbG9nZ2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logger',
                templateUrl: './logger.component.html',
                styleUrls: ['./logger.component.scss']
            }]
    }], function () { return [{ type: ngx_wow__WEBPACK_IMPORTED_MODULE_1__["NgwWowService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/logger/logger.module.ts":
/*!*****************************************!*\
  !*** ./src/app/logger/logger.module.ts ***!
  \*****************************************/
/*! exports provided: LoggerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerModule", function() { return LoggerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _logger_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger.component */ "./src/app/logger/logger.component.ts");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/__ivy_ngcc__/fesm2015/ngx-page-scroll.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _logger_main_logger_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logger-main/logger-main.component */ "./src/app/logger/logger-main/logger-main.component.ts");
/* harmony import */ var _logger_specs_logger_specs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logger-specs/logger-specs.component */ "./src/app/logger/logger-specs/logger-specs.component.ts");
/* harmony import */ var _logger_more_logger_more_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logger-more/logger-more.component */ "./src/app/logger/logger-more/logger-more.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-wow */ "./node_modules/ngx-wow/__ivy_ngcc__/esm2015/ngx-wow.js");





// 3rd party









// Routes
const routes = [
    {
        path: '',
        component: _logger_component__WEBPACK_IMPORTED_MODULE_4__["LoggerComponent"]
    }
];
class LoggerModule {
}
LoggerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoggerModule });
LoggerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoggerModule_Factory(t) { return new (t || LoggerModule)(); }, imports: [[
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoggerModule, { declarations: [_logger_component__WEBPACK_IMPORTED_MODULE_4__["LoggerComponent"], _logger_main_logger_main_component__WEBPACK_IMPORTED_MODULE_7__["LoggerMainComponent"], _logger_specs_logger_specs_component__WEBPACK_IMPORTED_MODULE_8__["LoggerSpecsComponent"], _logger_more_logger_more_component__WEBPACK_IMPORTED_MODULE_9__["LoggerMoreComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        // 3rd party
        ngx_page_scroll__WEBPACK_IMPORTED_MODULE_5__["NgxPageScrollModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
        ngx_wow__WEBPACK_IMPORTED_MODULE_11__["NgwWowModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_logger_component__WEBPACK_IMPORTED_MODULE_4__["LoggerComponent"], _logger_main_logger_main_component__WEBPACK_IMPORTED_MODULE_7__["LoggerMainComponent"], _logger_specs_logger_specs_component__WEBPACK_IMPORTED_MODULE_8__["LoggerSpecsComponent"], _logger_more_logger_more_component__WEBPACK_IMPORTED_MODULE_9__["LoggerMoreComponent"]],
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
//# sourceMappingURL=logger-logger-module-es2015.js.map