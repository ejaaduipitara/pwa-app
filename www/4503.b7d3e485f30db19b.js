"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4503],{334:(S,y,g)=>{g.d(y,{s3:()=>h});const h=(0,g(5083).F3)("Keyboard")},4503:(S,y,g)=>{g.d(y,{b:()=>ne});var p=g(467),e=g(4438),f=g(8974),h=g(334),_=g(2739),P=g(5293),G=g(6421),M=g(2904),I=g(5402),A=g(5173),w=g(4517),b=g(177),R=g(9417);const j=["recordbtn"];function L(s,l){if(1&s){const o=e.RV6();e.j41(0,"ion-button",21),e.bIt("click",function(){e.eBV(o);const n=e.XpG(2).$implicit,i=e.XpG(2);return e.Njj(i.readmore(n))}),e.EFF(1),e.nI1(2,"translate"),e.k0s()}2&s&&(e.R7$(),e.JRh(e.bMT(2,1,"Read more...")))}function $(s,l){1&s&&e.nrm(0,"img",28)}function F(s,l){1&s&&e.nrm(0,"img",29)}function N(s,l){if(1&s){const o=e.RV6();e.j41(0,"div",22),e.bIt("click",function(){e.eBV(o);const n=e.XpG(2).$implicit,i=e.XpG(2);return e.Njj(i.playFile(n))}),e.j41(1,"div",23),e.DNE(2,$,1,0,"img",24)(3,F,1,0,"img",25),e.j41(4,"span"),e.EFF(5),e.k0s()(),e.j41(6,"div",26),e.nrm(7,"img",27)(8,"img",27),e.k0s()()}if(2&s){const o=e.XpG(2).$implicit;e.R7$(2),e.Y8G("ngIf",!(null!=o&&null!=o.audio&&o.audio.play)),e.R7$(),e.Y8G("ngIf",null==o||null==o.audio?null:o.audio.play),e.R7$(2),e.JRh(null==o||null==o.audio?null:o.audio.duration)}}function X(s,l){if(1&s&&(e.j41(0,"ion-text",30),e.EFF(1),e.k0s()),2&s){const o=e.XpG(2).$implicit;e.R7$(),e.JRh(null==o?null:o.time)}}function U(s,l){if(1&s&&(e.j41(0,"div",9)(1,"ion-text"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.DNE(4,L,3,3,"ion-button",18)(5,N,9,3,"div",19)(6,X,2,1,"ion-text",20),e.k0s()),2&s){const o=e.XpG(),t=o.$implicit,n=o.index;e.ZvI("bot-content__message ",null==t?null:t.type,""),e.Y8G("ngClass",0!==n?"msg-block":""),e.R7$(2),e.JRh(e.bMT(3,8,null==t?null:t.displayMsg)),e.R7$(2),e.Y8G("ngIf",null==t?null:t.readMore),e.R7$(),e.Y8G("ngIf","audio"==(null==t?null:t.messageType)),e.R7$(),e.Y8G("ngIf",null==t?null:t.time)}}function Y(s,l){1&s&&e.nrm(0,"ion-icon",37)}function V(s,l){1&s&&e.nrm(0,"ion-icon",38)}function W(s,l){1&s&&e.nrm(0,"ion-icon",37)}function K(s,l){1&s&&e.nrm(0,"ion-icon",39)}function H(s,l){if(1&s){const o=e.RV6();e.j41(0,"div",31)(1,"div",32),e.bIt("click",function(){e.eBV(o);const n=e.XpG().$implicit,i=e.XpG(2);return e.Njj(i.msgLiked(n,"like"))}),e.DNE(2,Y,1,0,"ion-icon",33)(3,V,1,0,"ion-icon",34),e.k0s(),e.j41(4,"div",35),e.bIt("click",function(){e.eBV(o);const n=e.XpG().$implicit,i=e.XpG(2);return e.Njj(i.msgLiked(n,"dislike"))}),e.DNE(5,W,1,0,"ion-icon",33)(6,K,1,0,"ion-icon",36),e.k0s()()}if(2&s){const o=e.XpG().$implicit;e.R7$(2),e.Y8G("ngIf",!o.likeMsg),e.R7$(),e.Y8G("ngIf",o.likeMsg),e.R7$(2),e.Y8G("ngIf",!o.dislikeMsg),e.R7$(),e.Y8G("ngIf",o.dislikeMsg)}}function J(s,l){if(1&s&&(e.j41(0,"div"),e.DNE(1,U,7,10,"div",16)(2,H,7,4,"div",17),e.k0s()),2&s){const o=l.$implicit,t=l.index;e.R7$(),e.Y8G("ngIf",""!==(null==o?null:o.type)),e.R7$(),e.Y8G("ngIf","received"===(null==o?null:o.type)&&0!==t&&o.timeStamp&&!(null!=o&&null!=o.audio&&o.audio.file)&&"An unknown error occured, please try after sometime"!==o.message)}}function q(s,l){if(1&s&&(e.j41(0,"div",14),e.DNE(1,J,3,2,"div",15),e.k0s()),2&s){const o=e.XpG();e.R7$(),e.Y8G("ngForOf",o.botMessages)}}function Z(s,l){if(1&s){const o=e.RV6();e.j41(0,"ion-input",40,2),e.nI1(2,"translate"),e.bIt("keyup.enter",function(){e.eBV(o);const n=e.XpG();return e.Njj(n.handleMessage())}),e.mxI("ngModelChange",function(n){e.eBV(o);const i=e.XpG();return e.DH7(i.textMessage,n)||(i.textMessage=n),e.Njj(n)}),e.bIt("focus",function(){e.eBV(o);const n=e.XpG();return e.Njj(n.scrollToBottom())})("ionFocus",function(){e.eBV(o);const n=e.XpG();return e.Njj(n.scrollToBottom())})("ionBlur",function(){e.eBV(o);const n=e.XpG();return e.Njj(n.onInputBlur())}),e.k0s()}if(2&s){const o=e.XpG();e.Y8G("disabled",o.disabled)("placeholder",e.bMT(2,3,"Type here")),e.R50("ngModel",o.textMessage)}}function z(s,l){if(1&s&&(e.j41(0,"div",41),e.nrm(1,"ion-icon",42),e.j41(2,"ion-label"),e.EFF(3),e.k0s()()),2&s){const o=e.XpG();e.R7$(3),e.JRh(o.durationDisplay)}}function Q(s,l){1&s&&(e.j41(0,"ion-label",43)(1,"span"),e.EFF(2),e.nI1(3,"translate"),e.k0s()()),2&s&&(e.R7$(2),e.SpI(" << ",e.bMT(3,1,"Swipe left to cancel"),""))}function ee(s,l){1&s&&e.nrm(0,"ion-icon",44)}function te(s,l){if(1&s){const o=e.RV6();e.j41(0,"ion-icon",45),e.bIt("click",function(){e.eBV(o);const n=e.XpG();return e.Njj(n.handleMessage())}),e.k0s()}}let ne=(()=>{var s;class l{constructor(t,n,i,a,d,r,m,c){this.record=t,this.ngZone=n,this.headerService=i,this.messageApi=a,this.translate=d,this.telemetryGeneratorService=r,this.storage=m,this.platform=c,this.botMessages=[],this.textMessage="",this.botStartTimeStamp=Date.now(),this.config={},this.botMessageEvent=new e.bkB,this.navigated=!1,this.startRecording=!1,this.duration=0,this.durationDisplay="",this.disabled=!1,this.keyboardOpen=!1,this.keyboardHeight=0,this.defaultLoaderMsg={identifier:"",message:this.translate.instant("Loading..."),messageType:"text",displayMsg:this.translate.instant("Loading..."),type:"received",time:"",timeStamp:"",readMore:!1,likeMsg:!1,dislikeMsg:!1,requestId:""},this.botMessages=[],this.audioRef=new Audio}ngOnInit(){var t=this;this.initialiseBot(),this.platform.backButton.subscribeWithPriority(11,(0,p.A)(function*(){t.handleBackNavigation()})),this.headerService.headerEventEmitted$.subscribe(n=>{"back"==n&&!this.navigated&&(this.navigated=!0,console.log("bot message back event "),this.handleBackNavigation())}),h.s3.addListener("keyboardWillShow",n=>{this.keyboardHeight=n.keyboardHeight,this.adjustForKeyboard()}),h.s3.addListener("keyboardWillHide",()=>{this.keyboardHeight=0,this.adjustForKeyboard()}),this.record.startEndEvent$.subscribe(n=>{this.ngZone.run(()=>{this.startRecording=n,this.calculation()})}),document.addEventListener("visibilitychange",()=>{"hidden"===document.visibilityState&&this.audioRef&&(this.botMessages.forEach(n=>{n.audio&&(n.audio.play=!1)}),this.audioRef.pause())})}adjustForKeyboard(){const t=document.querySelector("ion-footer");t&&(t.style.marginBottom=`${this.keyboardHeight}px`);const n=document.querySelector("ion-content");n&&(n.style.bottom=`${this.keyboardHeight}px`),this.scrollToBottom()}scrollToBottom(){this.keyboardOpen=!0,setTimeout(()=>{this.content.scrollToBottom(300)},100)}ngOnChanges(){var t,n;console.log("ng onchanges ",this.config),null!==(t=this.config)&&void 0!==t&&t.notification&&null!==(n=this.config)&&void 0!==n&&null!==(n=n.notif)&&void 0!==n&&n.body&&(this.textMessage=this.config.notif.body,this.handleMessage())}onInputFocus(){this.keyboardOpen=!0,h.s3.addListener("keyboardWillShow",()=>{setTimeout(()=>this.scrollToBottom(),300)})}onInputBlur(){this.keyboardOpen=!1,h.s3.removeAllListeners()}ngOnDestroy(){h.s3.removeAllListeners()}ionViewWillEnter(){this.botMessages=[],this.navigated=!1}ngAfterViewInit(){this.record.gestureControl(this.recordbtn)}initialiseBot(){var t=this;return(0,p.A)(function*(){t.botMessages=[];let n=`WELCOME_TO_${t.config.type.toUpperCase()}_SAKHI`;0===t.botMessages.length&&t.botMessages.push({messageType:"text",displayMsg:n,type:"received"}),t.content.scrollToBottom(300).then(()=>{t.content.scrollToBottom(300)}),yield t.messageApi.getAllChatMessages(t.config.type).then(i=>{console.log("Bot response",i),i.forEach(a=>{var d;let r={identifier:"",message:"",messageType:"",type:"",displayMsg:"",audio:{file:"",duration:"",play:!1},time:(new Date).toLocaleTimeString("en",{hour:"2-digit",minute:"2-digit"}),timeStamp:"",readMore:!1,likeMsg:!1,dislikeMsg:!1,requestId:""};var m;r.message=a.message,r.identifier=a.identifier,a.message.length>200&&a.message.length-200>100?(r.displayMsg=a.message.substring(0,200),r.readMore=!0):(r.displayMsg=a.message.substring(0,200),r.readMore=!1),r.messageType=a.messageType,r.type=0===a.fromMe?"received":"sent",r.time=new Date(JSON.parse(a.ts)).toLocaleTimeString("en",{hour:"2-digit",minute:"2-digit"}),r.timeStamp=a.ts,r.requestId=null!==(d=a.requestId)&&void 0!==d?d:"",r.likeMsg=1==a.reaction,r.dislikeMsg=0==a.reaction,"audio"==a.messageType&&(r.audio.file="sent"==r.type?a.mediaData:a.mediaUrl,r.audio.duration=null!==(m=a.duration)&&void 0!==m?m:""),t.botMessages.push(r)}),console.log("botMessages ",t.botMessages)}),t.config.notif&&(t.textMessage=t.config.notif.body,t.handleMessage())})()}handleMessage(){var t=this;return(0,p.A)(function*(){t.ngZone.run(()=>{t.chat={identifier:"",message:"",messageType:"text",type:"sent",displayMsg:"",time:(new Date).toLocaleTimeString("en",{hour:"2-digit",minute:"2-digit"}),timeStamp:"",readMore:!1,likeMsg:!1,dislikeMsg:!1,requestId:""},t.textMessage.replace(/\s/g,"").length>0&&(h.s3.hide(),t.chat.message=t.textMessage,t.chat.displayMsg=t.textMessage,t.chat.timeStamp=Date.now(),t.botMessages.push(t.chat),t.saveChatMessage(t.chat),t.content.scrollToBottom(300).then(()=>{t.content.scrollToBottom(300)}),t.botMessages=JSON.parse(JSON.stringify(t.botMessages)),t.botMessages.push(t.defaultLoaderMsg),t.content.scrollToBottom(300).then(()=>{t.content.scrollToBottom(300)}))}),yield t.makeBotAPICall(t.textMessage,"")})()}saveChatMessage(t){const n={identifier:(0,G.A)(),message:t.message,botType:this.config.type,fromMe:"sent"==t.type?1:0,messageType:t.messageType,mediaMimeType:t.messageType,mediaData:"sent"==t.type&&"audio"==t.messageType?t.audio.file:"",mediaUrl:"received"==t.type&&"audio"==t.messageType?t.audio.file:"",duration:"audio"==t.messageType?t.audio.duration:"",requestId:t.requestId,ts:t.timeStamp,reaction:-1};this.messageApi.saveChatMessage(n).then()}makeBotAPICall(t,n){var i=this;return(0,p.A)(function*(){i.textMessage="",i.disabled=!0;let a=i.botMessages.length,d=yield i.storage.getData("lang");yield i.messageApi.getBotMessage(t,n,i.config.type,d).then(r=>{i.botMessages=JSON.parse(JSON.stringify(i.botMessages)),i.botMessages.forEach(function(){var m=(0,p.A)(function*(c,D){if(200===r.responseCode){let u=r.body.result;if(D==a-1&&"received"===c.type&&(c.time=(new Date).toLocaleTimeString("en",{hour:"2-digit",minute:"2-digit"}),c.timeStamp=Date.now(),c.requestId=r.requestHeaders["X-Request-ID"],null!=u&&u.output)){var C,T,B,k;if(i.disabled=!1,c.message=null===(C=u.output)||void 0===C?void 0:C.text,(null==u||null===(T=u.output)||void 0===T?void 0:T.text.length)>200&&(null==u?void 0:u.output.text.length)-200>100?(c.displayMsg=u.output.text.substring(0,200),c.readMore=!0):c.displayMsg=null===(k=u.output)||void 0===k?void 0:k.text,i.content.scrollToBottom(300).then(()=>{i.content.scrollToBottom(300)}),i.saveChatMessage(c),null!=u&&null!==(B=u.output)&&void 0!==B&&B.audio){var O;let E=yield i.fetchAudioDuration(u.output.audio);console.log("duration ",E);let v={identifier:"",message:"",messageType:"",displayMsg:"",audio:{file:"",duration:"",play:!1},type:"received",time:(new Date).toLocaleTimeString("en",{hour:"2-digit",minute:"2-digit"}),timeStamp:Date.now(),readMore:!1,likeMsg:!1,dislikeMsg:!1,requestId:""};v.audio={file:null===(O=u.output)||void 0===O?void 0:O.audio,duration:E,play:!1},v.messageType="audio",i.ngZone.run(()=>{i.botMessages.push(v),i.saveChatMessage(v),i.content.scrollToBottom(300).then(()=>{i.content.scrollToBottom(300).then()})})}i.content.scrollToBottom(300).then(()=>{i.content.scrollToBottom(300).then()})}}else{var x;c.message=r.errorMesg?r.errorMesg:null!==(x=r.data)&&void 0!==x&&x.detail?r.data.detail:"An unknown error occured, please try after sometime",c.displayMsg=c.message,c.time=(new Date).toLocaleTimeString("en",{hour:"2-digit",minute:"2-digit"}),c.timeStamp=Date.now(),i.saveChatMessage(c),i.disabled=!1}});return function(c,D){return m.apply(this,arguments)}}())}).catch(r=>{i.disabled=!1,console.log("catch error ",r),i.botMessages[a-1].message="An unknown error occured, please try after sometime",i.botMessages[a-1].displayMsg="An unknown error occured, please try after sometime",i.botMessages[a-1].time=(new Date).toLocaleTimeString("en",{hour:"2-digit",minute:"2-digit"}),i.botMessages[a-1].timeStamp=Date.now(),r.body.detail.length>0&&"type_error.enum"===r.body.detail[0].type&&(i.botMessages[a-1].message="Sorry, this language is not currently supported.",i.botMessages[a-1].displayMsg="Sorry, this language is not currently supported."),i.saveChatMessage(i.botMessages[a-1])})})()}readmore(t){let n=t.displayMsg,i=t.displayMsg.length;t.message!==n?(t.message.length<i+200?(t.displayMsg=n+t.message.substring(i,t.message.length),t.readMore=!1):(t.displayMsg=n+t.message.substring(i,i+200),t.readMore=!0),this.content.scrollToBottom(300).then(()=>{this.content.scrollToBottom(300).then()})):t.readMore=!1}playFile(t){var n=this;return(0,p.A)(function*(){let i=t.audio,a="";n.botMessages.forEach(d=>{var r;null!==(r=d.audio)&&void 0!==r&&r.play&&t.timeStamp!==d.timeStamp&&(d.audio.play=!1)}),"sent"===t.type?(a=`data:audio/aac;base64,${(yield _.YA.readFile({path:i.file,directory:_.__.Data})).data}`,i.play=!i.play):"received"===t.type&&(a=i.file,i.play=!i.play),n.audioRef.src="",n.audioRef.src=a,n.audioRef.load(),n.audioRef.preload="auto",n.audioRef.controls=!0,n.audioRef.oncanplaythrough=()=>{i.play?n.audioRef.play():n.audioRef.pause()},n.audioRef.ondurationchange=d=>{console.log("ondurationchange ",d)},n.audioRef.ontimeupdate=d=>{},n.audioRef.onended=()=>{i.play=!1,n.audioRef.pause()}})()}handleBackNavigation(){let t=Date.now()-this.botStartTimeStamp;if(this.botMessages.length>0){let n={audio:0,text:0};this.botMessages.forEach(i=>{"text"==i.messageType?n.text++:"audio"==i.messageType&&(n.audio++,this.audioRef&&(i.audio&&(i.audio.play=!1),this.audioRef.pause()))}),console.log("result count ",n),this.botMessageEvent.emit({audio:n.audio,text:n.text,duration:t/1e3})}else this.botMessageEvent.emit({audio:0,text:0,duration:t/1e3});this.botMessages=[]}cancelRecording(){var t=this;return(0,p.A)(function*(){console.log("cancel recording"),yield t.record.stopRecognition("audio").then(n=>{console.log("res on recorded data ",n)}),t.startRecording=!1})()}calculation(){if(!this.startRecording)return this.duration=0,void(this.durationDisplay="");this.duration+=1;const t=Math.floor(this.duration/60),n=(this.duration%60).toString().padStart(2,"0");this.durationDisplay=`${t}:${n}`,setTimeout(()=>{this.calculation()},1e3)}onLongPressStart(){var t=this;return(0,p.A)(function*(){console.log("long press start"),(yield(yield P.R.hasAudioRecordingPermission()).value)?t.record.startRecognition(""):yield P.R.requestAudioRecordingPermission()})()}onLongPressEnd(){var t=this;return(0,p.A)(function*(){console.log("long press end"),yield t.record.stopRecognition("audio").then(function(){var n=(0,p.A)(function*(i){if(console.log("result on recorded data ",i),i.value&&i.value.recordDataBase64){t.chat={identifier:"",message:"",messageType:"",displayMsg:"",audio:{file:"",duration:"",play:!1},type:"sent",time:(new Date).toLocaleTimeString("en",{hour:"2-digit",minute:"2-digit"}),timeStamp:"",readMore:!1,likeMsg:!1,dislikeMsg:!1,requestId:""};const a=i.value.recordDataBase64;console.log("..................",i,t.durationDisplay);const d=(new Date).getTime()+".wav";yield _.YA.writeFile({path:d,directory:_.__.Data,data:a}),t.ngZone.run(()=>{t.chat.messageType="audio",t.chat.audio={file:d,base64Data:a,duration:t.getTimeString(i.value.msDuration),play:!1},t.chat.timeStamp=Date.now(),t.botMessages.push(t.chat),t.saveChatMessage(t.chat),t.content.scrollToBottom(300).then(()=>{t.content.scrollToBottom(300)}),t.botMessages.push(t.defaultLoaderMsg),t.content.scrollToBottom(300).then(()=>{t.content.scrollToBottom(300)})}),t.makeBotAPICall("",a)}});return function(i){return n.apply(this,arguments)}}())})()}getTimeString(t){let n=Math.floor(t/1e3/60),i=Math.floor(t/1e3-60*n);return n.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")}fetchAudioDuration(t){const n=new AudioContext;return fetch(t).then(i=>i.arrayBuffer()).then(i=>n.decodeAudioData(i)).then(i=>{const a=i.duration;return console.log(`The audio file duration is ${a} seconds`),Math.floor(a/60).toString().padStart(2,"0")+":"+Math.floor(a%60).toString().padStart(2,"0")}).catch(i=>"")}msgLiked(t,n){this.botMessages.forEach((i,a)=>{if(t.timeStamp==i.timeStamp){let r={id:this.botMessages[a-1].message,type:"Request"},m=[];m.push({id:t.requestId,type:"X-Request-ID"}),"text"==this.botMessages[a-1].messageType&&m.push(r),"like"==n?(i.likeMsg=!0,i.dislikeMsg=!1,this.messageApi.updateMessageReactions(i.identifier,1),this.telemetryGeneratorService.generateInteractTelemetry("TOUCH","message-liked","bot",`${this.config.type}-sakhi`,void 0,void 0,void 0,m)):(t.dislikeMsg=!0,t.likeMsg=!1,this.messageApi.updateMessageReactions(i.identifier,0),this.telemetryGeneratorService.generateInteractTelemetry("TOUCH","message-disliked","bot",`${this.config.type}-sakhi`,void 0,void 0,void 0,m))}})}}return(s=l).\u0275fac=function(t){return new(t||s)(e.rXU(M.XI),e.rXU(e.SKi),e.rXU(M.Ux),e.rXU(M.F_),e.rXU(I.c$),e.rXU(A.O),e.rXU(M.n$),e.rXU(w.OD))},s.\u0275cmp=e.VBU({type:s,selectors:[["app-bot-messages"]],viewQuery:function(t,n){if(1&t&&(e.GBs(j,5,e.aKT),e.GBs(f.W9,7)),2&t){let i;e.mGM(i=e.lsd())&&(n.recordbtn=i.first),e.mGM(i=e.lsd())&&(n.content=i.first)}},inputs:{config:"config"},outputs:{botMessageEvent:"botMessageEvent"},features:[e.OA$],decls:13,vars:11,consts:[["content",""],["recordbtn",""],["textareaField",""],["id","content",3,"fullscreen","scrollEvents"],["class","bot-content",4,"ngIf"],[2,"background-color","white"],[1,"bot-input",3,"ngClass"],["aria-label","","value","","fill","outline","shape","round",3,"disabled","placeholder","ngModel","keyup.enter","ngModelChange","focus","ionFocus","ionBlur",4,"ngIf"],["class","input_record",4,"ngIf"],[3,"ngClass"],["class","cancel-record",4,"ngIf"],["fill","clear","size","small",3,"touchstart","touchend","disabled"],["aria-hidden","true","class","audio-record-mic right icon","src","assets/icon/bot-audio.svg",4,"ngIf"],["class","audio-record-mic right icon","name","send",3,"click",4,"ngIf"],[1,"bot-content"],[4,"ngFor","ngForOf"],[3,"class","ngClass",4,"ngIf"],["class","action-div",4,"ngIf"],["fill","clear","size","small",3,"click",4,"ngIf"],["class","audio_msg",3,"click",4,"ngIf"],["class","time",4,"ngIf"],["fill","clear","size","small",3,"click"],[1,"audio_msg",3,"click"],[1,"play_audio"],["src","../../../assets/icon/play.svg","alt","",4,"ngIf"],["src","../../../assets/icon/pause.svg","alt","",4,"ngIf"],[1,"audio-wave"],["src","../../../assets/icon/waveform.svg","alt",""],["src","../../../assets/icon/play.svg","alt",""],["src","../../../assets/icon/pause.svg","alt",""],[1,"time"],[1,"action-div"],[1,"action_button",3,"click"],["class","like","aria-hidden","true","src","assets/icon/thumb-up.svg",4,"ngIf"],["aria-hidden","true","src","assets/icon/like.svg",4,"ngIf"],[1,"action_button","unlike",3,"click"],["aria-hidden","true","src","assets/icon/dislike.svg",4,"ngIf"],["aria-hidden","true","src","assets/icon/thumb-up.svg",1,"like"],["aria-hidden","true","src","assets/icon/like.svg"],["aria-hidden","true","src","assets/icon/dislike.svg"],["aria-label","","value","","fill","outline","shape","round",3,"keyup.enter","ngModelChange","focus","ionFocus","ionBlur","disabled","placeholder","ngModel"],[1,"input_record"],["aria-hidden","true","name","mic",1,"audio-record-mic","on-record"],[1,"cancel-record"],["aria-hidden","true","src","assets/icon/bot-audio.svg",1,"audio-record-mic","right","icon"],["name","send",1,"audio-record-mic","right","icon",3,"click"]],template:function(t,n){if(1&t){const i=e.RV6();e.j41(0,"ion-content",3,0),e.DNE(2,q,2,1,"div",4),e.k0s(),e.j41(3,"ion-footer",5)(4,"div",6),e.DNE(5,Z,3,5,"ion-input",7)(6,z,4,1,"div",8),e.j41(7,"div",9,1),e.DNE(9,Q,4,3,"ion-label",10),e.j41(10,"ion-button",11),e.bIt("touchstart",function(){return e.eBV(i),e.Njj(n.onLongPressStart())})("touchend",function(){return e.eBV(i),e.Njj(n.onLongPressEnd())}),e.DNE(11,ee,1,0,"ion-icon",12),e.k0s()(),e.DNE(12,te,1,0,"ion-icon",13),e.k0s()()}2&t&&(e.Y8G("fullscreen",!0)("scrollEvents",!0),e.R7$(2),e.Y8G("ngIf",n.botMessages.length>0),e.R7$(2),e.Y8G("ngClass",n.keyboardOpen?"keyboard-open":"keyboard-closed"),e.R7$(),e.Y8G("ngIf",!n.startRecording),e.R7$(),e.Y8G("ngIf",n.startRecording),e.R7$(),e.Y8G("ngClass",n.startRecording?"cancel-div":""),e.R7$(2),e.Y8G("ngIf",n.startRecording),e.R7$(),e.Y8G("disabled",n.disabled),e.R7$(),e.Y8G("ngIf",0==n.textMessage.length),e.R7$(),e.Y8G("ngIf",n.textMessage.length>0))},dependencies:[b.YU,b.Sq,b.bT,R.BC,R.vS,f.Jm,f.W9,f.M0,f.iq,f.$w,f.he,f.IO,f.Gw,I.D9],styles:["ion-content[_ngcontent-%COMP%]{--padding-top: 0px;height:90%}.bot-content[_ngcontent-%COMP%]{padding:1rem;overflow:auto}.bot-content[_ngcontent-%COMP%]   .msg-block[_ngcontent-%COMP%]{margin-top:1rem}.bot-content__message[_ngcontent-%COMP%]{line-height:normal;letter-spacing:-.3px;background:var(--ion-color-primary-contrast);padding:1rem 1rem 10px;max-width:80%;position:relative;width:-moz-fit-content;width:fit-content;box-shadow:0 .25rem .25rem #0000000d;white-space:pre-line}.bot-content__message[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{display:flex}.bot-content__message[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{color:#00000040;display:flex;justify-content:flex-end;font-size:.688rem;letter-spacing:.031rem;padding-top:.25rem}.bot-content__message.received[_ngcontent-%COMP%]{border-radius:1rem 1rem 1rem 0px}.bot-content__message.sent[_ngcontent-%COMP%]{background:#dcf7c5;margin-left:auto;border-radius:1rem 1rem 0px}.bot-input[_ngcontent-%COMP%]{bottom:0;width:100%;padding:1rem;background:var(--ion-color-primary-contrast);box-shadow:0 -.33px #a6a6aa;display:flex;align-items:center}.bot-input[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{width:90%}.bot-input[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin:0}.bot-input[_ngcontent-%COMP%]   .input_record[_ngcontent-%COMP%]{width:30%;display:flex;align-items:center}.bot-input[_ngcontent-%COMP%]   .input_record[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-left:1rem}.bot-input[_ngcontent-%COMP%]   .cancel-div[_ngcontent-%COMP%]{display:flex;width:100%;margin-left:1rem;align-items:center}.bot-input[_ngcontent-%COMP%]   .cancel-record[_ngcontent-%COMP%]{width:90%}.bot-input[_ngcontent-%COMP%]   .audio-record-mic[_ngcontent-%COMP%]{width:1.75rem;height:1.75rem;fill:var(--ion-color-medium)}.bot-input[_ngcontent-%COMP%]   .on-record[_ngcontent-%COMP%]{fill:var(--ion-color-primary)!important}.bot-input[_ngcontent-%COMP%]   .sc-ion-input-md-h[_ngcontent-%COMP%]{height:2.25rem;min-height:auto;padding:0 .5rem!important;--border-color: gray;caret-color:gray!important;--highlight-color: gray !important;--highlight-color-focused: gray !important}.bot-input[_ngcontent-%COMP%]   .keyboard-open[_ngcontent-%COMP%], .keyboard-open[_ngcontent-%COMP%]{transform:translateY(-50%)}.audio_msg[_ngcontent-%COMP%]{display:flex;background:#c6dfc6;padding:5px;border-radius:10px}.audio_msg[_ngcontent-%COMP%]   .play_audio[_ngcontent-%COMP%]{display:flex;flex-direction:column}.audio_msg[_ngcontent-%COMP%]   .play_audio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:8px;text-align:center}.audio_msg[_ngcontent-%COMP%]   .audio-wave[_ngcontent-%COMP%]{padding-left:5px}.audio_msg[_ngcontent-%COMP%]   .audio-wave[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px}.audio_msg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25px}.action-div[_ngcontent-%COMP%]{display:flex;margin-bottom:1rem;margin-top:-.6rem;margin-left:.3rem}.action_button[_ngcontent-%COMP%]{padding:.1rem .5rem;width:-moz-fit-content;width:fit-content;box-shadow:0 .25rem .25rem #0000000d;white-space:pre-line;border-radius:16px;background:#fff;border:.1px solid grey;transform:scale(1)}.unlike[_ngcontent-%COMP%]{transform:scale(-1);margin-left:.75rem!important}ion-content[_ngcontent-%COMP%]{--padding-bottom: 60px}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{display:flex;align-items:center}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{flex:1}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-left:10px}"]}),l})()}}]);