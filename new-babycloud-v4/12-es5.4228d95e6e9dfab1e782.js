function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"5cb7":function(t,e,n){"use strict";n.r(e),n.d(e,"LoggerModule",(function(){return I}));var c=n("ofXK"),o=n("3Pt+"),i=n("PCNd"),r=n("fXoL"),a=n("ME1z"),b=n("aZ8m"),s=n("0MNC"),l=n("bTqV"),g=n("tyNb"),d=n("sYmb"),u=function(){return{inquiry:"quote",product:"logger"}};function m(t,e){1&t&&(r.Tb(0,"div",9),r.Tb(1,"a",10),r.Ec(2),r.ec(3,"translate"),r.Sb(),r.Sb()),2&t&&(r.Cb(1),r.jc("routerLink","/contact")("state",r.mc(5,u)),r.Cb(1),r.Fc(r.fc(3,3,"LOGGER.MAIN.BUTTON2")))}function f(t,e){1&t&&(r.Tb(0,"div",11),r.Tb(1,"a",12),r.Ec(2),r.ec(3,"translate"),r.Sb(),r.Sb()),2&t&&(r.Cb(1),r.jc("routerLink","/contact")("state",r.mc(5,u)),r.Cb(1),r.Fc(r.fc(3,3,"LOGGER.MAIN.BUTTON2")))}var T,p=((T=function(){function t(e){var n=this;_classCallCheck(this,t),this.bMobile=!1,e.observe("(max-width: 375px)").subscribe((function(t){n.bMobile=t.matches}))}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||T)(r.Ob(s.a))},T.\u0275cmp=r.Ib({type:T,selectors:[["app-logger-main"]],decls:16,vars:8,consts:[["id","logger-main",1,"logger-main"],[1,"container-fluid"],[1,"row"],[1,"col-10","col-md-8","col-lg-7","mx-auto","d-flex","align-items-end","align-items-md-center","justify-content-center"],["data-wow-duration","1s",1,"logger-image","pr-0","pr-md-5","pt-md-5","mt-5","wow","fadeInDown"],["src","assets/images/logger/render.png","alt","3d render of the logger"],["data-wow-duration","0.5s","data-wow-delay","0.25s",1,"col-11","mx-auto","col-lg-5","d-flex","align-items-start","justify-content-center","flex-column","wow","fadeInRight"],["class","logger-buttons pt-4 mb-5 mb-lg-0",4,"ngIf","ngIfElse"],["mobile",""],[1,"logger-buttons","pt-4","mb-5","mb-lg-0"],["mat-flat-button","","href","#",1,"mt-4","link-button",3,"routerLink","state"],[1,"logger-buttons","pt-4"],["href","#",1,"mt-4","link-button-mobile",3,"routerLink","state"]],template:function(t,e){if(1&t&&(r.Tb(0,"section",0),r.Tb(1,"div",1),r.Tb(2,"div",2),r.Tb(3,"div",3),r.Tb(4,"div",4),r.Pb(5,"img",5),r.Sb(),r.Sb(),r.Tb(6,"div",6),r.Tb(7,"h1"),r.Ec(8),r.ec(9,"translate"),r.Sb(),r.Tb(10,"h6"),r.Ec(11),r.ec(12,"translate"),r.Sb(),r.Cc(13,m,4,6,"div",7),r.Cc(14,f,4,6,"ng-template",null,8,r.Dc),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&t){var n=r.sc(15);r.Cb(8),r.Fc(r.fc(9,4,"LOGGER.MAIN.TITLE")),r.Cb(3),r.Fc(r.fc(12,6,"LOGGER.MAIN.SUBTITLE")),r.Cb(2),r.jc("ngIf",!e.bMobile)("ngIfElse",n)}},directives:[c.k,l.a,g.h],pipes:[d.d],styles:["#logger-main[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{min-height:100vh}#logger-main[_ngcontent-%COMP%]   .link-button[_ngcontent-%COMP%]{background-color:var(--color-primary);border-radius:25px;color:var(--text-invert);padding:5px 25px}#logger-main[_ngcontent-%COMP%]   .link-button-mobile[_ngcontent-%COMP%]{color:var(--color-primary);font-weight:700}#logger-main[_ngcontent-%COMP%]   .link-button-mobile[_ngcontent-%COMP%]:hover{color:var(--color-tertiary)}#logger-main[_ngcontent-%COMP%]   .logger-image[_ngcontent-%COMP%]{width:200%}#logger-main[_ngcontent-%COMP%]   .logger-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}"]}),T);function O(t,e){if(1&t&&(r.Tb(0,"div",6),r.Tb(1,"div",7),r.Pb(2,"img",8),r.Sb(),r.Tb(3,"p"),r.Ec(4),r.Sb(),r.Sb()),2&t){var n=e.$implicit;r.Cb(2),r.kc("src",n.IMG.SRC,r.xc),r.kc("alt",n.IMG.ALT),r.Cb(2),r.Fc(n.TEXT)}}var E,C=((E=function(){function t(e){_classCallCheck(this,t),this.translate=e,this.bError=!1,this.specs=[{IMG:{ALT:"",SRC:""},TEXT:"Loading"}]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.translate.get("LOGGER.SPECS.SPEC").subscribe((function(e){"string"==typeof e?(t.bError=!0,t.specs=[{TEXT:"Cannot get translation",IMG:{ALT:"",SRC:""}}]):t.specs=e}))}}]),t}()).\u0275fac=function(t){return new(t||E)(r.Ob(d.e))},E.\u0275cmp=r.Ib({type:E,selectors:[["app-logger-specs"]],decls:6,vars:1,consts:[["id","logger-specs",1,"logger-specs"],[1,"container-fluid"],[1,"row"],[1,"col-12","d-flex","align-items-center","justify-content-center"],[1,"specs-container","d-flex","align-items-center","justify-content-center"],["class","spec d-flex align-items-center justify-content-center flex-column wow zoomIn",4,"ngFor","ngForOf"],[1,"spec","d-flex","align-items-center","justify-content-center","flex-column","wow","zoomIn"],[1,"spec-image"],[3,"src","alt"]],template:function(t,e){1&t&&(r.Tb(0,"section",0),r.Tb(1,"div",1),r.Tb(2,"div",2),r.Tb(3,"div",3),r.Tb(4,"div",4),r.Cc(5,O,5,3,"div",5),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&t&&(r.Cb(5),r.jc("ngForOf",e.specs))},directives:[c.j],styles:["#logger-specs[_ngcontent-%COMP%]{background-color:var(--color-quaternary)}#logger-specs[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{min-height:100vh}#logger-specs[_ngcontent-%COMP%]   .specs-container[_ngcontent-%COMP%]{flex-wrap:wrap}#logger-specs[_ngcontent-%COMP%]   .spec[_ngcontent-%COMP%]{background-color:#fff;box-shadow:var(--box-shadow1);width:20vw;height:17vw;margin:2.5vw;text-align:center;padding:2em}#logger-specs[_ngcontent-%COMP%]   .spec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}#logger-specs[_ngcontent-%COMP%]   .spec-image[_ngcontent-%COMP%]{width:50%;height:auto;margin:auto;padding-bottom:5%}#logger-specs[_ngcontent-%COMP%]   .spec-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}@media (max-width:991px) and (min-width:768px){#logger-specs[_ngcontent-%COMP%]   .spec[_ngcontent-%COMP%]{width:40vw;height:34vw}}@media (max-width:767px) and (min-width:576px){#logger-specs[_ngcontent-%COMP%]   .spec[_ngcontent-%COMP%]{width:40vw;height:34vw}}@media (max-width:575px){#logger-specs[_ngcontent-%COMP%]   .spec[_ngcontent-%COMP%]{width:80vw;height:68vw}}"]}),E),v=function(){return{inquiry:"quote",product:"logger"}};function h(t,e){1&t&&(r.Tb(0,"div",3),r.Tb(1,"div",4),r.Tb(2,"div",5),r.Tb(3,"div",4),r.Tb(4,"div",6),r.Pb(5,"img",7),r.Sb(),r.Tb(6,"div",8),r.Tb(7,"h4"),r.Ec(8),r.ec(9,"translate"),r.Sb(),r.Tb(10,"p"),r.Ec(11),r.ec(12,"translate"),r.Sb(),r.Tb(13,"a",9),r.Ec(14),r.ec(15,"translate"),r.Sb(),r.Sb(),r.Sb(),r.Tb(16,"div",10),r.Tb(17,"div",6),r.Pb(18,"img",11),r.Sb(),r.Tb(19,"div",8),r.Tb(20,"h4"),r.Ec(21),r.ec(22,"translate"),r.Sb(),r.Tb(23,"p"),r.Ec(24),r.ec(25,"translate"),r.Sb(),r.Tb(26,"a",9),r.Ec(27),r.ec(28,"translate"),r.Sb(),r.Sb(),r.Sb(),r.Tb(29,"div",4),r.Tb(30,"div",6),r.Pb(31,"img",12),r.Sb(),r.Tb(32,"div",8),r.Tb(33,"h4"),r.Ec(34),r.ec(35,"translate"),r.Sb(),r.Tb(36,"p"),r.Ec(37),r.ec(38,"translate"),r.Sb(),r.Tb(39,"a",13),r.Ec(40),r.ec(41,"translate"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&t&&(r.Cb(8),r.Fc(r.fc(9,13,"LOGGER.MORE.ONE.TITLE")),r.Cb(3),r.Fc(r.fc(12,15,"LOGGER.MORE.ONE.SUBTITLE")),r.Cb(2),r.jc("routerLink","/coming-soon"),r.Cb(1),r.Fc(r.fc(15,17,"LOGGER.MORE.ONE.BUTTON")),r.Cb(7),r.Fc(r.fc(22,19,"LOGGER.MORE.TWO.TITLE")),r.Cb(3),r.Fc(r.fc(25,21,"LOGGER.MORE.TWO.SUBTITLE")),r.Cb(2),r.jc("routerLink","/coming-soon"),r.Cb(1),r.Fc(r.fc(28,23,"LOGGER.MORE.TWO.BUTTON")),r.Cb(7),r.Fc(r.fc(35,25,"LOGGER.MORE.THREE.TITLE")),r.Cb(3),r.Fc(r.fc(38,27,"LOGGER.MORE.THREE.SUBTITLE")),r.Cb(2),r.jc("routerLink","/contact")("state",r.mc(31,v)),r.Cb(1),r.Fc(r.fc(41,29,"LOGGER.MORE.THREE.BUTTON")))}function M(t,e){1&t&&(r.Tb(0,"div",4),r.Tb(1,"div",5),r.Tb(2,"div",4),r.Tb(3,"div",14),r.Pb(4,"img",7),r.Sb(),r.Tb(5,"div",15),r.Tb(6,"h4"),r.Ec(7),r.ec(8,"translate"),r.Sb(),r.Tb(9,"p"),r.Ec(10),r.ec(11,"translate"),r.Sb(),r.Tb(12,"a",16),r.ec(13,"translate"),r.Ec(14),r.ec(15,"translate"),r.Sb(),r.Sb(),r.Sb(),r.Tb(16,"div",10),r.Tb(17,"div",14),r.Pb(18,"img",11),r.Sb(),r.Tb(19,"div",15),r.Tb(20,"h4"),r.Ec(21),r.ec(22,"translate"),r.Sb(),r.Tb(23,"p"),r.Ec(24),r.ec(25,"translate"),r.Sb(),r.Tb(26,"a",16),r.ec(27,"translate"),r.Ec(28),r.ec(29,"translate"),r.Sb(),r.Sb(),r.Sb(),r.Tb(30,"div",4),r.Tb(31,"div",14),r.Pb(32,"img",12),r.Sb(),r.Tb(33,"div",15),r.Tb(34,"h4"),r.Ec(35),r.ec(36,"translate"),r.Sb(),r.Tb(37,"p"),r.Ec(38),r.ec(39,"translate"),r.Sb(),r.Tb(40,"a",13),r.Ec(41),r.ec(42,"translate"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&t&&(r.Cb(7),r.Fc(r.fc(8,13,"LOGGER.MORE.ONE.TITLE")),r.Cb(3),r.Fc(r.fc(11,15,"LOGGER.MORE.ONE.SUBTITLE")),r.Cb(2),r.kc("href",r.fc(13,17,"LOGGER.MORE.ONE.HREF"),r.xc),r.Cb(2),r.Fc(r.fc(15,19,"LOGGER.MORE.ONE.BUTTON")),r.Cb(7),r.Fc(r.fc(22,21,"LOGGER.MORE.TWO.TITLE")),r.Cb(3),r.Fc(r.fc(25,23,"LOGGER.MORE.TWO.SUBTITLE")),r.Cb(2),r.kc("href",r.fc(27,25,"LOGGER.MORE.TWO.HREF"),r.xc),r.Cb(2),r.Fc(r.fc(29,27,"LOGGER.MORE.TWO.BUTTON")),r.Cb(7),r.Fc(r.fc(36,29,"LOGGER.MORE.THREE.TITLE")),r.Cb(3),r.Fc(r.fc(39,31,"LOGGER.MORE.THREE.SUBTITLE")),r.Cb(2),r.jc("routerLink","/contact")("state",r.mc(35,v)),r.Cb(1),r.Fc(r.fc(42,33,"LOGGER.MORE.THREE.BUTTON")))}var S,w,P,R=((S=function(){function t(e){var n=this;_classCallCheck(this,t),this.bMobile=!1,e.observe("(max-width: 576px)").subscribe((function(t){n.bMobile=t.matches}))}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||S)(r.Ob(s.a))},S.\u0275cmp=r.Ib({type:S,selectors:[["app-logger-more"]],decls:4,vars:2,consts:[["id","logger-more",1,"logger-more"],["class","container-fluid",4,"ngIf","ngIfElse"],["mobile",""],[1,"container-fluid"],[1,"row"],[1,"col-8","mx-auto"],[1,"col-3","col-lg-2","offset-lg-1"],["src","assets/images/logger/documentation.svg","alt","documentation icon - image of book with settings and code icons on it"],[1,"col-8","offset-1"],["mat-flat-button","",1,"mt-4","link-button",3,"routerLink"],[1,"row","py-5","my-5"],["src","assets/images/logger/github.svg","alt","github icon"],["src","assets/images/logger/quote.svg","alt","quote icon - document with euro sign and calculator"],["mat-flat-button","",1,"mt-4","link-button",3,"routerLink","state"],[1,"col-8","mx-auto","pb-3","more-image"],[1,"col-12","mx-auto","text-center"],["mat-flat-button","",1,"mt-4","link-button",3,"href"]],template:function(t,e){if(1&t&&(r.Tb(0,"section",0),r.Cc(1,h,42,32,"div",1),r.Cc(2,M,43,36,"ng-template",null,2,r.Dc),r.Sb()),2&t){var n=r.sc(3);r.Cb(1),r.jc("ngIf",!e.bMobile)("ngIfElse",n)}},directives:[c.k,l.a,g.h],pipes:[d.d],styles:["#logger-more[_ngcontent-%COMP%]{padding-top:10vh;padding-bottom:10vh}#logger-more[_ngcontent-%COMP%]   .link-button[_ngcontent-%COMP%], #logger-more[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--color-tertiary);border-radius:25px;color:var(--text-invert);padding:5px 25px;width:15em}@media screen and (max-width:576px){button[_ngcontent-%COMP%]{width:10em}.more-image[_ngcontent-%COMP%]{max-width:150px}}"]}),S),L=n("aF9I"),_=((w=function(){function t(e){_classCallCheck(this,t),this.wowService=e}return _createClass(t,[{key:"ngOnInit",value:function(){this.wowService.init()}},{key:"reset",value:function(){this.wowService.init()}}]),t}()).\u0275fac=function(t){return new(t||w)(r.Ob(a.b))},w.\u0275cmp=r.Ib({type:w,selectors:[["app-logger"]],decls:5,vars:0,template:function(t,e){1&t&&(r.Pb(0,"app-header"),r.Pb(1,"app-logger-main"),r.Pb(2,"app-logger-specs"),r.Pb(3,"app-logger-more"),r.Pb(4,"app-footer"))},directives:[b.a,p,C,R,L.a],styles:[""]}),w),G=n("n3og"),x=n("6NWb"),k=[{path:"",component:_}],I=((P=function t(){_classCallCheck(this,t)}).\u0275mod=r.Mb({type:P}),P.\u0275inj=r.Lb({factory:function(t){return new(t||P)},imports:[[c.b,g.i.forChild(k),i.a,o.j,o.e,G.b,x.a,a.a]]}),P)}}]);