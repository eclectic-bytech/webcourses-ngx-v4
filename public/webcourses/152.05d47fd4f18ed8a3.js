"use strict";(self.webpackChunkwebcourses_ngx=self.webpackChunkwebcourses_ngx||[]).push([[152],{3152:(F,c,i)=>{i.r(c),i.d(c,{StudentModule:()=>I});var s=i(6895),l=i(1097),d=i(1725),a=i(4850),v=i(658),t=i(5062),m=i(7913),f=i(3210);function h(e,o){if(1&e&&t._UZ(0,"div",15),2&e){const n=t.oxw().$implicit;t.Q6J("innerHTML",n.body.after_word,t.oJD)}}function S(e,o){if(1&e&&(t.TgZ(0,"div",8)(1,"div",9),t._UZ(2,"div",10)(3,"div",11)(4,"div",12)(5,"app-review-mode",13),t.YNc(6,h,1,1,"div",14),t.qZA()()),2&e){const n=o.$implicit;t.xp6(2),t.Q6J("innerHTML",n.body.prequestion,t.oJD),t.xp6(1),t.Q6J("innerHTML",n.body.question,t.oJD),t.xp6(1),t.Q6J("innerHTML",n.body.assess_text,t.oJD),t.xp6(1),t.Q6J("activity",n),t.xp6(1),t.Q6J("ngIf",n.body.after_word)}}function g(e,o){if(1&e&&(t.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"h2",4),t._uU(4,"STUDENT COURSE ANSWERS"),t.qZA()(),t.TgZ(5,"div",5)(6,"div",6),t.YNc(7,S,7,5,"div",7),t.ALo(8,"async"),t.qZA()()()()),2&e){const n=o.ngIf,r=t.oxw();t.Q6J("appThemeSet",n.settings.theme)("@fadeInOut",void 0),t.xp6(7),t.Q6J("ngForOf",t.lcZ(8,3,r.studentActivities$))}}let y=(()=>{class e{constructor(n){this.route=n}ngOnInit(){this.studentActivities$=this.route.data.pipe((0,a.U)(n=>n.student)),this.publisherInfo$=this.route.data.pipe((0,a.U)(n=>n.publisherInfo))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-student-course-progress"]],decls:2,vars:3,consts:[["id","fullMainContent",3,"appThemeSet",4,"ngIf"],["id","fullMainContent",3,"appThemeSet"],[1,"card","mx-2"],[1,"card-header","text-center","no-print"],[1,"text-uppercase"],[1,"card-body"],[1,"container-flex"],["class","row mb-4 mx-auto","style","width: 75%",4,"ngFor","ngForOf"],[1,"row","mb-4","mx-auto",2,"width","75%"],[1,"col"],[1,"prequestion","mb-3",3,"innerHTML"],[1,"question","mb-3","h5",3,"innerHTML"],[1,"assess_text","mb-3",3,"innerHTML"],[3,"activity"],["class","after_word alert alert-primary mt-3",3,"innerHTML",4,"ngIf"],[1,"after_word","alert","alert-primary","mt-3",3,"innerHTML"]],template:function(n,r){1&n&&(t.YNc(0,g,9,5,"div",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,r.publisherInfo$))},dependencies:[s.sg,s.O5,m.w,f.D,s.Ov],data:{animation:[v.t]}}),e})();var T=i(529),x=i(1665);let M=(()=>{class e{constructor(n,r){this.httpClient=n,this.configService=r}getCompletedActivities(n,r){return this.httpClient.get(`${this.configService.params.api.route}/print/course.php?cid=${n}&uid=${r}`).pipe(A=>A)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(T.eN),t.LFG(x.E))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),u=(()=>{class e{constructor(n){this.localService=n}resolve(n,r){return this.localService.getCompletedActivities(n.params.cid,n.params.uid)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(M))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var p=i(6350);const C=[{path:"",component:y,resolve:{student:u,publisherInfo:p.p},data:{title:"Webcourse Student"}}];let J=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[u,p.p],imports:[[d.Bz.forChild(C)],s.ez,d.Bz]}),e})();var L=i(8976);let I=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.ez,l.G,J,L.g]}),e})()}}]);