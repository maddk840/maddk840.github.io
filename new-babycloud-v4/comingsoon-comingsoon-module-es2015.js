(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comingsoon-comingsoon-module"],{

/***/ "./src/app/comingsoon/comingsoon-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/comingsoon/comingsoon-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ComingsoonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingsoonRoutingModule", function() { return ComingsoonRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comingsoon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comingsoon.component */ "./src/app/comingsoon/comingsoon.component.ts");





// Routes
const routes = [
    {
        path: '',
        component: _comingsoon_component__WEBPACK_IMPORTED_MODULE_2__["ComingsoonComponent"]
    }
];
class ComingsoonRoutingModule {
}
ComingsoonRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComingsoonRoutingModule });
ComingsoonRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComingsoonRoutingModule_Factory(t) { return new (t || ComingsoonRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComingsoonRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComingsoonRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comingsoon/comingsoon.component.ts":
/*!****************************************************!*\
  !*** ./src/app/comingsoon/comingsoon.component.ts ***!
  \****************************************************/
/*! exports provided: ComingsoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingsoonComponent", function() { return ComingsoonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





class ComingsoonComponent {
    constructor() { }
    ngOnInit() {
    }
}
ComingsoonComponent.ɵfac = function ComingsoonComponent_Factory(t) { return new (t || ComingsoonComponent)(); };
ComingsoonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComingsoonComponent, selectors: [["app-comingsoon"]], decls: 14, vars: 6, consts: [["id", "comingsoon", 1, "comingsoon"], [1, "container"], [1, "row", "h-100", "d-flex", "align-content-center"], [1, "col-11", "mx-auto", "d-md-flex", "align-items-end", "my-auto"], ["src", "assets/images/comingsoon/crane.svg", "alt", "crane", 1, "crane", "mb-3", "mb-md-0", "mr-3", "mr-md-n5"]], template: function ComingsoonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 2, "COMINGSOON.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, "COMINGSOON.SUBTITLE"));
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["#comingsoon[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n#comingsoon[_ngcontent-%COMP%]   .crane[_ngcontent-%COMP%] {\n  height: 15em;\n}\n@media screen and (max-width: 767px) {\n  #comingsoon[_ngcontent-%COMP%]   .crane[_ngcontent-%COMP%] {\n    height: 10em;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib290cGhvbi9EZXNrdG9wL2VjaG9sYWxpYS9lY2hvbGFsaWEub3JnL3NyYy9hcHAvY29taW5nc29vbi9jb21pbmdzb29uLmNvbXBvbmVudC5zY3NzIiwiLi4vY29taW5nc29vbi9jb21pbmdzb29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7QUNBSjtBREdFO0VBQ0UsWUFBQTtBQ0RKO0FETUE7RUFFSTtJQUNFLFlBQUE7SUFDQSxZQUFBO0VDSko7QUFDRiIsImZpbGUiOiIuLi9jb21pbmdzb29uL2NvbWluZ3Nvb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29taW5nc29vbntcbiAgLnJvd3tcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxuXG4gIC5jcmFuZXtcbiAgICBoZWlnaHQ6IDE1ZW07XG4gIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XG4gICNjb21pbmdzb29ue1xuICAgIC5jcmFuZXtcbiAgICAgIGhlaWdodDogMTBlbTtcbiAgICAgIG1hcmdpbjphdXRvO1xuICAgIH1cbiAgfVxufVxuIiwiI2NvbWluZ3Nvb24gLnJvdyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuI2NvbWluZ3Nvb24gLmNyYW5lIHtcbiAgaGVpZ2h0OiAxNWVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAjY29taW5nc29vbiAuY3JhbmUge1xuICAgIGhlaWdodDogMTBlbTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComingsoonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comingsoon',
                templateUrl: './comingsoon.component.html',
                styleUrls: ['./comingsoon.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comingsoon/comingsoon.module.ts":
/*!*************************************************!*\
  !*** ./src/app/comingsoon/comingsoon.module.ts ***!
  \*************************************************/
/*! exports provided: ComingsoonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingsoonModule", function() { return ComingsoonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _comingsoon_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comingsoon-routing.module */ "./src/app/comingsoon/comingsoon-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _comingsoon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comingsoon.component */ "./src/app/comingsoon/comingsoon.component.ts");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/__ivy_ngcc__/fesm2015/ngx-page-scroll.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");






// 3rd party



class ComingsoonModule {
}
ComingsoonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComingsoonModule });
ComingsoonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComingsoonModule_Factory(t) { return new (t || ComingsoonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _comingsoon_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComingsoonRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            // 3rd party
            ngx_page_scroll__WEBPACK_IMPORTED_MODULE_6__["NgxPageScrollModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComingsoonModule, { declarations: [_comingsoon_component__WEBPACK_IMPORTED_MODULE_5__["ComingsoonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _comingsoon_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComingsoonRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        // 3rd party
        ngx_page_scroll__WEBPACK_IMPORTED_MODULE_6__["NgxPageScrollModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComingsoonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_comingsoon_component__WEBPACK_IMPORTED_MODULE_5__["ComingsoonComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _comingsoon_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComingsoonRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    // 3rd party
                    ngx_page_scroll__WEBPACK_IMPORTED_MODULE_6__["NgxPageScrollModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=comingsoon-comingsoon-module-es2015.js.map