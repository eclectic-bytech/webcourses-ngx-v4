"use strict";(self.webpackChunkwebcourses_ngx=self.webpackChunkwebcourses_ngx||[]).push([[262],{6262:(y,c,n)=>{n.r(c),n.d(c,{UnderConstructionModule:()=>C});var a=n(4666),l=n(3369),o=n(5724),d=n(658),t=n(1046),h=n(8987),p=n(1665),g=n(8208);const b=function(){return["/admin","publisher","courses"]};function m(e,T){1&e&&(t.TgZ(0,"div")(1,"p",10),t._uU(2," Course added to your "),t.TgZ(3,"a",11),t._uU(4," publisher course directory"),t.qZA(),t._uU(5,". "),t.qZA(),t.TgZ(6,"div",12)(7,"p",4)(8,"span",13),t._uU(9,"Congratulations"),t.qZA(),t._UZ(10,"br"),t.TgZ(11,"span",14),t._uU(12,"You've locked in reduced pricing for this course."),t.qZA()()()()),2&e&&(t.xp6(3),t.Q6J("routerLink",t.DdM(1,b)))}const f=[{path:"",component:(()=>{class e{constructor(s,r,i,u,U){this.httpClient=s,this.router=r,this._snackBar=i,this.configService=u,this.userService=U,this.subscribe=!1}continueBtn(){this.subscribe?this.newSubscriber():this.redirectUser()}newSubscriber(){this.httpClient.post(`${this.configService.params.api.route}/user/role`,{role:"builder_sub"}).subscribe(()=>{this._snackBar.open("Thank you for subscribing!","",{duration:3e3})},s=>{},()=>{this.redirectUser()})}redirectUser(){this.userService.userHasRole(2)?this.router.navigateByUrl("/admin/publisher/courses"):this.router.navigateByUrl("/user/webcourses")}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(h.eN),t.Y36(o.F0),t.Y36(l.ux),t.Y36(p.E),t.Y36(g.K))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["wngx-under-construction"]],decls:16,vars:3,consts:[[1,"bg"],["id","fullMainContent"],[1,"container-flex","m-5"],[4,"ngIf"],[1,"lead","text-light"],[1,"mt-4","text-light"],["type","checkbox","id","newsletter",1,"form-check-input","ml-0",3,"change"],["for","newsletter","aria-describedby","newsletterHelp",1,"form-check-label","ml-4","pl-2"],["id","newsletterHelp",1,"form-text","ml-4","pl-2"],[1,"btn","btn-primary","btn-lg","mt-4",3,"click"],[1,"h4","my-4","text-light"],["type","button",3,"routerLink"],[1,"my-2"],[1,"font-weight-bolder","text-uppercase"],[1,"font-italic"]],template:function(r,i){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,m,13,2,"div",3),t.TgZ(4,"p",4),t._uU(5," We're still working on the web course builder."),t._UZ(6,"br"),t._uU(7," The features for adding activities and chapters are not yet available. "),t.qZA(),t.TgZ(8,"p",5)(9,"input",6),t.NdJ("change",function(){return i.subscribe=!i.subscribe}),t.qZA(),t.TgZ(10,"label",7),t._uU(11," Let me know about status changes to this tearful reality. "),t.qZA(),t.TgZ(12,"small",8),t._uU(13),t.qZA()(),t.TgZ(14,"button",9),t.NdJ("click",function(){return i.continueBtn()}),t._uU(15," Continue "),t.qZA()()()()),2&r&&(t.Q6J("@fadeInOut",void 0),t.xp6(3),t.Q6J("ngIf",i.userService.userHasRole(2)),t.xp6(10),t.hij("We'll email you at ",i.userService.user.email," with occasional updates and launch status."))},dependencies:[a.O5,o.rH],styles:["#fullMainContent[_ngcontent-%COMP%]{height:100vh!important}.bg[_ngcontent-%COMP%]{background-image:url(/webcourses/assets/bg.jpg);height:100%;background-position:center;background-repeat:no-repeat;background-size:cover}"],data:{animation:[d.t]}})}return e})(),title:"Under construction - sorry."}];let v=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[o.Bz.forChild(f),o.Bz]})}return e})(),C=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[a.ez,l.ZX,v]})}return e})()}}]);
//# sourceMappingURL=262.6fa2d1d61f67625d.js.map