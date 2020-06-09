function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var r,n=_getPrototypeOf(t);if(e){var o=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0MNC":function(t,e,r){"use strict";r.d(e,"a",(function(){return C}));var n,o=r("fXoL"),c=r("nLfN"),a=r("XNiG"),i=r("itXk"),s=r("GyhO"),u=r("HDdC"),l=r("IzEk"),f=r("zP0r"),b=r("Kj3r"),g=r("lJxs"),d=r("JX91"),h=r("1G5W"),p=r("8LU1"),O=new Set,m=function(){var t=function(){function t(e){_classCallCheck(this,t),this._platform=e,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):v}return _createClass(t,[{key:"matchMedia",value:function(t){return this._platform.WEBKIT&&function(t){if(!O.has(t))try{n||((n=document.createElement("style")).setAttribute("type","text/css"),document.head.appendChild(n)),n.sheet&&(n.sheet.insertRule("@media ".concat(t," {.fx-query-test{ }}"),0),O.add(t))}catch(e){console.error(e)}}(t),this._matchMedia(t)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Xb(c.a))},t.\u0275prov=Object(o.Kb)({factory:function(){return new t(Object(o.Xb)(c.a))},token:t,providedIn:"root"}),t}();function v(t){return{matches:"all"===t||""===t,media:t,addListener:function(){},removeListener:function(){}}}var C=function(){var t=function(){function t(e,r){_classCallCheck(this,t),this._mediaMatcher=e,this._zone=r,this._queries=new Map,this._destroySubject=new a.a}return _createClass(t,[{key:"ngOnDestroy",value:function(){this._destroySubject.next(),this._destroySubject.complete()}},{key:"isMatched",value:function(t){var e=this;return T(Object(p.a)(t)).some((function(t){return e._registerQuery(t).mql.matches}))}},{key:"observe",value:function(t){var e=this,r=T(Object(p.a)(t)).map((function(t){return e._registerQuery(t).observable})),n=Object(i.a)(r);return(n=Object(s.a)(n.pipe(Object(l.a)(1)),n.pipe(Object(f.a)(1),Object(b.a)(0)))).pipe(Object(g.a)((function(t){var e={matches:!1,breakpoints:{}};return t.forEach((function(t){e.matches=e.matches||t.matches,e.breakpoints[t.query]=t.matches})),e})))}},{key:"_registerQuery",value:function(t){var e=this;if(this._queries.has(t))return this._queries.get(t);var r=this._mediaMatcher.matchMedia(t),n={observable:new u.a((function(t){var n=function(r){return e._zone.run((function(){return t.next(r)}))};return r.addListener(n),function(){r.removeListener(n)}})).pipe(Object(d.a)(r),Object(g.a)((function(e){return{query:t,matches:e.matches}})),Object(h.a)(this._destroySubject)),mql:r};return this._queries.set(t,n),n}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Xb(m),o.Xb(o.z))},t.\u0275prov=Object(o.Kb)({factory:function(){return new t(Object(o.Xb)(m),Object(o.Xb)(o.z))},token:t,providedIn:"root"}),t}();function T(t){return t.map((function(t){return t.split(",")})).reduce((function(t,e){return t.concat(e)})).map((function(t){return t.trim()}))}},aF9I:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r("fXoL"),o=r("0MNC"),c=r("sYmb"),a=r("ofXK"),i=r("tyNb");function s(t,e){if(1&t&&(n.Tb(0,"li"),n.Tb(1,"a",22),n.Ec(2),n.Sb(),n.Sb()),2&t){var r=e.$implicit;n.Cb(1),n.jc("routerLink",r.HREF),n.Cb(1),n.Fc(r.NAME)}}function u(t,e){if(1&t&&(n.Tb(0,"div",9),n.Tb(1,"div",10),n.Tb(2,"h6"),n.Ec(3),n.Sb(),n.Tb(4,"ul"),n.Cc(5,s,3,2,"li",21),n.Sb(),n.Sb(),n.Sb()),2&t){var r=e.$implicit;n.Cb(3),n.Fc(r.TITLE),n.Cb(2),n.jc("ngForOf",r.LINKS)}}var l=function(){return{inquiry:"demo"}},f=function(){return{inquiry:"quote"}};function b(t,e){if(1&t&&(n.Tb(0,"div",3),n.Tb(1,"div",4),n.Tb(2,"div",5),n.Pb(3,"img",6),n.ec(4,"translate"),n.ec(5,"translate"),n.Sb(),n.Tb(6,"div",7),n.Cc(7,u,6,2,"div",8),n.Tb(8,"div",9),n.Tb(9,"div",10),n.Tb(10,"h6"),n.Ec(11),n.ec(12,"translate"),n.Sb(),n.Tb(13,"ul"),n.Tb(14,"li"),n.Tb(15,"a",11),n.Ec(16),n.ec(17,"translate"),n.Sb(),n.Sb(),n.Tb(18,"li"),n.Tb(19,"a",12),n.Ec(20),n.ec(21,"translate"),n.Sb(),n.Sb(),n.Tb(22,"li"),n.Tb(23,"a",12),n.Ec(24),n.ec(25,"translate"),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Tb(26,"div",13),n.Tb(27,"div",14),n.Pb(28,"div",15),n.Tb(29,"div",16),n.Tb(30,"div",17),n.Ec(31),n.ec(32,"translate"),n.ec(33,"date"),n.ec(34,"translate"),n.Pb(35,"br"),n.Ec(36),n.ec(37,"translate"),n.Sb(),n.Tb(38,"div",18),n.Tb(39,"div",19),n.Tb(40,"a",11),n.Tb(41,"span"),n.Ec(42),n.ec(43,"translate"),n.Sb(),n.Sb(),n.Tb(44,"a",20),n.Tb(45,"span"),n.Ec(46),n.ec(47,"translate"),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb()),2&t){var r=n.dc();n.Cb(3),n.kc("src",n.fc(4,20,"SHARED.FOOTER.CONTACT.IMG.SRC"),n.xc),n.kc("alt",n.fc(5,22,"SHARED.FOOTER.CONTACT.IMG.ALT")),n.Cb(4),n.jc("ngForOf",r.footerColumns),n.Cb(4),n.Fc(n.fc(12,24,"SHARED.FOOTER.CONTACTUS.TITLE")),n.Cb(4),n.jc("routerLink","/contact"),n.Cb(1),n.Fc(n.fc(17,26,"SHARED.FOOTER.CONTACTUS.MESSAGE")),n.Cb(3),n.jc("routerLink","/contact")("state",n.mc(45,l)),n.Cb(1),n.Fc(n.fc(21,28,"SHARED.FOOTER.CONTACTUS.DEMO")),n.Cb(3),n.jc("routerLink","/contact")("state",n.mc(46,f)),n.Cb(1),n.Fc(n.fc(25,30,"SHARED.FOOTER.CONTACTUS.QUOTE")),n.Cb(7),n.Hc(" ",n.fc(32,32,"SHARED.FOOTER.FOOTNOTE.COPYRIGHT")," ",n.gc(33,34,r.curDate,"yyyy")," ",n.fc(34,37,"SHARED.FOOTER.FOOTNOTE.OWNER"),""),n.Cb(5),n.Gc("",n.fc(37,39,"SHARED.FOOTER.FOOTNOTE.MESSAGE")," "),n.Cb(4),n.jc("routerLink","/pages/terms"),n.Cb(2),n.Fc(n.fc(43,41,"SHARED.FOOTER.LEGAL-ROW.TERMS")),n.Cb(2),n.jc("routerLink","/pages/privacy-policy"),n.Cb(2),n.Fc(n.fc(47,43,"SHARED.FOOTER.LEGAL-ROW.PRIVACY"))}}function g(t,e){1&t&&(n.Tb(0,"div",23),n.Tb(1,"div",24),n.Pb(2,"img",6),n.ec(3,"translate"),n.ec(4,"translate"),n.Sb(),n.Pb(5,"div",25),n.Tb(6,"div",19),n.Tb(7,"a",11),n.Tb(8,"span"),n.Ec(9),n.ec(10,"translate"),n.Sb(),n.Sb(),n.Tb(11,"a",26),n.Tb(12,"span"),n.Ec(13),n.ec(14,"translate"),n.Sb(),n.Sb(),n.Tb(15,"a",11),n.Tb(16,"span"),n.Ec(17),n.ec(18,"translate"),n.Sb(),n.Sb(),n.Sb(),n.Sb()),2&t&&(n.Cb(2),n.kc("src",n.fc(3,8,"SHARED.FOOTER.CONTACT.IMG.SRC"),n.xc),n.kc("alt",n.fc(4,10,"SHARED.FOOTER.CONTACT.IMG.ALT")),n.Cb(5),n.jc("routerLink","/pages/terms"),n.Cb(2),n.Fc(n.fc(10,12,"SHARED.FOOTER.LEGAL-ROW.TERMS")),n.Cb(2),n.jc("routerLink","/pages/privacy-policy"),n.Cb(2),n.Fc(n.fc(14,14,"SHARED.FOOTER.LEGAL-ROW.PRIVACY")),n.Cb(2),n.jc("routerLink","/contact"),n.Cb(2),n.Fc(n.fc(18,16,"SHARED.FOOTER.LEGAL-ROW.CONTACT")))}var d=function(){var t=function(){function t(e,r){var n=this;_classCallCheck(this,t),this.translate=r,this.bMobile=!1,this.bError=!1,this.footerColumns=[],this.curDate=new Date,e.observe("(max-width: 720px)").subscribe((function(t){n.bMobile=t.matches}))}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.translate.get("SHARED.FOOTER.COLUMNS").subscribe((function(e){"string"==typeof e?t.bError=!0:t.footerColumns=e}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(n.Ob(o.a),n.Ob(c.e))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-footer"]],decls:4,vars:2,consts:[["id","footer",1,"footer"],["class","container-fluid footer",4,"ngIf","ngIfElse"],["mobile",""],[1,"container-fluid","footer"],[1,"row","w-100","py-5"],[1,"footer-image","col-2","text-center"],[3,"src","alt"],[1,"col-8","d-flex","mx-auto"],["class","col-4 col-lg-3 d-flex justify-content-between",4,"ngFor","ngForOf"],[1,"col-4","col-lg-3","d-flex","justify-content-between"],[1,"mx-auto"],[3,"routerLink"],[3,"routerLink","state"],[1,"row"],[1,"col-10","mx-auto"],[1,"divider"],[1,"row","d-flex","align-items-center","py-3"],[1,"col-4","d-flex","align-items-center","h-100"],[1,"col-4","d-flex","align-items-center","justify-content-center","h-100"],[1,"legal-row"],[1,"pl-4",3,"routerLink"],[4,"ngFor","ngForOf"],["state","{ inquiry: 'link.NAME'}",3,"routerLink"],[1,"jumbotron","d-flex","flex-column","align-items-center","footer"],[1,"footer-image"],[1,"divider-mobile","mt-4"],[1,"px-4",3,"routerLink"]],template:function(t,e){if(1&t&&(n.Tb(0,"section",0),n.Cc(1,b,48,47,"div",1),n.Cc(2,g,19,18,"ng-template",null,2,n.Dc),n.Sb()),2&t){var r=n.sc(3);n.Cb(1),n.jc("ngIf",!e.bMobile)("ngIfElse",r)}},directives:[a.k,a.j,i.h],pipes:[c.d,a.d],styles:[".default[_ngcontent-%COMP%]{--color-title:#34343c;--color-text:#777;--color-text-invert:#fff;--color-background:#fff;--color-primary:#d9eef3;--color-primary-variant:var(--color-secondary);--color-accent:#ffa89c;--color-accent-variant:#396ac5;--color-gray:#f4f4f4;--color-warn:red;--color-primary:#2086ab;--filter-primary:brightness(0) saturate(100%) invert(40%) sepia(85%) saturate(451%) hue-rotate(150deg) brightness(95%) contrast(88%);--color-secondary:#8fa1cc;--filter-secondary:brightness(0) saturate(100%) invert(67%) sepia(73%) saturate(177%) hue-rotate(186deg) brightness(82%) contrast(94%);--color-tertiary:#0b4e9c;--filter-tertiary:brightness(0) saturate(100%) invert(19%) sepia(62%) saturate(3058%) hue-rotate(202deg) brightness(89%) contrast(91%);--color-quaternary:#f7f9fe;--color-quinary:#3b374c;--color-senary:#fafcff;--color-accent:var(--color-tertiary);--text-dark:#122443;--text-medium:#333740;--text-light:var(--color-secondary);--text-very-light:#ced3e0;--filter-very-light:brightness(0) saturate(100%) invert(89%) sepia(12%) saturate(210%) hue-rotate(186deg) brightness(98%) contrast(82%);--text-invert:#fff;--filter-invert:brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(2%) hue-rotate(326deg) brightness(114%) contrast(100%);--background-home-hero-background:url(/assets/images/home/cloud-background-large.svg);--background-home-hero-background-mobile:url(/assets/images/home/cloud-background.svg);--background-home-hero-image:url(/assets/images/home/computer.png);--background-home-contact-background:url(/assets/images/home/contact-bkg.svg);--background-home-contact-background2:url(/assets/images/home/contact-bkg2.svg);--background-logger-portal:url(/assets/images/shared/logger-portal-bkg.svg);--team-background-dark:url(/assets/images/team/dark-team-bkg.svg);--team-background-dark-mobile:url(/assets/images/team/dark-team-bkg-mobile.svg);--team-background-light:url(/assets/images/team/light-team-bkg.svg);--box-shadow1:0px 0px 30px 0px rgba(56,83,190,0.1);--box-shadow2:inset 0px 0px 30px 0px rgba(56,83,190,0.1)}.footer[_ngcontent-%COMP%]{background-color:var(--color-quinary);padding-bottom:10px!important;margin-bottom:0!important}.footer[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:var(--text-invert)}.footer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{text-transform:uppercase}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-very-light)}.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0;line-height:2em}.footer[_ngcontent-%COMP%]   .footer-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:65px;-webkit-filter:var(--filter-invert);filter:var(--filter-invert)}.footer[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:30px}.footer[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-webkit-filter:var(--filter-very-light);filter:var(--filter-very-light)}.footer[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{width:100%}.footer[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .divider-mobile[_ngcontent-%COMP%]{height:2px;border-radius:1px;background-color:var(--color-secondary)}.footer[_ngcontent-%COMP%]   .divider-mobile[_ngcontent-%COMP%]{width:50%;margin:auto}.footer[_ngcontent-%COMP%]   .legal-row[_ngcontent-%COMP%]{padding:1rem;font-family:sofia-pro,Open sans,Arial,Helvetica,sans-serif;font-weight:700;font-size:1.1em;color:var(--text-invert)}"]}),t}()},zP0r:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("7o/Q");function o(t){return function(e){return e.lift(new c(t))}}var c=function(){function t(e){_classCallCheck(this,t),this.total=e}return _createClass(t,[{key:"call",value:function(t,e){return e.subscribe(new a(t,this.total))}}]),t}(),a=function(t){_inherits(r,t);var e=_createSuper(r);function r(t,n){var o;return _classCallCheck(this,r),(o=e.call(this,t)).total=n,o.count=0,o}return _createClass(r,[{key:"_next",value:function(t){++this.count>this.total&&this.destination.next(t)}}]),r}(n.a)}}]);