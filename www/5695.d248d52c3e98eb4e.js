"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5695],{5695:(D,c,o)=>{o.r(c),o.d(c,{TabsPageModule:()=>j});var r=o(8974),u=o(177),p=o(9417),b=o(3021),m=o(467),P=o(319),v=o(8941),y=o(446),t=o(4438),M=o(4517),C=o(1113),T=o(5173),g=o(5402);const O=["tabRef"],R=[{path:"",component:(()=>{var a;class s{constructor(n,e,i,f,d){this.platform=n,this.router=e,this.tabService=i,this.telemetry=f,this.modalCtrl=d,this.optModalOpen=!1,y.g.then(h=>{console.log("Configuration:",h),this.configVariables=h}).catch(h=>{console.error("Failed to load configuration:",h)})}tabViewWillEnter(){this.tabService.show()}ionViewDidEnter(){var n=this;this.tabService.show(),this.subscription=this.platform.backButton.subscribeWithPriority(9999,(0,m.A)(function*(){let e;n.optModalOpen||(n.optModalOpen=!0,e=yield n.modalCtrl.create({component:P.Z,cssClass:"sheet-modal",breakpoints:[.2],showBackdrop:!1,backdropDismiss:!1,initialBreakpoint:.2,handle:!1,handleBehavior:"none"}),yield e.present()),e.onDidDismiss().then(i=>{n.optModalOpen=!1,i.data&&i.data&&v.q.exitApp()})}))}ionViewWillEnter(){this.tabRef.outlet.component.tabViewWillEnter&&this.tabRef.outlet.component.tabViewWillEnter()}ionViewWillLeave(){this.subscription.unsubscribe()}ngOnDestroy(){var n=this;return(0,m.A)(function*(){const e=yield n.modalCtrl.getTop();e&&e.dismiss()})()}ionTabsDidChange(n){"story"==n.tab?(this.tabService.hide(),this.telemetry.generateStartTelemetry("bot","story-sakhi"),this.router.navigate(["/story"])):"parent-sakhi"==n.tab?(this.tabService.hide(),this.telemetry.generateStartTelemetry("bot","parent-sakhi"),this.router.navigate(["/parent-sakhi"])):"teacher-sakhi"==n.tab&&(this.tabService.hide(),this.telemetry.generateStartTelemetry("bot","teacher-sakhi"),this.router.navigate(["/teacher-sakhi"]))}}return(a=s).\u0275fac=function(n){return new(n||a)(t.rXU(M.OD),t.rXU(b.Ix),t.rXU(C.q),t.rXU(T.O),t.rXU(r.W3))},a.\u0275cmp=t.VBU({type:a,selectors:[["app-tabs"]],viewQuery:function(n,e){if(1&n&&t.GBs(O,5),2&n){let i;t.mGM(i=t.lsd())&&(e.tabRef=i.first)}},decls:23,vars:12,consts:[["tabRef",""],[3,"ionTabsDidChange"],["tab","home","href","/tabs/home",1,"home-screen"],["aria-hidden","true","src","assets/icon/home.svg"],["slot","bottom",1,"tabbar"],["tab","story","href",""],["aria-hidden","true","src","assets/icon/book.svg"],["tab","parent-sakhi","href",""],["aria-hidden","true","src","assets/icon/parents.svg"],["tab","teacher-sakhi","href",""],["aria-hidden","true","src","assets/icon/teacher.svg"],["tab","my-pitara","href","/tabs/my-pitara"],["aria-hidden","true","src","assets/icon/pitara1.svg"]],template:function(n,e){if(1&n){const i=t.RV6();t.j41(0,"ion-content")(1,"ion-tabs",1,0),t.bIt("ionTabsDidChange",function(d){return t.eBV(i),t.Njj(e.ionTabsDidChange(d))}),t.j41(3,"ion-tab-button",2),t.nrm(4,"ion-icon",3),t.k0s(),t.j41(5,"ion-tab-bar",4)(6,"ion-tab-button",5),t.nrm(7,"ion-icon",6),t.j41(8,"ion-label"),t.EFF(9),t.k0s()(),t.j41(10,"ion-tab-button",7),t.nrm(11,"ion-icon",8),t.j41(12,"ion-label"),t.EFF(13),t.k0s()(),t.j41(14,"ion-tab-button",9),t.nrm(15,"ion-icon",10),t.j41(16,"ion-label"),t.EFF(17),t.k0s()(),t.j41(18,"ion-tab-button",11),t.nrm(19,"ion-icon",12),t.j41(20,"ion-label"),t.EFF(21),t.nI1(22,"translate"),t.k0s()()()()()}2&n&&(t.R7$(3),t.muq("--background: ",null==e.configVariables?null:e.configVariables.footerColor,""),t.R7$(2),t.muq("--background: ",null==e.configVariables?null:e.configVariables.footerColor,""),t.R7$(4),t.JRh(null==e.configVariables?null:e.configVariables.kathaSakhiBotName),t.R7$(4),t.JRh(null==e.configVariables?null:e.configVariables.parentTaraBotName),t.R7$(4),t.JRh(null==e.configVariables?null:e.configVariables.teacherTaraBotName),t.R7$(4),t.JRh(t.bMT(22,10,"My Pitara")))},dependencies:[r.W9,r.iq,r.he,r.Jq,r.qW,r.p4,g.D9],styles:["ion-tab-bar[_ngcontent-%COMP%]{border-radius:50px;border:.188rem solid var(--ion-color-primary-contrast);padding:0 1rem}ion-tab-button[_ngcontent-%COMP%]{--color: var(--ion-color-primary-contrast);--color-selected: var(--ion-color-primary-contrast)}#tab-button-story[_ngcontent-%COMP%], #tab-button-my-pitara[_ngcontent-%COMP%], #tab-button-parent-sakhi[_ngcontent-%COMP%], #tab-button-teacher-sakhi[_ngcontent-%COMP%]{width:30%}ion-icon[_ngcontent-%COMP%]{width:1.375rem;height:1.5rem;opacity:.6;fill:var(--ion-color-primary-contrast)}ion-tab-button.tab-selected[_ngcontent-%COMP%]   .home-screen[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{border:.063rem solid var(--ion-color-tertiary)}ion-tab-button.tab-selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{opacity:initial;fill:var(--ion-color-tertiary)}ion-tab-button.tab-selected[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--ion-color-tertiary);font-weight:700;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}ion-label[_ngcontent-%COMP%]{font-size:10px}.home-screen[_ngcontent-%COMP%]{position:fixed;left:0;right:0;margin:0 auto;bottom:1.938rem;height:auto;z-index:9999;width:3.5rem;height:3.5rem;border:.188rem solid var(--ion-color-primary-contrast);border-radius:50%;border-bottom-color:transparent;border-left-color:transparent;transform:rotate(-45deg)}.home-screen[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{transform:rotate(45deg);border:.063rem solid var(--ion-color-primary-contrast);border-radius:50%;width:1.625rem;height:1.625rem;padding:.25rem}"]}),s})(),children:[{path:"home",loadChildren:()=>Promise.all([o.e(5006),o.e(2076),o.e(4392)]).then(o.bind(o,4392)).then(a=>a.HomePageModule)},{path:"my-pitara",loadChildren:()=>Promise.all([o.e(2076),o.e(4567)]).then(o.bind(o,4567)).then(a=>a.MyPitaraPageModule)},{path:"story",loadChildren:()=>Promise.all([o.e(4503),o.e(2648)]).then(o.bind(o,2648)).then(a=>a.StoryPageModule)},{path:"teacher-sakhi",loadChildren:()=>Promise.all([o.e(4503),o.e(1177)]).then(o.bind(o,1177)).then(a=>a.TeacherSakhiPageModule)},{path:"parent-sakhi",loadChildren:()=>Promise.all([o.e(4503),o.e(101)]).then(o.bind(o,101)).then(a=>a.ParentSakhiPageModule)},{path:"",redirectTo:"/tabs/home",pathMatch:"full"}]},{path:"",redirectTo:"tabs/home",pathMatch:"full"}];let V=(()=>{var a;class s{}return(a=s).\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.$C({type:a}),a.\u0275inj=t.G2t({imports:[b.iI.forChild(R)]}),s})(),j=(()=>{var a;class s{}return(a=s).\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.$C({type:a}),a.\u0275inj=t.G2t({imports:[r.bv,u.MD,p.YN,V,g.h]}),s})()}}]);