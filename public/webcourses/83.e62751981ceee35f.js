"use strict";(self.webpackChunkwebcourses_ngx=self.webpackChunkwebcourses_ngx||[]).push([[83],{8083:(N,u,s)=>{s.r(u),s.d(u,{DiscountCodesModule:()=>H});var d=s(4666),m=s(6416),p=s(2508),h=s(4522),g=s(3369),e=s(1046);const v=new e.OlP("WindowToken",typeof window<"u"&&window.document?{providedIn:"root",factory:()=>window}:{providedIn:"root",factory:()=>{}});var C=s(2218);let x=(()=>{class i{constructor(t,n,o){this.ngZone=t,this.document=n,this.window=o,this.copySubject=new C.xQ,this.copyResponse$=this.copySubject.asObservable(),this.config={}}configure(t){this.config=t}copy(t){if(!this.isSupported||!t)return this.pushCopyResponse({isSuccess:!1,content:t});const n=this.copyFromContent(t);return this.pushCopyResponse(n?{content:t,isSuccess:n}:{isSuccess:!1,content:t})}get isSupported(){return!!this.document.queryCommandSupported&&!!this.document.queryCommandSupported("copy")&&!!this.window}isTargetValid(t){if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement){if(t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');return!0}throw new Error("Target should be input or textarea")}copyFromInputElement(t,n=!0){try{this.selectTarget(t);const o=this.copyText();return this.clearSelection(n?t:void 0,this.window),o&&this.isCopySuccessInIE11()}catch{return!1}}isCopySuccessInIE11(){const t=this.window.clipboardData;return!(t&&t.getData&&!t.getData("Text"))}copyFromContent(t,n=this.document.body){if(this.tempTextArea&&!n.contains(this.tempTextArea)&&this.destroy(this.tempTextArea.parentElement||void 0),!this.tempTextArea){this.tempTextArea=this.createTempTextArea(this.document,this.window);try{n.appendChild(this.tempTextArea)}catch{throw new Error("Container should be a Dom element")}}this.tempTextArea.value=t;const o=this.copyFromInputElement(this.tempTextArea,!1);return this.config.cleanUpAfterCopy&&this.destroy(this.tempTextArea.parentElement||void 0),o}destroy(t=this.document.body){this.tempTextArea&&(t.removeChild(this.tempTextArea),this.tempTextArea=void 0)}selectTarget(t){return t.select(),t.setSelectionRange(0,t.value.length),t.value.length}copyText(){return this.document.execCommand("copy")}clearSelection(t,n){t&&t.focus(),n.getSelection()?.removeAllRanges()}createTempTextArea(t,n){const o="rtl"===t.documentElement.getAttribute("dir");let r;return r=t.createElement("textarea"),r.style.fontSize="12pt",r.style.border="0",r.style.padding="0",r.style.margin="0",r.style.position="absolute",r.style[o?"right":"left"]="-9999px",r.style.top=(n.pageYOffset||t.documentElement.scrollTop)+"px",r.setAttribute("readonly",""),r}pushCopyResponse(t){this.copySubject.observers.length>0&&this.ngZone.run(()=>{this.copySubject.next(t)})}pushCopyReponse(t){this.pushCopyResponse(t)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(e.R0b),e.LFG(d.K0),e.LFG(v,8))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),b=(()=>{class i{constructor(t,n,o,r){this.ngZone=t,this.host=n,this.renderer=o,this.clipboardSrv=r,this.cbOnSuccess=new e.vpe,this.cbOnError=new e.vpe,this.onClick=a=>{this.clipboardSrv.isSupported?this.targetElm&&this.clipboardSrv.isTargetValid(this.targetElm)?this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm),this.targetElm.value,a):this.cbContent&&this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent,this.container),this.cbContent,a):this.handleResult(!1,void 0,a)}}ngOnInit(){this.ngZone.runOutsideAngular(()=>{this.clickListener=this.renderer.listen(this.host.nativeElement,"click",this.onClick)})}ngOnDestroy(){this.clickListener&&this.clickListener(),this.clipboardSrv.destroy(this.container)}handleResult(t,n,o){let r={isSuccess:t,content:n,successMessage:this.cbSuccessMsg,event:o};t?this.cbOnSuccess.observed&&this.ngZone.run(()=>{this.cbOnSuccess.emit(r)}):this.cbOnError.observed&&this.ngZone.run(()=>{this.cbOnError.emit(r)}),this.clipboardSrv.pushCopyResponse(r)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.R0b),e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(x))},i.\u0275dir=e.lG2({type:i,selectors:[["","ngxClipboard",""]],inputs:{targetElm:["ngxClipboard","targetElm"],container:"container",cbContent:"cbContent",cbSuccessMsg:"cbSuccessMsg"},outputs:{cbOnSuccess:"cbOnSuccess",cbOnError:"cbOnError"}}),i})(),y=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.ez]}),i})();var l=s(5724),T=s(658),S=s(8987),Z=s(1665);let A=(()=>{class i{constructor(t,n){this.httpClient=t,this.configService=n}getDiscountCodes(t){let n=`${this.configService.params.api.route}/admin/publisher/access-codes`;return n=t?`${n}?cid=${t}`:n,this.httpClient.get(n).pipe(o=>o)}static#e=this.\u0275fac=function(n){return new(n||i)(e.LFG(S.eN),e.LFG(Z.E))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var D=s(727),_=s(7475),I=s(4299);function w(i,c){1&i&&(e.TgZ(0,"div",6),e._uU(1," You don't have any courses with access codes. "),e.qZA())}function O(i,c){1&i&&(e.TgZ(0,"div",6),e._uU(1," This course does not have any access codes. "),e.qZA())}const R=function(i){return[i,"users"]};function E(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td",26),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(4);return e.KtG(o.regLinkCopied("Registration link copied."))}),e.TgZ(2,"div")(3,"span"),e._uU(4),e.qZA(),e._UZ(5,"i",27)(6,"span",28),e.qZA()(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td",29),e._uU(10),e.TgZ(11,"span",30),e._uU(12,"/ "),e._UZ(13,"span",31),e.qZA()(),e._UZ(14,"td",32),e.TgZ(15,"td",33),e._uU(16),e.ALo(17,"date"),e.qZA(),e.TgZ(18,"td",34),e._uU(19),e.ALo(20,"date"),e.qZA()()}if(2&i){const t=c.$implicit,n=e.oxw(4);e.xp6(1),e.Q6J("cbContent","https://www.cultivatelearning.ca/user/register?code="+t.code)("title","Copy https://www.cultivatelearning.ca/user/register?code="+t.code),e.xp6(3),e.Oqu(t.code),e.xp6(2),e.Q6J("ngClass",n.pillClass(t))("innerHtml",0===t.uses_max?"\u221e":t.uses_max-t.uses,e.oJD),e.xp6(2),e.Oqu(t.label),e.xp6(1),e.Q6J("routerLink",e.VKq(18,R,t.id)),e.xp6(1),e.hij(" ",t.uses," "),e.xp6(3),e.Q6J("innerHTML",0===t.uses_max?"\u221e":t.uses_max,e.oJD),e.xp6(1),e.Q6J("innerHTML",0===t.uses_max?"\u221e":t.uses_max,e.oJD),e.xp6(2),e.Oqu(e.xi3(17,12,t.updated_at,"mediumDate")),e.xp6(3),e.Oqu(e.xi3(20,15,t.created_at,"mediumDate"))}}function M(i,c){if(1&i&&(e.TgZ(0,"table",19)(1,"thead")(2,"tr")(3,"th",20),e._uU(4," code "),e.TgZ(5,"span",21),e._uU(6,"Available"),e.qZA()(),e.TgZ(7,"th",20),e._uU(8,"label"),e.qZA(),e.TgZ(9,"th",22),e._uU(10,"students"),e.qZA(),e.TgZ(11,"th",23),e._uU(12,"seats"),e.qZA(),e.TgZ(13,"th",24),e._uU(14,"last used"),e.qZA(),e.TgZ(15,"th",25),e._uU(16,"created"),e.qZA()()(),e.TgZ(17,"tbody"),e.YNc(18,E,21,20,"tr",5),e.qZA()()),2&i){const t=e.oxw().$implicit;e.xp6(18),e.Q6J("ngForOf",t.coupons)}}function U(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"div",7)(2,"div",8)(3,"div",9)(4,"div",10),e._UZ(5,"img",11),e.qZA()(),e.TgZ(6,"div",12)(7,"div",13),e._uU(8),e.qZA(),e.TgZ(9,"div"),e._uU(10),e.ALo(11,"date"),e.qZA(),e.TgZ(12,"div",14),e._uU(13),e.qZA()(),e.TgZ(14,"div",15)(15,"button",16),e.NdJ("click",function(){const r=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.addAccessCode(r.course.id))}),e._uU(16," Add code "),e.qZA()()()(),e.YNc(17,O,2,0,"div",17),e.YNc(18,M,19,1,"ng-template",null,18,e.W1O),e.qZA()}if(2&i){const t=c.$implicit,n=e.MAs(19),o=e.oxw(2);e.xp6(5),e.s9C("alt",t.course.cover_alt),e.Q6J("src",o.coursesService.coverImage(t.course),e.LSH),e.xp6(3),e.Oqu(t.course.title),e.xp6(2),e.Oqu(e.xi3(11,7,t.course.created_at,"longDate")),e.xp6(3),e.hij("ID: ",t.course.id,""),e.xp6(4),e.Q6J("ngIf",0===t.coupons.length)("ngIfElse",n)}}function F(i,c){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,w,2,0,"div",4),e.YNc(2,U,20,10,"div",5),e.qZA()),2&i){const t=c.ngIf;e.Q6J("@fadeInOut",void 0),e.xp6(1),e.Q6J("ngIf",0===t.length),e.xp6(1),e.Q6J("ngForOf",t)}}function L(i,c){1&i&&e._UZ(0,"app-loading-spinner")}let f=(()=>{class i{constructor(t,n,o,r,a){this.router=t,this.activatedRoute=n,this.discountCodesService=o,this.coursesService=r,this._snackBar=a}ngOnInit(){this.discountCodes$=this.discountCodesService.getDiscountCodes(this.activatedRoute.snapshot.paramMap.get("cid"))}regLinkCopied(t){this._snackBar.open(t,"",{duration:2e3})}addAccessCode(t){this.router.navigateByUrl(`/admin/publisher/discount-codes/add?cid=${t}`)}pillClass(t){let n="badge-success";return t.uses_max-t.uses<10&&0!=t.uses_max&&(n="badge-warning"),t.uses_max-t.uses<=0&&0!=t.uses_max&&(n="badge-danger"),n}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(l.F0),e.Y36(l.gz),e.Y36(A),e.Y36(D.N),e.Y36(g.ux))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-discount-codes"]],decls:6,vars:6,consts:[["id","fullMainContent",1,"container","my-5"],[3,"title"],[4,"ngIf","ngIfElse"],["loading",""],["class","container lead text-center my-5",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"container","lead","text-center","my-5"],[1,"card","my-4"],[1,"row","no-gutters","justify-content-between"],[1,"col-lg-3"],[1,"card"],[1,"card-img-top",2,"object-fit","cover","height","11rem",3,"src","alt"],[1,"col-lg-6","p-3"],[1,"h4"],[1,"text-dark"],[1,"col-lg-3","p-3","text-lg-right"],["mat-button","","color","primary",1,"border",3,"click"],["class","container lead text-center my-5",4,"ngIf","ngIfElse"],["showCodes",""],[1,"table","table-bordered","table-hover","table-striped"],[1,"text-uppercase"],[1,"badge","badge-pill","badge-success","font-weight-light","text-capitalize","mt-1","float-right"],[1,"text-right","text-uppercase"],[1,"text-right","text-uppercase","d-none","d-md-table-cell"],[1,"text-center","text-uppercase","d-none","d-md-table-cell"],[1,"text-center","text-uppercase","d-none","d-xl-table-cell"],["ngxClipboard","",1,"handy","text-primary",3,"cbContent","title","click"],[1,"fa-solid","fa-copy","mx-2","text-secondary"],[1,"badge","badge-pill","font-weight-light","mt-1","float-right",3,"ngClass","innerHtml"],["title","Report",1,"text-right","handy","text-primary",3,"routerLink"],[1,"d-inline","d-md-none","text-dark"],[3,"innerHTML"],[1,"text-right","d-none","d-md-table-cell",3,"innerHTML"],[1,"text-center","d-none","d-md-table-cell"],[1,"text-center","d-none","d-xl-table-cell"]],template:function(n,o){if(1&n&&(e.TgZ(0,"div",0),e._UZ(1,"app-header",1),e.YNc(2,F,3,3,"div",2),e.ALo(3,"async"),e.qZA(),e.YNc(4,L,1,0,"ng-template",null,3,e.W1O)),2&n){const r=e.MAs(5);e.Q6J("@fadeInOut",void 0),e.xp6(1),e.Q6J("title","course access codes"),e.xp6(1),e.Q6J("ngIf",e.lcZ(3,4,o.discountCodes$))("ngIfElse",r)}},dependencies:[d.mk,d.sg,d.O5,b,l.rH,_.g,h.lW,I.G,d.Ov,d.uU],data:{animation:[T.t]}})}return i})();const J=[{path:"",component:f,title:"Courses access codes (Cultivate Learning)"},{path:":cid",component:f,title:"Course access codes (Cultivate Learning)"},{path:"add",loadChildren:()=>s.e(717).then(s.bind(s,1717)).then(i=>i.AddAccessCodeModule)},{path:":code_id/users",loadChildren:()=>s.e(579).then(s.bind(s,2579)).then(i=>i.DiscountCodesUsersModule)}];let Y=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[[l.Bz.forChild(J)],d.ez,l.Bz]})}return i})();var j=s(3630),Q=s(7618);let H=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[d.ez,y,Y,j.z,m.lO,p.u5,p.UX,h.ot,g.ZX,Q.O]})}return i})()}}]);
//# sourceMappingURL=83.e62751981ceee35f.js.map