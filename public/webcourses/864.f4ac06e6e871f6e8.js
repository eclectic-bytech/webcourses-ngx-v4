"use strict";(self.webpackChunkwebcourses_ngx=self.webpackChunkwebcourses_ngx||[]).push([[864],{3864:(A,l,n)=>{n.r(l),n.d(l,{WebcoursesModule:()=>S});var i=n(6895),c=n(1725),a=n(4850),d=n(801),m=n(658),e=n(5062),b=n(900),p=n(9663),h=n(3868),g=n(3210);const x=function(s,o){return["/publisher",s,"webcourse",o,"students"]};function T(s,o){if(1&s&&(e.TgZ(0,"div",9)(1,"div",10),e._UZ(2,"img",11),e.TgZ(3,"div",12)(4,"h5",13),e._uU(5),e.qZA(),e.TgZ(6,"div",14)(7,"div"),e._UZ(8,"fa-icon",15),e._uU(9,"STUDENTS: "),e.TgZ(10,"span",16),e._uU(11),e.qZA(),e._UZ(12,"br")(13,"fa-icon",17),e._uU(14,"ACTIVITIES: "),e.TgZ(15,"span",16),e._uU(16),e.qZA(),e._UZ(17,"br"),e.TgZ(18,"small",18),e._uU(19),e.qZA()(),e.TgZ(20,"button",19)(21,"span",16),e._uU(22,"Student Progress"),e.qZA()()()()()()),2&s){const t=o.$implicit,r=e.oxw().ngIf,u=e.oxw(2);e.xp6(2),e.cQ8("src","/publisher-files/",r.id,"/courses/",t.cid,"/images/",t.cover,"",e.LSH),e.s9C("alt",t.cover_alt),e.xp6(3),e.Oqu(t.title),e.xp6(3),e.Q6J("icon",u.faUsers),e.xp6(3),e.Oqu(t.students),e.xp6(2),e.Q6J("icon",u.faThLarge),e.xp6(3),e.Oqu(t.activities),e.xp6(3),e.hij("COURSE #",t.cid,""),e.xp6(1),e.Q6J("routerLink",e.WLB(11,x,r.id,t.cid))}}function Z(s,o){if(1&s&&(e.TgZ(0,"div",3)(1,"div",4)(2,"h1",5),e._uU(3,"Published Courses"),e.qZA(),e.TgZ(4,"small",6),e._uU(5),e.qZA()(),e.TgZ(6,"div",7),e.YNc(7,T,23,14,"div",8),e.qZA()()),2&s){const t=o.ngIf,r=e.oxw().ngIf;e.Q6J("appThemeSet",t.theme),e.xp6(5),e.hij("All ",r.length," web courses published by you."),e.xp6(2),e.Q6J("ngForOf",r)}}function C(s,o){if(1&s&&(e.TgZ(0,"div",1),e.YNc(1,Z,8,3,"div",2),e.ALo(2,"async"),e.qZA()),2&s){const t=e.oxw();e.Q6J("@fadeInOut",void 0),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,2,t.publisherInfo$))}}let y=(()=>{class s{constructor(t,r,u){this.route=t,this.globalService=r,this.pubCoursesService=u,this.faUsers=d.FVb,this.faThLarge=d.Toy}ngOnInit(){this.globalService.setTitle(this.route.snapshot.data.title),this.publisherCourses$=this.route.data.pipe((0,a.U)(t=>t.webcourses)),this.publisherInfo$=this.route.data.pipe((0,a.U)(t=>t.publisherInfo))}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(c.gz),e.Y36(b.z),e.Y36(p.h))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-publisher-courses"]],decls:2,vars:3,consts:[["id","fullMainContent",4,"ngIf"],["id","fullMainContent"],[3,"appThemeSet",4,"ngIf"],[3,"appThemeSet"],[1,"text-center","mb-3"],[1,"common-heading","mb-0","mb-lg-2"],[1,"text-dark","text-uppercase"],[1,"text-center"],["class","d-inline-block",4,"ngFor","ngForOf"],[1,"d-inline-block"],[1,"card","handy","m-2",2,"width","18rem"],[1,"card-img-top",3,"src","alt"],[1,"card-body","text-center"],[1,"card-title"],[1,"card-text"],[1,"mr-2","text-secondary",3,"icon"],[1,"font-weight-bold"],[1,"mx-2","text-secondary",3,"icon"],[1,"text-secondary"],[1,"btn","btn-primary","text-center","mt-3",3,"routerLink"]],template:function(t,r){1&t&&(e.YNc(0,C,3,4,"div",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,r.publisherCourses$))},dependencies:[i.sg,i.O5,h.BN,c.rH,g.D,i.Ov],data:{animation:[m.t]}}),s})(),f=(()=>{class s{constructor(t){this.localService=t}resolve(){return this.localService.getWebcourses(null)}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(p.h))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac}),s})();var v=n(6350);const U=[{path:"",component:y,resolve:{webcourses:f,publisherInfo:v.p},data:{title:"Publisher webcourses"}}];let W=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[f,v.p],imports:[[c.Bz.forChild(U)],i.ez,c.Bz]}),s})();var I=n(8976);let S=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[i.ez,h.uH,W,I.g]}),s})()}}]);