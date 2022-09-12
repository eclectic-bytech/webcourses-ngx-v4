"use strict";(self.webpackChunkwebcourses_ngx=self.webpackChunkwebcourses_ngx||[]).push([[525],{3525:(D,a,i)=>{i.r(a),i.d(a,{WebcoursesModule:()=>z});var c=i(9808),u=i(15),l=i(8544),t=i(6435),p=i(200),d=i(7353),m=i(3943),g=i(1345),f=i(5612),v=i(9356);function _(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){return t.CHM(n),t.oxw(2).showGroupCodeInput=!0}),t._uU(1," Use code "),t.qZA()}}function C(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(n);const r=t.oxw().ngIf;return t.oxw().enrolButton(r.details.group_code.cid,r.details.hash)}),t._uU(1," Enrol "),t.qZA()}}function Z(o,e){1&o&&t._UZ(0,"app-coupon-field")}function h(o,e){if(1&o&&(t.TgZ(0,"div",15),t.TgZ(1,"small",16),t._uU(2),t.qZA(),t.qZA()),2&o){const n=t.oxw().ngIf;t.xp6(2),t.hij("Publisher: ",n.details.publisher,"")}}function b(o,e){if(1&o&&(t.TgZ(0,"div",1),t.TgZ(1,"div",2),t._UZ(2,"img",3),t.TgZ(3,"small",4),t._uU(4,"Enrol in other courses"),t.qZA(),t.TgZ(5,"div",5),t._UZ(6,"h5",6),t.TgZ(7,"p",7),t._UZ(8,"small",8),t.ALo(9,"safehtml"),t.qZA(),t.YNc(10,_,2,0,"button",9),t.YNc(11,C,2,0,"button",10),t.YNc(12,Z,1,0,"app-coupon-field",11),t.YNc(13,h,3,1,"div",12),t.qZA(),t.qZA(),t.qZA()),2&o){const n=e.ngIf,s=t.oxw();t.xp6(2),t.Q6J("src",n.details.group_code.cover.image_url,t.LSH)("alt",n.details.group_code.cover.alt_desc),t.xp6(4),t.Q6J("innerHtml",n.details.label,t.oJD),t.xp6(2),t.Q6J("innerHtml",t.xi3(9,8,n.details.short_desc,"html"),t.oJD),t.xp6(2),t.Q6J("ngIf",!s.showGroupCodeInput),t.xp6(1),t.Q6J("ngIf",n.status.valid),t.xp6(1),t.Q6J("ngIf",s.showGroupCodeInput&&1!=n.status.valid),t.xp6(1),t.Q6J("ngIf",n.details.publisher)}}let x=(()=>{class o{constructor(n,s){this.couponFieldService=n,this.poService=s,this.showGroupCodeInput=!1}ngOnInit(){this.couponFieldService.listenForCouponStatus$.next(this.couponFieldService.defaultCoupon)}enrolButton(n,s){this.poService.makePurchase(Number(n),s),this.couponFieldService.coupon=null}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(m.r),t.Y36(g.x))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-group-join-card"]],decls:2,vars:3,consts:[["class","d-inline-block mb-3",4,"ngIf"],[1,"d-inline-block","mb-3"],[1,"card","m-1",2,"width","22rem!important"],[1,"card-img-top",2,"min-height","10rem",3,"src","alt"],[1,"text-secondary","text-uppercase","mt-2"],[1,"card-body","text-center",2,"min-height","13rem"],[1,"card-title",3,"innerHtml"],[1,"text-secondary",2,"line-height","1.2rem"],[3,"innerHtml"],["class","btn btn-primary mt-1 mt-md-3",3,"click",4,"ngIf"],["class","btn btn-success mt-1 mt-md-3",3,"click",4,"ngIf"],[4,"ngIf"],["class","mt-1",4,"ngIf"],[1,"btn","btn-primary","mt-1","mt-md-3",3,"click"],[1,"btn","btn-success","mt-1","mt-md-3",3,"click"],[1,"mt-1"],[1,"text-secondary"]],template:function(n,s){1&n&&(t.YNc(0,b,14,11,"div",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,s.couponFieldService.listenForCouponStatus$))},directives:[c.O5,f.d],pipes:[c.Ov,v.r],styles:[""]}),o})();var T=i(3588),A=i(7596);function J(o,e){if(1&o&&(t.TgZ(0,"div",11),t._UZ(1,"app-catalogue-card",12),t.qZA()),2&o){const n=e.$implicit;t.xp6(1),t.Q6J("course",n)}}function y(o,e){if(1&o&&(t.TgZ(0,"div"),t.TgZ(1,"div",9),t.YNc(2,J,2,1,"div",10),t._UZ(3,"app-group-join-card"),t.qZA(),t.qZA()),2&o){const n=t.oxw().ngIf;t.xp6(2),t.Q6J("ngForOf",n)}}function I(o,e){if(1&o&&(t.TgZ(0,"div"),t.TgZ(1,"small",8),t._uU(2),t.qZA(),t.YNc(3,y,4,1,"div",3),t.qZA()),2&o){const n=e.ngIf;t.oxw();const s=t.MAs(9);t.Q6J("@fadeInOut",void 0),t.xp6(2),t.hij("",n.length," Courses"),t.xp6(1),t.Q6J("ngIf",n.length>0)("ngIfElse",s)}}function U(o,e){1&o&&t._UZ(0,"app-loading-spinner")}const M=function(){return["/catalogue"]};function W(o,e){1&o&&(t.TgZ(0,"h1",13),t._uU(1,"You've not yet enrolled in any courses."),t.qZA(),t.TgZ(2,"p",14),t._uU(3,"Start improving your skills by using a "),t.TgZ(4,"span",15),t._uU(5,"Group Code"),t.qZA(),t._uU(6," below."),t._UZ(7,"br"),t._uU(8," Visit the "),t.TgZ(9,"a",16),t._uU(10,"Webcourse Catalogue"),t.qZA(),t._uU(11," to buy a course, or use a "),t.TgZ(12,"span",15),t._uU(13,"Course Access Code"),t.qZA(),t._uU(14,"."),t.qZA(),t._UZ(15,"app-group-join-card")),2&o&&(t.xp6(9),t.Q6J("routerLink",t.DdM(1,M)))}function O(o,e){1&o&&(t.TgZ(0,"div",17),t.TgZ(1,"p",15),t._uU(2,"Print all completed activities"),t.qZA(),t.TgZ(3,"p",18),t._uU(4,"You can print individual activities using the print icon at the bottom of each activity."),t.qZA(),t.qZA())}function F(o,e){1&o&&(t.TgZ(0,"div",17),t.TgZ(1,"p",15),t._uU(2,"Make a PDF of the course"),t.qZA(),t.TgZ(3,"p",18),t._uU(4," You can generate a PDF of the course using the standard "),t.TgZ(5,"u"),t._uU(6,"Print"),t.qZA(),t._uU(7," option. Click here for the standard Print method with instructions for creating a PDF. "),t.qZA(),t.qZA())}const S=[{path:"",component:(()=>{class o{constructor(n,s,r){this.route=n,this.appService=s,this.user=r,this.showGroupCodeInput=!1}ngOnInit(){this.appService.setTitle(this.route.snapshot.data.title)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(u.gz),t.Y36(p.z),t.Y36(d.K))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-webcourses"]],decls:14,vars:4,consts:[["id","fullMainContent",1,"text-center"],[1,"text-center","mb-3"],[1,"common-heading","mb-2"],[4,"ngIf","ngIfElse"],["loading",""],["noCoursesForYou",""],["printDialog",""],["pdfDialog",""],[1,"text-dark","text-uppercase"],[1,"mt-4"],["class","d-inline-block",4,"ngFor","ngForOf"],[1,"d-inline-block"],[3,"course"],[1,"common-heading","mb-2","text-success"],[1,"text-dark"],[1,"font-weight-bold"],[1,"text-nowrap",3,"routerLink"],[1,"text-center"],[1,"small","font-italic"]],template:function(n,s){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h1",2),t._uU(3,"My Webcourses"),t.qZA(),t.YNc(4,I,4,4,"div",3),t.ALo(5,"async"),t.YNc(6,U,1,0,"ng-template",null,4,t.W1O),t.qZA(),t.qZA(),t.YNc(8,W,16,2,"ng-template",null,5,t.W1O),t.YNc(10,O,5,0,"ng-template",null,6,t.W1O),t.YNc(12,F,8,0,"ng-template",null,7,t.W1O)),2&n){const r=t.MAs(7);t.xp6(4),t.Q6J("ngIf",t.lcZ(5,2,s.user.userCourses$))("ngIfElse",r)}},directives:[c.O5,c.sg,x,T.S,A.g,u.yS],pipes:[c.Ov],styles:[".row[_ngcontent-%COMP%]{display:flex;align-items:center}.active[_ngcontent-%COMP%], .courses[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#1264b6;font-weight:700;font-size:115%;cursor:pointer}.chapterIndex[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#147036}div.progress[_ngcontent-%COMP%]{margin:0}#bytech[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background-color:#17a2b833;cursor:pointer}"],data:{animation:[l.t]}}),o})(),data:{title:"My web courses"}}];let Y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[[u.Bz.forChild(S)],c.ez],u.Bz]}),o})();var G=i(9869),P=i(1541),N=i(5365),Q=i(5055);let w=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.ez,N.L,Q.D]]}),o})();var q=i(9003);let z=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.ez,G.IJ,Y,P._,w,q.z]]}),o})()}}]);