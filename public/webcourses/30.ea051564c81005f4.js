"use strict";(self.webpackChunkwebcourses_ngx=self.webpackChunkwebcourses_ngx||[]).push([[30],{4030:(R,f,r)=>{r.r(f),r.d(f,{StudentsModule:()=>O});var c=r(6895),a=r(1725),g=r(3868),p=r(4850),x=r(801),Z=r(658),t=r(5062),_=r(9663),A=r(529),C=r(1665);let v=(()=>{class n{constructor(e,s){this.httpClient=e,this.configService=s,this.selectedGroup=0}getCourseProgress(e){return this.httpClient.get(`${this.configService.params.api.route}/publisher/admin/course/students/index.php?cid=`+e).pipe(s=>s)}getCourseStudentsGroups(e){return this.httpClient.get(`${this.configService.params.api.route}/publisher/admin/course/students/groups/index.php?cid=`+e).pipe(s=>s)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(A.eN),t.LFG(C.E))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var u=r(4719),T=r(3210);let F=(()=>{class n{transform(e,s){return e.filter(function(l){if(l.gid===+s||!l.gid&&0==+s)return l})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"filter",type:n,pure:!0}),n})();function J(n,o){if(1&n&&(t.TgZ(0,"small",26),t._uU(1),t.qZA()),2&n){const e=o.ngIf;t.xp6(1),t.Oqu(e[0].title)}}function y(n,o){if(1&n&&(t.TgZ(0,"option",17),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.Q6J("value",e.gid),t.xp6(1),t.hij(" ",e.label," ")}}const I=function(n,o,e){return["/publisher",n,"webcourse",o,"student",e]};function b(n,o){if(1&n&&(t.TgZ(0,"div",27)(1,"div",28),t._uU(2),t.qZA(),t.TgZ(3,"div",29)(4,"a",30),t._UZ(5,"span",31),t.qZA()(),t.TgZ(6,"div",32),t._uU(7),t.qZA(),t.TgZ(8,"div",32),t._uU(9),t.qZA(),t.TgZ(10,"div",33),t._uU(11),t.ALo(12,"number"),t.qZA(),t.TgZ(13,"div",22),t._UZ(14,"fa-icon",34),t.qZA()()),2&n){const e=o.$implicit,s=o.index,i=t.oxw(4);t.xp6(1),t.Q6J("title","ID: "+e.user_id),t.xp6(1),t.Oqu(s+1),t.xp6(2),t.Q6J("href","mailto:"+e.email,t.LSH),t.xp6(1),t.s9C("title",e.email),t.Q6J("innerHtml",e.first_name&&e.last_name?e.first_name+" "+e.last_name:e.username,t.oJD),t.xp6(2),t.Oqu(e.start_time),t.xp6(2),t.Oqu(e.last_access),t.xp6(2),t.hij("",t.xi3(12,10,e.tac/e.ta*100,"1.0-0"),"%"),t.xp6(3),t.Q6J("icon",i.faBook)("routerLink",t.kEZ(13,I,i.route.snapshot.paramMap.get("pub_id"),i.route.snapshot.paramMap.get("cid"),e.user_id))}}function U(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",4)(1,"div",5)(2,"div",6)(3,"div",7)(4,"div",8)(5,"h1",9),t._uU(6,"Student Progress"),t.qZA(),t.YNc(7,J,2,1,"small",10),t.ALo(8,"async"),t.TgZ(9,"div",11)(10,"small",12),t._uU(11),t.ALo(12,"filter"),t.qZA()()(),t.TgZ(13,"div",13)(14,"form",14,15)(16,"select",16),t.NdJ("ngModelChange",function(i){t.CHM(e);const d=t.oxw(3);return t.KtG(d.studentReportService.selectedGroup=i)}),t.TgZ(17,"option",17),t._uU(18,"Lone Wolf"),t.qZA(),t.YNc(19,y,2,2,"option",18),t.qZA()()()()(),t.TgZ(20,"div",19)(21,"div",20)(22,"div",21)(23,"div",22),t._uU(24,"#"),t.qZA(),t.TgZ(25,"div",23),t._uU(26,"User"),t.qZA(),t.TgZ(27,"div",24),t._uU(28,"Started"),t.qZA(),t.TgZ(29,"div",24),t._uU(30,"Last Accessed"),t.qZA(),t.TgZ(31,"div",22),t._uU(32,"Done"),t.qZA(),t._UZ(33,"div",22),t.qZA(),t.YNc(34,b,15,17,"div",25),t.ALo(35,"filter"),t.qZA()()()()}if(2&n){const e=o.ngIf,s=t.MAs(15),i=t.oxw().ngIf,d=t.oxw().ngIf,l=t.oxw();t.Q6J("appThemeSet",e.settings.theme),t.xp6(7),t.Q6J("ngIf",t.lcZ(8,8,l.publisherCourseInfo$)),t.xp6(4),t.AsE("Students: ",t.xi3(12,10,d,s.value.id).length," / ",d.length,""),t.xp6(5),t.Q6J("ngModel",l.studentReportService.selectedGroup),t.xp6(1),t.Q6J("value",0),t.xp6(2),t.Q6J("ngForOf",i),t.xp6(15),t.Q6J("ngForOf",t.xi3(35,13,d,s.value.id))}}function w(n,o){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,U,36,16,"div",3),t.ALo(2,"async"),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.publisherInfo$))}}function G(n,o){if(1&n&&(t.TgZ(0,"div",1),t.YNc(1,w,3,3,"div",2),t.ALo(2,"async"),t.qZA()),2&n){const e=t.oxw();t.Q6J("@fadeInOut",void 0),t.xp6(1),t.Q6J("ngIf",t.lcZ(2,2,e.courseStudentGroups$))}}let L=(()=>{class n{constructor(e,s,i,d){this.route=e,this.router=s,this.webcoursesService=i,this.studentReportService=d,this.faBook=x.FL8}ngOnInit(){this.courseStudents$=this.route.data.pipe((0,p.U)(e=>e.students)),this.courseStudentGroups$=this.route.data.pipe((0,p.U)(e=>e.studentsGroups)),this.publisherInfo$=this.route.data.pipe((0,p.U)(e=>e.publisherInfo)),this.publisherCourseInfo$=this.webcoursesService.getWebcourses(this.route.snapshot.params.cid)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.gz),t.Y36(a.F0),t.Y36(_.h),t.Y36(v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-course-progress"]],decls:2,vars:3,consts:[["id","fullMainContent",4,"ngIf"],["id","fullMainContent"],[4,"ngIf"],[3,"appThemeSet",4,"ngIf"],[3,"appThemeSet"],[1,"card","mx-2"],[1,"card-header"],[1,"d-flex","justify-content-between"],[1,"align-self-top"],[1,"common-heading","mb-0"],["class","text-dark text-uppercase",4,"ngIf"],[1,"m-0","mt-md-1","mt-lg-3","text-uppercase"],[1,"font-weight-bold"],[1,"align-self-center"],["novalidate","",1,"form-group"],["group","ngForm"],["name","id",1,"form-control",3,"ngModel","ngModelChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"card-body"],[1,"list-group"],[1,"row","mb-2","pb-3","font-weight-bold","text-uppercase","text-dark","border-bottom"],[1,"col-1"],[1,"col-5"],[1,"col-2"],["class","row my-2 handy",4,"ngFor","ngForOf"],[1,"text-dark","text-uppercase"],[1,"row","my-2","handy"],[1,"col-1","text-nowrap",3,"title"],[1,"col-5","text-nowrap"],["target","_blank",3,"href"],[1,"font-weight-bold",3,"title","innerHtml"],[1,"col-2","text-nowrap"],[1,"col-1","text-nowrap"],[2,"font-size","125%","color","cornflowerblue",3,"icon","routerLink"]],template:function(e,s){1&e&&(t.YNc(0,G,3,4,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,s.courseStudents$))},dependencies:[c.sg,c.O5,a.rH,g.BN,u._Y,u.YN,u.Kr,u.EJ,u.JJ,u.JL,u.On,u.F,T.D,c.Ov,c.JJ,F],data:{animation:[Z.t]}}),n})(),m=(()=>{class n{constructor(e){this.localService=e}resolve(e,s){return this.localService.getCourseProgress(e.params.cid)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(v))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),h=(()=>{class n{constructor(e){this.localService=e}resolve(e){return this.localService.getCourseStudentsGroups(e.params.cid)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(v))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var S=r(6350);const M=[{path:"",component:L,resolve:{students:m,studentsGroups:h,publisherInfo:S.p},data:{title:"Webcourse Students"}}];let Y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[m,h,S.p],imports:[[a.Bz.forChild(M)],c.ez,a.Bz]}),n})();var Q=r(8976);let O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,a.Bz,g.uH,Y,u.u5,Q.g]}),n})()}}]);