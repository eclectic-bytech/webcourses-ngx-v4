"use strict";(self.webpackChunkwebcourses_ngx=self.webpackChunkwebcourses_ngx||[]).push([[696],{9696:(H,d,i)=>{i.r(d),i.d(d,{WebcoursesModule:()=>D});var a=i(6895),m=i(923),g=i(6652),v=i(4859),p=i(2216),u=i(5845),f=i(2687),x=i(658),e=i(5062),h=i(7531);let b=(()=>{class o{constructor(){}static#e=this.\u0275fac=function(s){return new(s||o)};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Z=i(900),C=i(4695),T=i(8208),y=i(7103),U=i(5060),A=i(7475);function M(o,n){if(1&o&&(e.TgZ(0,"div"),e._uU(1," Welcome back, "),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&o){const t=e.oxw().ngIf;e.xp6(3),e.Oqu(t.first_name)}}function I(o,n){if(1&o&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&o){const t=e.oxw().ngIf;e.xp6(1),e.hij("Welcome, ",t.username,"")}}function S(o,n){if(1&o&&e._UZ(0,"div",39),2&o){const t=e.oxw().ngIf,s=e.oxw(3);e.Udp("width",s.percentDone(t.total_activities,t.user_progress.total_activities_completed,"integer"),"%"),e.Q6J("title",s.percentDone(t.total_activities,t.user_progress.total_activities_completed,"string")),e.uIk("aria-valuenow",0)("aria-valuemax",100)}}const _=function(o){return["/catalogue","course",o]},J=function(o){return["/catalogue","publisher",o]};function W(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",24)(1,"div",25),e._UZ(2,"img",26),e.TgZ(3,"div",27)(4,"div",2)(5,"div",28)(6,"div",19)(7,"small",29),e._uU(8,"Selected course"),e.qZA(),e.TgZ(9,"div",30),e._uU(10),e.qZA()(),e.TgZ(11,"div",19)(12,"button",31),e.NdJ("click",function(){const c=e.CHM(t).ngIf,l=e.oxw(3);return e.KtG(l.enterButton(c.user_progress.selected_aid))}),e._uU(13," Resume "),e.qZA(),e.TgZ(14,"button",32),e._uU(15," About "),e.qZA()()(),e.TgZ(16,"div",28)(17,"div",33)(18,"small"),e._uU(19),e._UZ(20,"fa-icon",34),e.qZA()(),e.TgZ(21,"div",19)(22,"a",35),e._UZ(23,"img",36),e.qZA()()()()(),e.TgZ(24,"div",37),e.YNc(25,S,1,5,"div",38),e.qZA()()()}if(2&o){const t=n.ngIf,s=e.oxw(3);e.xp6(10),e.Oqu(t.title),e.xp6(4),e.Q6J("routerLink",e.VKq(7,_,t.id)),e.xp6(5),e.hij(" ",t.total_activities," "),e.xp6(1),e.Q6J("icon",s.faDiagramProject),e.xp6(2),e.Q6J("routerLink",e.VKq(9,J,t.publisher.id_alias)),e.xp6(1),e.Q6J("src","publisher-files/"+t.publisher.id_alias+"/theme/logo.png",e.LSH),e.xp6(2),e.Q6J("ngIf",t.user_progress)}}function w(o,n){if(1&o&&e._UZ(0,"div",39),2&o){const t=e.oxw().$implicit,s=e.oxw(3);e.Udp("width",s.percentDone(t.total_activities,t.user_progress.total_activities_completed,"integer"),"%"),e.Q6J("title",s.percentDone(t.total_activities,t.user_progress.total_activities_completed,"string")),e.uIk("aria-valuenow",0)("aria-valuemax",100)}}function O(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",40)(1,"div",41)(2,"div",42)(3,"div",43),e._UZ(4,"img",44),e.qZA()(),e.TgZ(5,"div",45)(6,"div",46),e._uU(7),e._UZ(8,"small",47),e.qZA(),e.TgZ(9,"div",48),e._uU(10),e.ALo(11,"date"),e.qZA(),e.TgZ(12,"button",31),e.NdJ("click",function(){const c=e.CHM(t).$implicit,l=e.oxw(3);return e.KtG(l.enterButton(c.user_progress.selected_aid))}),e._uU(13," Enter "),e.qZA(),e.TgZ(14,"button",49),e._uU(15," About "),e.qZA()()(),e.TgZ(16,"div",37),e.YNc(17,w,1,5,"div",38),e.qZA()()}if(2&o){const t=n.$implicit;e.xp6(4),e.cQ8("src","publisher-files/",t.publisher_id,"/courses/",t.id,"/images/",t.cover,"",e.LSH),e.s9C("alt",t.cover_alt),e.xp6(3),e.hij("",t.title," "),e.xp6(3),e.hij(" Joined: ",e.xi3(11,8,t.user_progress.created_at,"longDate")," "),e.xp6(4),e.Q6J("routerLink",e.VKq(11,_,t.id)),e.xp6(3),e.Q6J("ngIf",t.user_progress)}}const Q=function(){return["/catalogue"]};function Y(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",50)(1,"h1",51),e._uU(2,"You've not yet enrolled in any courses."),e.qZA(),e.TgZ(3,"p",48),e._uU(4,"Start improving your skills by using a "),e.TgZ(5,"a",52),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(3);return e.KtG(r.accessCodeModalService.accessCodeModal())}),e._uU(6," course access code "),e.qZA(),e._uU(7,"."),e._UZ(8,"br"),e._uU(9," Visit the "),e.TgZ(10,"a",53),e._uU(11,"Webcourse Catalogue"),e.qZA(),e._uU(12," to browse all publicly available courses. "),e.qZA()()}2&o&&(e.xp6(10),e.Q6J("routerLink",e.DdM(1,Q)))}function N(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",14),e.YNc(1,W,26,11,"div",15),e.ALo(2,"async"),e.TgZ(3,"div",16)(4,"div",17)(5,"div",18)(6,"div",19)(7,"button",20),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.accessCodeModalService.accessCodeModal())}),e._uU(8," Unlock a course using an access code "),e.qZA()(),e.TgZ(9,"div",19)(10,"small",21),e._uU(11),e.qZA()()()(),e.YNc(12,O,18,13,"div",22),e.qZA(),e.YNc(13,Y,13,2,"div",23),e.qZA()}if(2&o){const t=n.ngIf,s=e.oxw(2);e.Q6J("@fadeInOut",void 0),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,5,s.userSelectedCourse$)),e.xp6(10),e.hij("",t.length," courses unlocked"),e.xp6(1),e.Q6J("ngForOf",t),e.xp6(1),e.Q6J("ngIf",0===t.length)}}function k(o,n){1&o&&e._UZ(0,"app-loading-spinner")}function P(o,n){if(1&o&&(e.TgZ(0,"div",2)(1,"div",3),e._UZ(2,"div",4),e.TgZ(3,"div",4),e._UZ(4,"img",5),e.TgZ(5,"div",6),e.YNc(6,M,4,1,"div",7),e.YNc(7,I,2,1,"ng-template",null,8,e.W1O),e.qZA()(),e._UZ(9,"div",9),e.qZA(),e._UZ(10,"hr",10),e.YNc(11,N,14,7,"div",11),e.ALo(12,"async"),e.YNc(13,k,1,0,"ng-template",null,12,e.W1O),e.qZA()),2&o){const t=n.ngIf,s=e.MAs(8),r=e.MAs(14),c=e.oxw();e.Q6J("@fadeInOut",void 0),e.xp6(4),e.Q6J("src",c.gravatarMd5.gravatarMD5src(t.email),e.LSH)("size",100),e.xp6(2),e.Q6J("ngIf",t.first_name)("ngIfElse",s),e.xp6(5),e.Q6J("ngIf",e.lcZ(12,7,c.userService.userCourses$))("ngIfElse",r)}}const j=[{path:"",component:(()=>{class o{constructor(t,s,r,c,l,F,B,E){this.route=t,this.gravatarMd5=s,this.webcoursesService=r,this.appService=c,this.accessCodeModalService=l,this.userService=F,this.courseService=B,this.navService=E,this.faDiagramProject=f.Bkj,this.showGroupCodeInput=!1,this.user$=this.userService.getUser()}ngOnInit(){this.appService.setTitle(this.route.snapshot.data.title),this.accessCodeRoutine(),this.subscription=this.userService.getUser().subscribe(t=>{this.userSelectedCourse$=this.courseService.getCourse(t.current_course_id)})}enterButton(t){this.navService.NavigateByAid(t)}accessCodeRoutine(){this.route.snapshot.queryParamMap.get("code")&&(this.accessCodeModalService.accessCodeModal(),this.accessCodeModalService.defaultCode=this.route.snapshot.queryParamMap.get("code"),this.accessCodeModalService.submitCode(this.route.snapshot.queryParamMap.get("code")))}percentDone(t,s,r){let c=Math.round(s?s/t*100:0);return"integer"===r?c:"string"===r?c+"% Done":"Numeric stat not available"}ngOnDestroy(){this.subscription.unsubscribe()}static#e=this.\u0275fac=function(s){return new(s||o)(e.Y36(u.gz),e.Y36(h.u),e.Y36(b),e.Y36(Z.z),e.Y36(C._),e.Y36(T.K),e.Y36(y.N),e.Y36(U.t))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-webcourses"]],decls:3,vars:3,consts:[["id","fullMainContent"],["class","container-fluid",4,"ngIf"],[1,"container-fluid"],[1,"row","d-flex","align-items-start","my-4"],[1,"col-12","col-lg-4"],["ngxGravatar","",1,"mr-4","img-fluid",3,"src","size"],[1,"lead","d-inline-block"],[4,"ngIf","ngIfElse"],["newUser",""],[1,"col-12","col-lg-4","text-right","align-items-start"],[1,"mb-3"],["class","row d-flex justify-content-center align-items-start pt-3",4,"ngIf","ngIfElse"],["loading",""],[1,"text-capitalize"],[1,"row","d-flex","justify-content-center","align-items-start","pt-3"],["class","col-xs-12 col-lg-4 col-xxl-3",4,"ngIf"],[1,"col-xs-12","col-lg-8","col-xxl-9","align-top"],[1,"container-fluid","pl-0"],[1,"row","justify-content-between","align-items-start"],[1,"col-auto"],["mat-button","","color","primary",1,"border","mb-4",3,"click"],[1,"text-dark","text-uppercase"],["class","container p-0 mb-3 border rounded",4,"ngFor","ngForOf"],["class","col-xs-12 col-lg-8 col-xxl-9",4,"ngIf"],[1,"col-xs-12","col-lg-4","col-xxl-3"],[1,"card","mb-4"],["src","publisher-files/1/theme/selected-course.jpg","alt","",1,"card-img-top"],[1,"card-body"],[1,"row","justify-content-between","my-auto"],[1,"text-secondary","text-uppercase"],[1,"card-title","text-dark"],["mat-button","","color","primary",1,"border","my-3",3,"click"],["mat-button","","color","primary",1,"my-3","mx-1",3,"routerLink"],["title","Activities",1,"col-auto","text-secondary"],[1,"px-1",3,"icon"],[3,"routerLink"],[1,"pt-2","img-fluid",2,"max-height","4rem",3,"src"],[1,"progress",2,"height","6px"],["class","progress-bar progress-bar-striped","role","progressbar","aria-valuemin","0",3,"title","width",4,"ngIf"],["role","progressbar","aria-valuemin","0",1,"progress-bar","progress-bar-striped",3,"title"],[1,"container","p-0","mb-3","border","rounded"],[1,"row","no-gutters"],[1,"col-sm-12","col-md-4"],[1,"card"],[1,"card-img-top",2,"object-fit","cover","height","11rem",3,"src","alt"],[1,"col-auto","ml-4"],[1,"lead","mt-3"],[1,"text-secondary"],[1,"text-dark"],["mat-button","","color","primary",1,"mt-3","ml-2",3,"routerLink"],[1,"col-xs-12","col-lg-8","col-xxl-9"],[1,"common-heading","mb-2","mt-5","text-success"],[1,"handy",3,"click"],[1,"text-nowrap",3,"routerLink"]],template:function(s,r){1&s&&(e.TgZ(0,"div",0),e.YNc(1,P,15,9,"div",1),e.ALo(2,"async"),e.qZA()),2&s&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,r.user$)))},dependencies:[a.sg,a.O5,g.yV,v.lW,u.rH,A.g,p.BN,a.Ov,a.uU],styles:[".row[_ngcontent-%COMP%]{display:flex;align-items:center}.active[_ngcontent-%COMP%], .courses[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#1264b6;font-weight:700;font-size:115%;cursor:pointer}.chapterIndex[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#147036}div.progress[_ngcontent-%COMP%]{margin:0}#bytech[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background-color:#17a2b833;cursor:pointer}"],data:{animation:[x.t]}})}return o})(),data:{title:"My web courses"}}];let q=(()=>{class o{static#e=this.\u0275fac=function(s){return new(s||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({imports:[[u.Bz.forChild(j)],a.ez,u.Bz]})}return o})();var L=i(187),z=i(3630);let D=(()=>{class o{static#e=this.\u0275fac=function(s){return new(s||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({imports:[a.ez,m.IJ,g.rf,v.ot,q,L._,z.z,p.uH]})}return o})()}}]);