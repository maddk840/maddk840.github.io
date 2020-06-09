function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js ***!
    \*************************************************************************************/

  /*! exports provided: CarouselComponent, CarouselModule, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective, SlidesOutputData, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx */

  /***/
  function node_modulesNgxOwlCarouselO__ivy_ngcc__Fesm2015NgxOwlCarouselOJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselModule", function () {
      return CarouselModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselSlideDirective", function () {
      return CarouselSlideDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlRouterLinkDirective", function () {
      return OwlRouterLinkDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlRouterLinkWithHrefDirective", function () {
      return OwlRouterLinkWithHrefDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidesOutputData", function () {
      return SlidesOutputData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return NavigationService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return CarouselService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return OwlLogger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return AutoplayService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return WINDOW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return WindowRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return BrowserWindowRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return windowFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return browserWindowProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return windowProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return WINDOW_PROVIDERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return DOCUMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return DocumentRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return BrowserDocumentRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo", function () {
      return documentFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵp", function () {
      return browserDocumentProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵq", function () {
      return documentProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵr", function () {
      return DOCUMENT_PROVIDERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵs", function () {
      return LazyLoadService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵt", function () {
      return AnimateService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵu", function () {
      return AutoHeightService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵv", function () {
      return HashService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵw", function () {
      return ResizeService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵx", function () {
      return StageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var _c0 = function _c0(a0, a1) {
      return {
        "isMouseDragable": a0,
        "isTouchDragable": a1
      };
    };

    function CarouselComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "owl-stage", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDraggable", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r1.owlDOMData == null ? null : ctx_r1.owlDOMData.isMouseDragable, ctx_r1.owlDOMData == null ? null : ctx_r1.owlDOMData.isTouchDragable))("stageData", ctx_r1.stageData)("slidesData", ctx_r1.slidesData);
      }
    }

    var _c1 = function _c1(a0, a1) {
      return {
        "active": a0,
        "owl-dot-text": a1
      };
    };

    function CarouselComponent_ng_container_3_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_ng_container_3_div_5_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var dot_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r5.moveByDot(dot_r4.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dot_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c1, dot_r4.active, dot_r4.showInnerContent));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", dot_r4.innerContent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "disabled": a0
      };
    };

    function CarouselComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_ng_container_3_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r7.prev();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_ng_container_3_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CarouselComponent_ng_container_3_div_5_Template, 2, 5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c2, ctx_r2.navData == null ? null : ctx_r2.navData.disabled));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c2, ctx_r2.navData == null ? null : ctx_r2.navData.prev == null ? null : ctx_r2.navData.prev.disabled))("innerHTML", ctx_r2.navData == null ? null : ctx_r2.navData.prev == null ? null : ctx_r2.navData.prev.htmlText, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c2, ctx_r2.navData == null ? null : ctx_r2.navData.next == null ? null : ctx_r2.navData.next.disabled))("innerHTML", ctx_r2.navData == null ? null : ctx_r2.navData.next == null ? null : ctx_r2.navData.next.htmlText, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c2, ctx_r2.dotsData == null ? null : ctx_r2.dotsData.disabled));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.dotsData == null ? null : ctx_r2.dotsData.dots);
      }
    }

    var _c3 = function _c3(a0, a1, a2, a3, a4) {
      return {
        "owl-rtl": a0,
        "owl-loaded": a1,
        "owl-responsive": a2,
        "owl-drag": a3,
        "owl-grab": a4
      };
    };

    function StageComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) {}

    function StageComponent_ng_container_2_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, StageComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 4);
      }

      if (rf & 2) {
        var slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", slide_r1.tplRef);
      }
    }

    var _c4 = function _c4(a0, a1, a2, a3) {
      return {
        "width": a0,
        "margin-left": a1,
        "margin-right": a2,
        "left": a3
      };
    };

    function StageComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationend", function StageComponent_ng_container_2_Template_div_animationend_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var slide_r1 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r6.clear(slide_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StageComponent_ng_container_2_2_Template, 1, 1, undefined, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var slide_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", slide_r1.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](4, _c4, slide_r1.width + "px", slide_r1.marginL ? slide_r1.marginL + "px" : "", slide_r1.marginR ? slide_r1.marginR + "px" : "", slide_r1.left))("@autoHeight", slide_r1.heightState);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", slide_r1.load);
      }
    }

    var _c5 = function _c5(a0, a1, a2, a3, a4) {
      return {
        "width": a0,
        "transform": a1,
        "transition": a2,
        "padding-left": a3,
        "padding-right": a4
      };
    };

    var ResizeService = /*#__PURE__*/function () {
      function ResizeService(eventManager) {
        _classCallCheck(this, ResizeService);

        this.eventManager = eventManager;
        this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
        this.eventManager.addGlobalEventListener('window', 'onload', this.onLoaded.bind(this));
      }
      /**
       * Makes resizeSubject become Observable
       * @returns Observable of resizeSubject
       */


      _createClass(ResizeService, [{
        key: "onResize",

        /**
         * Handler of 'resize' event. Passes data throw resizeSubject
         * @param event Event Object of 'resize' event
         */
        value: function onResize(event) {
          this.resizeSubject.next(event.target);
        }
        /**
         * Handler of 'onload' event. Defines the width of window
         * @param event Event Object of 'onload' event
         */

      }, {
        key: "onLoaded",
        value: function onLoaded(event) {
          this.windowWidth = event.target;
        }
      }, {
        key: "onResize$",
        get: function get() {
          return this.resizeSubject.asObservable();
        }
      }]);

      return ResizeService;
    }();

    ResizeService.ɵfac = function ResizeService_Factory(t) {
      return new (t || ResizeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["EventManager"]));
    };

    ResizeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ResizeService,
      factory: ResizeService.ɵfac
    });

    ResizeService.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["EventManager"]
      }];
    };
    /**
     * Defaults value of options
     */


    var OwlCarouselOConfig = function OwlCarouselOConfig() {
      _classCallCheck(this, OwlCarouselOConfig);

      this.items = 3;
      this.skip_validateItems = false;
      this.loop = false;
      this.center = false;
      this.rewind = false;
      this.mouseDrag = true;
      this.touchDrag = true;
      this.pullDrag = true;
      this.freeDrag = false;
      this.margin = 0;
      this.stagePadding = 0;
      this.merge = false;
      this.mergeFit = true;
      this.autoWidth = false;
      this.startPosition = 0;
      this.rtl = false;
      this.smartSpeed = 250;
      this.fluidSpeed = false;
      this.dragEndSpeed = false;
      this.responsive = {};
      this.responsiveRefreshRate = 200; // defaults to Navigation

      this.nav = false;
      this.navText = ['prev', 'next'];
      this.navSpeed = false;
      this.slideBy = 1; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide

      this.dots = true;
      this.dotsEach = false;
      this.dotsData = false;
      this.dotsSpeed = false; // defaults to Autoplay

      this.autoplay = false;
      this.autoplayTimeout = 5000;
      this.autoplayHoverPause = false;
      this.autoplaySpeed = false; // defaults to LazyLoading

      this.lazyLoad = false;
      this.lazyLoadEager = 0; // defaults to Animate

      this.slideTransition = '';
      this.animateOut = false;
      this.animateIn = false; // defaults to AutoHeight

      this.autoHeight = false; // defaults to Hash

      this.URLhashListener = false;
    };
    /**
     * we can't read types from OwlOptions in javascript because of props have undefined value and types of those props are used for validating inputs
     * class below is copy of OwlOptions but its all props have string value showing certain type;
     * this is class is being used just in method _validateOptions() of CarouselService;
     */


    var OwlOptionsMockedTypes = function OwlOptionsMockedTypes() {
      _classCallCheck(this, OwlOptionsMockedTypes);

      this.items = 'number';
      this.skip_validateItems = 'boolean';
      this.loop = 'boolean';
      this.center = 'boolean';
      this.rewind = 'boolean';
      this.mouseDrag = 'boolean';
      this.touchDrag = 'boolean';
      this.pullDrag = 'boolean';
      this.freeDrag = 'boolean';
      this.margin = 'number';
      this.stagePadding = 'number';
      this.merge = 'boolean';
      this.mergeFit = 'boolean';
      this.autoWidth = 'boolean';
      this.startPosition = 'number|string';
      this.rtl = 'boolean';
      this.smartSpeed = 'number';
      this.fluidSpeed = 'boolean';
      this.dragEndSpeed = 'number|boolean';
      this.responsive = {};
      this.responsiveRefreshRate = 'number'; // defaults to Navigation

      this.nav = 'boolean';
      this.navText = 'string[]';
      this.navSpeed = 'number|boolean';
      this.slideBy = 'number|string'; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide

      this.dots = 'boolean';
      this.dotsEach = 'number|boolean';
      this.dotsData = 'boolean';
      this.dotsSpeed = 'number|boolean'; // defaults to Autoplay

      this.autoplay = 'boolean';
      this.autoplayTimeout = 'number';
      this.autoplayHoverPause = 'boolean';
      this.autoplaySpeed = 'number|boolean'; // defaults to LazyLoading

      this.lazyLoad = 'boolean';
      this.lazyLoadEager = 'number'; // defaults to Animate

      this.slideTransition = 'string';
      this.animateOut = 'string|boolean';
      this.animateIn = 'string|boolean'; // defaults to AutoHeight

      this.autoHeight = 'boolean'; // defaults to Hash

      this.URLhashListener = "boolean";
    };

    var OwlLogger = /*#__PURE__*/function () {
      function OwlLogger(errorHandler) {
        _classCallCheck(this, OwlLogger);

        this.errorHandler = errorHandler;
      }

      _createClass(OwlLogger, [{
        key: "log",
        value: function log(value) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            var _console;

            for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              rest[_key - 1] = arguments[_key];
            }

            (_console = console).log.apply(_console, [value].concat(rest));
          }
        }
      }, {
        key: "error",
        value: function error(_error) {
          this.errorHandler.handleError(_error);
        }
      }, {
        key: "warn",
        value: function warn(value) {
          var _console2;

          for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            rest[_key2 - 1] = arguments[_key2];
          }

          (_console2 = console).warn.apply(_console2, [value].concat(rest));
        }
      }]);

      return OwlLogger;
    }();

    OwlLogger.ɵfac = function OwlLogger_Factory(t) {
      return new (t || OwlLogger)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]));
    };

    OwlLogger.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: OwlLogger,
      factory: OwlLogger.ɵfac
    });

    OwlLogger.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]
      }];
    };
    /**
     * Current state information and their tags.
     */


    var States = function States() {
      _classCallCheck(this, States);
    };
    /**
     * Enumeration for types.
     * @enum {String}
     */


    var Type;

    (function (Type) {
      Type["Event"] = "event";
      Type["State"] = "state";
    })(Type || (Type = {}));

    ;
    /**
     * Enumeration for width.
     * @enum {String}
     */

    var Width;

    (function (Width) {
      Width["Default"] = "default";
      Width["Inner"] = "inner";
      Width["Outer"] = "outer";
    })(Width || (Width = {}));

    ;
    /**
     * Model for coords of .owl-stage
     */

    var Coords = function Coords() {
      _classCallCheck(this, Coords);
    };
    /**
     * Model for all current data of carousel
     */


    var CarouselCurrentData = function CarouselCurrentData() {
      _classCallCheck(this, CarouselCurrentData);
    };

    var CarouselService = /*#__PURE__*/function () {
      function CarouselService(logger) {
        var _this = this;

        _classCallCheck(this, CarouselService);

        this.logger = logger;
        /**
        * Subject for passing data needed for managing View
        */

        this._viewSettingsShipper$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel got initializes
        */

        this._initializedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel's settings start changinf
        */

        this._changeSettingsCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel's settings have changed
        */

        this._changedSettingsCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel starts translating or moving
        */

        this._translateCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel stopped translating or moving
        */

        this._translatedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel's rebuilding caused by 'resize' event starts
        */

        this._resizeCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification  when the carousel's rebuilding caused by 'resize' event is ended
        */

        this._resizedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the refresh of carousel starts
        */

        this._refreshCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the refresh of carousel is ended
        */

        this._refreshedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the dragging of carousel starts
        */

        this._dragCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the dragging of carousel is ended
        */

        this._draggedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Current settings for the carousel.
         */

        this.settings = {
          items: 0
        };
        /**
        * Initial data for setting classes to element .owl-carousel
        */

        this.owlDOMData = {
          rtl: false,
          isResponsive: false,
          isRefreshed: false,
          isLoaded: false,
          isLoading: false,
          isMouseDragable: false,
          isGrab: false,
          isTouchDragable: false
        };
        /**
        * Initial data of .owl-stage
        */

        this.stageData = {
          transform: 'translate3d(0px,0px,0px)',
          transition: '0s',
          width: 0,
          paddingL: 0,
          paddingR: 0
        };
        /**
         * All real items.
         */

        this._items = []; // is equal to this.slides

        /**
        * Array with width of every slide.
        */

        this._widths = [];
        /**
        * Currently suppressed events to prevent them from beeing retriggered.
        */

        this._supress = {};
        /**
         * References to the running plugins of this carousel.
         */

        this._plugins = {};
        /**
        * Absolute current position.
        */

        this._current = null;
        /**
        * All cloned items.
        */

        this._clones = [];
        /**
         * Merge values of all items.
         * @todo Maybe this could be part of a plugin.
         */

        this._mergers = [];
        /**
        * Animation speed in milliseconds.
        */

        this._speed = null;
        /**
        * Coordinates of all items in pixel.
        * @todo The name of this member is missleading.
        */

        this._coordinates = [];
        /**
        * Current breakpoint.
        * @todo Real media queries would be nice.
        */

        this._breakpoint = null;
        /**
         * Prefix for id of cloned slides
         */

        this.clonedIdPrefix = 'cloned-';
        /**
         * Current options set by the caller including defaults.
         */

        this._options = {};
        /**
         * Invalidated parts within the update process.
         */

        this._invalidated = {};
        /**
         * Current state information and their tags.
         */

        this._states = {
          current: {},
          tags: {
            initializing: ['busy'],
            animating: ['busy'],
            dragging: ['interacting']
          }
        };
        /**
         * Ordered list of workers for the update process.
        */

        this._pipe = [// {
        //   filter: ['width', 'settings'],
        //   run: () => {
        //     this._width = this.carouselWindowWidth;
        //   }
        // },
        {
          filter: ['width', 'items', 'settings'],
          run: function run(cache) {
            cache.current = _this._items && _this._items[_this.relative(_this._current)].id;
          }
        }, // {
        //   filter: ['items', 'settings'],
        //   run: function() {
        //     // this.$stage.children('.cloned').remove();
        //   }
        // },
        {
          filter: ['width', 'items', 'settings'],
          run: function run(cache) {
            var margin = _this.settings.margin || '',
                grid = !_this.settings.autoWidth,
                rtl = _this.settings.rtl,
                css = {
              'margin-left': rtl ? margin : '',
              'margin-right': rtl ? '' : margin
            };

            if (!grid) {
              _this.slidesData.forEach(function (slide) {
                slide.marginL = css['margin-left'];
                slide.marginR = css['margin-right'];
              });
            }

            cache.css = css;
          }
        }, {
          filter: ['width', 'items', 'settings'],
          run: function run(cache) {
            var width = +(_this.width() / _this.settings.items).toFixed(3) - _this.settings.margin,
                grid = !_this.settings.autoWidth,
                widths = [];
            var merge = null,
                iterator = _this._items.length;
            cache.items = {
              merge: false,
              width: width
            };

            while (iterator--) {
              merge = _this._mergers[iterator];
              merge = _this.settings.mergeFit && Math.min(merge, _this.settings.items) || merge;
              cache.items.merge = merge > 1 || cache.items.merge;
              widths[iterator] = !grid ? _this._items[iterator].width ? _this._items[iterator].width : width : width * merge;
            }

            _this._widths = widths;

            _this.slidesData.forEach(function (slide, i) {
              slide.width = _this._widths[i];
              slide.marginR = cache.css['margin-right'];
              slide.marginL = cache.css['margin-left'];
            });
          }
        }, {
          filter: ['items', 'settings'],
          run: function run() {
            var clones = [],
                items = _this._items,
                settings = _this.settings,
                // TODO: Should be computed from number of min width items in stage
            view = Math.max(settings.items * 2, 4),
                size = Math.ceil(items.length / 2) * 2;
            var append = [],
                prepend = [],
                repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0;
            repeat /= 2;

            while (repeat--) {
              // Switch to only using appended clones
              clones.push(_this.normalize(clones.length / 2, true));
              append.push(Object.assign({}, _this.slidesData[clones[clones.length - 1]]));
              clones.push(_this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
              prepend.unshift(Object.assign({}, _this.slidesData[clones[clones.length - 1]]));
            }

            _this._clones = clones;
            append = append.map(function (slide) {
              slide.id = "".concat(_this.clonedIdPrefix).concat(slide.id);
              slide.isActive = false;
              slide.isCloned = true;
              return slide;
            });
            prepend = prepend.map(function (slide) {
              slide.id = "".concat(_this.clonedIdPrefix).concat(slide.id);
              slide.isActive = false;
              slide.isCloned = true;
              return slide;
            });
            _this.slidesData = prepend.concat(_this.slidesData).concat(append);
          }
        }, {
          filter: ['width', 'items', 'settings'],
          run: function run() {
            var rtl = _this.settings.rtl ? 1 : -1,
                size = _this._clones.length + _this._items.length,
                coordinates = [];
            var iterator = -1,
                previous = 0,
                current = 0;

            while (++iterator < size) {
              previous = coordinates[iterator - 1] || 0;
              current = _this._widths[_this.relative(iterator)] + _this.settings.margin;
              coordinates.push(previous + current * rtl);
            }

            _this._coordinates = coordinates;
          }
        }, {
          filter: ['width', 'items', 'settings'],
          run: function run() {
            var padding = _this.settings.stagePadding,
                coordinates = _this._coordinates,
                css = {
              'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
              'padding-left': padding || '',
              'padding-right': padding || ''
            };
            _this.stageData.width = css.width; // use this property in *ngIf directive for .owl-stage element

            _this.stageData.paddingL = css['padding-left'];
            _this.stageData.paddingR = css['padding-right'];
          }
        }, {
          //   filter: [ 'width', 'items', 'settings' ],
          //   run: cache => {
          // 		// this method sets the width for every slide, but I set it in different way earlier
          // 		const grid = !this.settings.autoWidth,
          // 		items = this.$stage.children(); // use this.slidesData
          //     let iterator = this._coordinates.length;
          //     if (grid && cache.items.merge) {
          //       while (iterator--) {
          //         cache.css.width = this._widths[this.relative(iterator)];
          //         items.eq(iterator).css(cache.css);
          //       }
          //     } else if (grid) {
          //       cache.css.width = cache.items.width;
          //       items.css(cache.css);
          //     }
          //   }
          // }, {
          //   filter: [ 'items' ],
          //   run: function() {
          //     this._coordinates.length < 1 && this.$stage.removeAttr('style');
          //   }
          // }, {
          filter: ['width', 'items', 'settings'],
          run: function run(cache) {
            var current = cache.current ? _this.slidesData.findIndex(function (slide) {
              return slide.id === cache.current;
            }) : 0;
            current = Math.max(_this.minimum(), Math.min(_this.maximum(), current));

            _this.reset(current);
          }
        }, {
          filter: ['position'],
          run: function run() {
            _this.animate(_this.coordinates(_this._current));
          }
        }, {
          filter: ['width', 'position', 'items', 'settings'],
          run: function run() {
            var rtl = _this.settings.rtl ? 1 : -1,
                padding = _this.settings.stagePadding * 2,
                matches = [];
            var begin, end, inner, outer, i, n;
            begin = _this.coordinates(_this.current());

            if (typeof begin === 'number') {
              begin += padding;
            } else {
              begin = 0;
            }

            end = begin + _this.width() * rtl;

            if (rtl === -1 && _this.settings.center) {
              var result = _this._coordinates.filter(function (element) {
                return _this.settings.items % 2 === 1 ? element >= begin : element > begin;
              });

              begin = result.length ? result[result.length - 1] : begin;
            }

            for (i = 0, n = _this._coordinates.length; i < n; i++) {
              inner = Math.ceil(_this._coordinates[i - 1] || 0);
              outer = Math.ceil(Math.abs(_this._coordinates[i]) + padding * rtl);

              if (_this._op(inner, '<=', begin) && _this._op(inner, '>', end) || _this._op(outer, '<', begin) && _this._op(outer, '>', end)) {
                matches.push(i);
              }
            }

            _this.slidesData.forEach(function (slide) {
              slide.isActive = false;
              return slide;
            });

            matches.forEach(function (item) {
              _this.slidesData[item].isActive = true;
            });

            if (_this.settings.center) {
              _this.slidesData.forEach(function (slide) {
                slide.isCentered = false;
                return slide;
              });

              _this.slidesData[_this.current()].isCentered = true;
            }
          }
        }];
      } // Is needed for tests


      _createClass(CarouselService, [{
        key: "getViewCurSettings",

        /**
         * Makes _viewSettingsShipper$ Subject become Observable
         * @returns Observable of _viewSettingsShipper$ Subject
         */
        value: function getViewCurSettings() {
          return this._viewSettingsShipper$.asObservable();
        }
        /**
         * Makes _initializedCarousel$ Subject become Observable
         * @returns Observable of _initializedCarousel$ Subject
         */

      }, {
        key: "getInitializedState",
        value: function getInitializedState() {
          return this._initializedCarousel$.asObservable();
        }
        /**
         * Makes _changeSettingsCarousel$ Subject become Observable
         * @returns Observable of _changeSettingsCarousel$ Subject
         */

      }, {
        key: "getChangeState",
        value: function getChangeState() {
          return this._changeSettingsCarousel$.asObservable();
        }
        /**
         * Makes _changedSettingsCarousel$ Subject become Observable
         * @returns Observable of _changedSettingsCarousel$ Subject
         */

      }, {
        key: "getChangedState",
        value: function getChangedState() {
          return this._changedSettingsCarousel$.asObservable();
        }
        /**
         * Makes _translateCarousel$ Subject become Observable
         * @returns Observable of _translateCarousel$ Subject
         */

      }, {
        key: "getTranslateState",
        value: function getTranslateState() {
          return this._translateCarousel$.asObservable();
        }
        /**
         * Makes _translatedCarousel$ Subject become Observable
         * @returns Observable of _translatedCarousel$ Subject
         */

      }, {
        key: "getTranslatedState",
        value: function getTranslatedState() {
          return this._translatedCarousel$.asObservable();
        }
        /**
         * Makes _resizeCarousel$ Subject become Observable
         * @returns Observable of _resizeCarousel$ Subject
         */

      }, {
        key: "getResizeState",
        value: function getResizeState() {
          return this._resizeCarousel$.asObservable();
        }
        /**
         * Makes _resizedCarousel$ Subject become Observable
         * @returns Observable of _resizedCarousel$ Subject
         */

      }, {
        key: "getResizedState",
        value: function getResizedState() {
          return this._resizedCarousel$.asObservable();
        }
        /**
         * Makes _refreshCarousel$ Subject become Observable
         * @returns Observable of _refreshCarousel$ Subject
         */

      }, {
        key: "getRefreshState",
        value: function getRefreshState() {
          return this._refreshCarousel$.asObservable();
        }
        /**
         * Makes _refreshedCarousel$ Subject become Observable
         * @returns Observable of _refreshedCarousel$ Subject
         */

      }, {
        key: "getRefreshedState",
        value: function getRefreshedState() {
          return this._refreshedCarousel$.asObservable();
        }
        /**
         * Makes _dragCarousel$ Subject become Observable
         * @returns Observable of _dragCarousel$ Subject
         */

      }, {
        key: "getDragState",
        value: function getDragState() {
          return this._dragCarousel$.asObservable();
        }
        /**
         * Makes _draggedCarousel$ Subject become Observable
         * @returns Observable of _draggedCarousel$ Subject
         */

      }, {
        key: "getDraggedState",
        value: function getDraggedState() {
          return this._draggedCarousel$.asObservable();
        }
        /**
         * Setups custom options expanding default options
         * @param options custom options
         */

      }, {
        key: "setOptions",
        value: function setOptions(options) {
          var configOptions = new OwlCarouselOConfig();

          var checkedOptions = this._validateOptions(options, configOptions);

          this._options = Object.assign(Object.assign({}, configOptions), checkedOptions);
        }
        /**
         * Checks whether user's option are set properly. Cheking is based on typings;
         * @param options options set by user
         * @param configOptions default options
         * @returns checked and modified (if it's needed) user's options
         *
         * Notes:
         * 	- if user set option with wrong type, it'll be written in console
         */

      }, {
        key: "_validateOptions",
        value: function _validateOptions(options, configOptions) {
          var _this2 = this;

          var checkedOptions = Object.assign({}, options);
          var mockedTypes = new OwlOptionsMockedTypes();

          var setRightOption = function setRightOption(type, key) {
            _this2.logger.log("options.".concat(key, " must be type of ").concat(type, "; ").concat(key, "=").concat(options[key], " skipped to defaults: ").concat(key, "=").concat(configOptions[key]));

            return configOptions[key];
          };

          for (var key in checkedOptions) {
            if (checkedOptions.hasOwnProperty(key)) {
              // condition could be shortened but it gets harder for understanding
              if (mockedTypes[key] === 'number') {
                if (this._isNumeric(checkedOptions[key])) {
                  checkedOptions[key] = +checkedOptions[key];
                  checkedOptions[key] = key === 'items' ? this._validateItems(checkedOptions[key], checkedOptions.skip_validateItems) : checkedOptions[key];
                } else {
                  checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
              } else if (mockedTypes[key] === 'boolean' && typeof checkedOptions[key] !== 'boolean') {
                checkedOptions[key] = setRightOption(mockedTypes[key], key);
              } else if (mockedTypes[key] === 'number|boolean' && !this._isNumberOrBoolean(checkedOptions[key])) {
                checkedOptions[key] = setRightOption(mockedTypes[key], key);
              } else if (mockedTypes[key] === 'number|string' && !this._isNumberOrString(checkedOptions[key])) {
                checkedOptions[key] = setRightOption(mockedTypes[key], key);
              } else if (mockedTypes[key] === 'string|boolean' && !this._isStringOrBoolean(checkedOptions[key])) {
                checkedOptions[key] = setRightOption(mockedTypes[key], key);
              } else if (mockedTypes[key] === 'string[]') {
                if (Array.isArray(checkedOptions[key])) {
                  var isString = false;
                  checkedOptions[key].forEach(function (element) {
                    isString = typeof element === 'string' ? true : false;
                  });

                  if (!isString) {
                    checkedOptions[key] = setRightOption(mockedTypes[key], key);
                  }

                  ;
                } else {
                  checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
              }
            }
          }

          return checkedOptions;
        }
        /**
         * Checks the option `items` set by user and if it bigger than number of slides, the function returns number of slides
         * @param items option items set by user
         * @param skip_validateItems option `skip_validateItems` set by user
         * @returns right number of items
         */

      }, {
        key: "_validateItems",
        value: function _validateItems(items, skip_validateItems) {
          var result = items;

          if (items > this._items.length) {
            if (skip_validateItems) {
              this.logger.log('The option \'items\' in your options is bigger than the number of slides. The navigation got disabled');
            } else {
              result = this._items.length;
              this.logger.log('The option \'items\' in your options is bigger than the number of slides. This option is updated to the current number of slides and the navigation got disabled');
            }
          } else {
            if (items === this._items.length && (this.settings.dots || this.settings.nav)) {
              this.logger.log('Option \'items\' in your options is equal to the number of slides. So the navigation got disabled');
            }
          }

          return result;
        }
        /**
         * Set current width of carousel
         * @param width width of carousel Window
         */

      }, {
        key: "setCarouselWidth",
        value: function setCarouselWidth(width) {
          this._width = width;
        }
        /**
           * Setups the current settings.
           * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
           * @todo Support for media queries by using `matchMedia` would be nice.
           * @param carouselWidth width of carousel
           * @param slides array of slides
           * @param options options set by user
           */

      }, {
        key: "setup",
        value: function setup(carouselWidth, slides, options) {
          this.setCarouselWidth(carouselWidth);
          this.setItems(slides);

          this._defineSlidesData();

          this.setOptions(options);
          this.settings = Object.assign({}, this._options);
          this.setOptionsForViewport();

          this._trigger('change', {
            property: {
              name: 'settings',
              value: this.settings
            }
          });

          this.invalidate('settings'); // must be call of this function;

          this._trigger('changed', {
            property: {
              name: 'settings',
              value: this.settings
            }
          });
        }
        /**
         * Set options for current viewport
         */

      }, {
        key: "setOptionsForViewport",
        value: function setOptionsForViewport() {
          var _this3 = this;

          var viewport = this._width,
              overwrites = this._options.responsive;
          var match = -1;

          if (!Object.keys(overwrites).length) {
            return;
          }

          if (!viewport) {
            this.settings.items = 1;
            return;
          }

          for (var key in overwrites) {
            if (overwrites.hasOwnProperty(key)) {
              if (+key <= viewport && +key > match) {
                match = Number(key);
              }
            }
          }

          this.settings = Object.assign(Object.assign(Object.assign({}, this._options), overwrites[match]), {
            items: overwrites[match] && overwrites[match].items ? this._validateItems(overwrites[match].items, this._options.skip_validateItems) : this._options.items
          }); // if (typeof this.settings.stagePadding === 'function') {
          // 	this.settings.stagePadding = this.settings.stagePadding();
          // }

          delete this.settings.responsive;
          this.owlDOMData.isResponsive = true;
          this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
          this.owlDOMData.isTouchDragable = this.settings.touchDrag;
          var mergers = [];

          this._items.forEach(function (item) {
            var mergeN = _this3.settings.merge ? item.dataMerge : 1;
            mergers.push(mergeN);
          });

          this._mergers = mergers;
          this._breakpoint = match;
          this.invalidate('settings');
        }
        /**
         * Initializes the carousel.
         * @param slides array of CarouselSlideDirective
         */

      }, {
        key: "initialize",
        value: function initialize(slides) {
          var _this4 = this;

          this.enter('initializing'); // this.trigger('initialize');

          this.owlDOMData.rtl = this.settings.rtl;

          if (this._mergers.length) {
            this._mergers = [];
          }

          slides.forEach(function (item) {
            var mergeN = _this4.settings.merge ? item.dataMerge : 1;

            _this4._mergers.push(mergeN);
          });
          this._clones = [];
          this.reset(this._isNumeric(this.settings.startPosition) ? +this.settings.startPosition : 0);
          this.invalidate('items');
          this.refresh();
          this.owlDOMData.isLoaded = true;
          this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
          this.owlDOMData.isTouchDragable = this.settings.touchDrag;
          this.sendChanges();
          this.leave('initializing');

          this._trigger('initialized');
        }
      }, {
        key: "sendChanges",

        /**
         * Sends all data needed for View
         */
        value: function sendChanges() {
          this._viewSettingsShipper$.next({
            owlDOMData: this.owlDOMData,
            stageData: this.stageData,
            slidesData: this.slidesData,
            navData: this.navData,
            dotsData: this.dotsData
          });
        }
        /**
           * Updates option logic if necessery
           */

      }, {
        key: "_optionsLogic",
        value: function _optionsLogic() {
          if (this.settings.autoWidth) {
            this.settings.stagePadding = 0;
            this.settings.merge = false;
          }
        }
        /**
         * Updates the view
         */

      }, {
        key: "update",
        value: function update() {
          var _this5 = this;

          var i = 0;

          var n = this._pipe.length,
              filter = function filter(item) {
            return _this5._invalidated[item];
          },
              cache = {};

          while (i < n) {
            var filteredPipe = this._pipe[i].filter.filter(filter);

            if (this._invalidated.all || filteredPipe.length > 0) {
              this._pipe[i].run(cache);
            }

            i++;
          }

          this.slidesData.forEach(function (slide) {
            return slide.classes = _this5.setCurSlideClasses(slide);
          });
          this.sendChanges();
          this._invalidated = {};

          if (!this.is('valid')) {
            this.enter('valid');
          }
        }
        /**
           * Gets the width of the view.
           * @param [dimension=Width.Default] The dimension to return
           * @returns The width of the view in pixel.
           */

      }, {
        key: "width",
        value: function width(dimension) {
          dimension = dimension || Width.Default;

          switch (dimension) {
            case Width.Inner:
            case Width.Outer:
              return this._width;

            default:
              return this._width - this.settings.stagePadding * 2 + this.settings.margin;
          }
        }
        /**
           * Refreshes the carousel primarily for adaptive purposes.
           */

      }, {
        key: "refresh",
        value: function refresh() {
          this.enter('refreshing');

          this._trigger('refresh');

          this._defineSlidesData();

          this.setOptionsForViewport();

          this._optionsLogic(); // this.$element.addClass(this.options.refreshClass);


          this.update(); // this.$element.removeClass(this.options.refreshClass);

          this.leave('refreshing');

          this._trigger('refreshed');
        }
        /**
           * Checks window `resize` event.
           * @param curWidth width of .owl-carousel
           */

      }, {
        key: "onResize",
        value: function onResize(curWidth) {
          if (!this._items.length) {
            return false;
          }

          this.setCarouselWidth(curWidth);
          this.enter('resizing'); // if (this.trigger('resize').isDefaultPrevented()) {
          // 	this.leave('resizing');
          // 	return false;
          // }

          this._trigger('resize');

          this.invalidate('width');
          this.refresh();
          this.leave('resizing');

          this._trigger('resized');
        }
        /**
           * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
           * @todo Horizontal swipe threshold as option
           * @todo #261
           * @param event - The event arguments.
           * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
           */

      }, {
        key: "prepareDragging",
        value: function prepareDragging(event) {
          var stage = null,
              transformArr; // could be 5 commented lines below; However there's stage transform in stageData and in updates after each move of stage
          // stage = getComputedStyle(this.el.nativeElement).transform.replace(/.*\(|\)| /g, '').split(',');
          // stage = {
          //   x: stage[stage.length === 16 ? 12 : 4],
          //   y: stage[stage.length === 16 ? 13 : 5]
          // };

          transformArr = this.stageData.transform.replace(/.*\(|\)| |[^,-\d]\w|\)/g, '').split(',');
          stage = {
            x: +transformArr[0],
            y: +transformArr[1]
          };

          if (this.is('animating')) {
            this.invalidate('position');
          }

          if (event.type === 'mousedown') {
            this.owlDOMData.isGrab = true;
          }

          this.speed(0);
          return stage;
        }
        /**
         * Enters into a 'dragging' state
         */

      }, {
        key: "enterDragging",
        value: function enterDragging() {
          this.enter('dragging');

          this._trigger('drag');
        }
        /**
           * Defines new coords for .owl-stage while dragging it
           * @todo #261
           * @param event the event arguments.
           * @param dragData initial data got after starting dragging
           * @returns coords or false
           */

      }, {
        key: "defineNewCoordsDrag",
        value: function defineNewCoordsDrag(event, dragData) {
          var minimum = null,
              maximum = null,
              pull = null;
          var delta = this.difference(dragData.pointer, this.pointer(event)),
              stage = this.difference(dragData.stage.start, delta);

          if (!this.is('dragging')) {
            return false;
          }

          if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = +this.coordinates(this.maximum() + 1) - minimum;
            stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
          } else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
          }

          return stage;
        }
        /**
           * Finishes dragging of carousel when `touchend` and `mouseup` events fire.
           * @todo #261
           * @todo Threshold for click event
           * @param event the event arguments.
           * @param dragObj the object with dragging settings and states
           * @param clickAttacher function which attaches click handler to slide or its children elements in order to prevent event bubling
           */

      }, {
        key: "finishDragging",
        value: function finishDragging(event, dragObj, clickAttacher) {
          var directions = ['right', 'left'],
              delta = this.difference(dragObj.pointer, this.pointer(event)),
              stage = dragObj.stage.current,
              direction = directions[+(this.settings.rtl ? delta.x < +this.settings.rtl : delta.x > +this.settings.rtl)];
          var currentSlideI, current, newCurrent;

          if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
            this.speed(+this.settings.dragEndSpeed || this.settings.smartSpeed);
            currentSlideI = this.closest(stage.x, delta.x !== 0 ? direction : dragObj.direction);
            current = this.current();
            newCurrent = this.current(currentSlideI === -1 ? undefined : currentSlideI);

            if (current !== newCurrent) {
              this.invalidate('position');
              this.update();
            }

            dragObj.direction = direction;

            if (Math.abs(delta.x) > 3 || new Date().getTime() - dragObj.time > 300) {
              clickAttacher();
            }
          }

          if (!this.is('dragging')) {
            return;
          }

          this.leave('dragging');

          this._trigger('dragged');
        }
        /**
           * Gets absolute position of the closest item for a coordinate.
           * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
           * @param coordinate The coordinate in pixel.
           * @param direction The direction to check for the closest item. Ether `left` or `right`.
           * @returns The absolute position of the closest item.
           */

      }, {
        key: "closest",
        value: function closest(coordinate, direction) {
          var pull = 30,
              width = this.width();
          var coordinates = this.coordinates(),
              position = -1;

          if (this.settings.center) {
            coordinates = coordinates.map(function (item) {
              if (item === 0) {
                item += 0.000001;
              }

              return item;
            });
          } // option 'freeDrag' doesn't have realization and using it here creates problem:
          // variable 'position' stays unchanged (it equals -1 at the begging) and thus method returns -1
          // Returning value is consumed by method current(), which taking -1 as argument calculates the index of new current slide
          // In case of having 5 slides ans 'loop=false; calling 'current(-1)' sets props '_current' as 4. Just last slide remains visible instead of 3 last slides.
          // if (!this.settings.freeDrag) {
          // check closest item


          for (var i = 0; i < coordinates.length; i++) {
            if (direction === 'left' && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
              position = i; // on a right pull, check on previous index
              // to do so, subtract width from value and set position = index + 1
            } else if (direction === 'right' && coordinate > coordinates[i] - width - pull && coordinate < coordinates[i] - width + pull) {
              position = i + 1;
            } else if (this._op(coordinate, '<', coordinates[i]) && this._op(coordinate, '>', coordinates[i + 1] || coordinates[i] - width)) {
              position = direction === 'left' ? i + 1 : i;
            } else if (direction === null && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
              position = i;
            }

            if (position !== -1) {
              break;
            }

            ;
          } // }


          if (!this.settings.loop) {
            // non loop boundries
            if (this._op(coordinate, '>', coordinates[this.minimum()])) {
              position = coordinate = this.minimum();
            } else if (this._op(coordinate, '<', coordinates[this.maximum()])) {
              position = coordinate = this.maximum();
            }
          }

          return position;
        }
        /**
           * Animates the stage.
           * @todo #270
           * @param coordinate The coordinate in pixels.
           */

      }, {
        key: "animate",
        value: function animate(coordinate) {
          var animate = this.speed() > 0;

          if (this.is('animating')) {
            this.onTransitionEnd();
          }

          if (animate) {
            this.enter('animating');

            this._trigger('translate');
          }

          this.stageData.transform = 'translate3d(' + coordinate + 'px,0px,0px)';
          this.stageData.transition = this.speed() / 1000 + 's' + (this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''); // also there was transition by means of JQuery.animate or css-changing property left
        }
        /**
           * Checks whether the carousel is in a specific state or not.
           * @param state The state to check.
           * @returns The flag which indicates if the carousel is busy.
           */

      }, {
        key: "is",
        value: function is(state) {
          return this._states.current[state] && this._states.current[state] > 0;
        }
      }, {
        key: "current",

        /**
           * Sets the absolute position of the current item.
           * @param position The new absolute position or nothing to leave it unchanged.
           * @returns The absolute position of the current item.
           */
        value: function current(position) {
          if (position === undefined) {
            return this._current;
          }

          if (this._items.length === 0) {
            return undefined;
          }

          position = this.normalize(position);

          if (this._current !== position) {
            var event = this._trigger('change', {
              property: {
                name: 'position',
                value: position
              }
            }); // if (event.data !== undefined) {
            // 	position = this.normalize(event.data);
            // }


            this._current = position;
            this.invalidate('position');

            this._trigger('changed', {
              property: {
                name: 'position',
                value: this._current
              }
            });
          }

          return this._current;
        }
        /**
           * Invalidates the given part of the update routine.
           * @param part The part to invalidate.
           * @returns The invalidated parts.
           */

      }, {
        key: "invalidate",
        value: function invalidate(part) {
          if (typeof part === 'string') {
            this._invalidated[part] = true;

            if (this.is('valid')) {
              this.leave('valid');
            }
          }

          return Object.keys(this._invalidated);
        }
      }, {
        key: "reset",

        /**
         * Resets the absolute position of the current item.
         * @param position the absolute position of the new item.
         */
        value: function reset(position) {
          position = this.normalize(position);

          if (position === undefined) {
            return;
          }

          this._speed = 0;
          this._current = position;

          this._suppress(['translate', 'translated']);

          this.animate(this.coordinates(position));

          this._release(['translate', 'translated']);
        }
        /**
           * Normalizes an absolute or a relative position of an item.
           * @param position The absolute or relative position to normalize.
           * @param relative Whether the given position is relative or not.
           * @returns The normalized position.
           */

      }, {
        key: "normalize",
        value: function normalize(position, relative) {
          var n = this._items.length,
              m = relative ? 0 : this._clones.length;

          if (!this._isNumeric(position) || n < 1) {
            position = undefined;
          } else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2;
          }

          return position;
        }
        /**
           * Converts an absolute position of an item into a relative one.
           * @param position The absolute position to convert.
           * @returns The converted position.
           */

      }, {
        key: "relative",
        value: function relative(position) {
          position -= this._clones.length / 2;
          return this.normalize(position, true);
        }
        /**
           * Gets the maximum position for the current item.
           * @param relative Whether to return an absolute position or a relative position.
           * @returns number of maximum position
           */

      }, {
        key: "maximum",
        value: function maximum() {
          var relative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var settings = this.settings;
          var maximum = this._coordinates.length,
              iterator,
              reciprocalItemsWidth,
              elementWidth;

          if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
          } else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            reciprocalItemsWidth = this.slidesData[--iterator].width;
            elementWidth = this._width;

            while (iterator--) {
              // it could be use this._items instead of this.slidesData;
              reciprocalItemsWidth += +this.slidesData[iterator].width + this.settings.margin;

              if (reciprocalItemsWidth > elementWidth) {
                break;
              }
            }

            maximum = iterator + 1;
          } else if (settings.center) {
            maximum = this._items.length - 1;
          } else {
            maximum = this._items.length - settings.items;
          }

          if (relative) {
            maximum -= this._clones.length / 2;
          }

          return Math.max(maximum, 0);
        }
        /**
           * Gets the minimum position for the current item.
           * @param relative Whether to return an absolute position or a relative position.
           * @returns number of minimum position
           */

      }, {
        key: "minimum",
        value: function minimum() {
          var relative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          return relative ? 0 : this._clones.length / 2;
        }
        /**
           * Gets an item at the specified relative position.
           * @param position The relative position of the item.
           * @returns The item at the given position or all items if no position was given.
           */

      }, {
        key: "items",
        value: function items(position) {
          if (position === undefined) {
            return this._items.slice();
          }

          position = this.normalize(position, true);
          return [this._items[position]];
        }
        /**
           * Gets an item at the specified relative position.
           * @param position The relative position of the item.
           * @returns The item at the given position or all items if no position was given.
           */

      }, {
        key: "mergers",
        value: function mergers(position) {
          if (position === undefined) {
            return this._mergers.slice();
          }

          position = this.normalize(position, true);
          return this._mergers[position];
        }
        /**
           * Gets the absolute positions of clones for an item.
           * @param position The relative position of the item.
           * @returns The absolute positions of clones for the item or all if no position was given.
           */

      }, {
        key: "clones",
        value: function clones(position) {
          var odd = this._clones.length / 2,
              even = odd + this._items.length,
              map = function map(index) {
            return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
          };

          if (position === undefined) {
            return this._clones.map(function (v, i) {
              return map(i);
            });
          }

          return this._clones.map(function (v, i) {
            return v === position ? map(i) : null;
          }).filter(function (item) {
            return item;
          });
        }
        /**
           * Sets the current animation speed.
           * @param speed The animation speed in milliseconds or nothing to leave it unchanged.
           * @returns The current animation speed in milliseconds.
           */

      }, {
        key: "speed",
        value: function speed(_speed) {
          if (_speed !== undefined) {
            this._speed = _speed;
          }

          return this._speed;
        }
        /**
           * Gets the coordinate of an item.
           * @todo The name of this method is missleanding.
           * @param position The absolute position of the item within `minimum()` and `maximum()`.
           * @returns The coordinate of the item in pixel or all coordinates.
           */

      }, {
        key: "coordinates",
        value: function coordinates(position) {
          var _this6 = this;

          var multiplier = 1,
              newPosition = position - 1,
              coordinate,
              result;

          if (position === undefined) {
            result = this._coordinates.map(function (item, index) {
              return _this6.coordinates(index);
            });
            return result;
          }

          if (this.settings.center) {
            if (this.settings.rtl) {
              multiplier = -1;
              newPosition = position + 1;
            }

            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
          } else {
            coordinate = this._coordinates[newPosition] || 0;
          }

          coordinate = Math.ceil(coordinate);
          return coordinate;
        }
        /**
           * Calculates the speed for a translation.
           * @param from The absolute position of the start item.
           * @param to The absolute position of the target item.
           * @param factor [factor=undefined] - The time factor in milliseconds.
           * @returns The time in milliseconds for the translation.
           */

      }, {
        key: "_duration",
        value: function _duration(from, to, factor) {
          if (factor === 0) {
            return 0;
          }

          return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(+factor || this.settings.smartSpeed);
        }
        /**
           * Slides to the specified item.
           * @param position The position of the item.
           * @param speed The time in milliseconds for the transition.
           */

      }, {
        key: "to",
        value: function to(position, speed) {
          var _this7 = this;

          var current = this.current(),
              revert = null,
              distance = position - this.relative(current),
              maximum = this.maximum(),
              delayForLoop = 0;
          var direction = +(distance > 0) - +(distance < 0),
              items = this._items.length,
              minimum = this.minimum();

          if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
              distance += direction * -1 * items;
            }

            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;

            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
              current = revert - distance;
              position = revert;
              delayForLoop = 30;
              this.reset(current);
              this.sendChanges();
            }
          } else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum;
          } else {
            position = Math.max(minimum, Math.min(maximum, position));
          }

          setTimeout(function () {
            _this7.speed(_this7._duration(current, position, speed));

            _this7.current(position);

            _this7.update();
          }, delayForLoop);
        }
        /**
           * Slides to the next item.
           * @param speed The time in milliseconds for the transition.
           */

      }, {
        key: "next",
        value: function next(speed) {
          speed = speed || false;
          this.to(this.relative(this.current()) + 1, speed);
        }
        /**
           * Slides to the previous item.
           * @param speed The time in milliseconds for the transition.
           */

      }, {
        key: "prev",
        value: function prev(speed) {
          speed = speed || false;
          this.to(this.relative(this.current()) - 1, speed);
        }
        /**
           * Handles the end of an animation.
           * @param event - The event arguments.
           */

      }, {
        key: "onTransitionEnd",
        value: function onTransitionEnd(event) {
          // if css2 animation then event object is undefined
          if (event !== undefined) {
            // event.stopPropagation();
            // // Catch only owl-stage transitionEnd event
            // if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)	) {
            // 	return false;
            // }
            return false;
          }

          this.leave('animating');

          this._trigger('translated');
        }
        /**
           * Gets viewport width.
           * @returns - The width in pixel.
           */

      }, {
        key: "_viewport",
        value: function _viewport() {
          var width;

          if (this._width) {
            width = this._width;
          } else {
            this.logger.log('Can not detect viewport width.');
          }

          return width;
        }
        /**
           * Sets _items
           * @param content The list of slides put into CarouselSlideDirectives.
           */

      }, {
        key: "setItems",
        value: function setItems(content) {
          this._items = content;
        }
        /**
         * Sets slidesData using this._items
         */

      }, {
        key: "_defineSlidesData",
        value: function _defineSlidesData() {
          // Maybe creating and using loadMap would be better in LazyLoadService.
          // Hovewer in that case when 'resize' event fires, prop 'load' of all slides will get 'false' and such state of prop will be seen by View during its updating. Accordingly the code will remove slides's content from DOM even if it was loaded before.
          // Thus it would be needed to add that content into DOM again.
          // In order to avoid additional removing/adding loaded slides's content we use loadMap here and set restore state of prop 'load' before the View will get it.
          var loadMap;

          if (this.slidesData && this.slidesData.length) {
            loadMap = new Map();
            this.slidesData.forEach(function (item) {
              if (item.load) {
                loadMap.set(item.id, item.load);
              }
            });
          }

          this.slidesData = this._items.map(function (slide) {
            return {
              id: "".concat(slide.id),
              isActive: false,
              tplRef: slide.tplRef,
              dataMerge: slide.dataMerge,
              width: 0,
              isCloned: false,
              load: loadMap ? loadMap.get(slide.id) : false,
              hashFragment: slide.dataHash
            };
          });
        }
        /**
         * Sets current classes for slide
         * @param slide Slide of carousel
         * @returns object with names of css-classes which are keys and true/false values
         */

      }, {
        key: "setCurSlideClasses",
        value: function setCurSlideClasses(slide) {
          // CSS classes: added/removed per current state of component properties
          var currentClasses = {
            'active': slide.isActive,
            'center': slide.isCentered,
            'cloned': slide.isCloned,
            'animated': slide.isAnimated,
            'owl-animated-in': slide.isDefAnimatedIn,
            'owl-animated-out': slide.isDefAnimatedOut
          };

          if (this.settings.animateIn) {
            currentClasses[this.settings.animateIn] = slide.isCustomAnimatedIn;
          }

          if (this.settings.animateOut) {
            currentClasses[this.settings.animateOut] = slide.isCustomAnimatedOut;
          }

          return currentClasses;
        }
        /**
           * Operators to calculate right-to-left and left-to-right.
           * @param a - The left side operand.
           * @param o - The operator.
           * @param b - The right side operand.
           * @returns true/false meaning right-to-left or left-to-right
           */

      }, {
        key: "_op",
        value: function _op(a, o, b) {
          var rtl = this.settings.rtl;

          switch (o) {
            case '<':
              return rtl ? a > b : a < b;

            case '>':
              return rtl ? a < b : a > b;

            case '>=':
              return rtl ? a <= b : a >= b;

            case '<=':
              return rtl ? a >= b : a <= b;

            default:
              break;
          }
        }
        /**
           * Triggers a public event.
           * @todo Remove `status`, `relatedTarget` should be used instead.
           * @param name The event name.
           * @param data The event data.
           * @param namespace The event namespace.
           * @param state The state which is associated with the event.
           * @param enter Indicates if the call enters the specified state or not.
           */

      }, {
        key: "_trigger",
        value: function _trigger(name, data, namespace, state, enter) {
          switch (name) {
            case 'initialized':
              this._initializedCarousel$.next(name);

              break;

            case 'change':
              this._changeSettingsCarousel$.next(data);

              break;

            case 'changed':
              this._changedSettingsCarousel$.next(data);

              break;

            case 'drag':
              this._dragCarousel$.next(name);

              break;

            case 'dragged':
              this._draggedCarousel$.next(name);

              break;

            case 'resize':
              this._resizeCarousel$.next(name);

              break;

            case 'resized':
              this._resizedCarousel$.next(name);

              break;

            case 'refresh':
              this._refreshCarousel$.next(name);

              break;

            case 'refreshed':
              this._refreshedCarousel$.next(name);

              break;

            case 'translate':
              this._translateCarousel$.next(name);

              break;

            case 'translated':
              this._translatedCarousel$.next(name);

              break;

            default:
              break;
          }
        }
        /**
         * Enters a state.
         * @param name - The state name.
         */

      }, {
        key: "enter",
        value: function enter(name) {
          var _this8 = this;

          [name].concat(this._states.tags[name] || []).forEach(function (stateName) {
            if (_this8._states.current[stateName] === undefined) {
              _this8._states.current[stateName] = 0;
            }

            _this8._states.current[stateName]++;
          });
        }
      }, {
        key: "leave",

        /**
           * Leaves a state.
           * @param name - The state name.
           */
        value: function leave(name) {
          var _this9 = this;

          [name].concat(this._states.tags[name] || []).forEach(function (stateName) {
            if (_this9._states.current[stateName] === 0 || !!_this9._states.current[stateName]) {
              _this9._states.current[stateName]--;
            }
          });
        }
      }, {
        key: "register",

        /**
           * Registers an event or state.
           * @param object - The event or state to register.
           */
        value: function register(object) {
          var _this10 = this;

          if (object.type === Type.State) {
            if (!this._states.tags[object.name]) {
              this._states.tags[object.name] = object.tags;
            } else {
              this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
            }

            this._states.tags[object.name] = this._states.tags[object.name].filter(function (tag, i) {
              return _this10._states.tags[object.name].indexOf(tag) === i;
            });
          }
        }
        /**
           * Suppresses events.
           * @param events The events to suppress.
           */

      }, {
        key: "_suppress",
        value: function _suppress(events) {
          var _this11 = this;

          events.forEach(function (event) {
            _this11._supress[event] = true;
          });
        }
        /**
           * Releases suppressed events.
           * @param events The events to release.
           */

      }, {
        key: "_release",
        value: function _release(events) {
          var _this12 = this;

          events.forEach(function (event) {
            delete _this12._supress[event];
          });
        }
        /**
           * Gets unified pointer coordinates from event.
           * @todo #261
           * @param event The `mousedown` or `touchstart` event.
           * @returns Object Coords which contains `x` and `y` coordinates of current pointer position.
           */

      }, {
        key: "pointer",
        value: function pointer(event) {
          var result = {
            x: null,
            y: null
          };
          event = event.originalEvent || event || window.event;
          event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;

          if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
          } else {
            result.x = event.clientX;
            result.y = event.clientY;
          }

          return result;
        }
        /**
           * Determines if the input is a Number or something that can be coerced to a Number
           * @param number The input to be tested
           * @returns An indication if the input is a Number or can be coerced to a Number
           */

      }, {
        key: "_isNumeric",
        value: function _isNumeric(number) {
          return !isNaN(parseFloat(number));
        }
        /**
         * Determines whether value is number or boolean type
         * @param value The input to be tested
         * @returns An indication if the input is a Number or can be coerced to a Number, or Boolean
         */

      }, {
        key: "_isNumberOrBoolean",
        value: function _isNumberOrBoolean(value) {
          return this._isNumeric(value) || typeof value === 'boolean';
        }
        /**
         * Determines whether value is number or string type
         * @param value The input to be tested
         * @returns An indication if the input is a Number or can be coerced to a Number, or String
         */

      }, {
        key: "_isNumberOrString",
        value: function _isNumberOrString(value) {
          return this._isNumeric(value) || typeof value === 'string';
        }
        /**
         * Determines whether value is number or string type
         * @param value The input to be tested
         * @returns An indication if the input is a Number or can be coerced to a Number, or String
         */

      }, {
        key: "_isStringOrBoolean",
        value: function _isStringOrBoolean(value) {
          return typeof value === 'string' || typeof value === 'boolean';
        }
        /**
           * Gets the difference of two vectors.
           * @todo #261
           * @param first The first vector.
           * @param second- The second vector.
           * @returns The difference.
           */

      }, {
        key: "difference",
        value: function difference(first, second) {
          return {
            x: first.x - second.x,
            y: first.y - second.y
          };
        }
      }, {
        key: "invalidated",
        get: function get() {
          return this._invalidated;
        } // is needed for tests

      }, {
        key: "states",
        get: function get() {
          return this._states;
        }
      }]);

      return CarouselService;
    }();

    CarouselService.ɵfac = function CarouselService_Factory(t) {
      return new (t || CarouselService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OwlLogger));
    };

    CarouselService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CarouselService,
      factory: CarouselService.ɵfac
    });

    CarouselService.ctorParameters = function () {
      return [{
        type: OwlLogger
      }];
    };

    var NavigationService = /*#__PURE__*/function () {
      function NavigationService(carouselService) {
        _classCallCheck(this, NavigationService);

        this.carouselService = carouselService;
        /**
         * Indicates whether the plugin is initialized or not.
         */

        this._initialized = false;
        /**
         * The current paging indexes.
         */

        this._pages = [];
        /**
         * Data for navigation elements of the user interface.
         */

        this._navData = {
          disabled: false,
          prev: {
            disabled: false,
            htmlText: ''
          },
          next: {
            disabled: false,
            htmlText: ''
          }
        };
        /**
         * Data for dot elements of the user interface.
         */

        this._dotsData = {
          disabled: false,
          dots: []
        };
        this.spyDataStreams();
      }

      _createClass(NavigationService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.navSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this13 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (state) {
            _this13.initialize();

            _this13._updateNavPages();

            _this13.draw();

            _this13.update();

            _this13.carouselService.sendChanges();
          })); // mostly changes in carouselService and carousel at all causes carouselService.to(). It moves stage right-left by its code and calling needed functions
          // Thus this method by calling carouselService.current(position) notifies about changes

          var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (data) {
            return data.property.name === 'position';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this13.update(); // should be the call of the function written at the end of comment
            // but the method carouselServive.to() has setTimeout(f, 0) which contains carouselServive.update() which calls sendChanges() method.
            // carouselService.navData and carouselService.dotsData update earlier than carouselServive.update() gets called
            // updates of carouselService.navData and carouselService.dotsData are being happening withing carouselService.current(position) method which calls next() of _changedSettingsCarousel$
            // carouselService.current(position) is being calling earlier than carouselServive.update();
            // this.carouselService.sendChanges();

          }));
          var refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this13._updateNavPages();

            _this13.draw();

            _this13.update();

            _this13.carouselService.sendChanges();
          }));
          var navMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$, refreshedCarousel$);
          this.navSubscription = navMerge$.subscribe(function () {});
        }
        /**
           * Initializes the layout of the plugin and extends the carousel.
           */

      }, {
        key: "initialize",
        value: function initialize() {
          this._navData.disabled = true;
          this._navData.prev.htmlText = this.carouselService.settings.navText[0];
          this._navData.next.htmlText = this.carouselService.settings.navText[1];
          this._dotsData.disabled = true;
          this.carouselService.navData = this._navData;
          this.carouselService.dotsData = this._dotsData;
        }
        /**
         * Calculates internal states and updates prop _pages
         */

      }, {
        key: "_updateNavPages",
        value: function _updateNavPages() {
          var i, j, k;
          var lower = this.carouselService.clones().length / 2,
              upper = lower + this.carouselService.items().length,
              maximum = this.carouselService.maximum(true),
              pages = [],
              settings = this.carouselService.settings;
          var size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;
          size = +size;

          if (settings.slideBy !== 'page') {
            settings.slideBy = Math.min(+settings.slideBy, settings.items);
          }

          if (settings.dots || settings.slideBy === 'page') {
            for (i = lower, j = 0, k = 0; i < upper; i++) {
              if (j >= size || j === 0) {
                pages.push({
                  start: Math.min(maximum, i - lower),
                  end: i - lower + size - 1
                });

                if (Math.min(maximum, i - lower) === maximum) {
                  break;
                }

                j = 0, ++k;
              }

              j += this.carouselService.mergers(this.carouselService.relative(i));
            }
          }

          this._pages = pages;
        }
        /**
           * Draws the user interface.
           * @todo The option `dotsData` wont work.
           */

      }, {
        key: "draw",
        value: function draw() {
          var _this14 = this;

          var difference;
          var settings = this.carouselService.settings,
              items = this.carouselService.items(),
              disabled = items.length <= settings.items;
          this._navData.disabled = !settings.nav || disabled;
          this._dotsData.disabled = !settings.dots || disabled;

          if (settings.dots) {
            difference = this._pages.length - this._dotsData.dots.length;

            if (settings.dotsData && difference !== 0) {
              this._dotsData.dots = [];
              items.forEach(function (item) {
                _this14._dotsData.dots.push({
                  active: false,
                  id: "dot-".concat(item.id),
                  innerContent: item.dotContent,
                  showInnerContent: true
                });
              });
            } else if (difference > 0) {
              var startI = this._dotsData.dots.length > 0 ? this._dotsData.dots.length : 0;

              for (var i = 0; i < difference; i++) {
                this._dotsData.dots.push({
                  active: false,
                  id: "dot-".concat(i + startI),
                  innerContent: '',
                  showInnerContent: false
                });
              }
            } else if (difference < 0) {
              this._dotsData.dots.splice(difference, Math.abs(difference));
            }
          }

          this.carouselService.navData = this._navData;
          this.carouselService.dotsData = this._dotsData;
        }
      }, {
        key: "update",

        /**
         * Updates navigation buttons's and dots's states
         */
        value: function update() {
          this._updateNavButtons();

          this._updateDots();
        }
        /**
         * Changes state of nav buttons (disabled, enabled)
         */

      }, {
        key: "_updateNavButtons",
        value: function _updateNavButtons() {
          var settings = this.carouselService.settings,
              loop = settings.loop || settings.rewind,
              index = this.carouselService.relative(this.carouselService.current());

          if (settings.nav) {
            this._navData.prev.disabled = !loop && index <= this.carouselService.minimum(true);
            this._navData.next.disabled = !loop && index >= this.carouselService.maximum(true);
          }

          this.carouselService.navData = this._navData;
        }
        /**
         * Changes active dot if page becomes changed
         */

      }, {
        key: "_updateDots",
        value: function _updateDots() {
          var curActiveDotI;

          if (!this.carouselService.settings.dots) {
            return;
          }

          this._dotsData.dots.forEach(function (item) {
            if (item.active === true) {
              item.active = false;
            }
          });

          curActiveDotI = this._current();

          if (this._dotsData.dots.length) {
            this._dotsData.dots[curActiveDotI].active = true;
          }

          this.carouselService.dotsData = this._dotsData;
        }
        /**
           * Gets the current page position of the carousel.
           * @returns the current page position of the carousel
           */

      }, {
        key: "_current",
        value: function _current() {
          var current = this.carouselService.relative(this.carouselService.current());
          var finalCurrent;

          var pages = this._pages.filter(function (page, index) {
            return page.start <= current && page.end >= current;
          }).pop();

          finalCurrent = this._pages.findIndex(function (page) {
            return page.start === pages.start && page.end === pages.end;
          });
          return finalCurrent;
        }
      }, {
        key: "_getPosition",

        /**
           * Gets the current succesor/predecessor position.
         * @param sussessor position of slide
           * @returns the current succesor/predecessor position
           */
        value: function _getPosition(successor) {
          var position, length;
          var settings = this.carouselService.settings;

          if (settings.slideBy === 'page') {
            position = this._current();
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[(position % length + length) % length].start;
          } else {
            position = this.carouselService.relative(this.carouselService.current());
            length = this.carouselService.items().length;
            successor ? position += +settings.slideBy : position -= +settings.slideBy;
          }

          return position;
        }
      }, {
        key: "next",

        /**
           * Slides to the next item or page.
           * @param speed The time in milliseconds for the transition.
           */
        value: function next(speed) {
          this.carouselService.to(this._getPosition(true), speed);
        }
      }, {
        key: "prev",

        /**
         * Slides to the previous item or page.
         * @param speed The time in milliseconds for the transition.
         */
        value: function prev(speed) {
          this.carouselService.to(this._getPosition(false), speed);
        }
      }, {
        key: "to",

        /**
         * Slides to the specified item or page.
         * @param position - The position of the item or page.
         * @param speed - The time in milliseconds for the transition.
         * @param standard - Whether to use the standard behaviour or not. Default meaning false
         */
        value: function to(position, speed, standard) {
          var length;

          if (!standard && this._pages.length) {
            length = this._pages.length;
            this.carouselService.to(this._pages[(position % length + length) % length].start, speed);
          } else {
            this.carouselService.to(position, speed);
          }
        }
      }, {
        key: "moveByDot",

        /**
         * Moves carousel after user's clicking on any dots
         */
        value: function moveByDot(dotId) {
          var index = this._dotsData.dots.findIndex(function (dot) {
            return dotId === dot.id;
          });

          this.to(index, this.carouselService.settings.dotsSpeed);
        }
        /**
         * rewinds carousel to slide with needed id
         * @param id id of slide
         */

      }, {
        key: "toSlideById",
        value: function toSlideById(id) {
          var position = this.carouselService.slidesData.findIndex(function (slide) {
            return slide.id === id && slide.isCloned === false;
          });

          if (position === -1 || position === this.carouselService.current()) {
            return;
          }

          this.carouselService.to(this.carouselService.relative(position), false);
        }
      }]);

      return NavigationService;
    }();

    NavigationService.ɵfac = function NavigationService_Factory(t) {
      return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CarouselService));
    };

    NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NavigationService,
      factory: NavigationService.ɵfac
    });

    NavigationService.ctorParameters = function () {
      return [{
        type: CarouselService
      }];
    }; // import { Injectable } from '@angular/core';

    /**
     * Create a new injection token for injecting the window into a component.
     */


    var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('WindowToken');
    /**
     * Define abstract class for obtaining reference to the global window object.
     */

    var WindowRef = /*#__PURE__*/function () {
      function WindowRef() {
        _classCallCheck(this, WindowRef);
      }

      _createClass(WindowRef, [{
        key: "nativeWindow",
        get: function get() {
          throw new Error('Not implemented.');
        }
      }]);

      return WindowRef;
    }();
    /**
     * Define class that implements the abstract class and returns the native window object.
     */


    var BrowserWindowRef = /*#__PURE__*/function (_WindowRef) {
      _inherits(BrowserWindowRef, _WindowRef);

      var _super = _createSuper(BrowserWindowRef);

      function BrowserWindowRef() {
        _classCallCheck(this, BrowserWindowRef);

        return _super.call(this);
      }
      /**
       * @returns window object
       */


      _createClass(BrowserWindowRef, [{
        key: "nativeWindow",
        get: function get() {
          return window;
        }
      }]);

      return BrowserWindowRef;
    }(WindowRef);

    BrowserWindowRef.ɵfac = function BrowserWindowRef_Factory(t) {
      return new (t || BrowserWindowRef)();
    };

    BrowserWindowRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BrowserWindowRef,
      factory: BrowserWindowRef.ɵfac
    });
    /**
     * Create an factory function that returns the native window object.
     * @param browserWindowRef Native window object
     * @param platformId id of platform
     * @returns type of platform of empty object
     */

    function windowFactory(browserWindowRef, platformId) {
      if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId)) {
        return browserWindowRef.nativeWindow;
      }

      var obj = {
        setTimeout: function setTimeout(func, time) {},
        clearTimeout: function clearTimeout(a) {}
      };
      return obj;
    }
    /**
     * Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class.
     */


    var browserWindowProvider = {
      provide: WindowRef,
      useClass: BrowserWindowRef
    };
    /**
     * Create an injectable provider that uses the windowFactory function for returning the native window object.
     */

    var windowProvider = {
      provide: WINDOW,
      useFactory: windowFactory,
      deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
    };
    /**
     * Create an array of providers.
     */

    var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];
    /**
     * Create a new injection token for injecting the Document into a component.
     */

    var DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('DocumentToken');
    /**
     * Define abstract class for obtaining reference to the global Document object.
     */

    var DocumentRef = /*#__PURE__*/function () {
      function DocumentRef() {
        _classCallCheck(this, DocumentRef);
      }

      _createClass(DocumentRef, [{
        key: "nativeDocument",
        get: function get() {
          throw new Error('Not implemented.');
        }
      }]);

      return DocumentRef;
    }();
    /**
     * Define class that implements the abstract class and returns the native Document object.
     */


    var BrowserDocumentRef = /*#__PURE__*/function (_DocumentRef) {
      _inherits(BrowserDocumentRef, _DocumentRef);

      var _super2 = _createSuper(BrowserDocumentRef);

      function BrowserDocumentRef() {
        _classCallCheck(this, BrowserDocumentRef);

        return _super2.call(this);
      }
      /**
       * @returns Document object
       */


      _createClass(BrowserDocumentRef, [{
        key: "nativeDocument",
        get: function get() {
          return document;
        }
      }]);

      return BrowserDocumentRef;
    }(DocumentRef);

    BrowserDocumentRef.ɵfac = function BrowserDocumentRef_Factory(t) {
      return new (t || BrowserDocumentRef)();
    };

    BrowserDocumentRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BrowserDocumentRef,
      factory: BrowserDocumentRef.ɵfac
    });
    /**
     * Create an factory function that returns the native Document object.
     * @param browserDocumentRef Native Document object
     * @param platformId id of platform
     * @returns type of platform of empty object
     */

    function documentFactory(browserDocumentRef, platformId) {
      if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId)) {
        return browserDocumentRef.nativeDocument;
      }

      var doc = {
        hidden: false,
        visibilityState: 'visible'
      };
      return doc;
    }
    /**
     * Create a injectable provider for the DocumentRef token that uses the BrowserDocumentRef class.
     */


    var browserDocumentProvider = {
      provide: DocumentRef,
      useClass: BrowserDocumentRef
    };
    /**
     * Create an injectable provider that uses the DocumentFactory function for returning the native Document object.
     */

    var documentProvider = {
      provide: DOCUMENT,
      useFactory: documentFactory,
      deps: [DocumentRef, _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
    };
    /**
     * Create an array of providers.
     */

    var DOCUMENT_PROVIDERS = [browserDocumentProvider, documentProvider];

    var AutoplayService = /*#__PURE__*/function () {
      function AutoplayService(carouselService, winRef, docRef) {
        _classCallCheck(this, AutoplayService);

        this.carouselService = carouselService;
        /**
         * The autoplay timeout.
         */

        this._timeout = null;
        /**
         * Indicates whenever the autoplay is paused.
         */

        this._paused = false;
        this.winRef = winRef;
        this.docRef = docRef;
        this.spyDataStreams();
      }

      _createClass(AutoplayService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.autoplaySubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this15 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            if (_this15.carouselService.settings.autoplay) {
              _this15.play();
            }
          }));
          var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this15._handleChangeObservable(data);
          }));
          var resized$ = this.carouselService.getResizedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            if (_this15.carouselService.settings.autoplay) {
              _this15.play();
            } else {
              _this15.stop();
            }
          })); // original Autoplay Plugin has listeners on play.owl.core and stop.owl.core events.
          // They are triggered by Video Plugin

          var autoplayMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$, resized$);
          this.autoplaySubscription = autoplayMerge$.subscribe(function () {});
        }
        /**
           * Starts the autoplay.
           * @param timeout The interval before the next animation starts.
           * @param speed The animation speed for the animations.
           */

      }, {
        key: "play",
        value: function play(timeout, speed) {
          if (this._paused) {
            this._paused = false;

            this._setAutoPlayInterval(1);
          }

          if (this.carouselService.is('rotating')) {
            return;
          }

          this.carouselService.enter('rotating');

          this._setAutoPlayInterval();
        }
      }, {
        key: "_getNextTimeout",

        /**
           * Gets a new timeout
           * @param timeout - The interval before the next animation starts.
           * @param speed - The animation speed for the animations.
           * @return
           */
        value: function _getNextTimeout(timeout, speed) {
          var _this16 = this;

          if (this._timeout) {
            this.winRef.clearTimeout(this._timeout);
          }

          this._isArtificialAutoplayTimeout = timeout ? true : false;
          return this.winRef.setTimeout(function () {
            if (_this16._paused || _this16.carouselService.is('busy') || _this16.carouselService.is('interacting') || _this16.docRef.hidden) {
              return;
            }

            _this16.carouselService.next(speed || _this16.carouselService.settings.autoplaySpeed);
          }, timeout || this.carouselService.settings.autoplayTimeout);
        }
      }, {
        key: "_setAutoPlayInterval",

        /**
           * Sets autoplay in motion.
           */
        value: function _setAutoPlayInterval(timeout) {
          this._timeout = this._getNextTimeout(timeout);
        }
      }, {
        key: "stop",

        /**
         * Stops the autoplay.
         */
        value: function stop() {
          if (!this.carouselService.is('rotating')) {
            return;
          }

          this._paused = true;
          this.winRef.clearTimeout(this._timeout);
          this.carouselService.leave('rotating');
        }
      }, {
        key: "pause",

        /**
           * Stops the autoplay.
           */
        value: function pause() {
          if (!this.carouselService.is('rotating')) {
            return;
          }

          this._paused = true;
        }
      }, {
        key: "_handleChangeObservable",

        /**
         * Manages by autoplaying according to data passed by _changedSettingsCarousel$ Obsarvable
         * @param data object with current position of carousel and type of change
         */
        value: function _handleChangeObservable(data) {
          if (data.property.name === 'settings') {
            if (this.carouselService.settings.autoplay) {
              this.play();
            } else {
              this.stop();
            }
          } else if (data.property.name === 'position') {
            //console.log('play?', e);
            if (this.carouselService.settings.autoplay) {
              this._setAutoPlayInterval();
            }
          }
        }
        /**
         * Starts autoplaying of the carousel in the case when user leaves the carousel before it starts translateing (moving)
         */

      }, {
        key: "_playAfterTranslated",
        value: function _playAfterTranslated() {
          var _this17 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('translated').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (data) {
            return _this17.carouselService.getTranslatedState();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
            return _this17._isArtificialAutoplayTimeout;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            return _this17._setAutoPlayInterval();
          })).subscribe(function () {});
        }
        /**
         * Starts pausing
         */

      }, {
        key: "startPausing",
        value: function startPausing() {
          if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.pause();
          }
        }
        /**
         * Starts playing after mouse leaves carousel
         */

      }, {
        key: "startPlayingMouseLeave",
        value: function startPlayingMouseLeave() {
          if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.play();

            this._playAfterTranslated();
          }
        }
        /**
         * Starts playing after touch ends
         */

      }, {
        key: "startPlayingTouchEnd",
        value: function startPlayingTouchEnd() {
          if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.play();

            this._playAfterTranslated();
          }
        }
      }]);

      return AutoplayService;
    }();

    AutoplayService.ɵfac = function AutoplayService_Factory(t) {
      return new (t || AutoplayService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DOCUMENT));
    };

    AutoplayService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AutoplayService,
      factory: AutoplayService.ɵfac
    });

    AutoplayService.ctorParameters = function () {
      return [{
        type: CarouselService
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [WINDOW]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [DOCUMENT]
        }]
      }];
    };

    AutoplayService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(WINDOW)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(DOCUMENT))], AutoplayService);

    var LazyLoadService = /*#__PURE__*/function () {
      function LazyLoadService(carouselService) {
        _classCallCheck(this, LazyLoadService);

        this.carouselService = carouselService;
        this.spyDataStreams();
      }

      _createClass(LazyLoadService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.lazyLoadSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this18 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            var isLazyLoad = _this18.carouselService.settings && !_this18.carouselService.settings.lazyLoad;

            _this18.carouselService.slidesData.forEach(function (item) {
              return item.load = isLazyLoad ? true : false;
            });
          }));
          var changeSettings$ = this.carouselService.getChangeState();
          var resizedCarousel$ = this.carouselService.getResizedState();
          var lazyLoadMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changeSettings$, resizedCarousel$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            return _this18._defineLazyLoadSlides(data);
          }));
          this.lazyLoadSubscription = lazyLoadMerge$.subscribe(function () {});
        }
      }, {
        key: "_defineLazyLoadSlides",
        value: function _defineLazyLoadSlides(data) {
          var _this19 = this;

          if (!this.carouselService.settings || !this.carouselService.settings.lazyLoad) {
            return;
          }

          if (data.property && data.property.name === 'position' || data === 'initialized' || data === "resized") {
            var settings = this.carouselService.settings,
                clones = this.carouselService.clones().length;
            var n = settings.center && Math.ceil(settings.items / 2) || settings.items,
                i = settings.center && n * -1 || 0,
                position = (data.property && data.property.value !== undefined ? data.property.value : this.carouselService.current()) + i; // load = $.proxy(function(i, v) { this.load(v) }, this);
            //TODO: Need documentation for this new option

            if (settings.lazyLoadEager > 0) {
              n += settings.lazyLoadEager; // If the carousel is looping also preload images that are to the "left"

              if (settings.loop) {
                position -= settings.lazyLoadEager;
                n++;
              }
            }

            while (i++ < n) {
              this._load(clones / 2 + this.carouselService.relative(position));

              if (clones) {
                this.carouselService.clones(this.carouselService.relative(position)).forEach(function (value) {
                  return _this19._load(value);
                });
              }

              position++;
            }
          }
        }
        /**
           * Loads all resources of an item at the specified position.
           * @param position - The absolute position of the item.
           */

      }, {
        key: "_load",
        value: function _load(position) {
          if (this.carouselService.slidesData[position].load) {
            return;
          }

          this.carouselService.slidesData[position].load = true;
        }
      }]);

      return LazyLoadService;
    }();

    LazyLoadService.ɵfac = function LazyLoadService_Factory(t) {
      return new (t || LazyLoadService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CarouselService));
    };

    LazyLoadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LazyLoadService,
      factory: LazyLoadService.ɵfac
    });

    LazyLoadService.ctorParameters = function () {
      return [{
        type: CarouselService
      }];
    };

    var AnimateService = /*#__PURE__*/function () {
      function AnimateService(carouselService) {
        _classCallCheck(this, AnimateService);

        this.carouselService = carouselService;
        /**
         * s
         */

        this.swapping = true;
        /**
         * active slide before translating
         */

        this.previous = undefined;
        /**
         * new active slide after translating
         */

        this.next = undefined;
        this.spyDataStreams();
      }

      _createClass(AnimateService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.animateSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this20 = this;

          var changeSettings$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data.property.name === 'position') {
              _this20.previous = _this20.carouselService.current();
              _this20.next = data.property.value;
            }
          }));
          var dragCarousel$ = this.carouselService.getDragState();
          var draggedCarousel$ = this.carouselService.getDraggedState();
          var translatedCarousel$ = this.carouselService.getTranslatedState();
          var dragTranslatedMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(dragCarousel$, draggedCarousel$, translatedCarousel$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            return _this20.swapping = data === 'translated';
          }));
          var translateCarousel$ = this.carouselService.getTranslateState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this20.swapping && (_this20.carouselService._options.animateOut || _this20.carouselService._options.animateIn)) {
              _this20._swap();
            }
          }));
          var animateMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(changeSettings$, translateCarousel$, dragTranslatedMerge$).pipe();
          this.animateSubscription = animateMerge$.subscribe(function () {});
        }
        /**
           * Toggles the animation classes whenever an translations starts.
           * @returns
           */

      }, {
        key: "_swap",
        value: function _swap() {
          if (this.carouselService.settings.items !== 1) {
            return;
          } // if (!$.support.animation || !$.support.transition) {
          // 	return;
          // }


          this.carouselService.speed(0);
          var left;
          var previous = this.carouselService.slidesData[this.previous],
              next = this.carouselService.slidesData[this.next],
              incoming = this.carouselService.settings.animateIn,
              outgoing = this.carouselService.settings.animateOut;

          if (this.carouselService.current() === this.previous) {
            return;
          }

          if (outgoing) {
            left = +this.carouselService.coordinates(this.previous) - +this.carouselService.coordinates(this.next);
            this.carouselService.slidesData.forEach(function (slide) {
              if (slide.id === previous.id) {
                slide.left = "".concat(left, "px");
                slide.isAnimated = true;
                slide.isDefAnimatedOut = true;
                slide.isCustomAnimatedOut = true;
              }
            });
          }

          if (incoming) {
            this.carouselService.slidesData.forEach(function (slide) {
              if (slide.id === next.id) {
                slide.isAnimated = true;
                slide.isDefAnimatedIn = true;
                slide.isCustomAnimatedIn = true;
              }
            });
          }
        }
      }, {
        key: "clear",

        /**
         * Handles the end of 'animationend' event
         * @param id Id of slides
         */
        value: function clear(id) {
          var _this21 = this;

          this.carouselService.slidesData.forEach(function (slide) {
            if (slide.id === id) {
              slide.left = '';
              slide.isAnimated = false;
              slide.isDefAnimatedOut = false;
              slide.isCustomAnimatedOut = false;
              slide.isDefAnimatedIn = false;
              slide.isCustomAnimatedIn = false;
              slide.classes = _this21.carouselService.setCurSlideClasses(slide);
            }
          });
          this.carouselService.onTransitionEnd();
        }
      }]);

      return AnimateService;
    }();

    AnimateService.ɵfac = function AnimateService_Factory(t) {
      return new (t || AnimateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CarouselService));
    };

    AnimateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AnimateService,
      factory: AnimateService.ɵfac
    });

    AnimateService.ctorParameters = function () {
      return [{
        type: CarouselService
      }];
    };

    var AutoHeightService = /*#__PURE__*/function () {
      function AutoHeightService(carouselService) {
        _classCallCheck(this, AutoHeightService);

        this.carouselService = carouselService;
        this.spyDataStreams();
      }

      _createClass(AutoHeightService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.autoHeightSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this22 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this22.carouselService.settings.autoHeight) {
              _this22.update();
            } else {
              _this22.carouselService.slidesData.forEach(function (slide) {
                return slide.heightState = 'full';
              });
            }
          }));
          var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this22.carouselService.settings.autoHeight && data.property.name === 'position') {
              _this22.update();
            }
          }));
          var refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this22.carouselService.settings.autoHeight) {
              _this22.update();
            }
          }));
          var autoHeight$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$, refreshedCarousel$);
          this.autoHeightSubscription = autoHeight$.subscribe(function () {});
        }
        /**
         * Updates the prop 'heightState' of slides
         */

      }, {
        key: "update",
        value: function update() {
          var items = this.carouselService.settings.items;
          var start = this.carouselService.current(),
              end = start + items;

          if (this.carouselService.settings.center) {
            start = items % 2 === 1 ? start - (items - 1) / 2 : start - items / 2;
            end = items % 2 === 1 ? start + items : start + items + 1;
          }

          this.carouselService.slidesData.forEach(function (slide, i) {
            slide.heightState = i >= start && i < end ? 'full' : 'nulled';
          });
        }
      }]);

      return AutoHeightService;
    }();

    AutoHeightService.ɵfac = function AutoHeightService_Factory(t) {
      return new (t || AutoHeightService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CarouselService));
    };

    AutoHeightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AutoHeightService,
      factory: AutoHeightService.ɵfac
    });

    AutoHeightService.ctorParameters = function () {
      return [{
        type: CarouselService
      }];
    };

    var HashService = /*#__PURE__*/function () {
      function HashService(carouselService, route, router) {
        _classCallCheck(this, HashService);

        this.carouselService = carouselService;
        this.route = route;
        this.router = router;
        this.spyDataStreams();

        if (!this.route) {
          this.route = {
            fragment: Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('no route').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
          };
        }

        ;

        if (!this.router) {
          this.router = {
            navigate: function navigate(commands, extras) {
              return;
            }
          };
        }
      }

      _createClass(HashService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.hashSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this23 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            return _this23.listenToRoute();
          }));
          var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this23.carouselService.settings.URLhashListener && data.property.name === 'position') {
              var newCurSlide = _this23.carouselService.current();

              var newCurFragment = _this23.carouselService.slidesData[newCurSlide].hashFragment;

              if (!newCurFragment || newCurFragment === _this23.currentHashFragment) {
                return;
              }

              _this23.router.navigate(['./'], {
                fragment: newCurFragment,
                relativeTo: _this23.route
              });
            }
          }));
          var hashFragment$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$);
          this.hashSubscription = hashFragment$.subscribe(function () {});
        }
        /**
         * rewinds carousel to slide which has the same hashFragment as fragment of current url
         * @param fragment fragment of url
         */

      }, {
        key: "rewind",
        value: function rewind(fragment) {
          var position = this.carouselService.slidesData.findIndex(function (slide) {
            return slide.hashFragment === fragment && slide.isCloned === false;
          });

          if (position === -1 || position === this.carouselService.current()) {
            return;
          }

          this.carouselService.to(this.carouselService.relative(position), false);
        }
        /**
         * Initiate listening to ActivatedRoute.fragment
         */

      }, {
        key: "listenToRoute",
        value: function listenToRoute() {
          var _this24 = this;

          var count = this.carouselService.settings.startPosition === 'URLHash' ? 0 : 2;
          this.route.fragment.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skip"])(count)).subscribe(function (fragment) {
            _this24.currentHashFragment = fragment;

            _this24.rewind(fragment);
          });
        }
      }]);

      return HashService;
    }();

    HashService.ɵfac = function HashService_Factory(t) {
      return new (t || HashService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], 8));
    };

    HashService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HashService,
      factory: HashService.ɵfac
    });

    HashService.ctorParameters = function () {
      return [{
        type: CarouselService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    HashService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], HashService);
    var nextId = 0;

    var CarouselSlideDirective = /*#__PURE__*/function () {
      function CarouselSlideDirective(tplRef) {
        _classCallCheck(this, CarouselSlideDirective);

        this.tplRef = tplRef;
        /**
         * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
         * Will be auto-generated if not provided.
         */

        this.id = "owl-slide-".concat(nextId++);
        /**
         * Defines how much widths of common slide will current slide have
         * e.g. if _mergeData=2, the slide will twice wider then slides with _mergeData=1
         */

        this._dataMerge = 1;
        /**
         * Width of slide
         */

        this.width = 0;
        /**
         * Inner content of dot for certain slide; can be html-markup
         */

        this.dotContent = '';
        /**
         * Hash (fragment) of url which corresponds to certain slide
         */

        this.dataHash = '';
      }

      _createClass(CarouselSlideDirective, [{
        key: "isNumeric",

        /**
           * Determines if the input is a Number or something that can be coerced to a Number
           * @param - The input to be tested
           * @returns - An indication if the input is a Number or can be coerced to a Number
           */
        value: function isNumeric(number) {
          return !isNaN(parseFloat(number));
        }
      }, {
        key: "dataMerge",
        set: function set(data) {
          this._dataMerge = this.isNumeric(data) ? data : 1;
        },
        get: function get() {
          return this._dataMerge;
        }
      }]);

      return CarouselSlideDirective;
    }();

    CarouselSlideDirective.ɵfac = function CarouselSlideDirective_Factory(t) {
      return new (t || CarouselSlideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
    };

    CarouselSlideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CarouselSlideDirective,
      selectors: [["ng-template", "carouselSlide", ""]],
      inputs: {
        id: "id",
        width: "width",
        dotContent: "dotContent",
        dataHash: "dataHash",
        dataMerge: "dataMerge"
      }
    });

    CarouselSlideDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "dataMerge", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "dotContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "dataHash", void 0);
    /**
     * Data which will be passed out after ending of transition of carousel
     */

    var SlidesOutputData = function SlidesOutputData() {
      _classCallCheck(this, SlidesOutputData);
    };

    ;

    var CarouselComponent = /*#__PURE__*/function () {
      function CarouselComponent(el, resizeService, carouselService, navigationService, autoplayService, lazyLoadService, animateService, autoHeightService, hashService, logger, changeDetectorRef, docRef) {
        _classCallCheck(this, CarouselComponent);

        this.el = el;
        this.resizeService = resizeService;
        this.carouselService = carouselService;
        this.navigationService = navigationService;
        this.autoplayService = autoplayService;
        this.lazyLoadService = lazyLoadService;
        this.animateService = animateService;
        this.autoHeightService = autoHeightService;
        this.hashService = hashService;
        this.logger = logger;
        this.changeDetectorRef = changeDetectorRef;
        this.translated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initialized = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
           *  Data of every slide
           */

        this.slidesData = [];
        /**
         * Shows whether carousel is loaded of not.
         */

        this.carouselLoaded = false;
        this.docRef = docRef;
      }

      _createClass(CarouselComponent, [{
        key: "onVisibilityChange",
        value: function onVisibilityChange(ev) {
          if (!this.carouselService.settings.autoplay) return;

          switch (this.docRef.visibilityState) {
            case 'visible':
              this.autoplayService.play();
              break;

            case 'hidden':
              this.autoplayService.stop();
              break;

            default:
              break;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.spyDataStreams();
          this.carouselWindowWidth = this.el.nativeElement.querySelector('.owl-carousel').clientWidth;
        }
      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {} // ngAfterContentChecked() END

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this25 = this;

          if (this.slides.toArray().length) {
            this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
            this.carouselService.initialize(this.slides.toArray());

            this._winResizeWatcher();
          } else {
            this.logger.log("There are no slides to show. So the carousel won't be rendered");
          }

          this._slidesChangesSubscription = this.slides.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (slides) {
            if (slides.toArray().length) {
              // this.carouselService.setItems(slides.toArray());
              _this25.carouselService.setup(_this25.carouselWindowWidth, slides.toArray(), _this25.options);

              _this25.carouselService.initialize(slides.toArray());
            } else {
              _this25.carouselLoaded = false;

              _this25.logger.log("There are no slides to show. So the carousel won't be re-rendered");
            }
          })).subscribe(function () {});
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
          }

          if (this._slidesChangesSubscription) {
            this._slidesChangesSubscription.unsubscribe();
          }

          if (this._allObservSubscription) {
            this._allObservSubscription.unsubscribe();
          }
        }
        /**
         * Joins the observable login in one place: sets values to some observables, merges this observables and
         * subcribes to merge func
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this26 = this;

          this._viewCurSettings$ = this.carouselService.getViewCurSettings().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this26.owlDOMData = data.owlDOMData;
            _this26.stageData = data.stageData;
            _this26.slidesData = data.slidesData;

            if (!_this26.carouselLoaded) {
              _this26.carouselLoaded = true;
            }

            _this26.navData = data.navData;
            _this26.dotsData = data.dotsData;

            _this26.changeDetectorRef.markForCheck();
          }));
          this._initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this26.gatherTranslatedData();

            _this26.initialized.emit(_this26.slidesOutputData); // this.slidesOutputData = {};

          }));
          this._translatedCarousel$ = this.carouselService.getTranslatedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this26.gatherTranslatedData();

            _this26.translated.emit(_this26.slidesOutputData); // this.slidesOutputData = {};

          }));
          this._changeCarousel$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this26.gatherTranslatedData();

            _this26.change.emit(_this26.slidesOutputData); // this.slidesOutputData = {};

          }));
          this._changedCarousel$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (value) {
            var changedPosition = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return value.property.name === 'position';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_this26.slidesData);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skip"])(value.property.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(_this26.carouselService.settings.items), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (slide) {
              var clonedIdPrefix = _this26.carouselService.clonedIdPrefix;
              var id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
              return Object.assign(Object.assign({}, slide), {
                id: id,
                isActive: true
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (slides) {
              return {
                slides: slides,
                startPosition: _this26.carouselService.relative(value.property.value)
              };
            })); // const changedSetting: Observable<SlidesOutputData> = of(value).pipe(
            //   filter(() => value.property.name === 'settings'),
            //   map(() => {
            //     return {
            //       slides: [],
            //       startPosition: this.carouselService.relative(value.property.value)
            //     }
            //   })
            // )

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(changedPosition);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (slidesData) {
            _this26.gatherTranslatedData();

            _this26.changed.emit(slidesData.slides.length ? slidesData : _this26.slidesOutputData); // console.log(this.slidesOutputData);
            // this.slidesOutputData = {};

          }));
          this._draggingCarousel$ = this.carouselService.getDragState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this26.gatherTranslatedData();

            _this26.dragging.emit({
              dragging: true,
              data: _this26.slidesOutputData
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this26.carouselService.getDraggedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
              return !!_this26.carouselService.is('animating');
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (anim) {
            if (anim) {
              return _this26.carouselService.getTranslatedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('not animating');
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this26.dragging.emit({
              dragging: false,
              data: _this26.slidesOutputData
            });
          }));
          this._carouselMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this._viewCurSettings$, this._translatedCarousel$, this._draggingCarousel$, this._changeCarousel$, this._changedCarousel$, this._initializedCarousel$);
          this._allObservSubscription = this._carouselMerge$.subscribe(function () {});
        }
        /**
         * Init subscription to resize event and attaches handler for this event
         */

      }, {
        key: "_winResizeWatcher",
        value: function _winResizeWatcher() {
          var _this27 = this;

          if (Object.keys(this.carouselService._options.responsive).length) {
            this.resizeSubscription = this.resizeService.onResize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return _this27.carouselWindowWidth !== _this27.el.nativeElement.querySelector('.owl-carousel').clientWidth;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(this.carouselService.settings.responsiveRefreshRate)).subscribe(function () {
              _this27.carouselService.onResize(_this27.el.nativeElement.querySelector('.owl-carousel').clientWidth);

              _this27.carouselWindowWidth = _this27.el.nativeElement.querySelector('.owl-carousel').clientWidth;
            });
          }
        }
        /**
         * Handler for transitioend event
         */

      }, {
        key: "onTransitionEnd",
        value: function onTransitionEnd() {
          this.carouselService.onTransitionEnd();
        }
        /**
         * Handler for click event, attached to next button
         */

      }, {
        key: "next",
        value: function next() {
          if (!this.carouselLoaded) return;
          this.navigationService.next(this.carouselService.settings.navSpeed);
        }
        /**
         * Handler for click event, attached to prev button
         */

      }, {
        key: "prev",
        value: function prev() {
          if (!this.carouselLoaded) return;
          this.navigationService.prev(this.carouselService.settings.navSpeed);
        }
        /**
         * Handler for click event, attached to dots
         */

      }, {
        key: "moveByDot",
        value: function moveByDot(dotId) {
          if (!this.carouselLoaded) return;
          this.navigationService.moveByDot(dotId);
        }
        /**
         * rewinds carousel to slide with needed id
         * @param id fragment of url
         */

      }, {
        key: "to",
        value: function to(id) {
          // if (!this.carouselLoaded || ((this.navData && this.navData.disabled) && (this.dotsData && this.dotsData.disabled))) return;
          if (!this.carouselLoaded) return;
          this.navigationService.toSlideById(id);
        }
        /**
         * Gathers and prepares data intended for passing to the user by means of firing event translatedCarousel
         */

      }, {
        key: "gatherTranslatedData",
        value: function gatherTranslatedData() {
          var startPosition;
          var clonedIdPrefix = this.carouselService.clonedIdPrefix;
          var activeSlides = this.slidesData.filter(function (slide) {
            return slide.isActive === true;
          }).map(function (slide) {
            var id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
            return {
              id: id,
              width: slide.width,
              marginL: slide.marginL,
              marginR: slide.marginR,
              center: slide.isCentered
            };
          });
          startPosition = this.carouselService.relative(this.carouselService.current());
          this.slidesOutputData = {
            startPosition: startPosition,
            slides: activeSlides
          };
        }
        /**
         * Starts pausing
         */

      }, {
        key: "startPausing",
        value: function startPausing() {
          this.autoplayService.startPausing();
        }
        /**
         * Starts playing after mouse leaves carousel
         */

      }, {
        key: "startPlayML",
        value: function startPlayML() {
          this.autoplayService.startPlayingMouseLeave();
        }
        /**
         * Starts playing after touch ends
         */

      }, {
        key: "startPlayTE",
        value: function startPlayTE() {
          this.autoplayService.startPlayingTouchEnd();
        }
      }]);

      return CarouselComponent;
    }();

    CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
      return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ResizeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AutoplayService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LazyLoadService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AnimateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AutoHeightService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](HashService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OwlLogger), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DOCUMENT));
    };

    CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CarouselComponent,
      selectors: [["owl-carousel-o"]],
      contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CarouselSlideDirective, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.slides = _t);
        }
      },
      hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibilitychange", function CarouselComponent_visibilitychange_HostBindingHandler($event) {
            return ctx.onVisibilityChange($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
        }
      },
      inputs: {
        options: "options"
      },
      outputs: {
        translated: "translated",
        dragging: "dragging",
        change: "change",
        changed: "changed",
        initialized: "initialized"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService])],
      decls: 4,
      vars: 9,
      consts: [[1, "owl-carousel", "owl-theme", 3, "ngClass", "mouseover", "mouseleave", "touchstart", "touchend"], ["owlCarousel", ""], ["class", "owl-stage-outer", 4, "ngIf"], [4, "ngIf"], [1, "owl-stage-outer"], [3, "owlDraggable", "stageData", "slidesData"], [1, "owl-nav", 3, "ngClass"], [1, "owl-prev", 3, "ngClass", "innerHTML", "click"], [1, "owl-next", 3, "ngClass", "innerHTML", "click"], [1, "owl-dots", 3, "ngClass"], ["class", "owl-dot", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "owl-dot", 3, "ngClass", "click"], [3, "innerHTML"]],
      template: function CarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function CarouselComponent_Template_div_mouseover_0_listener() {
            return ctx.startPausing();
          })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() {
            return ctx.startPlayML();
          })("touchstart", function CarouselComponent_Template_div_touchstart_0_listener() {
            return ctx.startPausing();
          })("touchend", function CarouselComponent_Template_div_touchend_0_listener() {
            return ctx.startPlayTE();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CarouselComponent_div_2_Template, 2, 6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselComponent_ng_container_3_Template, 6, 15, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](3, _c3, ctx.owlDOMData == null ? null : ctx.owlDOMData.rtl, ctx.owlDOMData == null ? null : ctx.owlDOMData.isLoaded, ctx.owlDOMData == null ? null : ctx.owlDOMData.isResponsive, ctx.owlDOMData == null ? null : ctx.owlDOMData.isMouseDragable, ctx.owlDOMData == null ? null : ctx.owlDOMData.isGrab));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.carouselLoaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.slides.toArray().length);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], StageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]];
      },
      styles: [".owl-theme[_ngcontent-%COMP%] { display: block; }"]
    });

    CarouselComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: ResizeService
      }, {
        type: CarouselService
      }, {
        type: NavigationService
      }, {
        type: AutoplayService
      }, {
        type: LazyLoadService
      }, {
        type: AnimateService
      }, {
        type: AutoHeightService
      }, {
        type: HashService
      }, {
        type: OwlLogger
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [DOCUMENT]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(CarouselSlideDirective)], CarouselComponent.prototype, "slides", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "translated", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "dragging", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "change", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "changed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "initialized", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:visibilitychange', ['$event'])], CarouselComponent.prototype, "onVisibilityChange", null);
    CarouselComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(11, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(DOCUMENT))], CarouselComponent);

    var StageComponent = /*#__PURE__*/function () {
      function StageComponent(zone, el, renderer, carouselService, animateService) {
        var _this28 = this;

        _classCallCheck(this, StageComponent);

        this.zone = zone;
        this.el = el;
        this.renderer = renderer;
        this.carouselService = carouselService;
        this.animateService = animateService;
        /**
         * Object with data needed for dragging
         */

        this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: {
            start: null,
            current: null
          },
          direction: null,
          active: false,
          moving: false
        };
        /**
         * Subject for notification when the carousel's rebuilding caused by resize event starts
         */

        this._oneDragMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Passes this to _oneMouseTouchMove();
         */

        this.bindOneMouseTouchMove = function (ev) {
          _this28._oneMouseTouchMove(ev);
        };
        /**
         * Passes this to _onDragMove();
         */


        this.bindOnDragMove = function (ev) {
          _this28._onDragMove(ev);
        };
        /**
         * Passes this to _onDragMove();
         */


        this.bindOnDragEnd = function (ev) {
          // this.zone.run(() => {
          _this28._onDragEnd(ev); // });

        };
        /**
         * Attaches handler for 'click' event on any element in .owl-stage in order to prevent dragging when moving of cursor is less than 3px
         */


        this._oneClickHandler = function () {
          _this28.listenerOneClick = _this28.renderer.listen(_this28._drag.target, 'click', function () {
            return false;
          });

          _this28.listenerOneClick();
        };
      }

      _createClass(StageComponent, [{
        key: "onMouseDown",
        value: function onMouseDown(event) {
          if (this.owlDraggable.isMouseDragable) {
            this._onDragStart(event);
          }
        }
      }, {
        key: "onTouchStart",
        value: function onTouchStart(event) {
          if (this.owlDraggable.isTouchDragable) {
            this._onDragStart(event);
          }
        }
      }, {
        key: "onTouchCancel",
        value: function onTouchCancel(event) {
          this._onDragEnd(event);
        }
      }, {
        key: "onDragStart",
        value: function onDragStart() {
          if (this.owlDraggable.isMouseDragable) {
            return false;
          }
        }
      }, {
        key: "onSelectStart",
        value: function onSelectStart() {
          if (this.owlDraggable.isMouseDragable) {
            return false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this._oneMoveSubsription = this._oneDragMove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function () {
            _this29._sendChanges();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._oneMoveSubsription.unsubscribe();
        }
        /**
           * Handles `touchstart` and `mousedown` events.
           * @todo Horizontal swipe threshold as option
           * @todo #261
           * @param event - The event arguments.
           */

      }, {
        key: "_onDragStart",
        value: function _onDragStart(event) {
          var _this30 = this;

          var stage = null;

          if (event.which === 3) {
            return;
          }

          stage = this._prepareDragging(event);
          this._drag.time = new Date().getTime();
          this._drag.target = event.target;
          this._drag.stage.start = stage;
          this._drag.stage.current = stage;
          this._drag.pointer = this._pointer(event);
          this.listenerMouseUp = this.renderer.listen(document, 'mouseup', this.bindOnDragEnd);
          this.listenerTouchEnd = this.renderer.listen(document, 'touchend', this.bindOnDragEnd);
          this.zone.runOutsideAngular(function () {
            _this30.listenerOneMouseMove = _this30.renderer.listen(document, 'mousemove', _this30.bindOneMouseTouchMove);
            _this30.listenerOneTouchMove = _this30.renderer.listen(document, 'touchmove', _this30.bindOneMouseTouchMove);
          });
        }
        /**
         * Attaches listeners to `touchmove` and `mousemove` events; initiates updating carousel after starting dragging
         * @param event event objech of mouse or touch event
         */

      }, {
        key: "_oneMouseTouchMove",
        value: function _oneMouseTouchMove(event) {
          var delta = this._difference(this._drag.pointer, this._pointer(event));

          if (this.listenerATag) {
            this.listenerATag();
          }

          if (Math.abs(delta.x) < 3 && Math.abs(delta.y) < 3 && this._is('valid')) {
            return;
          }

          if (Math.abs(delta.x) < 3 && Math.abs(delta.x) < Math.abs(delta.y) && this._is('valid')) {
            return;
          }

          this.listenerOneMouseMove();
          this.listenerOneTouchMove();
          this._drag.moving = true;
          this.blockClickAnchorInDragging(event);
          this.listenerMouseMove = this.renderer.listen(document, 'mousemove', this.bindOnDragMove);
          this.listenerTouchMove = this.renderer.listen(document, 'touchmove', this.bindOnDragMove);
          event.preventDefault();

          this._enterDragging();

          this._oneDragMove$.next(event); // this._sendChanges();

        }
        /**
         * Attaches handler to HTMLAnchorElement for preventing click while carousel is being dragged
         * @param event event object
         */

      }, {
        key: "blockClickAnchorInDragging",
        value: function blockClickAnchorInDragging(event) {
          var target = event.target;

          while (target && !(target instanceof HTMLAnchorElement)) {
            target = target.parentElement;
          }

          if (target instanceof HTMLAnchorElement) {
            this.listenerATag = this.renderer.listen(target, 'click', function () {
              return false;
            });
          }
        }
        /**
         * Handles the `touchmove` and `mousemove` events.
         * @todo #261
         * @param event - The event arguments.
         */

      }, {
        key: "_onDragMove",
        value: function _onDragMove(event) {
          var stage;
          var stageOrExit = this.carouselService.defineNewCoordsDrag(event, this._drag);

          if (stageOrExit === false) {
            return;
          }

          stage = stageOrExit;
          event.preventDefault();
          this._drag.stage.current = stage;

          this._animate(stage.x - this._drag.stage.start.x);
        }
      }, {
        key: "_animate",

        /**
         * Moves .owl-stage left-right
         * @param coordinate coordinate to be set to .owl-stage
         */
        value: function _animate(coordinate) {
          this.renderer.setStyle(this.el.nativeElement.children[0], 'transform', "translate3d(".concat(coordinate, "px,0px,0px"));
          this.renderer.setStyle(this.el.nativeElement.children[0], 'transition', '0s');
        }
        /**
           * Handles the `touchend` and `mouseup` events.
           * @todo #261
           * @todo Threshold for click event
           * @param event - The event arguments.
           */

      }, {
        key: "_onDragEnd",
        value: function _onDragEnd(event) {
          this.carouselService.owlDOMData.isGrab = false;
          this.listenerOneMouseMove();
          this.listenerOneTouchMove();

          if (this._drag.moving) {
            this.renderer.setStyle(this.el.nativeElement.children[0], 'transform', "");
            this.renderer.setStyle(this.el.nativeElement.children[0], 'transition', this.carouselService.speed(+this.carouselService.settings.dragEndSpeed || this.carouselService.settings.smartSpeed) / 1000 + 's');

            this._finishDragging(event);

            this.listenerMouseMove();
            this.listenerTouchMove();
          }

          this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
              start: null,
              current: null
            },
            direction: null,
            active: false,
            moving: false
          }; // this.carouselService.trigger('dragged');

          this.listenerMouseUp();
          this.listenerTouchEnd();
        }
      }, {
        key: "_prepareDragging",

        /**
           * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
           * @param event - The event arguments.
           * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
           */
        value: function _prepareDragging(event) {
          return this.carouselService.prepareDragging(event);
        }
        /**
         * Finishes dragging
         * @param event object event of 'mouseUp' of 'touchend' events
         */

      }, {
        key: "_finishDragging",
        value: function _finishDragging(event) {
          this.carouselService.finishDragging(event, this._drag, this._oneClickHandler);
        }
        /**
           * Gets unified pointer coordinates from event.
           * @param event The `mousedown` or `touchstart` event.
           * @returns Contains `x` and `y` coordinates of current pointer position.
           */

      }, {
        key: "_pointer",
        value: function _pointer(event) {
          return this.carouselService.pointer(event);
        }
        /**
           * Gets the difference of two vectors.
           * @param first The first vector.
           * @param second- The second vector.
           * @returns The difference.
           */

      }, {
        key: "_difference",
        value: function _difference(firstC, second) {
          return this.carouselService.difference(firstC, second);
        }
        /**
           * Checks whether the carousel is in a specific state or not.
           * @param specificState The state to check.
           * @returns The flag which indicates if the carousel is busy.
           */

      }, {
        key: "_is",
        value: function _is(specificState) {
          return this.carouselService.is(specificState);
        }
        /**
        * Enters a state.
        * @param name The state name.
        */

      }, {
        key: "_enter",
        value: function _enter(name) {
          this.carouselService.enter(name);
        }
        /**
           * Sends all data needed for View.
           */

      }, {
        key: "_sendChanges",
        value: function _sendChanges() {
          this.carouselService.sendChanges();
        }
        /**
         * Handler for transitioend event
         */

      }, {
        key: "onTransitionEnd",
        value: function onTransitionEnd() {
          this.carouselService.onTransitionEnd();
        }
        /**
           * Enters into a 'dragging' state
           */

      }, {
        key: "_enterDragging",
        value: function _enterDragging() {
          this.carouselService.enterDragging();
        }
        /**
         * Handles the end of 'animationend' event
         * @param id Id of slides
         */

      }, {
        key: "clear",
        value: function clear(id) {
          this.animateService.clear(id);
        }
      }]);

      return StageComponent;
    }();

    StageComponent.ɵfac = function StageComponent_Factory(t) {
      return new (t || StageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AnimateService));
    };

    StageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: StageComponent,
      selectors: [["owl-stage"]],
      hostBindings: function StageComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function StageComponent_mousedown_HostBindingHandler($event) {
            return ctx.onMouseDown($event);
          })("touchstart", function StageComponent_touchstart_HostBindingHandler($event) {
            return ctx.onTouchStart($event);
          })("touchcancel", function StageComponent_touchcancel_HostBindingHandler($event) {
            return ctx.onTouchCancel($event);
          })("dragstart", function StageComponent_dragstart_HostBindingHandler() {
            return ctx.onDragStart();
          })("selectstart", function StageComponent_selectstart_HostBindingHandler() {
            return ctx.onSelectStart();
          });
        }
      },
      inputs: {
        owlDraggable: "owlDraggable",
        stageData: "stageData",
        slidesData: "slidesData"
      },
      decls: 3,
      vars: 8,
      consts: [[1, "owl-stage", 3, "ngStyle", "transitionend"], [4, "ngFor", "ngForOf"], [1, "owl-item", 3, "ngClass", "ngStyle", "animationend"], [4, "ngIf"], [3, "ngTemplateOutlet"]],
      template: function StageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("transitionend", function StageComponent_Template_div_transitionend_1_listener() {
            return ctx.onTransitionEnd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StageComponent_ng_container_2_Template, 3, 9, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c5, ctx.stageData.width + "px", ctx.stageData.transform, ctx.stageData.transition, ctx.stageData.paddingL ? ctx.stageData.paddingL + "px" : "", ctx.stageData.paddingR ? ctx.stageData.paddingR + "px" : ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slidesData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      encapsulation: 2,
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('autoHeight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('nulled', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
          height: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
          height: '*'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('full => nulled', [// style({height: '*'}),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('700ms 350ms')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('nulled => full', [// style({height: 0}),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])(350)])])]
      }
    });

    StageComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: CarouselService
      }, {
        type: AnimateService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StageComponent.prototype, "owlDraggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StageComponent.prototype, "stageData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StageComponent.prototype, "slidesData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event'])], StageComponent.prototype, "onMouseDown", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchstart', ['$event'])], StageComponent.prototype, "onTouchStart", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchcancel', ['$event'])], StageComponent.prototype, "onTouchCancel", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragstart')], StageComponent.prototype, "onDragStart", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('selectstart')], StageComponent.prototype, "onSelectStart", null);

    var OwlRouterLinkDirective = /*#__PURE__*/function () {
      function OwlRouterLinkDirective(router, route, tabIndex, renderer, el) {
        _classCallCheck(this, OwlRouterLinkDirective);

        this.router = router;
        this.route = route;
        this.stopLink = false;
        this.commands = [];

        if (tabIndex == null) {
          renderer.setAttribute(el.nativeElement, 'tabindex', '0');
        }
      }

      _createClass(OwlRouterLinkDirective, [{
        key: "onClick",
        value: function onClick() {
          var extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl)
          };

          if (this.stopLink) {
            return false;
          }

          this.router.navigateByUrl(this.urlTree, extras);
          return true;
        }
      }, {
        key: "owlRouterLink",
        set: function set(commands) {
          if (commands != null) {
            this.commands = Array.isArray(commands) ? commands : [commands];
          } else {
            this.commands = [];
          }
        }
        /**
         * @deprecated 4.0.0 use `queryParamsHandling` instead.
         */

      }, {
        key: "preserveQueryParams",
        set: function set(value) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && console && console.warn) {
            console.warn('preserveQueryParams is deprecated!, use queryParamsHandling instead.');
          }

          this.preserve = value;
        }
      }, {
        key: "urlTree",
        get: function get() {
          return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: attrBoolValue(this.preserve),
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: attrBoolValue(this.preserveFragment)
          });
        }
      }]);

      return OwlRouterLinkDirective;
    }();

    OwlRouterLinkDirective.ɵfac = function OwlRouterLinkDirective_Factory(t) {
      return new (t || OwlRouterLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    OwlRouterLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: OwlRouterLinkDirective,
      selectors: [["", "owlRouterLink", "", 5, "a"]],
      hostBindings: function OwlRouterLinkDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlRouterLinkDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        stopLink: "stopLink",
        owlRouterLink: "owlRouterLink",
        preserveQueryParams: "preserveQueryParams",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        preserveFragment: "preserveFragment",
        skipLocationChange: "skipLocationChange",
        replaceUrl: "replaceUrl"
      }
    });

    OwlRouterLinkDirective.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "queryParams", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "fragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "queryParamsHandling", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "preserveFragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "skipLocationChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "replaceUrl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "stopLink", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "owlRouterLink", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "preserveQueryParams", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')], OwlRouterLinkDirective.prototype, "onClick", null);
    OwlRouterLinkDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('tabindex'))], OwlRouterLinkDirective);
    /**
     * @description
     *
     * Lets you link to specific routes in your app.
     *
     * See `RouterLink` for more information.
     *
     * @ngModule RouterModule
     *
     * @publicApi
     */

    var OwlRouterLinkWithHrefDirective = /*#__PURE__*/function () {
      function OwlRouterLinkWithHrefDirective(router, route, locationStrategy) {
        var _this31 = this;

        _classCallCheck(this, OwlRouterLinkWithHrefDirective);

        this.router = router;
        this.route = route;
        this.locationStrategy = locationStrategy;
        this.stopLink = false;
        this.commands = [];
        this.subscription = router.events.subscribe(function (s) {
          if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
            _this31.updateTargetUrlAndHref();
          }
        });
      }

      _createClass(OwlRouterLinkWithHrefDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.updateTargetUrlAndHref();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "onClick",
        value: function onClick(button, ctrlKey, metaKey, shiftKey) {
          if (button !== 0 || ctrlKey || metaKey || shiftKey) {
            return true;
          }

          if (typeof this.target === 'string' && this.target !== '_self') {
            return true;
          }

          if (this.stopLink) {
            return false;
          }

          var extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl)
          };
          this.router.navigateByUrl(this.urlTree, extras);
          return false;
        }
      }, {
        key: "updateTargetUrlAndHref",
        value: function updateTargetUrlAndHref() {
          this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
        }
      }, {
        key: "owlRouterLink",
        set: function set(commands) {
          if (commands != null) {
            this.commands = Array.isArray(commands) ? commands : [commands];
          } else {
            this.commands = [];
          }
        }
      }, {
        key: "preserveQueryParams",
        set: function set(value) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && console && console.warn) {
            console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
          }

          this.preserve = value;
        }
      }, {
        key: "urlTree",
        get: function get() {
          return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: attrBoolValue(this.preserve),
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: attrBoolValue(this.preserveFragment)
          });
        }
      }]);

      return OwlRouterLinkWithHrefDirective;
    }();

    OwlRouterLinkWithHrefDirective.ɵfac = function OwlRouterLinkWithHrefDirective_Factory(t) {
      return new (t || OwlRouterLinkWithHrefDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]));
    };

    OwlRouterLinkWithHrefDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: OwlRouterLinkWithHrefDirective,
      selectors: [["a", "owlRouterLink", ""]],
      hostVars: 2,
      hostBindings: function OwlRouterLinkWithHrefDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlRouterLinkWithHrefDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("href", ctx.href, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("target", ctx.target);
        }
      },
      inputs: {
        stopLink: "stopLink",
        owlRouterLink: "owlRouterLink",
        preserveQueryParams: "preserveQueryParams",
        target: "target",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        preserveFragment: "preserveFragment",
        skipLocationChange: "skipLocationChange",
        replaceUrl: "replaceUrl"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    OwlRouterLinkWithHrefDirective.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.target'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "target", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "queryParams", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "fragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "queryParamsHandling", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "preserveFragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "skipLocationChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "replaceUrl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "stopLink", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])()], OwlRouterLinkWithHrefDirective.prototype, "href", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "owlRouterLink", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "preserveQueryParams", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey'])], OwlRouterLinkWithHrefDirective.prototype, "onClick", null);

    function attrBoolValue(s) {
      return s === '' || !!s;
    }

    var routes = [];

    var CarouselModule = function CarouselModule() {
      _classCallCheck(this, CarouselModule);
    };

    CarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CarouselModule
    });
    CarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CarouselModule_Factory(t) {
        return new (t || CarouselModule)();
      },
      providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResizeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["EventManager"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlLogger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: OwlLogger
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: CarouselService
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowserWindowRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowserDocumentRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutoplayService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: CarouselService
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [WINDOW]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [DOCUMENT]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LazyLoadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: CarouselService
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AnimateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: CarouselService
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutoHeightService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: CarouselService
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HashService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: CarouselService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselSlideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'ng-template[carouselSlide]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dotContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dataHash: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dataMerge: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'owl-carousel-o',
          template: "\n    <div class=\"owl-carousel owl-theme\" #owlCarousel\n      [ngClass]=\"{'owl-rtl': owlDOMData?.rtl,\n                  'owl-loaded': owlDOMData?.isLoaded,\n                  'owl-responsive': owlDOMData?.isResponsive,\n                  'owl-drag': owlDOMData?.isMouseDragable,\n                  'owl-grab': owlDOMData?.isGrab}\"\n      (mouseover)=\"startPausing()\"\n      (mouseleave)=\"startPlayML()\"\n      (touchstart)=\"startPausing()\"\n      (touchend)=\"startPlayTE()\">\n\n      <div *ngIf=\"carouselLoaded\" class=\"owl-stage-outer\">\n        <owl-stage [owlDraggable]=\"{'isMouseDragable': owlDOMData?.isMouseDragable, 'isTouchDragable': owlDOMData?.isTouchDragable}\"\n                    [stageData]=\"stageData\"\n                    [slidesData]=\"slidesData\"></owl-stage>\n      </div> <!-- /.owl-stage-outer -->\n      <ng-container *ngIf=\"slides.toArray().length\">\n        <div class=\"owl-nav\" [ngClass]=\"{'disabled': navData?.disabled}\">\n          <div class=\"owl-prev\" [ngClass]=\"{'disabled': navData?.prev?.disabled}\" (click)=\"prev()\" [innerHTML]=\"navData?.prev?.htmlText\"></div>\n          <div class=\"owl-next\" [ngClass]=\"{'disabled': navData?.next?.disabled}\" (click)=\"next()\" [innerHTML]=\"navData?.next?.htmlText\"></div>\n        </div> <!-- /.owl-nav -->\n        <div class=\"owl-dots\" [ngClass]=\"{'disabled': dotsData?.disabled}\">\n          <div *ngFor=\"let dot of dotsData?.dots\" class=\"owl-dot\" [ngClass]=\"{'active': dot.active, 'owl-dot-text': dot.showInnerContent}\" (click)=\"moveByDot(dot.id)\">\n            <span [innerHTML]=\"dot.innerContent\"></span>\n          </div>\n        </div> <!-- /.owl-dots -->\n      </ng-container>\n    </div> <!-- /.owl-carousel owl-loaded -->\n  ",
          providers: [NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService],
          styles: [".owl-theme { display: block; }"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: ResizeService
        }, {
          type: CarouselService
        }, {
          type: NavigationService
        }, {
          type: AutoplayService
        }, {
          type: LazyLoadService
        }, {
          type: AnimateService
        }, {
          type: AutoHeightService
        }, {
          type: HashService
        }, {
          type: OwlLogger
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [DOCUMENT]
          }]
        }];
      }, {
        translated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        changed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        initialized: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onVisibilityChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['document:visibilitychange', ['$event']]
        }],
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [CarouselSlideDirective]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'owl-stage',
          template: "\n    <div>\n      <div class=\"owl-stage\" [ngStyle]=\"{'width': stageData.width + 'px',\n                                        'transform': stageData.transform,\n                                        'transition': stageData.transition,\n                                        'padding-left': stageData.paddingL ? stageData.paddingL + 'px' : '',\n                                        'padding-right': stageData.paddingR ? stageData.paddingR + 'px' : '' }\"\n          (transitionend)=\"onTransitionEnd()\">\n        <ng-container *ngFor=\"let slide of slidesData; let i = index\">\n          <div class=\"owl-item\" [ngClass]=\"slide.classes\"\n                                [ngStyle]=\"{'width': slide.width + 'px',\n                                            'margin-left': slide.marginL ? slide.marginL + 'px' : '',\n                                            'margin-right': slide.marginR ? slide.marginR + 'px' : '',\n                                            'left': slide.left}\"\n                                (animationend)=\"clear(slide.id)\"\n                                [@autoHeight]=\"slide.heightState\">\n            <ng-template *ngIf=\"slide.load\" [ngTemplateOutlet]=\"slide.tplRef\"></ng-template>\n          </div><!-- /.owl-item -->\n        </ng-container>\n      </div><!-- /.owl-stage -->\n    </div>\n  ",
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('autoHeight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('nulled', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
            height: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
            height: '*'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('full => nulled', [// style({height: '*'}),
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('700ms 350ms')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('nulled => full', [// style({height: 0}),
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])(350)])])]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: CarouselService
        }, {
          type: AnimateService
        }];
      }, {
        onMouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        onTouchStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['touchstart', ['$event']]
        }],
        onTouchCancel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['touchcancel', ['$event']]
        }],
        onDragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['dragstart']
        }],
        onSelectStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['selectstart']
        }],
        owlDraggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        stageData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        slidesData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlRouterLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: ':not(a)[owlRouterLink]'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, {
        stopLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        owlRouterLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveQueryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click']
        }],
        queryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fragment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        queryParamsHandling: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveFragment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        skipLocationChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        replaceUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlRouterLinkWithHrefDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'a[owlRouterLink]'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]
        }];
      }, {
        stopLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        owlRouterLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveQueryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey']]
        }],
        href: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"]
        }],
        target: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['attr.target']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        queryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fragment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        queryParamsHandling: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveFragment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        skipLocationChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        replaceUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CarouselModule, {
        declarations: function declarations() {
          return [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
        },
        exports: function exports() {
          return [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          declarations: [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
          exports: [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
          providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-owl-carousel-o.js.map

    /***/

  },

  /***/
  "./src/app/home/home-about/home-about.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/home/home-about/home-about.component.ts ***!
    \*********************************************************/

  /*! exports provided: HomeAboutComponent */

  /***/
  function srcAppHomeHomeAboutHomeAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeAboutComponent", function () {
      return HomeAboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeAboutComponent_h5_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var paragraph_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paragraph_r1.PARAGRAPH);
      }
    }

    var HomeAboutComponent = /*#__PURE__*/function () {
      function HomeAboutComponent(translate) {
        _classCallCheck(this, HomeAboutComponent);

        this.translate = translate;
        this.bError = false;
        this.paragraphs = [{
          PARAGRAPH: 'Loading...'
        }];
      }

      _createClass(HomeAboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.translate.get('HOME.ABOUT.DESCRIPTION').subscribe(function (res) {
            if (typeof res === 'string') {
              _this32.bError = true;
              _this32.paragraphs = [{
                PARAGRAPH: 'Cannot get translation!'
              }];
            } else {
              _this32.paragraphs = res;
            }
          });
        }
      }]);

      return HomeAboutComponent;
    }();

    HomeAboutComponent.ɵfac = function HomeAboutComponent_Factory(t) {
      return new (t || HomeAboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
    };

    HomeAboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeAboutComponent,
      selectors: [["app-home-about"]],
      decls: 7,
      vars: 1,
      consts: [["id", "home-about", 1, "home-about"], [1, "container-fluid"], [1, "row"], [1, "about-info", "p-4", "col-12", "col-sm-11", "col-md-9", "mx-auto"], [1, "pb-4", "about-image", "d-none", "d-md-flex", "col-10", "col-md-6", "col-lg-4", "mx-auto"], ["src", "assets/images/home/about-brain.png", "alt", "geometric brain with an arrow point to a speech bubble"], [4, "ngFor", "ngForOf"]],
      template: function HomeAboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeAboutComponent_h5_6_Template, 2, 1, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paragraphs);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["#home-about[_ngcontent-%COMP%] {\n  padding-top: 5vh;\n  padding-bottom: 20vh;\n  margin-top: -1px;\n  background-color: var(--text-invert);\n}\n#home-about[_ngcontent-%COMP%]   .about-info[_ngcontent-%COMP%] {\n  box-shadow: var(--box-shadow1);\n}\n#home-about[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100% !important;\n}\n@media screen and (max-width: 575px) {\n  .about-info[_ngcontent-%COMP%] {\n    box-shadow: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib290cGhvbi9EZXNrdG9wL2VjaG9sYWxpYS9lY2hvbGFsaWEub3JnL3NyYy9hcHAvaG9tZS9ob21lLWFib3V0L2hvbWUtYWJvdXQuY29tcG9uZW50LnNjc3MiLCIuLi9ob21lL2hvbWUtYWJvdXQvaG9tZS1hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FDQ0Y7QURDRTtFQUNFLDhCQUFBO0FDQ0o7QURFSTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtBQ0FOO0FET0E7RUFDRTtJQUNFLDJCQUFBO0VDSkY7QUFDRiIsImZpbGUiOiIuLi9ob21lL2hvbWUtYWJvdXQvaG9tZS1hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lLWFib3V0e1xuICBwYWRkaW5nLXRvcDo1dmg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHZoO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWludmVydCk7XG5cbiAgLmFib3V0LWluZm97XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdzEpO1xuICB9XG4gIC5hYm91dC1pbWFnZXtcbiAgICBpbWd7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpe1xuICAuYWJvdXQtaW5mb3tcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxufVxuIiwiI2hvbWUtYWJvdXQge1xuICBwYWRkaW5nLXRvcDogNXZoO1xuICBwYWRkaW5nLWJvdHRvbTogMjB2aDtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1pbnZlcnQpO1xufVxuI2hvbWUtYWJvdXQgLmFib3V0LWluZm8ge1xuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93MSk7XG59XG4jaG9tZS1hYm91dCAuYWJvdXQtaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuYWJvdXQtaW5mbyB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeAboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-about',
          templateUrl: './home-about.component.html',
          styleUrls: ['./home-about.component.scss']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-contact/home-contact.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/home/home-contact/home-contact.component.ts ***!
    \*************************************************************/

  /*! exports provided: HomeContactComponent */

  /***/
  function srcAppHomeHomeContactHomeContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeContactComponent", function () {
      return HomeContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var HomeContactComponent = /*#__PURE__*/function () {
      function HomeContactComponent() {
        _classCallCheck(this, HomeContactComponent);
      }

      _createClass(HomeContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeContactComponent;
    }();

    HomeContactComponent.ɵfac = function HomeContactComponent_Factory(t) {
      return new (t || HomeContactComponent)();
    };

    HomeContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeContactComponent,
      selectors: [["app-home-contact"]],
      decls: 17,
      vars: 7,
      consts: [["id", "home-contact", 1, "home-contact"], [1, "container-fluid"], [1, "row"], [1, "contact-plus", "pl-4", "pt-4"], ["src", "assets/images/home/contact-plus.svg", "alt", "three decorative plus signs"], [1, "row", "d-flex", "justify-content-end"], ["data-wow-delay", "0.25s", 1, "col-11", "wow", "rubberBand"], ["data-wow-delay", "3s", 1, "col-11", "wow", "tada"], [3, "routerLink"], [1, "contact-circle", "ml-5", "pb-4"], ["src", "assets/images/home/contact-circle.svg", "alt", "three decorative circles"]],
      template: function HomeContactComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 3, "HOME.CONTACT.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 5, "HOME.CONTACT.LINK"));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: ["#home-contact[_ngcontent-%COMP%] {\n  background: var(--background-home-contact-background2), var(--background-home-contact-background);\n  background-repeat: no-repeat, no-repeat;\n  background-size: 70% auto, cover;\n  background-position: center right, center center;\n  overflow: hidden;\n}\n#home-contact[_ngcontent-%COMP%]   .contact-plus[_ngcontent-%COMP%] {\n  width: 200px;\n  max-width: 40vw;\n}\n#home-contact[_ngcontent-%COMP%]   .contact-plus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#home-contact[_ngcontent-%COMP%]   .contact-circle[_ngcontent-%COMP%] {\n  width: 250px;\n  max-width: 30vw;\n}\n#home-contact[_ngcontent-%COMP%]   .contact-circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#home-contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 7em;\n  color: black;\n  -webkit-text-fill-color: white;\n  \n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: var(--text-medium);\n  text-shadow: 0px 0px 7em white;\n}\n#home-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"jaf-bernina-sans\", \"Varela Round\", Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  font-size: 4em;\n  color: var(--text-medium);\n  -webkit-text-fill-color: white;\n  \n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: var(--text-medium);\n  text-shadow: 0px 0px 4em white;\n  text-decoration: underline;\n  cursor: pointer;\n}\n#home-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  -webkit-text-fill-color: var(--color-primary);\n}\n@media screen and (max-width: 767px) {\n  #home-contact[_ngcontent-%COMP%] {\n    background-size: auto 50%, cover;\n  }\n  #home-contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 5em;\n  }\n  #home-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 3em;\n  }\n}\n@media screen and (max-width: 575px) {\n  #home-contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.75em;\n    -webkit-text-stroke-width: 1.5px;\n  }\n  #home-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1.75em;\n    -webkit-text-stroke-width: 1px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib290cGhvbi9EZXNrdG9wL2VjaG9sYWxpYS9lY2hvbGFsaWEub3JnL3NyYy9hcHAvaG9tZS9ob21lLWNvbnRhY3QvaG9tZS1jb250YWN0LmNvbXBvbmVudC5zY3NzIiwiLi4vaG9tZS9ob21lLWNvbnRhY3QvaG9tZS1jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUdBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnQkFBQTtBQ0NGO0FERUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0FKO0FEQ0k7RUFDRSxXQUFBO0FDQ047QURHRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDREo7QURFSTtFQUNFLFdBQUE7QUNBTjtBRElFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUFnQyw4Q0FBQTtFQUNoQyw4QkFBQTtFQUNBLDZDQUFBO0VBQ0EsOEJBQUE7QUNESjtBRElFO0VBQ0UsNkVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQWdDLDhDQUFBO0VBQ2hDLDhCQUFBO0VBQ0EsNkNBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ0RKO0FERUk7RUFDRSw2Q0FBQTtBQ0FOO0FES0E7RUFDRTtJQUNFLGdDQUFBO0VDRkY7RURHRTtJQUNFLGNBQUE7RUNESjtFREdFO0lBQ0UsY0FBQTtFQ0RKO0FBQ0Y7QURLQTtFQUVJO0lBQ0UsaUJBQUE7SUFDQSxnQ0FBQTtFQ0pKO0VETUU7SUFDRSxpQkFBQTtJQUNBLDhCQUFBO0VDSko7QUFDRiIsImZpbGUiOiIuLi9ob21lL2hvbWUtY29udGFjdC9ob21lLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZS1jb250YWN0e1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvbWUtY29udGFjdC1iYWNrZ3JvdW5kMiksIHZhcigtLWJhY2tncm91bmQtaG9tZS1jb250YWN0LWJhY2tncm91bmQpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0LCBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNzAlIGF1dG8sIGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQsIGNlbnRlciBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8vIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gIC5jb250YWN0LXBsdXN7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1heC13aWR0aDogNDB2dztcbiAgICBpbWd7XG4gICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5jb250YWN0LWNpcmNsZXtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWF4LXdpZHRoOiAzMHZ3O1xuICAgIGltZ3tcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgfVxuICB9XG5cbiAgaDF7XG4gICAgZm9udC1zaXplOiA3ZW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB3aGl0ZTsgLyogV2lsbCBvdmVycmlkZSBjb2xvciAocmVnYXJkbGVzcyBvZiBvcmRlcikgKi9cbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogdmFyKC0tdGV4dC1tZWRpdW0pO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDdlbSB3aGl0ZTtcbiAgfVxuXG4gIGF7XG4gICAgZm9udC1mYW1pbHk6ICdqYWYtYmVybmluYS1zYW5zJywgJ1ZhcmVsYSBSb3VuZCcsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtbWVkaXVtKTtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogd2hpdGU7IC8qIFdpbGwgb3ZlcnJpZGUgY29sb3IgKHJlZ2FyZGxlc3Mgb2Ygb3JkZXIpICovXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMnB4O1xuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHZhcigtLXRleHQtbWVkaXVtKTtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0ZW0gd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXJ7XG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICNob21lLWNvbnRhY3R7XG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDUwJSwgY292ZXI7XG4gICAgaDF7XG4gICAgICBmb250LXNpemU6IDVlbTtcbiAgICB9XG4gICAgYXtcbiAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAjaG9tZS1jb250YWN0e1xuICAgIGgxe1xuICAgICAgZm9udC1zaXplOiAyLjc1ZW07XG4gICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAxLjVweDtcbiAgICB9XG4gICAgYXtcbiAgICAgIGZvbnQtc2l6ZTogMS43NWVtO1xuICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMXB4O1xuICAgIH1cbiAgfVxufVxuXG5cbiIsIiNob21lLWNvbnRhY3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvbWUtY29udGFjdC1iYWNrZ3JvdW5kMiksIHZhcigtLWJhY2tncm91bmQtaG9tZS1jb250YWN0LWJhY2tncm91bmQpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0LCBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNzAlIGF1dG8sIGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQsIGNlbnRlciBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jaG9tZS1jb250YWN0IC5jb250YWN0LXBsdXMge1xuICB3aWR0aDogMjAwcHg7XG4gIG1heC13aWR0aDogNDB2dztcbn1cbiNob21lLWNvbnRhY3QgLmNvbnRhY3QtcGx1cyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiNob21lLWNvbnRhY3QgLmNvbnRhY3QtY2lyY2xlIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXgtd2lkdGg6IDMwdnc7XG59XG4jaG9tZS1jb250YWN0IC5jb250YWN0LWNpcmNsZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiNob21lLWNvbnRhY3QgaDEge1xuICBmb250LXNpemU6IDdlbTtcbiAgY29sb3I6IGJsYWNrO1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogd2hpdGU7XG4gIC8qIFdpbGwgb3ZlcnJpZGUgY29sb3IgKHJlZ2FyZGxlc3Mgb2Ygb3JkZXIpICovXG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDJweDtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogdmFyKC0tdGV4dC1tZWRpdW0pO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA3ZW0gd2hpdGU7XG59XG4jaG9tZS1jb250YWN0IGEge1xuICBmb250LWZhbWlseTogXCJqYWYtYmVybmluYS1zYW5zXCIsIFwiVmFyZWxhIFJvdW5kXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDRlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbWVkaXVtKTtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHdoaXRlO1xuICAvKiBXaWxsIG92ZXJyaWRlIGNvbG9yIChyZWdhcmRsZXNzIG9mIG9yZGVyKSAqL1xuICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAycHg7XG4gIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHZhcigtLXRleHQtbWVkaXVtKTtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNGVtIHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2hvbWUtY29udGFjdCBhOmhvdmVyIHtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAjaG9tZS1jb250YWN0IHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gNTAlLCBjb3ZlcjtcbiAgfVxuICAjaG9tZS1jb250YWN0IGgxIHtcbiAgICBmb250LXNpemU6IDVlbTtcbiAgfVxuICAjaG9tZS1jb250YWN0IGEge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAjaG9tZS1jb250YWN0IGgxIHtcbiAgICBmb250LXNpemU6IDIuNzVlbTtcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAxLjVweDtcbiAgfVxuICAjaG9tZS1jb250YWN0IGEge1xuICAgIGZvbnQtc2l6ZTogMS43NWVtO1xuICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDFweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-contact',
          templateUrl: './home-contact.component.html',
          styleUrls: ['./home-contact.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-distribution/home-distribution.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/home/home-distribution/home-distribution.component.ts ***!
    \***********************************************************************/

  /*! exports provided: HomeDistributionComponent */

  /***/
  function srcAppHomeHomeDistributionHomeDistributionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeDistributionComponent", function () {
      return HomeDistributionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = function _c0() {
      return {
        inquiry: "quote"
      };
    };

    var HomeDistributionComponent = /*#__PURE__*/function () {
      function HomeDistributionComponent() {
        _classCallCheck(this, HomeDistributionComponent);
      }

      _createClass(HomeDistributionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeDistributionComponent;
    }();

    HomeDistributionComponent.ɵfac = function HomeDistributionComponent_Factory(t) {
      return new (t || HomeDistributionComponent)();
    };

    HomeDistributionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeDistributionComponent,
      selectors: [["app-home-distribution"]],
      decls: 33,
      vars: 21,
      consts: [["id", "home-distribution", 1, "home-distribution"], [1, "container-fluid"], [1, "row"], [1, "col-12", "col-md-8", "mx-auto"], [1, "col-10", "col-md-12", "mx-auto", "text-center", "text-md-left"], [1, "row", "pt-5"], [1, "col-10", "col-md-2", "mx-auto", "mx-md-0", "text-center", "text-md-left"], ["src", "assets/images/home/open-source.svg", "alt", "interpretation of the open source initiative's logo", 1, "col-4", "mx-auto", "col-md-12", "mb-3", "mb-md-5"], [1, "col-10", "col-md-9", "offset-0", "offset-md-1", "mx-auto"], [1, "text-center", "text-md-left"], [1, "row", "pt-4"], ["src", "assets/images/home/ready-to-use.svg", "alt", "an open cardboard box with a lightning bolt coming out of it", 1, "col-4", "mx-auto", "col-md-12", "mb-3", "mb-md-5"], [1, "text-center"], ["mat-flat-button", "", 1, "mt-4", 3, "routerLink", "state"]],
      template: function HomeDistributionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, "HOME.DISTRIBUTION.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 10, "HOME.DISTRIBUTION.ONE.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 12, "HOME.DISTRIBUTION.ONE.INFO"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 14, "HOME.DISTRIBUTION.TWO.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 16, "HOME.DISTRIBUTION.TWO.INFO"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/contact")("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 18, "HOME.DISTRIBUTION.BUTTON"));
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      styles: ["#home-distribution[_ngcontent-%COMP%] {\n  padding-top: 10vh;\n  padding-bottom: 10vh;\n}\n#home-distribution[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--color-tertiary);\n  border-radius: 25px;\n  color: var(--text-invert);\n  padding: 5px 45px 5px 45px;\n}\n#home-distribution[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib290cGhvbi9EZXNrdG9wL2VjaG9sYWxpYS9lY2hvbGFsaWEub3JnL3NyYy9hcHAvaG9tZS9ob21lLWRpc3RyaWJ1dGlvbi9ob21lLWRpc3RyaWJ1dGlvbi5jb21wb25lbnQuc2NzcyIsIi4uL2hvbWUvaG9tZS1kaXN0cmlidXRpb24vaG9tZS1kaXN0cmlidXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxpQkFBQTtFQUNBLG9CQUFBO0FDREY7QURHRTtFQUNFLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDREo7QURJRTtFQUNFLFVBQUE7QUNGSiIsImZpbGUiOiIuLi9ob21lL2hvbWUtZGlzdHJpYnV0aW9uL2hvbWUtZGlzdHJpYnV0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWUtZGlzdHJpYnV0aW9ue1xuICAvLyBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcXVhdGVybmFyeSk7XG4gIHBhZGRpbmctdG9wOiAxMHZoO1xuICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcblxuICBidXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGVydGlhcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtaW52ZXJ0KTtcbiAgICBwYWRkaW5nOiA1cHggNDVweCA1cHggNDVweDtcbiAgfVxuXG4gIGltZ3tcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbn1cbiIsIiNob21lLWRpc3RyaWJ1dGlvbiB7XG4gIHBhZGRpbmctdG9wOiAxMHZoO1xuICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcbn1cbiNob21lLWRpc3RyaWJ1dGlvbiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWludmVydCk7XG4gIHBhZGRpbmc6IDVweCA0NXB4IDVweCA0NXB4O1xufVxuI2hvbWUtZGlzdHJpYnV0aW9uIGltZyB7XG4gIHBhZGRpbmc6IDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeDistributionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-distribution',
          templateUrl: './home-distribution.component.html',
          styleUrls: ['./home-distribution.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-hero/home-hero.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/home/home-hero/home-hero.component.ts ***!
    \*******************************************************/

  /*! exports provided: HomeHeroComponent */

  /***/
  function srcAppHomeHomeHeroHomeHeroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeHeroComponent", function () {
      return HomeHeroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function HomeHeroComponent_div_2_p_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var paragraph_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paragraph_r4.PARAGRAPH);
      }
    }

    function HomeHeroComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeHeroComponent_div_2_p_7_Template, 3, 1, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "HOME.HERO.HEADING"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.paragraphs);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/mission");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, "HOME.HERO.BUTTON"));
      }
    }

    function HomeHeroComponent_ng_template_3_Template(rf, ctx) {}

    var HomeHeroComponent = /*#__PURE__*/function () {
      function HomeHeroComponent(translate, breakpointObserver) {
        var _this33 = this;

        _classCallCheck(this, HomeHeroComponent);

        this.translate = translate;
        this.bMobile = false;
        this.bError = false;
        this.paragraphs = [{
          PARAGRAPH: 'Loading...'
        }];
        breakpointObserver.observe('(max-width: 0px)').subscribe(function (result) {
          _this33.bMobile = result.matches;
        });
      }

      _createClass(HomeHeroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this34 = this;

          this.translate.get('HOME.HERO.DESCRIPTION').subscribe(function (res) {
            if (typeof res === 'string') {
              _this34.bError = true;
              _this34.paragraphs = [{
                PARAGRAPH: 'Cannot get translation!'
              }];
            } else {
              _this34.paragraphs = res;
            }
          });
        }
      }]);

      return HomeHeroComponent;
    }();

    HomeHeroComponent.ɵfac = function HomeHeroComponent_Factory(t) {
      return new (t || HomeHeroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]));
    };

    HomeHeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeHeroComponent,
      selectors: [["app-home-hero"]],
      decls: 5,
      vars: 2,
      consts: [["id", "home-hero", 1, "home-hero"], [1, "container-fluid"], ["class", "row", 4, "ngIf", "ngIfElse"], ["mobile", ""], [1, "row"], [1, "hero-text", "col-10", "mx-auto", "col-lg-6", "d-flex", "align-items-center", "justify-content-center"], [1, "pl-md-3", "wow", "fadeInDown"], [4, "ngFor", "ngForOf"], [1, "home-buttons"], ["mat-flat-button", "", 1, "mt-4", "link-button", 3, "routerLink"], [1, "hero-computer", "wow", "fadeInRight", "col-6", "col-lg-6", "d-flex", "mx-auto", "align-items-center", "align-items-lg-end", "justify-content-center"], ["src", "assets/images/home/computer.png", "alt", "computer with a gray wire frame interpretation of the echolalia portal"]],
      template: function HomeHeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeHeroComponent_div_2_Template, 14, 8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeHeroComponent_ng_template_3_Template, 0, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.bMobile)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: ["#home-hero[_ngcontent-%COMP%] {\n  background: var(--color-primary) var(--background-home-hero-background);\n  background-repeat: no-repeat;\n  background-size: 105vw;\n  background-position: center bottom;\n  box-shadow: 0 0 0px rgba(0, 0, 0, 0) !important;\n  min-height: calc(100vh - 120px);\n  padding-top: 120px;\n}\n#home-hero[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%] {\n  padding-bottom: 150px;\n}\n#home-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-invert);\n}\n#home-hero[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 120px);\n}\n#home-hero[_ngcontent-%COMP%]   .hero-computer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -40%;\n  width: 130%;\n  bottom: 0;\n}\n#home-hero[_ngcontent-%COMP%]   .link-button[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  color: var(--color-primary);\n  padding: 5px 25px 5px 25px;\n}\n@media screen and (max-width: 991px) {\n  #home-hero[_ngcontent-%COMP%] {\n    background: var(--color-primary) var(--background-home-hero-background-mobile);\n    background-repeat: no-repeat;\n    background-position: center bottom;\n    background-size: 105vw;\n  }\n  #home-hero[_ngcontent-%COMP%]   .hero-computer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    right: 0%;\n    width: 100%;\n  }\n  #home-hero[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%] {\n    padding-bottom: 375px;\n  }\n}\n@media screen and (max-width: 767px) {\n  #home-hero[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%] {\n    padding-bottom: 250px;\n  }\n}\n@media screen and (max-width: 575px) {\n  #home-hero[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%] {\n    padding-bottom: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib290cGhvbi9EZXNrdG9wL2VjaG9sYWxpYS9lY2hvbGFsaWEub3JnL3NyYy9hcHAvaG9tZS9ob21lLWhlcm8vaG9tZS1oZXJvLmNvbXBvbmVudC5zY3NzIiwiLi4vaG9tZS9ob21lLWhlcm8vaG9tZS1oZXJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUVBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVFO0VBQ0UscUJBQUE7QUNBSjtBREdJO0VBQ0UseUJBQUE7QUNETjtBRElFO0VBQ0UsK0JBQUE7QUNGSjtBRE1JO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNKUjtBRFFFO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDTko7QURVQTtFQUNFO0lBQ0UsOEVBQUE7SUFDQSw0QkFBQTtJQUNBLGtDQUFBO0lBQ0Esc0JBQUE7RUNQRjtFRGNJO0lBQ0UsU0FBQTtJQUNBLFdBQUE7RUNaTjtFRGdCRTtJQUNFLHFCQUFBO0VDZEo7QUFDRjtBRGtCQTtFQUVJO0lBQ0UscUJBQUE7RUNqQko7QUFDRjtBRHFCQTtFQUVJO0lBQ0UscUJBQUE7RUNwQko7QUFDRiIsImZpbGUiOiIuLi9ob21lL2hvbWUtaGVyby9ob21lLWhlcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZS1oZXJve1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5KSB2YXIoLS1iYWNrZ3JvdW5kLWhvbWUtaGVyby1iYWNrZ3JvdW5kKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDV2dztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgYm94LXNoYWRvdzogMCAwIDBweCByZ2JhKDAsMCwwLDApICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XG4gIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgLy8gYWRkIGEgbWludXMgMXB4IG1hcmdpbiBhbmQgYmFja2dyb3VuZCBjb2xvciBpbiB0aGUgZGl2IGJlbG93IHRoaXMgdG8gcmVtb3ZlIGV4dHJhIGJvdHRvbSBwaXhlbFxuXG4gIC5oZXJvLXRleHR7XG4gICAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xuICB9XG4gIHB7XG4gICAgc3BhbntcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWludmVydCk7XG4gICAgfVxuICB9XG4gIC5yb3cge1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XG4gIH1cblxuICAuaGVyby1jb21wdXRlcntcbiAgICBpbWd7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6LTQwJTtcbiAgICAgICAgd2lkdGg6IDEzMCU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgIH1cbiAgfVxuXG4gIC5saW5rLWJ1dHRvbntcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICBwYWRkaW5nOiA1cHggMjVweCA1cHggMjVweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCl7XG4gICNob21lLWhlcm97XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSkgdmFyKC0tYmFja2dyb3VuZC1ob21lLWhlcm8tYmFja2dyb3VuZC1tb2JpbGUpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwNXZ3O1xuXG4gICAgLy8gLnJvdyB7XG4gICAgLy8gICBtaW4taGVpZ2h0OiA1MHZoO1xuICAgIC8vIH1cblxuICAgIC5oZXJvLWNvbXB1dGVye1xuICAgICAgaW1ne1xuICAgICAgICByaWdodDowJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIH1cbiAgICB9XG4gICAgLmhlcm8tdGV4dHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzNzVweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xuICAjaG9tZS1oZXJve1xuICAgIC5oZXJvLXRleHR7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjUwcHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcbiAgI2hvbWUtaGVyb3tcbiAgICAuaGVyby10ZXh0e1xuICAgICAgcGFkZGluZy1ib3R0b206MjAwcHg7XG4gICAgfVxuICB9XG59XG4iLCIjaG9tZS1oZXJvIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSkgdmFyKC0tYmFja2dyb3VuZC1ob21lLWhlcm8tYmFja2dyb3VuZCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTA1dnc7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gIGJveC1zaGFkb3c6IDAgMCAwcHggcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpO1xuICBwYWRkaW5nLXRvcDogMTIwcHg7XG59XG4jaG9tZS1oZXJvIC5oZXJvLXRleHQge1xuICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XG59XG4jaG9tZS1oZXJvIHAgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWludmVydCk7XG59XG4jaG9tZS1oZXJvIC5yb3cge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpO1xufVxuI2hvbWUtaGVybyAuaGVyby1jb21wdXRlciBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNDAlO1xuICB3aWR0aDogMTMwJTtcbiAgYm90dG9tOiAwO1xufVxuI2hvbWUtaGVybyAubGluay1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDVweCAyNXB4IDVweCAyNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAjaG9tZS1oZXJvIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5KSB2YXIoLS1iYWNrZ3JvdW5kLWhvbWUtaGVyby1iYWNrZ3JvdW5kLW1vYmlsZSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTA1dnc7XG4gIH1cbiAgI2hvbWUtaGVybyAuaGVyby1jb21wdXRlciBpbWcge1xuICAgIHJpZ2h0OiAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjaG9tZS1oZXJvIC5oZXJvLXRleHQge1xuICAgIHBhZGRpbmctYm90dG9tOiAzNzVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgI2hvbWUtaGVybyAuaGVyby10ZXh0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICNob21lLWhlcm8gLmhlcm8tdGV4dCB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeHeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-hero',
          templateUrl: './home-hero.component.html',
          styleUrls: ['./home-hero.component.scss']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-products/home-products.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/home/home-products/home-products.component.ts ***!
    \***************************************************************/

  /*! exports provided: HomeProductsComponent */

  /***/
  function srcAppHomeHomeProductsHomeProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeProductsComponent", function () {
      return HomeProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function HomeProductsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, "HOME.PRODUCTS.LOGGER.TITLE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, "HOME.PRODUCTS.LOGGER.INFO"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/logger");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 12, "HOME.PRODUCTS.LOGGER.BUTTON"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 14, "HOME.PRODUCTS.PORTAL.TITLE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 16, "HOME.PRODUCTS.PORTAL.INFO"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/portal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 18, "HOME.PRODUCTS.LOGGER.BUTTON"));
      }
    }

    function HomeProductsComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "HOME.PRODUCTS.LOGGER.TITLE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, "HOME.PRODUCTS.LOGGER.INFO"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/logger");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, "HOME.PRODUCTS.LOGGER.BUTTON"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 14, "HOME.PRODUCTS.PORTAL.TITLE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 16, "HOME.PRODUCTS.PORTAL.INFO"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/portal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 18, "HOME.PRODUCTS.LOGGER.BUTTON"));
      }
    }

    var HomeProductsComponent = /*#__PURE__*/function () {
      function HomeProductsComponent(breakpointObserver) {
        var _this35 = this;

        _classCallCheck(this, HomeProductsComponent);

        this.bMobile = false;
        breakpointObserver.observe('(max-width: 768px)').subscribe(function (result) {
          _this35.bMobile = result.matches;
        });
      }

      _createClass(HomeProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeProductsComponent;
    }();

    HomeProductsComponent.ɵfac = function HomeProductsComponent_Factory(t) {
      return new (t || HomeProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]));
    };

    HomeProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeProductsComponent,
      selectors: [["app-home-products"]],
      decls: 4,
      vars: 2,
      consts: [["id", "home-products", 1, "home-products"], ["class", "container-fluid", 4, "ngIf", "ngIfElse"], ["mobile", ""], [1, "container-fluid"], [1, "row", "products-row", "d-flex", "align-items-center"], [1, "home-product-container", "col-12", "d-flex", "justify-content-center"], ["data-wow-duration", "0.5s", 1, "home-product", "wow", "bounceIn", "col-4", "mr-5", "p-4", "d-flex"], [1, "product-drawing", "mx-auto", "p-4"], ["src", "assets/images/home/logger.svg", "alt", "line drawing of the logger device"], [1, "text-center"], [1, "product-button", "text-center"], ["mat-flat-button", "", "href", "#", 1, "mt-4", 3, "routerLink"], ["data-wow-duration", "0.5s", "data-wow-delay", "0.5s", 1, "home-product", "wow", "bounceIn", "col-4", "ml-5", "p-4", "d-flex"], ["src", "assets/images/home/portal.svg", "alt", "line drawing of a webpage"], [1, "row", "d-flex", "align-items-center"], [1, "home-product-container"], [1, "home-product-mobile", "wow", "zoomIn", "col-8", "my-5", "p-4", "mx-auto"], [1, "home-product-mobile", "wow", "zoomIn", "col-8", "my-5", "mx-auto", "p-4"]],
      template: function HomeProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeProductsComponent_div_1_Template, 29, 20, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeProductsComponent_ng_template_2_Template, 28, 20, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.bMobile)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
      styles: ["#home-products[_ngcontent-%COMP%] {\n  background-color: var(--color-quaternary);\n  min-height: 100vh;\n  margin-top: -1px;\n}\n#home-products[_ngcontent-%COMP%]   .products-row[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n#home-products[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n#home-products[_ngcontent-%COMP%]   .home-product[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: var(--box-shadow1);\n  max-width: 350px;\n  flex-flow: column nowrap;\n}\n#home-products[_ngcontent-%COMP%]   .home-product[_ngcontent-%COMP%]   .product-drawing[_ngcontent-%COMP%] {\n  width: 60%;\n}\n#home-products[_ngcontent-%COMP%]   .home-product[_ngcontent-%COMP%]   .product-drawing[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  -webkit-filter: var(--filter-primary);\n          filter: var(--filter-primary);\n}\n#home-products[_ngcontent-%COMP%]   .home-product[_ngcontent-%COMP%]   .product-button[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n#home-products[_ngcontent-%COMP%]   .home-product[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--color-tertiary);\n  border-radius: 25px;\n  color: var(--text-invert);\n  padding: 5px 25px 5px 25px;\n}\n#home-products[_ngcontent-%COMP%]   .home-product-mobile[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: var(--box-shadow1);\n}\n#home-products[_ngcontent-%COMP%]   .home-product-mobile[_ngcontent-%COMP%]   .product-drawing[_ngcontent-%COMP%] {\n  width: 50%;\n}\n#home-products[_ngcontent-%COMP%]   .home-product-mobile[_ngcontent-%COMP%]   .product-drawing[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  -webkit-filter: var(--filter-primary);\n          filter: var(--filter-primary);\n}\n#home-products[_ngcontent-%COMP%]   .home-product-mobile[_ngcontent-%COMP%]   .product-button[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n#home-products[_ngcontent-%COMP%]   .home-product-mobile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--color-tertiary);\n  border-radius: 25px;\n  color: var(--text-invert);\n  padding: 5px 25px 5px 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib290cGhvbi9EZXNrdG9wL2VjaG9sYWxpYS9lY2hvbGFsaWEub3JnL3NyYy9hcHAvaG9tZS9ob21lLXByb2R1Y3RzL2hvbWUtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCIuLi9ob21lL2hvbWUtcHJvZHVjdHMvaG9tZS1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQ0U7RUFDRSxpQkFBQTtBQ0NKO0FERUU7RUFDRSxpQkFBQTtBQ0FKO0FESUU7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQ0ZKO0FESUk7RUFDRSxVQUFBO0FDRk47QURHTTtFQUNFLFdBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FDRFI7QURLSTtFQUNFLGdCQUFBO0FDSE47QURNSTtFQUNFLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDSk47QURRRTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7QUNOSjtBRFVJO0VBQ0UsVUFBQTtBQ1JOO0FEU007RUFDRSxXQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBQ1BSO0FEV0k7RUFDRSxnQkFBQTtBQ1ROO0FEWUk7RUFDRSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ1ZOIiwiZmlsZSI6Ii4uL2hvbWUvaG9tZS1wcm9kdWN0cy9ob21lLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWUtcHJvZHVjdHN7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXF1YXRlcm5hcnkpO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLXRvcDogLTFweDtcblxuICAucHJvZHVjdHMtcm93IHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxuXG4gIC5jb250YWluZXItZmx1aWR7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cblxuXG4gIC5ob21lLXByb2R1Y3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdzEpO1xuICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuXG4gICAgLnByb2R1Y3QtZHJhd2luZ3tcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmaWx0ZXI6IHZhcigtLWZpbHRlci1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvZHVjdC1idXR0b257XG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIH1cblxuICAgIGJ1dHRvbntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1pbnZlcnQpO1xuICAgICAgcGFkZGluZzogNXB4IDI1cHggNXB4IDI1cHg7XG4gICAgfVxuICB9XG5cbiAgLmhvbWUtcHJvZHVjdC1tb2JpbGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdzEpO1xuICAgIC8vIG1heC13aWR0aDogMzUwcHg7XG4gICAgLy8gZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuXG4gICAgLnByb2R1Y3QtZHJhd2luZ3tcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmaWx0ZXI6IHZhcigtLWZpbHRlci1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvZHVjdC1idXR0b257XG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIH1cblxuICAgIGJ1dHRvbntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1pbnZlcnQpO1xuICAgICAgcGFkZGluZzogNXB4IDI1cHggNXB4IDI1cHg7XG4gICAgfVxuICB9XG5cbn1cbiIsIiNob21lLXByb2R1Y3RzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcXVhdGVybmFyeSk7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xufVxuI2hvbWUtcHJvZHVjdHMgLnByb2R1Y3RzLXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuI2hvbWUtcHJvZHVjdHMgLmNvbnRhaW5lci1mbHVpZCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuI2hvbWUtcHJvZHVjdHMgLmhvbWUtcHJvZHVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93MSk7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cbiNob21lLXByb2R1Y3RzIC5ob21lLXByb2R1Y3QgLnByb2R1Y3QtZHJhd2luZyB7XG4gIHdpZHRoOiA2MCU7XG59XG4jaG9tZS1wcm9kdWN0cyAuaG9tZS1wcm9kdWN0IC5wcm9kdWN0LWRyYXdpbmcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZpbHRlcjogdmFyKC0tZmlsdGVyLXByaW1hcnkpO1xufVxuI2hvbWUtcHJvZHVjdHMgLmhvbWUtcHJvZHVjdCAucHJvZHVjdC1idXR0b24ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuI2hvbWUtcHJvZHVjdHMgLmhvbWUtcHJvZHVjdCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWludmVydCk7XG4gIHBhZGRpbmc6IDVweCAyNXB4IDVweCAyNXB4O1xufVxuI2hvbWUtcHJvZHVjdHMgLmhvbWUtcHJvZHVjdC1tb2JpbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdzEpO1xufVxuI2hvbWUtcHJvZHVjdHMgLmhvbWUtcHJvZHVjdC1tb2JpbGUgLnByb2R1Y3QtZHJhd2luZyB7XG4gIHdpZHRoOiA1MCU7XG59XG4jaG9tZS1wcm9kdWN0cyAuaG9tZS1wcm9kdWN0LW1vYmlsZSAucHJvZHVjdC1kcmF3aW5nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmaWx0ZXI6IHZhcigtLWZpbHRlci1wcmltYXJ5KTtcbn1cbiNob21lLXByb2R1Y3RzIC5ob21lLXByb2R1Y3QtbW9iaWxlIC5wcm9kdWN0LWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG4jaG9tZS1wcm9kdWN0cyAuaG9tZS1wcm9kdWN0LW1vYmlsZSBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWludmVydCk7XG4gIHBhZGRpbmc6IDVweCAyNXB4IDVweCAyNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-products',
          templateUrl: './home-products.component.html',
          styleUrls: ['./home-products.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-supporters/home-supporters.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/home/home-supporters/home-supporters.component.ts ***!
    \*******************************************************************/

  /*! exports provided: HomeSupportersComponent */

  /***/
  function srcAppHomeHomeSupportersHomeSupportersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeSupportersComponent", function () {
      return HomeSupportersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeSupportersComponent_ng_container_3_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var supporter_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", supporter_r1.SRC, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", supporter_r1.ALT);
      }
    }

    function HomeSupportersComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeSupportersComponent_ng_container_3_ng_template_1_Template, 3, 2, "ng-template", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var HomeSupportersComponent = /*#__PURE__*/function () {
      function HomeSupportersComponent(translate) {
        _classCallCheck(this, HomeSupportersComponent);

        this.translate = translate;
        this.bError = false;
        this.supporters = [{
          ALT: '',
          SRC: ''
        }]; // supporter Carousel Options

        this.supporterCarousel = {
          loop: true,
          autoplay: true,
          items: 6,
          center: true,
          autoWidth: true,
          dotsEach: true,
          // autoplayTimeout:5000,
          smartSpeed: 1000,
          autoplayHoverPause: true,
          nav: false,
          responsive: {
            0: {
              margin: 40
            },
            576: {
              margin: 100
            }
          } // navClass: ['owl-prev', 'owl-next'],
          //   navText: ['<img src="assets/images/back.png">', '<img src="assets/images/next.png">'],

        };
      }

      _createClass(HomeSupportersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          this.translate.get('HOME.SUPPORTER.SUPPORTERS').subscribe(function (res) {
            if (typeof res === 'string') {
              _this36.bError = true;
              _this36.supporters = [{
                ALT: '',
                SRC: ''
              }];
            } else {
              _this36.supporters = res;
            }
          });
        }
      }]);

      return HomeSupportersComponent;
    }();

    HomeSupportersComponent.ɵfac = function HomeSupportersComponent_Factory(t) {
      return new (t || HomeSupportersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
    };

    HomeSupportersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeSupportersComponent,
      selectors: [["app-home-supporters"]],
      decls: 4,
      vars: 2,
      consts: [["id", "home-supporters", 1, "home-supporters"], [1, "container-fluid", "px-0"], [3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "supporter-item"], [1, "supporter-logo"], [1, "mx-auto", 3, "src", "alt"]],
      template: function HomeSupportersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "owl-carousel-o", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeSupportersComponent_ng_container_3_Template, 2, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.supporterCarousel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.supporters);
        }
      },
      directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselSlideDirective"]],
      styles: ["#home-supporters[_ngcontent-%COMP%] {\n  padding-top: 5vh;\n  padding-bottom: 5vh;\n}\n#home-supporters[_ngcontent-%COMP%]   .supporter-logo[_ngcontent-%COMP%] {\n  width: 10vw;\n}\n#home-supporters[_ngcontent-%COMP%]   .supporter-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n  .owl-theme .owl-dots .owl-dot {\n  margin-top: 2vw !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib290cGhvbi9EZXNrdG9wL2VjaG9sYWxpYS9lY2hvbGFsaWEub3JnL3NyYy9hcHAvaG9tZS9ob21lLXN1cHBvcnRlcnMvaG9tZS1zdXBwb3J0ZXJzLmNvbXBvbmVudC5zY3NzIiwiLi4vaG9tZS9ob21lLXN1cHBvcnRlcnMvaG9tZS1zdXBwb3J0ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0FDQ0o7QURBSTtFQUNFLFdBQUE7QUNFTjtBRElFO0VBQ0UsMEJBQUE7QUNESiIsImZpbGUiOiIuLi9ob21lL2hvbWUtc3VwcG9ydGVycy9ob21lLXN1cHBvcnRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZS1zdXBwb3J0ZXJze1xuICBwYWRkaW5nLXRvcDogNXZoO1xuICBwYWRkaW5nLWJvdHRvbTogNXZoO1xuXG4gIC5zdXBwb3J0ZXItbG9nb3tcbiAgICB3aWR0aDogMTB2dztcbiAgICBpbWd7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwe1xuICAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdCB7XG4gICAgbWFyZ2luLXRvcCA6IDJ2dyAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4vLyAgICNob21lLXN1cHBvcnRlcnN7XG4vLyAgICAgcGFkZGluZy1ib3R0b206IDV2aDtcbi8vICAgfVxuLy8gfVxuIiwiI2hvbWUtc3VwcG9ydGVycyB7XG4gIHBhZGRpbmctdG9wOiA1dmg7XG4gIHBhZGRpbmctYm90dG9tOiA1dmg7XG59XG4jaG9tZS1zdXBwb3J0ZXJzIC5zdXBwb3J0ZXItbG9nbyB7XG4gIHdpZHRoOiAxMHZ3O1xufVxuI2hvbWUtc3VwcG9ydGVycyAuc3VwcG9ydGVyLWxvZ28gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdCB7XG4gIG1hcmdpbi10b3A6IDJ2dyAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeSupportersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-supporters',
          templateUrl: './home-supporters.component.html',
          styleUrls: ['./home-supporters.component.scss']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_wow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-wow */
    "./node_modules/ngx-wow/__ivy_ngcc__/esm2015/ngx-wow.js");
    /* harmony import */


    var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _home_hero_home_hero_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-hero/home-hero.component */
    "./src/app/home/home-hero/home-hero.component.ts");
    /* harmony import */


    var _home_products_home_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-products/home-products.component */
    "./src/app/home/home-products/home-products.component.ts");
    /* harmony import */


    var _home_distribution_home_distribution_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home-distribution/home-distribution.component */
    "./src/app/home/home-distribution/home-distribution.component.ts");
    /* harmony import */


    var _home_contact_home_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home-contact/home-contact.component */
    "./src/app/home/home-contact/home-contact.component.ts");
    /* harmony import */


    var _home_supporters_home_supporters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home-supporters/home-supporters.component */
    "./src/app/home/home-supporters/home-supporters.component.ts");
    /* harmony import */


    var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared/components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router, wowService) {
        var _this37 = this;

        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.wowService = wowService;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
        })).subscribe(function (event) {
          // Reload WoW animations when done navigating to page,
          // but you are free to call it whenever/wherever you like
          _this37.wowService.init();
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_3__["NgwWowService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 7,
      vars: 0,
      consts: [[1, "header-invert"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home-hero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home-products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-home-distribution");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-home-contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-home-supporters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        }
      },
      directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _home_hero_home_hero_component__WEBPACK_IMPORTED_MODULE_5__["HomeHeroComponent"], _home_products_home_products_component__WEBPACK_IMPORTED_MODULE_6__["HomeProductsComponent"], _home_distribution_home_distribution_component__WEBPACK_IMPORTED_MODULE_7__["HomeDistributionComponent"], _home_contact_home_contact_component__WEBPACK_IMPORTED_MODULE_8__["HomeContactComponent"], _home_supporters_home_supporters_component__WEBPACK_IMPORTED_MODULE_9__["HomeSupportersComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: ngx_wow__WEBPACK_IMPORTED_MODULE_3__["NgwWowService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-page-scroll */
    "./node_modules/ngx-page-scroll/__ivy_ngcc__/fesm2015/ngx-page-scroll.js");
    /* harmony import */


    var ngx_wow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-wow */
    "./node_modules/ngx-wow/__ivy_ngcc__/esm2015/ngx-wow.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _home_hero_home_hero_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home-hero/home-hero.component */
    "./src/app/home/home-hero/home-hero.component.ts");
    /* harmony import */


    var _home_about_home_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home-about/home-about.component */
    "./src/app/home/home-about/home-about.component.ts");
    /* harmony import */


    var _home_products_home_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home-products/home-products.component */
    "./src/app/home/home-products/home-products.component.ts");
    /* harmony import */


    var _home_distribution_home_distribution_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home-distribution/home-distribution.component */
    "./src/app/home/home-distribution/home-distribution.component.ts");
    /* harmony import */


    var _home_contact_home_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home-contact/home-contact.component */
    "./src/app/home/home-contact/home-contact.component.ts");
    /* harmony import */


    var _home_supporters_home_supporters_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./home-supporters/home-supporters.component */
    "./src/app/home/home-supporters/home-supporters.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // 3rd party
    // Local Components
    // Routes


    var routes = [{
      path: '',
      component: _home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
    }];

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], // 3rd party
      ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], ngx_page_scroll__WEBPACK_IMPORTED_MODULE_5__["NgxPageScrollModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], ngx_wow__WEBPACK_IMPORTED_MODULE_6__["NgwWowModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _home_hero_home_hero_component__WEBPACK_IMPORTED_MODULE_9__["HomeHeroComponent"], _home_about_home_about_component__WEBPACK_IMPORTED_MODULE_10__["HomeAboutComponent"], _home_products_home_products_component__WEBPACK_IMPORTED_MODULE_11__["HomeProductsComponent"], _home_distribution_home_distribution_component__WEBPACK_IMPORTED_MODULE_12__["HomeDistributionComponent"], _home_contact_home_contact_component__WEBPACK_IMPORTED_MODULE_13__["HomeContactComponent"], _home_supporters_home_supporters_component__WEBPACK_IMPORTED_MODULE_14__["HomeSupportersComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], // 3rd party
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], ngx_page_scroll__WEBPACK_IMPORTED_MODULE_5__["NgxPageScrollModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], ngx_wow__WEBPACK_IMPORTED_MODULE_6__["NgwWowModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], // 3rd party
          ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], ngx_page_scroll__WEBPACK_IMPORTED_MODULE_5__["NgxPageScrollModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], ngx_wow__WEBPACK_IMPORTED_MODULE_6__["NgwWowModule"]],
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _home_hero_home_hero_component__WEBPACK_IMPORTED_MODULE_9__["HomeHeroComponent"], _home_about_home_about_component__WEBPACK_IMPORTED_MODULE_10__["HomeAboutComponent"], _home_products_home_products_component__WEBPACK_IMPORTED_MODULE_11__["HomeProductsComponent"], _home_distribution_home_distribution_component__WEBPACK_IMPORTED_MODULE_12__["HomeDistributionComponent"], _home_contact_home_contact_component__WEBPACK_IMPORTED_MODULE_13__["HomeContactComponent"], _home_supporters_home_supporters_component__WEBPACK_IMPORTED_MODULE_14__["HomeSupportersComponent"]],
          providers: [],
          entryComponents: []
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map