"use strict";(self.webpackChunkwebcourses_ngx=self.webpackChunkwebcourses_ngx||[]).push([[26],{9026:(J,p,i)=>{i.r(p),i.d(p,{DiscountCodesUsersModule:()=>q});var a=i(6895),d=i(5845),g=i(658),_=i(8929),e=i(5062),l=i(529),m=i(1665),u=i(923);let f=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["wngx-pagination-custom"]],inputs:{codeUses:"codeUses"},decls:2,vars:3,consts:[[1,"d-flex","flex-nowrap","text-nowrap","col-form-label","px-2"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e._uU(1),e.qZA()),2&n&&(e.xp6(1),e.lnq(" Showing records ",o.codeUses.from," to ",o.codeUses.to," of ",o.codeUses.total,"\n"))}})}return t})();function C(t,c){1&t&&(e.TgZ(0,"span"),e._uU(1,"\u221e"),e.qZA())}function U(t,c){if(1&t&&e._uU(0),2&t){const s=e.oxw().ngIf;e.hij(" ",s.code.uses_max," ")}}function h(t,c){if(1&t&&e._UZ(0,"wngx-pagination-custom",22),2&t){const s=e.oxw(2).ngIf;e.Q6J("codeUses",s.code_uses)}}function x(t,c){if(1&t){const s=e.EpF();e.TgZ(0,"div",19)(1,"ngb-pagination",20),e.NdJ("pageChange",function(o){e.CHM(s);const r=e.oxw().ngIf;return e.KtG(r.code_uses.current_page=o)})("pageChange",function(o){e.CHM(s);const r=e.oxw(2);return e.KtG(r.getDiscountCodeUsers(o))}),e.YNc(2,h,1,1,"ng-template",21),e.qZA()()}if(2&t){const s=e.oxw().ngIf,n=e.oxw();e.xp6(1),e.Q6J("collectionSize",s.code_uses.total)("page",s.code_uses.current_page)("pageSize",n.itemsPerPage)}}const Z=function(t){return["/admin","publisher","course","user_progress",t]};function v(t,c){if(1&t&&(e.TgZ(0,"tr")(1,"td",23),e._uU(2),e.qZA(),e.TgZ(3,"td",24),e._uU(4),e.TgZ(5,"small"),e._uU(6),e.qZA()(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.ALo(11,"date"),e.qZA(),e.TgZ(12,"td"),e._UZ(13,"span",25),e.ALo(14,"number"),e._uU(15,"% "),e.qZA()()),2&t){const s=c.$implicit,n=c.index,o=e.oxw().ngIf;e.Q6J("@fadeInOut",void 0),e.xp6(2),e.Oqu(o.code_uses.from+n),e.xp6(1),e.Q6J("routerLink",e.VKq(15,Z,s.user_progress_id)),e.xp6(1),e.AsE(" ",s.user.first_name," ",s.user.last_name," "),e.xp6(2),e.hij("(",s.user.id,")"),e.xp6(2),e.Oqu(s.user.email),e.xp6(2),e.Oqu(e.xi3(11,9,s.created_at,"mediumDate")),e.xp6(3),e.Q6J("innerHtml",e.xi3(14,12,s.completed_activities_count/o.course.total_activities*100,"1.0-0"),e.oJD)}}function A(t,c){if(1&t){const s=e.EpF();e.TgZ(0,"div")(1,"div",2)(2,"div",3)(3,"div",4),e._UZ(4,"i",5),e.qZA(),e.TgZ(5,"div",6)(6,"div",7),e._uU(7),e.qZA(),e.TgZ(8,"div")(9,"span",8),e._uU(10,"Code:"),e.qZA(),e._uU(11),e.qZA(),e.TgZ(12,"div")(13,"span",8),e._uU(14,"Seats:"),e.qZA(),e._uU(15),e.YNc(16,C,2,0,"span",9),e.YNc(17,U,1,1,"ng-template",null,10,e.W1O),e.qZA(),e.TgZ(19,"div")(20,"span",8),e._uU(21,"Expiry:"),e.qZA(),e._uU(22),e.ALo(23,"date"),e.qZA()()()(),e.YNc(24,x,3,3,"div",11),e.TgZ(25,"table",12)(26,"thead")(27,"tr")(28,"th",13),e._uU(29,"#"),e.qZA(),e.TgZ(30,"th",14),e._uU(31,"name (id)"),e.qZA(),e.TgZ(32,"th",15),e._uU(33,"email"),e.qZA(),e.TgZ(34,"th",15),e._uU(35,"started"),e.qZA(),e.TgZ(36,"th",15),e._uU(37,"completed"),e.qZA()()(),e.TgZ(38,"tbody"),e.YNc(39,v,16,17,"tr",16),e.qZA()(),e.TgZ(40,"div",17)(41,"ngb-pagination",18),e.NdJ("pageChange",function(o){const y=e.CHM(s).ngIf;return e.KtG(y.code_uses.current_page=o)})("pageChange",function(o){e.CHM(s);const r=e.oxw();return e.KtG(r.getDiscountCodeUsers(o))}),e.qZA()()()}if(2&t){const s=c.ngIf,n=e.MAs(18),o=e.oxw();e.Q6J("@fadeInOut",void 0),e.xp6(7),e.Oqu(s.course.title),e.xp6(4),e.AsE(" ",s.code.label," (",s.code.code,") "),e.xp6(4),e.hij(" ",s.code.uses," / "),e.xp6(1),e.Q6J("ngIf",0==s.code.uses_max)("ngIfElse",n),e.xp6(6),e.hij(" ",e.xi3(23,17,s.code.expiry,"mediumDate")," "),e.xp6(2),e.Q6J("ngIf",s.code_uses.to>0),e.xp6(15),e.Q6J("ngForOf",s.code_uses.data),e.xp6(2),e.Q6J("collectionSize",s.code_uses.total)("page",s.code_uses.current_page)("maxSize",8)("ellipses",!0)("rotate",!0)("boundaryLinks",!0)("pageSize",o.itemsPerPage)}}const T=[{path:"",component:(()=>{class t{constructor(s,n,o){this.route=s,this.httpClient=n,this.configService=o,this.discountCodeUsers$=new _.xQ,this.itemsPerPage=25}ngOnInit(){this.getDiscountCodeUsers()}getDiscountCodeUsers(s=1){this.httpClient.get(`${this.configService.params.api.route}/admin/publisher/access-codes/${this.code_id}/users?page=${s}`).subscribe(n=>{this.discountCodeUsers$.next(n)})}get code_id(){return this.route.snapshot.paramMap.get("code_id")}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(d.gz),e.Y36(l.eN),e.Y36(m.E))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-discount-codes-users"]],decls:3,vars:3,consts:[["id","fullMainContent",1,"container"],[4,"ngIf"],[1,"container"],[1,"row"],[1,"col-2","display-1"],[1,"fa-sharp","fa-solid","fa-fingerprint","text-secondary"],[1,"col-10"],[1,"h2"],[1,"font-weight-bold","fw-bold"],[4,"ngIf","ngIfElse"],["noOfUses",""],["class","mt-5 mb-4",4,"ngIf"],[1,"table","table-bordered","table-hover","table-striped","mt-1"],[1,"text-uppercase","text-center"],[1,"text-uppercase"],[1,"text","text-uppercase"],[4,"ngFor","ngForOf"],[1,"mb-5"],[3,"collectionSize","page","maxSize","ellipses","rotate","boundaryLinks","pageSize","pageChange"],[1,"mt-5","mb-4"],[3,"collectionSize","page","pageSize","pageChange"],["ngbPaginationPages",""],[3,"codeUses"],[1,"text-center"],[3,"routerLink"],[3,"innerHtml"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e.YNc(1,A,42,20,"div",1),e.ALo(2,"async"),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,o.discountCodeUsers$)))},dependencies:[a.sg,a.O5,d.rH,u.N9,u.Qy,f,a.Ov,a.JJ,a.uU],data:{animation:[g.t]}})}return t})()}];let b=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#s=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(T),d.Bz]})}return t})(),D=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#s=this.\u0275inj=e.cJS({imports:[a.ez]})}return t})(),q=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#s=this.\u0275inj=e.cJS({imports:[a.ez,b,u.jF,D]})}return t})()}}]);