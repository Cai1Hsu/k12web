(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{hB0V:function(t,e,n){"use strict";n.r(e),n.d(e,"FeaturesModule",(function(){return v}));var r=n("ofXK"),c=n("tyNb"),o=n("mrSG"),a=n("fXoL"),i=n("D+jN"),s=n("R5bO"),u=n("ba0x"),p=n("ckCw"),b=n("YDB7");function d(t,e){1&t&&a.Pb(0,"app-admin-board")}function f(t,e){1&t&&a.Pb(0,"app-teacher-board")}function h(t,e){1&t&&a.Pb(0,"app-student-board")}function l(t,e){1&t&&a.Pb(0,"app-tutor-board")}function y(t,e){if(1&t&&(a.Ub(0,"div"),a.Hc(1,d,1,0,"app-admin-board",0),a.Hc(2,f,1,0,"app-teacher-board",0),a.Hc(3,h,1,0,"app-student-board",0),a.Hc(4,l,1,0,"app-tutor-board",0),a.Tb()),2&t){const t=a.fc();a.Ab(1),a.nc("ngIf",2===t.the_role.userType),a.Ab(1),a.nc("ngIf",4===t.the_role.userType),a.Ab(1),a.nc("ngIf",5===t.the_role.userType),a.Ab(1),a.nc("ngIf",7===t.the_role.userType)}}const g=[{path:"",component:(()=>{class t{constructor(t){this.cache=t}ngOnInit(){this.init()}init(){return Object(o.a)(this,void 0,void 0,(function*(){this.the_role=yield this.cache.get("USER_ROLE"),this.the_eduyear=yield this.cache.get("eduyear")}))}}return t.\u0275fac=function(e){return new(e||t)(a.Ob(i.a))},t.\u0275cmp=a.Ib({type:t,selectors:[["app-features"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(t,e){1&t&&a.Hc(0,y,5,4,"div",0),2&t&&a.nc("ngIf",e.the_role)},directives:[r.m,s.a,u.a,p.a,b.a],styles:[""]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=a.Mb({type:t}),t.\u0275inj=a.Lb({factory:function(e){return new(e||t)},imports:[[c.g.forChild(g)],c.g]}),t})();var w=n("xuvC");let v=(()=>{class t{}return t.\u0275mod=a.Mb({type:t}),t.\u0275inj=a.Lb({factory:function(e){return new(e||t)},imports:[[r.c,m,w.a]]}),t})()}}]);