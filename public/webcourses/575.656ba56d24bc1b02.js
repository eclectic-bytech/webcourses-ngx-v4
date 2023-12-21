"use strict";(self.webpackChunkwebcourses_ngx=self.webpackChunkwebcourses_ngx||[]).push([[575],{9575:(S,l,s)=>{s.r(l),s.d(l,{HelpModule:()=>H});var u=s(6895),a=s(5845),g=s(658),e=s(5062),d=s(8208),f=s(8848),h=s(1665),m=s(529);const Z=function(){return["/user","webcourses"]};function v(t,r){1&t&&(e.TgZ(0,"a",20),e._uU(1,"My Courses"),e.qZA()),2&t&&e.Q6J("routerLink",e.DdM(1,Z))}function U(t,r){1&t&&(e.TgZ(0,"span"),e._UZ(1,"br"),e.TgZ(2,"a",21),e._uU(3,"Register"),e.qZA(),e._uU(4," or "),e.TgZ(5,"a",22),e._uU(6,"sign in"),e.qZA(),e._uU(7,". "),e.qZA())}function _(t,r){1&t&&e._UZ(0,"br")}function T(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1,", "),e.TgZ(2,"a",22),e._uU(3,"sign in"),e.qZA(),e._uU(4," and"),e.qZA())}function A(t,r){1&t&&(e.TgZ(0,"strong"),e._uU(1,"My Courses"),e.qZA())}function b(t,r){1&t&&(e.TgZ(0,"strong"),e._uU(1,"My Courses"),e.qZA())}function C(t,r){1&t&&(e.TgZ(0,"span"),e._UZ(1,"br"),e.TgZ(2,"a",22),e._uU(3,"Sign in"),e.qZA(),e._uU(4," to access it. "),e.qZA())}let p=(()=>{class t{constructor(i,n,o,c,I){this.activatedRoute=i,this.userService=n,this.themeService=o,this.configService=c,this.httpClient=I}ngOnInit(){this.activatedRoute.snapshot.params.pub_id&&this.httpClient.get(`${this.configService.params.api.route}/publisher/profile/${this.activatedRoute.snapshot.params.pub_id}`).subscribe(i=>{this.themeService.activePublisher$.next(i)})}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(a.gz),e.Y36(d.K),e.Y36(f.f),e.Y36(h.E),e.Y36(m.eN))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-help"]],decls:63,vars:9,consts:[["id","fullMainContent",1,"container-fluid"],[1,"row","justify-content-center","min-vh-100"],[1,"col"],[1,"d-flex","flex-column","h-100"],[1,"row","justify-content-center"],[1,"container","my-5"],[1,"row"],[1,"mb-2","mt-4","text-uppercase"],[1,"col-12","p-3"],["hotMyCourses",""],[1,"mb-2","mb-sm-3","text-uppercase","text-dark","py-2"],[4,"ngIf"],[1,"mt-1","mb-3",2,"line-height","2"],[4,"ngIf","ngIfElse"],[1,"mb-2","mb-sm-3","mt-5","text-uppercase"],[1,"mb-3","text-dark","text-uppercase","mt-5"],[1,"py-2"],[1,"lead"],[1,"text-secondary"],["id","anastasia",1,"row","justify-content-center","flex-grow-1"],[1,"font-weight-bold",3,"routerLink"],["href","/user/register",1,"font-weight-bold"],["href","/user/login",1,"font-weight-bold"]],template:function(n,o){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",2)(8,"h3",7),e._uU(9,"Help"),e.qZA()()(),e.TgZ(10,"div",6)(11,"div",8),e.YNc(12,v,2,2,"ng-template",null,9,e.W1O),e.TgZ(14,"h4",10),e._uU(15,"Course Access Codes"),e.qZA(),e.TgZ(16,"p"),e._uU(17," To use a "),e.TgZ(18,"strong"),e._uU(19,"Course Access Code"),e.qZA(),e._uU(20,", you must have a cultivatelearning.ca account, and be signed in. "),e.YNc(21,U,8,0,"span",11),e.qZA(),e.TgZ(22,"p"),e._uU(23," If you received a code-embeded link via email, follow it for code-less entry. "),e.YNc(24,_,1,0,"br",11),e._uU(25," To enter a code manually"),e.YNc(26,T,5,0,"span",11),e._uU(27,": "),e.qZA(),e.TgZ(28,"ol",12)(29,"li"),e._uU(30," Click the "),e.TgZ(31,"strong"),e._uU(32,"Unlock a course using an access code"),e.qZA(),e._uU(33," button located on the "),e.YNc(34,A,2,0,"strong",13),e._uU(35," page. "),e.qZA(),e.TgZ(36,"li"),e._uU(37," Copy and paste the "),e.TgZ(38,"strong"),e._uU(39,"Course Acccess Code"),e.qZA(),e._uU(40," you received and click "),e.TgZ(41,"strong"),e._uU(42,"Enter"),e.qZA(),e._uU(43,". "),e.qZA()(),e.TgZ(44,"h4",14),e._uU(45,"Purchased and unlocked courses"),e.qZA(),e.TgZ(46,"p"),e._uU(47,"All your courses are available from the the top-right corner's "),e.TgZ(48,"strong"),e._uU(49,"User Menu"),e.qZA(),e._uU(50," dropdown under "),e.YNc(51,b,2,0,"strong",13),e._uU(52,". "),e.YNc(53,C,5,0,"span",11),e.qZA(),e.TgZ(54,"h4",15),e._uU(55,"Inquiries about a specific webcourse"),e.qZA(),e.TgZ(56,"div",16)(57,"span",17),e._uU(58,"Please contact the corresponding publisher."),e.qZA(),e._UZ(59,"br"),e.TgZ(60,"span",18),e._uU(61," Details are available in the Publisher tab inside each course, and on course specific pages, accessible through following the course title link. "),e.qZA()()()()()(),e._UZ(62,"div",19),e.qZA()()()()),2&n){const c=e.MAs(13);e.Q6J("@fadeInOut",void 0),e.xp6(21),e.Q6J("ngIf",!o.userService.user),e.xp6(3),e.Q6J("ngIf",!o.userService.user),e.xp6(2),e.Q6J("ngIf",!o.userService.user),e.xp6(8),e.Q6J("ngIf",!o.userService.user)("ngIfElse",c),e.xp6(17),e.Q6J("ngIf",!o.userService.user)("ngIfElse",c),e.xp6(2),e.Q6J("ngIf",!o.userService.user)}},dependencies:[u.O5,a.rH],data:{animation:[g.t]}})}return t})();const y=[{path:"",component:p,data:{title:"Cultivate Learning Help"}},{path:":pub_id",component:p,data:{title:"Help"}}];let x=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[[a.Bz.forChild(y)],u.ez,a.Bz]})}return t})(),q=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[u.ez]})}return t})(),H=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[u.ez,x,q]})}return t})()}}]);