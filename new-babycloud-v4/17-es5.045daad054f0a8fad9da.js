function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var c=n[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{i438:function(t,n,e){"use strict";e.r(n),e.d(n,"ResearchModule",(function(){return I}));var c=e("ofXK"),o=e("3Pt+"),i=e("PCNd"),r=e("fXoL"),a=e("aZ8m"),s=e("sYmb");function l(t,n){if(1&t&&(r.Tb(0,"div",9),r.Tb(1,"a",10),r.Pb(2,"img",11),r.Tb(3,"h6",12),r.Ec(4),r.Sb(),r.Tb(5,"p"),r.Ec(6),r.Sb(),r.Sb(),r.Sb()),2&t){var e=n.$implicit;r.Cb(1),r.kc("href",e.LINK,r.xc),r.Cb(1),r.kc("src",e.IMG.SRC,r.xc),r.kc("alt",e.IMG.ALT),r.Cb(2),r.Fc(e.TITLE),r.Cb(2),r.Fc(e.SUBTITLE)}}var b,p=((b=function(){function t(n){_classCallCheck(this,t),this.translate=n,this.bError=!1,this.publications=[{TITLE:"Loading",SUBTITLE:"Loading...",LINK:"Loading...",IMG:{ALT:"",SRC:""}}]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.translate.get("RESEARCH.PUBLICATIONS.PUBLICATION").subscribe((function(n){"string"==typeof n?(t.bError=!0,t.publications=[{TITLE:"An error occurred",SUBTITLE:"Cannot get translation",LINK:"Cannot get translation",IMG:{ALT:"",SRC:""}}]):t.publications=n}))}}]),t}()).\u0275fac=function(t){return new(t||b)(r.Ob(s.e))},b.\u0275cmp=r.Ib({type:b,selectors:[["app-publications"]],decls:11,vars:4,consts:[["id","publications",1,"publications"],[1,"container-fluid"],[1,"row","pt-5"],[1,"col-12","text-center","pt-5"],[1,"py-4"],[1,"test123","row","d-flex","justify-content-center","pb-5"],[1,"col-10","mx-auto"],[1,"row","publications"],["class","col-12 col-md-6 col-lg-4 wow pulse p-3",4,"ngFor","ngForOf"],[1,"col-12","col-md-6","col-lg-4","wow","pulse","p-3"],[1,"d-flex","flex-column","p-3","publication","h-100",3,"href"],[3,"src","alt"],[1,"pt-3"]],template:function(t,n){1&t&&(r.Tb(0,"section",0),r.Tb(1,"div",1),r.Tb(2,"div",2),r.Tb(3,"div",3),r.Tb(4,"h1",4),r.Ec(5),r.ec(6,"translate"),r.Sb(),r.Sb(),r.Sb(),r.Tb(7,"div",5),r.Tb(8,"div",6),r.Tb(9,"div",7),r.Cc(10,l,7,5,"div",8),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&t&&(r.Cb(5),r.Fc(r.fc(6,2,"RESEARCH.PUBLICATIONS.TITLE")),r.Cb(5),r.jc("ngForOf",n.publications))},directives:[c.j],pipes:[s.d],styles:['#publications[_ngcontent-%COMP%]{background-color:var(--color-quaternary)}#publications[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]{min-height:100vh}#publications[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}#publications[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]:after{content:"";flex:auto}#publications[_ngcontent-%COMP%]   .publication[_ngcontent-%COMP%]{background-color:#fff;box-shadow:var(--box-shadow1);box-sizing:border-box}#publications[_ngcontent-%COMP%]   .publication[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center}#publications[_ngcontent-%COMP%]   .publication[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}@media screen and (max-width:768px){#mission-values[_ngcontent-%COMP%]{background-color:var(--text-invert)}}']}),b);function u(t,n){if(1&t&&(r.Tb(0,"div",8),r.Tb(1,"div",9),r.Pb(2,"img",10),r.Sb(),r.Sb()),2&t){var e=n.$implicit;r.Cb(2),r.kc("src",e.SRC,r.xc),r.kc("alt",e.ALT)}}var f,d,C,T=((f=function(){function t(n){_classCallCheck(this,t),this.translate=n,this.bError=!1,this.supporters=[{ALT:"",SRC:""}]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.translate.get("RESEARCH.CREDITS.SUPPORTER.SUPPORTERS").subscribe((function(n){"string"==typeof n?(t.bError=!0,t.supporters=[{ALT:"",SRC:""}]):t.supporters=n}))}}]),t}()).\u0275fac=function(t){return new(t||f)(r.Ob(s.e))},f.\u0275cmp=r.Ib({type:f,selectors:[["app-credit"]],decls:14,vars:7,consts:[["id","research-credit",1,"research-credit"],[1,"container-fluid"],[1,"row","pt-5"],[1,"col-12","text-center","pt-5"],[1,"test123","row","d-flex","justify-content-center","pb-5"],[1,"col-10","mx-auto"],[1,"row","publications"],["class","col-6 col-md-4 col-lg-3 wow pulse p-3",4,"ngFor","ngForOf"],[1,"col-6","col-md-4","col-lg-3","wow","pulse","p-3"],[1,"supporter-logo","p-5"],[1,"mx-auto",3,"src","alt"]],template:function(t,n){1&t&&(r.Tb(0,"section",0),r.Tb(1,"div",1),r.Tb(2,"div",2),r.Tb(3,"div",3),r.Tb(4,"h1"),r.Ec(5),r.ec(6,"translate"),r.Sb(),r.Tb(7,"h5"),r.Ec(8),r.ec(9,"translate"),r.Sb(),r.Sb(),r.Sb(),r.Tb(10,"div",4),r.Tb(11,"div",5),r.Tb(12,"div",6),r.Cc(13,u,3,2,"div",7),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&t&&(r.Cb(5),r.Fc(r.fc(6,3,"RESEARCH.CREDITS.TITLE")),r.Cb(3),r.Fc(r.fc(9,5,"RESEARCH.CREDITS.SUBTITLE")),r.Cb(5),r.jc("ngForOf",n.supporters))},directives:[c.j],pipes:[s.d],styles:[""]}),f),g=e("aF9I"),h=((d=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||d)},d.\u0275cmp=r.Ib({type:d,selectors:[["app-research"]],decls:4,vars:0,template:function(t,n){1&t&&(r.Pb(0,"app-header"),r.Pb(1,"app-publications"),r.Pb(2,"app-credit"),r.Pb(3,"app-footer"))},directives:[a.a,p,T,g.a],styles:[""]}),d),S=e("n3og"),v=e("6NWb"),E=e("tyNb"),P=e("ME1z"),w=[{path:"",component:h}],I=((C=function t(){_classCallCheck(this,t)}).\u0275mod=r.Mb({type:C}),C.\u0275inj=r.Lb({factory:function(t){return new(t||C)},imports:[[c.b,E.i.forChild(w),i.a,o.j,o.e,S.b,v.a,P.a]]}),C)}}]);