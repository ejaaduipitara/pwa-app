(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4567],{4567:(f,u,l)=>{"use strict";l.r(u),l.d(u,{MyPitaraPageModule:()=>A});var s=l(8974),m=l(177),p=l(9417),r=l(3021),_=l(467),g=l(5301),P=l(4733),h=l(56),b=l(5318),M=l.n(b),t=l(4438),C=l(3568),O=l(444),D=l(7803),v=l(5402);function w(i,o){1&i&&(t.j41(0,"div",15)(1,"div",16)(2,"div",17),t.EFF(3),t.nI1(4,"translate"),t.k0s()()()),2&i&&(t.R7$(3),t.JRh(t.bMT(4,1,"No contents")))}function k(i,o){if(1&i&&t.nrm(0,"img",23),2&i){const e=t.XpG(2).$implicit;t.Y8G("src",null!=e&&null!=e.metaData&&e.metaData.thumbnail&&!e.metaData.identifier.startsWith("do_")?null==e||null==e.metaData?null:e.metaData.thumbnail:"assets/images/Audio.png",t.B4B)}}function x(i,o){if(1&i&&t.nrm(0,"img",23),2&i){const e=t.XpG(2).$implicit;t.Y8G("src",null!=e&&null!=e.metaData&&e.metaData.thumbnail&&!e.metaData.identifier.startsWith("do_")?null==e||null==e.metaData?null:e.metaData.thumbnail:"assets/images/youtube-video.png",t.B4B)}}function T(i,o){if(1&i&&t.nrm(0,"img",23),2&i){const e=t.XpG(2).$implicit;t.Y8G("src",null!=e&&null!=e.metaData&&e.metaData.thumbnail&&!e.metaData.identifier.startsWith("do_")?null==e||null==e.metaData?null:e.metaData.thumbnail:"assets/images/Video.png",t.B4B)}}function I(i,o){if(1&i&&t.nrm(0,"img",23),2&i){const e=t.XpG(2).$implicit;t.Y8G("src",null!=e&&null!=e.metaData&&e.metaData.thumbnail&&!e.metaData.identifier.startsWith("do_")?null==e||null==e.metaData?null:e.metaData.thumbnail:"assets/images/PDF.png",t.B4B)}}function R(i,o){if(1&i&&t.nrm(0,"img",23),2&i){const e=t.XpG(2).$implicit;t.Y8G("src",null!=e&&null!=e.metaData&&e.metaData.thumbnail&&!e.metaData.identifier.startsWith("do_")?null==e||null==e.metaData?null:e.metaData.thumbnail:"assets/images/LINK.png",t.B4B)}}function E(i,o){if(1&i&&(t.j41(0,"ion-card"),t.DNE(1,k,1,1,"img",22)(2,x,1,1,"img",22)(3,T,1,1,"img",22)(4,I,1,1,"img",22)(5,R,1,1,"img",22),t.k0s()),2&i){const e=t.XpG().$implicit,n=t.XpG();t.R7$(),t.Y8G("ngIf",e.metaData.mimetype===n.mimeType.AUDIO),t.R7$(),t.Y8G("ngIf",e.metaData.mimetype===n.mimeType.YOUTUBE),t.R7$(),t.Y8G("ngIf",e.metaData.mimetype===n.mimeType.MP4),t.R7$(),t.Y8G("ngIf",e.metaData.mimetype===n.mimeType.PDF),t.R7$(),t.Y8G("ngIf",e.metaData.mimetype===n.mimeType.LINK)}}function $(i,o){if(1&i&&(t.j41(0,"div",24),t.EFF(1),t.nI1(2,"translate"),t.k0s()),2&i){const e=t.XpG().$implicit;t.R7$(),t.JRh(t.bMT(2,1,e.metaData.name))}}function G(i,o){if(1&i){const e=t.RV6();t.j41(0,"div",18)(1,"div",19),t.bIt("click",function(){const a=t.eBV(e).$implicit,d=t.XpG();return t.Njj(d.playContent(a))}),t.DNE(2,E,6,5,"ion-card",20)(3,$,3,3,"div",21),t.k0s()()}if(2&i){const e=o.$implicit;t.R7$(2),t.Y8G("ngIf",null==e||null==e.metaData?null:e.metaData.thumbnail),t.R7$(),t.Y8G("ngIf",null==e||null==e.metaData?null:e.metaData.name)}}function j(i,o){1&i&&(t.j41(0,"div",25)(1,"div",26),t.EFF(2),t.nI1(3,"translate"),t.k0s()()),2&i&&(t.R7$(2),t.JRh(t.bMT(3,1,"Click on New Playlist button to create your first playlist")))}function F(i,o){if(1&i&&(t.j41(0,"div",35),t.EFF(1),t.k0s()),2&i){const e=t.XpG().$implicit;t.R7$(),t.SpI(" ",e.name," ")}}function Y(i,o){if(1&i){const e=t.RV6();t.j41(0,"div")(1,"div",27),t.bIt("click",function(){const a=t.eBV(e).$implicit,d=t.XpG();return t.Njj(d.navigateToDetails(a))}),t.j41(2,"div",28)(3,"ion-card"),t.nrm(4,"img",29),t.k0s(),t.nrm(5,"div",30)(6,"div",31),t.k0s(),t.DNE(7,F,2,1,"div",32),t.j41(8,"div",33),t.bIt("click",function(){const a=t.eBV(e).$implicit,d=t.XpG();return t.Njj(d.openModal(a))}),t.nrm(9,"ion-icon",34),t.k0s()()()}if(2&i){const e=o.$implicit;t.R7$(7),t.Y8G("ngIf",null==e?null:e.name)}}const B=[{path:"",component:(()=>{var i;class o{constructor(n,a,d,c,y){this.headerService=n,this.contentService=a,this.router=d,this.playListService=c,this.modalCtrl=y,this.contentList=[],this.playlists=[],this.isNavigate=!0,this.mimeType=h.Cc}ngOnInit(){var n=this;return(0,_.A)(function*(){n.headerService.deviceBackbtnEmitted$.subscribe(a=>{(a.name="backBtn")&&n.tabViewWillEnter()})})()}tabViewWillEnter(){var n=this;return(0,_.A)(function*(){yield n.headerService.showHeader("My Jaadui Pitara"),n.getRecentlyviewedContent(),n.getPlaylistContent()})()}ionViewWillEnter(){this.tabViewWillEnter()}viewAllCards(n){this.router.navigate(["/view-all"],{state:{type:n}})}getPlaylistContent(){var n=this;return(0,_.A)(function*(){n.playlists=[],yield n.playListService.getAllPlayLists("guest").then(a=>{n.playlists=a}).catch(a=>{console.log("error",a)})})()}getRecentlyviewedContent(){var n=this;return(0,_.A)(function*(){yield n.contentService.getRecentlyViewedContent("guest").then(a=>{n.contentList=[];let d={};a.filter(c=>{var y;return!d[c.contentIdentifier]&&(d[c.contentIdentifier]=!0,n.contentList.push(c),c.metaData.thumbnail=c.metaData.mimetype===h.Cc.YOUTUBE?"assets/images/youtube-video.png":!c.metaData.thumbnail||null!=c&&null!==(y=c.metaData.identifier)&&void 0!==y&&y.startsWith("do_")?P.O.getImagePath(c.metaData.mimeType||c.metaData.mimetype):c.metaData.thumbnail,!0)})}).catch(a=>{console.log("error",a)})})()}ngOnDestroy(){var n=this;return(0,_.A)(function*(){const a=yield n.modalCtrl.getTop();a&&a.dismiss()})()}createList(){this.router.navigate(["/create-playlist"])}deletePlaylist(n){var a=this;return(0,_.A)(function*(){yield a.playListService.deletePlayList(n.identifier).then(d=>{a.getPlaylistContent()}).catch(d=>{console.log("err",d)})})()}openModal(n){var a=this;return(0,_.A)(function*(){a.isNavigate=!1;const d=yield a.modalCtrl.create({component:g.J,cssClass:"add-to-pitara",breakpoints:[0,1],showBackdrop:!1,initialBreakpoint:1,handle:!1,handleBehavior:"none"});yield d.present(),d.onWillDismiss().then(c=>{a.isNavigate=!0,c.data&&"delete"===c.data.type?a.deletePlaylist(n):c.data&&"edit"===c.data.type&&a.router.navigate(["/create-playlist"],{state:{playlists:n,islocal:!0,status:"edit"}})})})()}loadYoutubeImg(n){let a=n.identifier;return a&&a.startsWith("do_")&&(a=M()(n.url)),`https://img.youtube.com/vi/${a}/mqdefault.jpg`}navigateToDetails(n){this.isNavigate&&this.router.navigate(["/playlist-details"],{state:{playlist:n}})}playContent(n){var a=this;return(0,_.A)(function*(){yield a.router.navigate(["/player"],{state:{content:n}})})()}}return(i=o).\u0275fac=function(n){return new(n||i)(t.rXU(C.U),t.rXU(O.f),t.rXU(r.Ix),t.rXU(D.q),t.rXU(s.W3))},i.\u0275cmp=t.VBU({type:i,selectors:[["app-mypitara"]],decls:26,vars:17,consts:[[3,"fullscreen"],[1,"grid-slider"],[1,"grid-slider__header"],[1,""],[1,"grid-slider__header__link",3,"click"],["class","viewed-content",4,"ngIf"],[1,"grid-slider__container"],["class","grid-slider__container__card",4,"ngFor","ngForOf"],[1,"playlist"],[1,"playlist__header"],[1,"playlist__header__button",3,"click"],["slot","end","aria-hidden","true","src","../../../assets/icon/Add-circle-outline.svg"],["class","playlist-bot",4,"ngIf"],[1,"playlist__container"],[4,"ngFor","ngForOf"],[1,"viewed-content"],[1,"viewed-content__info"],[1,"viewed-content__info__text"],[1,"grid-slider__container__card"],[3,"click"],[4,"ngIf"],["class","card-title",4,"ngIf"],["alt","",3,"src",4,"ngIf"],["alt","",3,"src"],[1,"card-title"],[1,"playlist-bot"],[1,"playlist-bot__text"],[1,"playlist__container__items",3,"click"],[1,"playlist__container__items__cards"],["src","/assets/images/Playlist.png","alt",""],[1,"layer1"],[1,"layer2"],["class","playlist__container__items__metadata",4,"ngIf"],[1,"kabab-menu-icon",3,"click"],["slot","end","aria-hidden","true","src","../../../assets/icon/kabab-icon.svg"],[1,"playlist__container__items__metadata"]],template:function(n,a){1&n&&(t.j41(0,"ion-content",0)(1,"div",1)(2,"div",2)(3,"div",3),t.EFF(4),t.nI1(5,"translate"),t.k0s(),t.j41(6,"div",4),t.bIt("click",function(){return a.viewAllCards("recentlyviewed")}),t.EFF(7),t.nI1(8,"translate"),t.k0s()(),t.DNE(9,w,5,3,"div",5),t.j41(10,"div",6),t.DNE(11,G,4,2,"div",7),t.k0s()(),t.j41(12,"div",8)(13,"div",9)(14,"div",3),t.EFF(15),t.nI1(16,"translate"),t.k0s(),t.j41(17,"div",10),t.bIt("click",function(){return a.viewAllCards("playlist")}),t.j41(18,"ion-button"),t.EFF(19),t.nI1(20,"translate"),t.nrm(21,"ion-icon",11),t.k0s()()(),t.j41(22,"div"),t.DNE(23,j,4,3,"div",12),t.k0s(),t.j41(24,"div",13),t.DNE(25,Y,10,1,"div",14),t.k0s()()()),2&n&&(t.Y8G("fullscreen",!0),t.R7$(4),t.JRh(t.bMT(5,9,"Recently Viewed")),t.R7$(3),t.JRh(t.bMT(8,11,"View All")),t.R7$(2),t.Y8G("ngIf",!a.contentList.length),t.R7$(2),t.Y8G("ngForOf",a.contentList),t.R7$(4),t.JRh(t.bMT(16,13,"My Playlist")),t.R7$(4),t.SpI("",t.bMT(20,15,"New Playlist")," "),t.R7$(4),t.Y8G("ngIf",!a.playlists.length),t.R7$(2),t.Y8G("ngForOf",a.playlists))},dependencies:[s.Jm,s.b_,s.W9,s.iq,m.Sq,m.bT,v.D9],styles:["ion-content[_ngcontent-%COMP%]{--padding-top: 35px !important}.grid-slider[_ngcontent-%COMP%]{padding:1rem;margin-top:7px}.grid-slider__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:.75rem;color:var(--ion-color-dark);font-weight:700}.grid-slider__header__link[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.grid-slider__container[_ngcontent-%COMP%]{display:grid;gap:.75rem;overflow-y:auto;overflow-x:auto;grid-auto-flow:column;justify-content:flex-start;padding:1rem 0 3rem}.grid-slider__container__card[_ngcontent-%COMP%]{width:7.5rem;height:4.5rem}.grid-slider__container__card[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin:0;box-shadow:none;border-radius:.5rem;height:100%}.grid-slider__container__card[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:4.5rem;width:100%}.grid-slider__container__card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-size:.75rem;font-style:normal;font-weight:400;color:#2f2c2a;padding-top:.5rem;line-height:.875rem;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.playlist[_ngcontent-%COMP%]{padding:0 1rem;padding-top:0}.playlist__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;font-size:.75rem;color:var(--ion-color-dark);font-weight:700}.playlist__header__button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{padding-left:.5rem}.playlist__container[_ngcontent-%COMP%]{padding-top:1rem}.playlist__container__items[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:flex-start;align-items:flex-start;gap:.5rem;margin-bottom:1.5rem}.playlist__container__items__cards[_ngcontent-%COMP%]{width:7.5rem;height:4.5rem;min-width:7.5rem;position:relative}.playlist__container__items[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin:0;box-shadow:none;border-radius:.5rem;height:100%}.playlist__container__items[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%}.playlist__container__items[_ngcontent-%COMP%]   .layer1[_ngcontent-%COMP%]{height:4.5rem;background-color:#7d7d7d;margin-top:-1px;position:absolute;top:-.188rem;width:calc(100% - 12px);left:.375rem;right:.375rem;border-radius:.5rem;z-index:-1}.playlist__container__items[_ngcontent-%COMP%]   .layer2[_ngcontent-%COMP%]{position:absolute;top:-8px;width:calc(100% - 20px);height:100%;left:.625rem;right:.625rem;border-radius:.5rem;background:#c3c3c3;z-index:-2;opacity:.7}.playlist__container__items__metadata[_ngcontent-%COMP%]{font-size:.75rem;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;margin-right:1.5rem}.playlist__container__items[_ngcontent-%COMP%]   .kabab-menu-icon[_ngcontent-%COMP%]{position:absolute;right:1rem}.playlist__container__items[_ngcontent-%COMP%]   .kabab-menu-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem}[_nghost-%COMP%]   ion-button[_ngcontent-%COMP%]{--background: var(--ion-color-primary-contrast);--color: var(--ion-color-secondary);--border-radius: 30px;--border-color: var(--ion-color-secondary);--border-style: solid;--border-width: 1px;--box-shadow: none}ion-modal[_ngcontent-%COMP%]{--height: fit-content}.btn-len[_ngcontent-%COMP%]{width:88%}.playlist-bot[_ngcontent-%COMP%]{text-align:center;position:absolute;left:50%;right:0;top:55%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:12px}.playlist-bot__image[_ngcontent-%COMP%]{height:7rem;width:7rem;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center}.playlist-bot__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;width:100%}.playlist-bot__text[_ngcontent-%COMP%]{text-align:center;color:var(--ion-color-medium);font-size:.75rem}.viewed-content[_ngcontent-%COMP%]{padding:1.5rem}.viewed-content__info[_ngcontent-%COMP%]{position:absolute;left:50%;right:0;top:20%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center}.viewed-content__info__image[_ngcontent-%COMP%]{height:5rem;width:5rem;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center}.viewed-content__info__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;width:100%}.viewed-content__info__text[_ngcontent-%COMP%]{text-align:center;color:var(--ion-color-medium);font-size:.75rem}"]}),o})()}];let N=(()=>{var i;class o{}return(i=o).\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[r.iI.forChild(B),r.iI]}),o})(),A=(()=>{var i;class o{}return(i=o).\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[s.bv,m.MD,p.YN,N,v.h]}),o})()},4733:(f,u,l)=>{"use strict";l.d(u,{O:()=>m});var s=l(56);class m{static isTrackable(r){return(r=r.trackable?r:r.contentData&&r.contentData.trackable?r.contentData:r).trackable&&r.trackable.enabled?r.trackable.enabled===s.Th.YES?1:r.mimeType===s.z5.COLLECTION?0:-1:r.contentType&&r.contentType.toLowerCase()===s.cM.COURSE.toLowerCase()?1:r.mimeType===s.z5.COLLECTION?0:-1}static getMimeType(r){const _=r.split(".").pop();let g="";switch(null==_?void 0:_.toLowerCase()){case"mp4":g=s.z5.VIDEO;break;case"pdf":g=s.z5.PDF;break;case"mp3":case"m4a":g=s.z5.AUDIOS;break;case"wav":g=s.z5.RECOEDED_AUDIO;break;case"youtube":g=s.z5.YOUTUBE}return g}static getImagePath(r){return{mp3:"/assets/images/Audio.png",mp4:"/assets/images/Video.png",webm:"/assets/images/Video.png",pdf:"/assets/images/PDF.png"}[r.split("/").pop()]}}},5318:function(f){f.exports=function(l,s){if(null==s&&(s={fuzzy:!0}),/youtu\.?be/.test(l)){var m,p=[/youtu\.be\/([^#\&\?]{11})/,/\?v=([^#\&\?]{11})/,/\&v=([^#\&\?]{11})/,/embed\/([^#\&\?]{11})/,/\/v\/([^#\&\?]{11})/];for(m=0;m<p.length;++m)if(p[m].test(l))return p[m].exec(l)[1];if(s.fuzzy){var r=l.split(/[\/\&\?=#\.\s]/g);for(m=0;m<r.length;++m)if(/^[^#\&\?]{11}$/.test(r[m]))return r[m]}}return null}}}]);