"use strict";(self.webpackChunkwebcourses_ngx=self.webpackChunkwebcourses_ngx||[]).push([[592],{7475:(u,p,i)=>{i.d(p,{g:()=>_});var t=i(801),r=i(5062),e=i(3868);let _=(()=>{class c{constructor(){this.faSpinner=t.LM3}}return c.\u0275fac=function(s){return new(s||c)},c.\u0275cmp=r.Xpm({type:c,selectors:[["app-loading-spinner"]],decls:2,vars:3,consts:[[1,"text-center","my-3"],[1,"wcng-spinner",3,"icon","pulse","spin"]],template:function(s,m){1&s&&(r.TgZ(0,"div",0),r._UZ(1,"fa-icon",1),r.qZA()),2&s&&(r.xp6(1),r.Q6J("icon",m.faSpinner)("pulse",!0)("spin",!0))},dependencies:[e.BN],styles:[".wcng-spinner[_ngcontent-%COMP%]{font-size:48px;color:#f5f5f5}.dark[_ngcontent-%COMP%]{color:#6b7075}"]}),c})()},3630:(u,p,i)=>{i.d(p,{z:()=>_});var t=i(6895),r=i(3868),e=i(5062);let _=(()=>{class c{}return c.\u0275fac=function(s){return new(s||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[t.ez,r.uH]}),c})()},6350:(u,p,i)=>{i.d(p,{p:()=>e});var t=i(5062),r=i(5517);let e=(()=>{class _{constructor(a){this.publisherService=a}resolve(a){return a.paramMap.get("aid")?this.publisherService.getPublisher(a.paramMap.get("aid"),"aid"):a.paramMap.get("pid")?this.publisherService.getPublisher(a.paramMap.get("pid"),"pid"):this.publisherService.getPublisher(a.paramMap.get("pub_id"),"pub")}}return _.\u0275fac=function(a){return new(a||_)(t.LFG(r.p))},_.\u0275prov=t.Yz7({token:_,factory:_.\u0275fac}),_})()},5517:(u,p,i)=>{i.d(p,{p:()=>_});var t=i(5062),r=i(529),e=i(1665);let _=(()=>{class c{constructor(s,m){this.http=s,this.config=m}getPublisher(s,m){return this.http.get(`\n      ${this.config.params.api.route}/publisher/profile/${s}\n    `).pipe(g=>g)}}return c.\u0275fac=function(s){return new(s||c)(t.LFG(r.eN),t.LFG(e.E))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},9663:(u,p,i)=>{i.d(p,{h:()=>_});var t=i(5062),r=i(529),e=i(1665);let _=(()=>{class c{constructor(s,m){this.httpClient=s,this.configService=m}getWebcourses(s){return this.httpClient.get(`${this.configService.params.api.route}/publisher/admin/courses/index.php${s?`?cid=${s}`:""}`).pipe(g=>g)}}return c.\u0275fac=function(s){return new(s||c)(t.LFG(r.eN),t.LFG(e.E))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},7913:(u,p,i)=>{i.d(p,{w:()=>I});var t=i(801),r=i(658),e=i(5062),_=i(6895),c=i(3868),a=i(9067);function s(n,l){if(1&n&&e._UZ(0,"fa-icon",11),2&n){const o=e.oxw(5);e.Q6J("icon",o.faTimes)}}function m(n,l){if(1&n&&e._UZ(0,"fa-icon",12),2&n){const o=e.oxw(5);e.Q6J("icon",o.faCheck)}}function g(n,l){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,s,1,1,"fa-icon",9),e.YNc(2,m,1,1,"fa-icon",10),e.qZA()),2&n){const o=e.oxw(2).$implicit;e.xp6(1),e.Q6J("ngIf",!o.correct),e.xp6(1),e.Q6J("ngIf",o.correct)}}function v(n,l){if(1&n&&e._UZ(0,"fa-icon",14),2&n){const o=e.oxw(5);e.Q6J("icon",o.faCheck)}}function M(n,l){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,v,1,1,"fa-icon",13),e.qZA()),2&n){const o=e.oxw(2).$implicit;e.xp6(1),e.Q6J("ngIf",o.correct)}}function x(n,l){if(1&n&&(e.TgZ(0,"div",7),e.YNc(1,g,3,2,"span",8),e.YNc(2,M,2,1,"span",8),e.qZA()),2&n){const o=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",o.selected),e.xp6(1),e.Q6J("ngIf",!o.selected)}}function C(n,l){if(1&n&&(e.TgZ(0,"span"),e._UZ(1,"fa-icon",12),e.qZA()),2&n){const o=e.oxw(4);e.xp6(1),e.Q6J("icon",o.faCheck)}}function E(n,l){if(1&n&&(e.TgZ(0,"div",7),e.YNc(1,C,2,1,"span",8),e.qZA()),2&n){const o=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",o.selected)}}const P=function(n){return{"border-bottom":n}};function h(n,l){if(1&n&&(e.TgZ(0,"div",0),e.YNc(1,x,3,2,"div",5),e.YNc(2,E,2,1,"div",5),e._UZ(3,"div",6),e.ALo(4,"safehtml"),e.qZA()),2&n){const o=l.$implicit,d=l.last,f=e.oxw(2);e.xp6(1),e.Q6J("ngIf",f.activity.meta.marked),e.xp6(1),e.Q6J("ngIf",!f.activity.meta.marked),e.xp6(1),e.Q6J("ngStyle",e.VKq(7,P,d?"":"1px dashed #999"))("innerHtml",e.xi3(4,4,o.caption,"html"),e.oJD)}}function O(n,l){if(1&n&&(e.TgZ(0,"div",3),e.YNc(1,h,5,9,"div",4),e.qZA()),2&n){const o=e.oxw();e.xp6(1),e.Q6J("ngForOf",o.activity.answers)}}function w(n,l){if(1&n&&(e.TgZ(0,"div",15)(1,"textarea",16),e._uU(2),e.qZA()()),2&n){const o=e.oxw();e.xp6(1),e.Q6J("rows",o.activity.user_answers.length/78),e.xp6(1),e.hij("",o.activity.user_answers,"\n    ")}}function y(n,l){if(1&n&&(e.TgZ(0,"div",15),e._UZ(1,"input",17),e.qZA()),2&n){const o=e.oxw();e.xp6(1),e.s9C("value",o.activity.user_answers)}}function T(n,l){if(1&n&&e._UZ(0,"li",20),2&n){const o=l.$implicit,d=e.oxw(2);e.Q6J("ngClass",d.markColours(o))("innerHtml",o.caption,e.oJD)}}function D(n,l){if(1&n&&(e.TgZ(0,"div",3)(1,"ul",18),e.YNc(2,T,1,2,"li",19),e.qZA()()),2&n){const o=e.oxw();e.xp6(2),e.Q6J("ngForOf",o.activity.answers)}}function A(n,l){if(1&n&&e._UZ(0,"img",22),2&n){const o=l.$implicit,d=e.oxw(2);e.Q6J("src",o.caption.src,e.LSH)("alt",o.caption.alt)("ngClass",d.markColours(o))}}function R(n,l){if(1&n&&(e.TgZ(0,"div",3),e.YNc(1,A,1,3,"img",21),e.qZA()),2&n){const o=e.oxw();e.xp6(1),e.Q6J("ngForOf",o.activity.answers)}}let I=(()=>{class n{constructor(){this.faTimes=t.NBC,this.faCheck=t.LEp}ngOnInit(){}markColours(o){return this.colours=o.selected&&1===o.correct?"clickCorrect":o.selected&&0===o.correct?"clickWrong":o.selected||1!==o.correct?"clickFalse":"clickMissed",this.colours}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-review-mode"]],inputs:{activity:"activity"},decls:6,vars:6,consts:[[1,"row"],["class","container-fluid",4,"ngIf"],["class","container",4,"ngIf"],[1,"container-fluid"],["class","row",4,"ngFor","ngForOf"],["class","col-sm-1 col-2 py-1 text-center",4,"ngIf"],[1,"col-sm-10","col-9","py-1",3,"ngStyle","innerHtml"],[1,"col-sm-1","col-2","py-1","text-center"],[4,"ngIf"],["size","lg","class","text-danger",3,"icon",4,"ngIf"],["size","lg","class","text-success",3,"icon",4,"ngIf"],["size","lg",1,"text-danger",3,"icon"],["size","lg",1,"text-success",3,"icon"],["size","lg","style","color: #c8cacc;",3,"icon",4,"ngIf"],["size","lg",2,"color","#c8cacc",3,"icon"],[1,"container"],["cols","66","disabled","",1,"form-control",3,"rows"],["type","text","disabled","",1,"form-control",3,"value"],[1,"clickActivity"],["class","text-left px-3",3,"ngClass","innerHtml",4,"ngFor","ngForOf"],[1,"text-left","px-3",3,"ngClass","innerHtml"],["class","click-img mr-2 mt-2",3,"src","alt","ngClass",4,"ngFor","ngForOf"],[1,"click-img","mr-2","mt-2",3,"src","alt","ngClass"]],template:function(o,d){1&o&&(e.TgZ(0,"div",0),e.YNc(1,O,2,1,"div",1),e.YNc(2,w,3,2,"div",2),e.YNc(3,y,2,1,"div",2),e.YNc(4,D,3,1,"div",1),e.YNc(5,R,2,1,"div",1),e.qZA()),2&o&&(e.Q6J("@fadeInOut",void 0),e.xp6(1),e.Q6J("ngIf","radio"===d.activity.meta.activity_type||"checkbox"===d.activity.meta.activity_type),e.xp6(1),e.Q6J("ngIf","textarea"===d.activity.meta.activity_type),e.xp6(1),e.Q6J("ngIf","text"===d.activity.meta.activity_type),e.xp6(1),e.Q6J("ngIf","click"===d.activity.meta.activity_type&&"image"!=d.activity.meta.style),e.xp6(1),e.Q6J("ngIf","click"===d.activity.meta.activity_type&&"image"===d.activity.meta.style))},dependencies:[_.mk,_.sg,_.O5,_.PC,c.BN,a.r],styles:[".clickActivity[_ngcontent-%COMP%]{list-style-type:none;margin:0;padding:0}.clickActivity[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:3px 3px 3px 0;float:left;font-size:1em;text-align:center;border-radius:4px;padding:5px}li.clickSelected[_ngcontent-%COMP%]{border:1px solid #aed0ea;background:papayawhip;color:#2779aa}li.clickFalse[_ngcontent-%COMP%]{border:1px solid #aed0ea;background:transparent;color:#2779aa}li.clickActivity[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin:0;padding:5px}li.clickCorrect[_ngcontent-%COMP%]{border:1px solid #25a00d;background:#97dd97;color:#1f2a30}li.clickWrong[_ngcontent-%COMP%]{border:1px solid #bd3d27;background:#cc5f5f;color:#e6eaec}li.clickMissed[_ngcontent-%COMP%]{border:1px solid #666666;background:#bbbaba;color:#555}img.clickCorrect[_ngcontent-%COMP%]{box-shadow:0 0 3px 6px #198019}img.clickWrong[_ngcontent-%COMP%]{box-shadow:0 0 3px 6px #bd3d27}img.clickMissed[_ngcontent-%COMP%]{box-shadow:0 0 3px 6px #666}.click-img[_ngcontent-%COMP%]{max-width:150px;border-radius:1rem}"],data:{animation:[r.t]}}),n})()},1097:(u,p,i)=>{i.d(p,{G:()=>c});var t=i(6895),r=i(3868),e=i(4586),_=i(5062);let c=(()=>{class a{}return a.\u0275fac=function(m){return new(m||a)},a.\u0275mod=_.oAB({type:a}),a.\u0275inj=_.cJS({imports:[t.ez,e.D,r.uH]}),a})()},2514:(u,p,i)=>{i.d(p,{c:()=>r});var t=i(5062);let r=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-footer"]],decls:27,vars:2,consts:[[1,"container-fluid","bg-dark","mt-3","mt-lg-5"],[1,"row","py-5"],[1,"col","px-5","text-light"],[1,"font-weight-bold"],[3,"href"],["title","Good Ware","target","_blank",3,"href"],["href","https://www.flaticon.com/","title","Flaticon"]],template:function(c,a){1&c&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5")(4,"u"),t._uU(5,"Support"),t.qZA()(),t.TgZ(6,"p"),t._uU(7," Course specific inquiries shoud be forwarded to its publisher."),t._UZ(8,"br"),t.TgZ(9,"span",3),t._uU(10,"Tech Support"),t.qZA(),t._uU(11," provided by "),t.TgZ(12,"a",4),t._uU(13,"support@cultivatelearning.ca"),t.qZA(),t._uU(14,"."),t._UZ(15,"br"),t.qZA()(),t.TgZ(16,"div",2)(17,"h5")(18,"u"),t._uU(19,"Credits"),t.qZA()(),t.TgZ(20,"small"),t._uU(21,"Leaf image: "),t.TgZ(22,"a",5),t._uU(23," Good Ware"),t.qZA(),t._uU(24," from "),t.TgZ(25,"a",6),t._uU(26," www.flaticon.com"),t.qZA()()()()()),2&c&&(t.xp6(12),t.Q6J("href","mailto:support@cultivatelearning.ca",t.LSH),t.xp6(10),t.Q6J("href","https://www.flaticon.com/free-icon/leaf_861054?term=leaf&page=3&position=29",t.LSH))}}),e})()},4211:(u,p,i)=>{i.d(p,{_:()=>e});var t=i(6895),r=i(5062);let e=(()=>{class _{}return _.\u0275fac=function(a){return new(a||_)},_.\u0275mod=r.oAB({type:_}),_.\u0275inj=r.cJS({imports:[t.ez]}),_})()}}]);