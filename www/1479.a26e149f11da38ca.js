"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1479],{8666:(I,u,i)=>{i.d(u,{Q:()=>n});const n=(0,i(5083).F3)("NativeAudio",{web:()=>i.e(9132).then(i.bind(i,9132)).then(t=>new t.NativeAudioWeb)})},9441:(I,u,i)=>{i.d(u,{$:()=>l});var g=i(467),n=i(8113),t=i(4438),o=i(7803),y=i(4517),c=i(8974),P=i(2904),f=i(177),C=i(9417),v=i(5402);function b(e,_){if(1&e&&(t.j41(0,"ion-item",15)(1,"ion-label",13),t.EFF(2),t.k0s(),t.nrm(3,"ion-radio",16),t.k0s()),2&e){const m=_.$implicit;t.R7$(2),t.JRh(m.name),t.R7$(),t.FS9("value",m.identifier)}}function s(e,_){if(1&e){const m=t.RV6();t.j41(0,"div"),t.nrm(1,"hr",11),t.j41(2,"ion-radio-group",12),t.mxI("ngModelChange",function(r){t.eBV(m);const d=t.XpG();return t.DH7(d.selectedContentId,r)||(d.selectedContentId=r),t.Njj(r)}),t.bIt("ionChange",function(r){t.eBV(m);const d=t.XpG();return t.Njj(d.playlistSelected(r))}),t.j41(3,"ion-list",13),t.DNE(4,b,4,2,"ion-item",14),t.k0s()(),t.nrm(5,"hr",11),t.k0s()}if(2&e){const m=t.XpG();t.R7$(2),t.R50("ngModel",m.selectedContentId),t.R7$(2),t.Y8G("ngForOf",m.playlists)}}function h(e,_){1&e&&(t.j41(0,"p",17),t.EFF(1),t.nI1(2,"translate"),t.k0s()),2&e&&(t.R7$(),t.JRh(t.bMT(2,1,"No playlist add yet")))}function p(e,_){if(1&e){const m=t.RV6();t.j41(0,"ion-item",9)(1,"ion-checkbox",18),t.mxI("ngModelChange",function(r){t.eBV(m);const d=t.XpG();return t.DH7(d.checked,r)||(d.checked=r),t.Njj(r)}),t.EFF(2),t.nI1(3,"translate"),t.k0s()()}if(2&e){const m=t.XpG();t.R7$(),t.Y8G("checked",m.checked),t.R50("ngModel",m.checked),t.R7$(),t.JRh(t.bMT(3,3,"Download and Add"))}}let l=(()=>{var e;class _{constructor(a,r,d,M){this.playListService=a,this.navParams=r,this.modalCtrl=d,this.downlaodContentService=M,this.selectedContentId="",this.playlists=[],this.isOpen=!1,this.checked=!1}ngOnInit(){this.content=this.navParams.get("content"),console.log("this.content",this.content),this.getAllPlaylists()}getAllPlaylists(a){var r=this;return(0,g.A)(function*(){null!=a&&(yield r.playListService.getAllPlayLists("guest").then(d=>{r.playlists=d,a&&(r.selectedContentId=r.playlists.find(M=>M.name.toLowerCase()===a.toLowerCase()).identifier||r.playlists[0].identifier),console.log("playlists",r.playlists)}).catch(d=>{console.log("error",d)}))})()}playlistSelected(a){console.log("Current value:",JSON.stringify(a.detail.value))}dismissModal(){this.modalCtrl.dismiss()}saveContent(){var a=this;return(0,g.A)(function*(){if(console.log("/./.",a.selectedContentId),a.selectedContentId&&a.content.metaData){if(a.checked){let d=yield a.downlaodContentService.downlaodContent(a.content);null!=d&&d.uri&&(a.content.metaData.url=d.uri,a.content.type="local")}let r=[{identifier:a.content.metaData.identifier,type:"local"==a.content.type?"local":"content",localContent:a.content}];yield a.playListService.addContentToPlayList(a.selectedContentId,r).then(d=>{console.log("content added successfull",d)}),a.modalCtrl.dismiss()}})()}newPitaraList(){var a=this;return(0,g.A)(function*(){const r=yield a.modalCtrl.create({component:n.r,componentProps:{title:"New Playlist",placeholder:"Name of the playlist"},cssClass:"auto-height"});yield r.present(),r.onWillDismiss().then(d=>{d&&"create"===d.data.type&&d.data.playlistName&&a.playListService.createPlayList(d.data.playlistName,"guest",[{identifier:"",type:"content",localContent:void 0}]).then(M=>{a.getAllPlaylists(d.data.playlistName)}).catch(M=>{console.log("errrrr",M)})})})()}confirm(a){this.isOpen=!1}}return(e=_).\u0275fac=function(a){return new(a||e)(t.rXU(o.q),t.rXU(y.y8),t.rXU(c.W3),t.rXU(P.Ze))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-add-to-pitara"]],decls:19,vars:14,consts:[[1,"inner-content"],["slot","start"],["color","medium"],["slot","end"],[1,"new-pitara",3,"click","strong"],["name","add-circle-outline",2,"padding-right","4px"],[4,"ngIf"],["class","empty-list-text",4,"ngIf"],["lines","none",4,"ngIf"],["lines","none"],["slot","end",1,"btn-info",3,"click","strong"],[2,"border","1px solid lightgray"],[3,"ngModelChange","ionChange","ngModel"],["lines","\u201cnone\u201d"],["class","no-border",4,"ngFor","ngForOf"],[1,"no-border"],["value","custom-checked","slot","start",3,"value"],[1,"empty-list-text"],["label-placement","end","justify","start",3,"ngModelChange","checked","ngModel"]],template:function(a,r){1&a&&(t.j41(0,"div",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),t.EFF(4),t.nI1(5,"translate"),t.k0s()(),t.j41(6,"ion-buttons",3)(7,"ion-button",4),t.bIt("click",function(){return r.newPitaraList()}),t.nrm(8,"ion-icon",5),t.EFF(9),t.nI1(10,"translate"),t.k0s()()(),t.DNE(11,s,6,2,"div",6)(12,h,3,3,"p",7),t.j41(13,"ion-toolbar"),t.DNE(14,p,4,5,"ion-item",8),t.j41(15,"ion-item",9)(16,"ion-button",10),t.bIt("click",function(){return r.saveContent()}),t.EFF(17),t.nI1(18,"translate"),t.k0s()()()()),2&a&&(t.R7$(4),t.JRh(t.bMT(5,8,"Add to Pitara")),t.R7$(3),t.Y8G("strong",!0),t.R7$(2),t.SpI(" ",t.bMT(10,10,"New Pitara")," "),t.R7$(2),t.Y8G("ngIf",r.playlists.length),t.R7$(),t.Y8G("ngIf",!r.playlists.length),t.R7$(2),t.Y8G("ngIf",r.playlists.length>0&&("video/mp4"===r.content.metaData.mimetype||"application/pdf"===r.content.metaData.mimetype)&&("Diksha"===r.content.sourceType||(null==r.content.metaData.identifier?null:r.content.metaData.identifier.startsWith("do_")))),t.R7$(2),t.Y8G("strong",!0),t.R7$(),t.JRh(t.bMT(18,12,"Done")))},dependencies:[f.Sq,f.bT,C.BC,C.vS,c.Jm,c.QW,c.eY,c.iq,c.uz,c.he,c.nf,c.KO,c.f0,c.ai,c.hB,c.uR,c.Je,v.D9],styles:["ion-list[_ngcontent-%COMP%]{overflow-y:auto;overflow:scroll;height:-moz-fit-content;height:fit-content;max-height:12.5rem}.btn-info[_ngcontent-%COMP%]{height:2.7rem;width:34%;--border-radius: 1.25rem;color:var(--ion-color-primary-contrast);--background: var(--ion-color-tertiary);font-size:.75rem;font-family:Noto Sans;font-weight:700;text-transform:uppercase;line-height:19.6px;word-wrap:break-word}ion-item[_ngcontent-%COMP%]{--border-width: 0;--inner-border-width: 0}.new-pitara[_ngcontent-%COMP%]{color:var(--ion-color-secondary);font-size:.75rem;font-family:Noto Sans Devanagari;font-weight:400;line-height:19.6px;word-wrap:break-word}.add-to[_ngcontent-%COMP%]{color:#333;font-size:.75rem;font-family:Noto Sans Devanagari;font-weight:400;line-height:19.6px;word-wrap:break-word}ion-radio[_ngcontent-%COMP%]{margin-top:1px}ion-radio[_ngcontent-%COMP%]::part(container){width:1.875rem;height:1.875rem;border:2px solid #ddd}ion-radio[_ngcontent-%COMP%]::part(mark){background:none;transition:none;transform:none;border-radius:0}ion-radio.radio-checked[_ngcontent-%COMP%]::part(container){background:var(--ion-color-tertiary);border-color:transparent}ion-radio.radio-checked[_ngcontent-%COMP%]::part(mark){width:.375rem;border-width:0px .125rem .125rem 0px;border-style:solid;border-color:var(--ion-color-primary-contrast);transform:rotate(45deg)}.btn-info[_ngcontent-%COMP%]::part(native){--ion-color-contrast: var(--ion-color-primary-contrast)}ion-modal[_ngcontent-%COMP%]{--height: 50%;--border-radius: 1rem;--box-shadow: 0 .625rem .938rem -.188rem rgb(0 0 0 / .1), 0 .25rem .375rem -.25rem rgb(0 0 0 / .1)}ion-modal[_ngcontent-%COMP%]::part(backdrop){background:#d1d5db;opacity:1}.empty-list-text[_ngcontent-%COMP%]{text-align:center;color:var(--ion-color-medium);font-size:.75rem;padding:8px}"]}),_})()},8113:(I,u,i)=>{i.d(u,{r:()=>b});var g=i(56),n=i(4438),t=i(8974),o=i(4517),y=i(177),c=i(9417),P=i(5402);function f(s,h){if(1&s){const p=n.RV6();n.j41(0,"ion-item",9)(1,"ion-input",10),n.nI1(2,"translate"),n.mxI("ngModelChange",function(e){n.eBV(p);const _=n.XpG();return n.DH7(_.name,e)||(_.name=e),n.Njj(e)}),n.k0s()()}if(2&s){const p=n.XpG();n.R7$(),n.R50("ngModel",p.name),n.Y8G("placeholder",n.bMT(2,2,p.placeholder))}}function C(s,h){if(1&s){const p=n.RV6();n.j41(0,"ion-item",9)(1,"ion-input",11),n.nI1(2,"translate"),n.mxI("ngModelChange",function(e){n.eBV(p);const _=n.XpG();return n.DH7(_.url,e)||(_.url=e),n.Njj(e)}),n.bIt("ionInput",function(){n.eBV(p);const e=n.XpG();return n.Njj(e.onInputChange())}),n.k0s()()}if(2&s){const p=n.XpG();n.R7$(),n.R50("ngModel",p.url),n.Y8G("placeholder",n.bMT(2,2,"url"))}}function v(s,h){if(1&s&&(n.j41(0,"ion-item",12)(1,"ion-label",13),n.EFF(2),n.nI1(3,"translate"),n.k0s()()),2&s){const p=n.XpG();n.R7$(2),n.JRh(n.bMT(3,1,p.errMsg))}}let b=(()=>{var s;class h{constructor(l,e){this.modalCtrl=l,this.navParams=e,this.name="",this.title="",this.placeholder="",this.url="",this.errMsg=""}ngOnInit(){this.title=this.navParams.get("title"),this.placeholder=this.navParams.get("placeholder")}cancel(){this.modalCtrl.dismiss()}createPlaylist(){if(this.name)"Add Youtube URL"==this.title&&this.url?this.url.match(/(?:youtu\.be\/|youtube\.com(?:\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=|shorts\/)|youtu\.be\/|embed\/|v\/|m\/|watch\?(?:[^=]+=[^&]+&)*?v=))([^"&?\/\s]{11})/gm)?this.modalCtrl.dismiss({type:"create",name:this.name,url:this.url}):this.errMsg="Please enter a valid url":this.modalCtrl.dismiss({type:"create",playlistName:this.name});else if("Add Diksha URL"==this.title&&this.url){let l=!1;g.Hs.forEach(e=>{this.url.match(new RegExp(e.pattern))&&(l=!0)}),l?this.modalCtrl.dismiss({type:"create",url:this.url}):this.errMsg="Please enter a valid url"}}onInputChange(){this.errMsg=""}}return(s=h).\u0275fac=function(l){return new(l||s)(n.rXU(t.W3),n.rXU(o.y8))},s.\u0275cmp=n.VBU({type:s,selectors:[["app-new-playlist-modal"]],decls:18,vars:12,consts:[[1,"inner-content"],[1,"header-info"],["class","roundedInput",4,"ngIf"],["lines","none",4,"ngIf"],[1,"btn-row"],["size","6",1,"btn-pr-8"],["fill","outline","expand","block",1,"app-rate-btn-outline",3,"click"],["size","6",1,"btn-pl-8"],["expand","block","color","warning",1,"app-rate-btn","app-rate-btn-ellipsis",3,"click"],[1,"roundedInput"],["type","text",3,"ngModelChange","ngModel","placeholder"],["type","url",3,"ngModelChange","ionInput","ngModel","placeholder"],["lines","none"],["color","danger"]],template:function(l,e){1&l&&(n.j41(0,"div",0)(1,"ion-toolbar")(2,"div",1),n.EFF(3),n.nI1(4,"translate"),n.k0s()(),n.DNE(5,f,3,4,"ion-item",2)(6,C,3,4,"ion-item",2)(7,v,4,3,"ion-item",3),n.j41(8,"div",4)(9,"ion-row")(10,"ion-col",5)(11,"ion-button",6),n.bIt("click",function(){return e.cancel()}),n.EFF(12),n.nI1(13,"translate"),n.k0s()(),n.j41(14,"ion-col",7)(15,"ion-button",8),n.bIt("click",function(){return e.createPlaylist()}),n.EFF(16),n.nI1(17,"translate"),n.k0s()()()()()),2&l&&(n.R7$(3),n.JRh(n.bMT(4,6,e.title)),n.R7$(2),n.Y8G("ngIf","Add Diksha URL"!==e.title),n.R7$(),n.Y8G("ngIf","New Playlist"!==e.title),n.R7$(),n.Y8G("ngIf",e.errMsg),n.R7$(5),n.SpI(" ",n.bMT(13,8,"Cancel"),""),n.R7$(4),n.SpI(" ",n.bMT(17,10,"Create"),""))},dependencies:[y.bT,c.BC,c.vS,t.Jm,t.hU,t.$w,t.uz,t.he,t.ln,t.ai,t.Gw,P.D9],styles:[".btn-info[_ngcontent-%COMP%]{height:3rem;width:34%;--border-radius: 1.25rem;font-size:.875rem}.btn-info__left[_ngcontent-%COMP%]{margin-left:.625rem}.btn-info__right[_ngcontent-%COMP%]{margin-top:3rem}.header-info[_ngcontent-%COMP%]{padding:.688rem 1rem;color:#2f2c2a;font-size:1.1rem;font-family:Noto Sans Devanagari;font-weight:700;line-height:25.2px;word-wrap:break-word}.roundedInput[_ngcontent-%COMP%]{--border-color: var(--ion-color-medium-shade);--border-radius: 4rem;--border-width: 1px;--box-shadow: 2px gray;--highlight-height: 0;--background: #f8f9fa;padding:.5rem 1.125rem .938rem}.app-rate-btn-outline[_ngcontent-%COMP%]{border-color:var(--ion-color-primary-contrast);color:var(--ion-color-medium);height:3rem;--border-radius: 1.25rem;font-size:.75rem;font-family:Noto Sans;font-weight:700;text-transform:uppercase;line-height:19.6px;word-wrap:break-word;--border-color: var(--ion-color-medium)}.app-rate-btn-ellipsis[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.app-rate-btn[_ngcontent-%COMP%]{height:3rem;--border-radius: 1.25rem;font-size:.75rem;font-family:Noto Sans;font-weight:700;text-transform:uppercase;line-height:19.6px;word-wrap:break-word}.app-rate-btn[_ngcontent-%COMP%]::part(native){--ion-color-contrast: var(--ion-color-primary-contrast)}.btn-row[_ngcontent-%COMP%]{padding:0 .625rem .625rem;margin-top:.625rem}.btn-pr-8[_ngcontent-%COMP%], .btn-pl-8[_ngcontent-%COMP%]{padding-right:1rem}"]}),h})()},2849:(I,u,i)=>{i.d(u,{q:()=>b});var g=i(467);const t=(0,i(5083).F3)("Share",{web:()=>i.e(1227).then(i.bind(i,1227)).then(s=>new s.ShareWeb)});var o=i(4438),y=i(4517),c=i(8974),P=i(177),f=i(5402);function C(s,h){1&s&&o.nrm(0,"ion-icon",6)}function v(s,h){1&s&&o.nrm(0,"ion-icon",7)}let b=(()=>{var s;class h{constructor(l,e){this.navParams=l,this.modalCtrl=e,this.selectedItem="",this.liked=!1}ngOnInit(){this.content=this.navParams.get("content"),this.liked=!!this.content.metaData.isLiked}contentLiked(l){l&&(this.content.metaData.isLiked=!this.content.metaData.isLiked,this.liked=!this.liked,this.modalCtrl.dismiss({type:"like",content:this.content}))}shareContent(l){var e=this;return(0,g.A)(function*(){(yield t.canShare()).value&&(t.share({url:e.content.metaData.url}),e.modalCtrl.dismiss())})()}addContentToMyPitara(l){this.modalCtrl.dismiss({type:"addToPitara",content:this.content})}handleItemSelected(l){}dismissModal(){this.modalCtrl.dismiss()}}return(s=h).\u0275fac=function(l){return new(l||s)(o.rXU(y.y8),o.rXU(c.W3))},s.\u0275cmp=o.VBU({type:s,selectors:[["app-sheet-modal"]],decls:18,vars:11,consts:[[1,"ion-padding","block"],["lines","none",3,"click"],["aria-hidden","true","src","assets/icon/thumb-up.svg",4,"ngIf"],["aria-hidden","true","class","liked-icon","src","assets/icon/like.svg",4,"ngIf"],["aria-hidden","true","src","assets/icon/share.svg"],["name","add-circle-outline"],["aria-hidden","true","src","assets/icon/thumb-up.svg"],["aria-hidden","true","src","assets/icon/like.svg",1,"liked-icon"]],template:function(l,e){1&l&&(o.j41(0,"ion-content",0)(1,"ion-list")(2,"ion-item",1),o.bIt("click",function(m){return e.contentLiked(m)}),o.DNE(3,C,1,0,"ion-icon",2)(4,v,1,0,"ion-icon",3),o.j41(5,"ion-label"),o.EFF(6),o.nI1(7,"translate"),o.k0s()(),o.j41(8,"ion-item",1),o.bIt("click",function(m){return e.shareContent(m)}),o.nrm(9,"ion-icon",4),o.j41(10,"ion-label"),o.EFF(11),o.nI1(12,"translate"),o.k0s()(),o.j41(13,"ion-item",1),o.bIt("click",function(m){return e.addContentToMyPitara(m)}),o.nrm(14,"ion-icon",5),o.j41(15,"ion-label"),o.EFF(16),o.nI1(17,"translate"),o.k0s()()()()),2&l&&(o.R7$(3),o.Y8G("ngIf",!e.liked),o.R7$(),o.Y8G("ngIf",e.liked),o.R7$(2),o.JRh(o.bMT(7,5,"Like")),o.R7$(5),o.JRh(o.bMT(12,7,"Share")),o.R7$(5),o.JRh(o.bMT(17,9,"Add to Pitara")))},dependencies:[P.bT,c.W9,c.iq,c.uz,c.he,c.nf,f.D9],styles:["ion-list[_ngcontent-%COMP%]{overflow-y:auto;padding:0}ion-label[_ngcontent-%COMP%]{padding:0 0 0 1rem}.block[_ngcontent-%COMP%]{--background: var(--ion-color-primary-contrast);width:100%;height:250px;display:flex;align-items:center;justify-content:center}.liked-icon[_ngcontent-%COMP%]{color:var(--ion-color-tertiary)}ion-modal[_ngcontent-%COMP%]::part(backdrop){background:#d1d5db;opacity:1}"]}),h})()}}]);