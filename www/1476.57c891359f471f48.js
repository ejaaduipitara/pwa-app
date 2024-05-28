"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1476],{1476:(E,d,n)=>{n.r(d),n.d(d,{TabsPageModule:()=>x});var i=n(8974),g=n(177),p=n(9417),b=n(3021),u=n(467),t=n(4438),c=n(5402);let f=(()=>{var o;class r{constructor(e){this.modalCtrl=e}ngOnInit(){}confirm(e){switch(e){case"exit":this.modalCtrl.dismiss(!0);break;case"cancel":this.modalCtrl.dismiss(!1)}}}return(o=r).\u0275fac=function(e){return new(e||o)(t.rXU(i.W3))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-app-exit"]],decls:13,vars:9,consts:[[1,"inner-content"],["slot","start"],[1,"buttons"],["slot","end","shape","round","fill","outline",1,"btn-info","exit",3,"click"],["slot","end","shape","round",1,"btn-info",3,"click"]],template:function(e,a){1&e&&(t.j41(0,"div",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button"),t.EFF(4),t.nI1(5,"translate"),t.k0s()()(),t.j41(6,"ion-toolbar",2)(7,"ion-button",3),t.bIt("click",function(){return a.confirm("exit")}),t.EFF(8),t.nI1(9,"translate"),t.k0s(),t.j41(10,"ion-button",4),t.bIt("click",function(){return a.confirm("cancel")}),t.EFF(11),t.nI1(12,"translate"),t.k0s()()()),2&e&&(t.R7$(4),t.JRh(t.bMT(5,3,"Exit the app?")),t.R7$(4),t.JRh(t.bMT(9,5,"Exit")),t.R7$(3),t.JRh(t.bMT(12,7,"Cancel")))},dependencies:[i.Jm,i.QW,i.ai,c.D9],styles:[".buttons[_ngcontent-%COMP%]{padding:0 1rem}ion-button[_ngcontent-%COMP%]{text-wrap:wrap}.btn-info[_ngcontent-%COMP%]{width:40%;color:var(--ion-color-primary-contrast);--background: var(--ion-color-tertiary);font-size:.75rem;font-family:Noto Sans;font-weight:700;text-transform:uppercase;line-height:19.6px;word-wrap:break-word;padding:5px;text-wrap:wrap;text-align:center}.exit[_ngcontent-%COMP%]{--color: var(--ion-color-tertiary);--background: white}ion-modal[_ngcontent-%COMP%]{--height: 50%;--border-radius: 1rem;--box-shadow: 0 .625rem .938rem -.188rem rgb(0 0 0 / .1), 0 .25rem .375rem -.25rem rgb(0 0 0 / .1)}ion-modal[_ngcontent-%COMP%]::part(backdrop){background:#d1d5db;opacity:1}"]}),r})();var P=n(8941),C=n(446),M=n(4517),y=n(1113),v=n(5173);const T=["tabRef"],O=[{path:"",component:(()=>{var o;class r{constructor(e,a,s,m,h){this.platform=e,this.router=a,this.tabService=s,this.telemetry=m,this.modalCtrl=h,this.optModalOpen=!1,this.configVariables=C.g}tabViewWillEnter(){this.tabService.show()}ionViewDidEnter(){var e=this;this.tabService.show(),this.subscription=this.platform.backButton.subscribeWithPriority(9999,(0,u.A)(function*(){let a;e.optModalOpen||(e.optModalOpen=!0,a=yield e.modalCtrl.create({component:f,cssClass:"sheet-modal",breakpoints:[.2],showBackdrop:!1,backdropDismiss:!1,initialBreakpoint:.2,handle:!1,handleBehavior:"none"}),yield a.present()),a.onDidDismiss().then(s=>{e.optModalOpen=!1,s.data&&s.data&&P.q.exitApp()})}))}ionViewWillEnter(){this.tabRef.outlet.component.tabViewWillEnter&&this.tabRef.outlet.component.tabViewWillEnter()}ionViewWillLeave(){this.subscription.unsubscribe()}ionTabsDidChange(e){"story"==e.tab?(this.tabService.hide(),this.telemetry.generateStartTelemetry("bot","story-sakhi"),this.router.navigate(["/story"])):"parent-sakhi"==e.tab?(this.tabService.hide(),this.telemetry.generateStartTelemetry("bot","parent-sakhi"),this.router.navigate(["/parent-sakhi"])):"teacher-sakhi"==e.tab&&(this.tabService.hide(),this.telemetry.generateStartTelemetry("bot","teacher-sakhi"),this.router.navigate(["/teacher-sakhi"]))}}return(o=r).\u0275fac=function(e){return new(e||o)(t.rXU(M.OD),t.rXU(b.Ix),t.rXU(y.q),t.rXU(v.O),t.rXU(i.W3))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-tabs"]],viewQuery:function(e,a){if(1&e&&t.GBs(T,5),2&e){let s;t.mGM(s=t.lsd())&&(a.tabRef=s.first)}},decls:26,vars:18,consts:[["tabRef",""],[3,"ionTabsDidChange"],["tab","home","href","/tabs/home",1,"home-screen"],["aria-hidden","true","src","assets/icon/home.svg"],["slot","bottom",1,"tabbar"],["tab","story","href",""],["aria-hidden","true","src","assets/icon/book.svg"],["tab","parent-sakhi","href",""],["aria-hidden","true","src","assets/icon/parents.svg"],["tab","teacher-sakhi","href",""],["aria-hidden","true","src","assets/icon/teacher.svg"],["tab","my-pitara","href","/tabs/my-pitara"],["aria-hidden","true","src","assets/icon/pitara1.svg"]],template:function(e,a){if(1&e){const s=t.RV6();t.j41(0,"ion-content")(1,"ion-tabs",1,0),t.bIt("ionTabsDidChange",function(h){return t.eBV(s),t.Njj(a.ionTabsDidChange(h))}),t.j41(3,"ion-tab-button",2),t.nrm(4,"ion-icon",3),t.k0s(),t.j41(5,"ion-tab-bar",4)(6,"ion-tab-button",5),t.nrm(7,"ion-icon",6),t.j41(8,"ion-label"),t.EFF(9),t.nI1(10,"translate"),t.k0s()(),t.j41(11,"ion-tab-button",7),t.nrm(12,"ion-icon",8),t.j41(13,"ion-label"),t.EFF(14),t.nI1(15,"translate"),t.k0s()(),t.j41(16,"ion-tab-button",9),t.nrm(17,"ion-icon",10),t.j41(18,"ion-label"),t.EFF(19),t.nI1(20,"translate"),t.k0s()(),t.j41(21,"ion-tab-button",11),t.nrm(22,"ion-icon",12),t.j41(23,"ion-label"),t.EFF(24),t.nI1(25,"translate"),t.k0s()()()()()}2&e&&(t.R7$(3),t.muq("--background: ",a.configVariables.footerColor,""),t.R7$(2),t.muq("--background: ",a.configVariables.footerColor,""),t.R7$(4),t.JRh(t.bMT(10,10,"Katha Sakhi")),t.R7$(5),t.JRh(t.bMT(15,12,"Parent Tara")),t.R7$(5),t.JRh(t.bMT(20,14,"Teacher Tara")),t.R7$(5),t.JRh(t.bMT(25,16,"My Pitara")))},dependencies:[i.W9,i.iq,i.he,i.Jq,i.qW,i.p4,c.D9],styles:["ion-tab-bar[_ngcontent-%COMP%]{border-radius:50px;border:.188rem solid var(--ion-color-primary-contrast);padding:0 1rem}ion-tab-button[_ngcontent-%COMP%]{--color: var(--ion-color-primary-contrast);--color-selected: var(--ion-color-primary-contrast)}#tab-button-story[_ngcontent-%COMP%], #tab-button-my-pitara[_ngcontent-%COMP%], #tab-button-parent-sakhi[_ngcontent-%COMP%], #tab-button-teacher-sakhi[_ngcontent-%COMP%]{width:30%}ion-icon[_ngcontent-%COMP%]{width:1.375rem;height:1.5rem;opacity:.6;fill:var(--ion-color-primary-contrast)}ion-tab-button.tab-selected[_ngcontent-%COMP%]   .home-screen[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{border:.063rem solid var(--ion-color-tertiary)}ion-tab-button.tab-selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{opacity:initial;fill:var(--ion-color-tertiary)}ion-tab-button.tab-selected[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--ion-color-tertiary);font-weight:700;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}ion-label[_ngcontent-%COMP%]{font-size:10px}.home-screen[_ngcontent-%COMP%]{position:fixed;left:0;right:0;margin:0 auto;bottom:1.938rem;height:auto;z-index:9999;width:3.5rem;height:3.5rem;border:.188rem solid var(--ion-color-primary-contrast);border-radius:50%;border-bottom-color:transparent;border-left-color:transparent;transform:rotate(-45deg)}.home-screen[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{transform:rotate(45deg);border:.063rem solid var(--ion-color-primary-contrast);border-radius:50%;width:1.625rem;height:1.625rem;padding:.25rem}"]}),r})(),children:[{path:"home",loadChildren:()=>Promise.all([n.e(5006),n.e(2076),n.e(4392)]).then(n.bind(n,4392)).then(o=>o.HomePageModule)},{path:"my-pitara",loadChildren:()=>Promise.all([n.e(2076),n.e(4567)]).then(n.bind(n,4567)).then(o=>o.MyPitaraPageModule)},{path:"story",loadChildren:()=>Promise.all([n.e(4503),n.e(2648)]).then(n.bind(n,2648)).then(o=>o.StoryPageModule)},{path:"teacher-sakhi",loadChildren:()=>Promise.all([n.e(4503),n.e(1177)]).then(n.bind(n,1177)).then(o=>o.TeacherSakhiPageModule)},{path:"parent-sakhi",loadChildren:()=>Promise.all([n.e(4503),n.e(101)]).then(n.bind(n,101)).then(o=>o.ParentSakhiPageModule)},{path:"",redirectTo:"/tabs/home",pathMatch:"full"}]},{path:"",redirectTo:"tabs/home",pathMatch:"full"}];let R=(()=>{var o;class r{}return(o=r).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[b.iI.forChild(O)]}),r})(),x=(()=>{var o;class r{}return(o=r).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[i.bv,g.MD,p.YN,R,c.h]}),r})()}}]);