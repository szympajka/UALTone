(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,n){e.exports=n(177)},177:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n(1),a=n(0),i=n.n(a),s=n(37),c=n.n(s),l=n(7),u=n(45),d=n(5),p=n(20),h=n.n(p),f=n(29),b=n(23),g=n.n(b),m=n(38),v=n.n(m),O=!1,D={TOKEN:"Authorization"},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{auth:!0,headers:{},axios:!1,multidata:!1},t=e.headers||{};return e.multidata?t["Content-Type"]="multipart/form-data":t["Content-Type"]="application/json",e.auth&&(t[D.TOKEN]="Bearer ".concat((D.TOKEN,"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDgyNzM0MDcsImV4cCI6MTU0ODg3ODIwNywic3ViIjoiMTIifQ.T2lU8EXi5sZC4Xpt5X_XgOxzzCLt7rRvxDp2JLjKnLc"))),e.axios?t:new Headers(t)},y={album_id:"",name:"",description:"",photo:"",color:"",uri:null};console.log("setHeaders",j());var E={uploadPhoto:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=v.a.CancelToken.source(),r=new FormData;return Object(o.forEach)(function(e){var t={};return Object(o.forEach)(e,function(e,n){null!==e&&void 0!==e&&(t[n]=e)}),t}(Object(d.a)({},y,e)),function(e,t){return r.append(t,e)}),{request:v()({url:"https://devapi.imglish.com/photo/add",method:"POST",headers:j({axios:!0,auth:!0,multidata:!0}),data:r,cancelToken:n.token,onUploadProgress:function(e){if(t.onUploadProgress){var n=e.loaded,r=e.total,o=Number(n),a=Number(r);o&&a&&t.onUploadProgress(parseInt(o/a*100,10))}}}).then(function(e){return e.data}),source:n}},getPhoto:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:""};return fetch("https://devapi.imglish.com/photo/".concat(e.id),{method:"GET",headers:j()}).then(function(e){return e.json()})},createAlbum:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"",description:"",uri:""};return fetch("https://devapi.imglish.com/album/create",{method:"POST",headers:j(),body:JSON.stringify(e)}).then(function(e){return e.json()})},getAlbum:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:""};return fetch("https://devapi.imglish.com/album/".concat(e.id),{method:"GET",headers:j()}).then(function(e){return e.json()})}},S={0:"C1",1:"D1",2:"E1",3:"F1",4:"G1",5:"A1",6:"B1",7:"C2",8:"D2",9:"E2",10:"F2",11:"G2",12:"A2",13:"B2",14:"C3",15:"D3",16:"E3",17:"F3",18:"G3",19:"A3",20:"B3",21:"C4",22:"D4",23:"E4",24:"F4",25:"G4",26:"A4",27:"B4",28:"C5",29:"D5",30:"E5",31:"F5",32:"G5",33:"A5",34:"B5",35:"C6",36:"D6",37:"E6",38:"F6",39:"G6",40:"A6",41:"B6",42:"C7",43:"D7",44:"E7",45:"F7",46:"G7",47:"A7",48:"B7"};function F(){var e=Object(r.a)(["\n  background: transparent;\n  opacity: 0;\n  padding: 12px 18px;\n  border-radius: 5px;\n  color: rgb(255, 255, 255);\n  font-weight: 400;\n  position: fixed;\n  z-index: 100;\n  bottom: 20px;\n  left: 50%;\n  transform: translatex(-50%);\n  margin: auto;\n  display: inline-block;\n  border: solid 1px;\n"]);return F=function(){return e},e}function C(){var e=Object(r.a)(["\n  // border-top-left-radius: ","px;\n  // border-top-right-radius: ","px;\n  // border-bottom-left-radius: ","px;\n  // border-bottom-right-radius: ","px;\n  width: ","px;\n  height: ","px;\n  // color: transparent;\n  color: #000;\n  font-size: 16px;\n  display: flex;\n  background-color: #000;\n  // background-color: ",";\n  justify-content: center;\n  align-items: center;\n  transition: all ease-in 0.2s;\n\n  // :nth-of-type(2n){\n  //   background-color: #967171\n  // }\n"]);return C=function(){return e},e}function k(){var e=Object(r.a)(["\n  font-size: 5em;\n  margin: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return k=function(){return e},e}function x(){var e=Object(r.a)(["\n  position: relative;\n  width: ","px;\n  height: ","px;\n  background: #000;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return x=function(){return e},e}var w=l.b.div(x(),window.innerWidth/3,window.innerWidth/3),A=l.b.h1(k()),T=l.b.div(C(),function(){return Object(o.random)(0,Object(o.size)(S))},function(){return Object(o.random)(0,Object(o.size)(S))},function(){return Object(o.random)(0,Object(o.size)(S))},function(){return Object(o.random)(0,Object(o.size)(S))},window.innerWidth/3/(Object(o.size)(S)/7),window.innerWidth/3/(Object(o.size)(S)/7),function(e){return e.play?"#ff0007ab":"transparent"}),U=l.b.div(F()),P=["#FF6633","#FFB399","#FF33FF","#FFFF99","#00B3E6","#E6B333","#3366E6","#999966","#99FF99","#B34D4D","#80B300","#809900","#E6B3B3","#6680B3","#66991A","#FF99E6","#CCFF1A","#FF1A66","#E6331A","#33FFCC","#66994D","#B366CC","#4D8000","#B33300","#CC80CC","#66664D","#991AFF","#E666FF","#4DB3FF","#1AB399","#E666B3","#33991A","#CC9999","#B3B31A","#00E680","#4D8066","#809980","#E6FF80","#1AFF33","#999933","#FF3380","#CCCC00","#66E64D","#4D80CC","#9900B3","#E64D66","#4DB380","#FF4D4D","#99E6E6","#6666FF"],I=(new g.a.Synth).toMaster(),N=function(e,t){g.a.Transport.stop();var n=[],r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"4n",t=g.a.now();return n.forEach(function(e){t+=e}),n.push(e),console.log("notetime",t),t};e.data.forEach(function(e){var t,n,a,i=e.octave,s=e.note,c=e.description;t=i,n=s,a=c,g.a.Transport.schedule(function(e){I.triggerAttackRelease(t,n,e),g.a.Draw.schedule(function(){document.getElementById("text").innerHTML=a,document.getElementById("text").style.color=P[Object(o.indexOf)(Object(o.toArray)(S),t)],document.getElementById(t).style.backgroundColor=P[Object(o.indexOf)(Object(o.toArray)(S),t)]},e),g.a.Draw.schedule(function(){document.getElementById(t).style.backgroundColor=""},e+g.a.Time(n).toSeconds())},r(n))}),g.a.Transport.schedule(function(){document.getElementById("text").innerHTML="",t(Object(d.a)({},e,{data:[],ongoing:!1})),window.scan()},r()),g.a.Transport.start()},R=function(){console.log("render");var e=Object(a.useState)({ongoing:!1,data:[],albumID:0,play:""}),t=Object(u.a)(e,2),n=t[0],r=t[1],s=function(){var e=Object(f.a)(h.a.mark(function e(){var t,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return window.code||(window.code=422),t=[],e.next=4,fetch("".concat("https://imglish.design:9910/","?photoID=",1,"&imageURI=",1));case 4:return e.next=6,e.sent.json();case 6:a=e.sent,t.push(a),r(Object(d.a)({},n,{data:Object(o.flattenDeep)(t),ongoing:!1}));case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return n.ongoing&&s(),n.data.length&&(console.log(n.data),N(n,r)),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(U,{type:"button",onClick:function(){r(Object(d.a)({},n,{ongoing:!0}))}},n.ongoing?"Fetching...":"Release")),i.a.createElement(A,{id:"text"}),i.a.createElement(w,null,Object(o.map)(S,function(e,t){return i.a.createElement(T,{type:"tone",id:e,key:e,octave:e,color:P[t],play:e===n.play},e)})))},B=new(n(66).BrowserQRCodeReader);window.code=null;var z=function(){var e=Object(f.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.decodeFromInputVideoDevice(void 0,"qr");case 2:t=e.sent,window.code=parseInt(t.text,10),document.querySelector('[type="button"]').click(),B.reset();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();window.scan=z;var L=z,G=n(11),H=n(12),_=n(18),M=n(17),q=n(19),W=n(2),Z=i.a.createContext(),Q=n(46),J=n(32),V={NEW_ALBUM:"NEW_ALBUM",FILES_PER_UPLOAD:3,STATUS:{ERROR:"ERROR",PAUSED:"PAUSED",PENDING:"PENDING",ONGOING:"ONGOING",ABORTED:"ABORTED",UPLOADED:"UPLOADED"}},X={files:[],newAlbumID:null},K={};window.aaa={getState:function(){return X},getGrouped:function(){return Object(o.groupBy)(X.files,"state.status")}};var Y=function(){function e(t){Object(G.a)(this,e);var n=t.file,r=t.route,o=Object(J.a)(t,["file","route"]);this.state={file:n,route:r,buffer:!1,remoteFile:null,uploadedAt:null,responceMessage:null,status:V.STATUS.PENDING},this.props=o,this.uploadFile=this.uploadFile.bind(this),this.changeStatus=this.changeStatus.bind(this),this.registerUpload=this.registerUpload.bind(this),this.unregisterUpload=this.unregisterUpload.bind(this),this.removeFileFromBuffer=this.removeFileFromBuffer.bind(this)}return Object(H.a)(e,[{key:"changeStatus",value:function(e,t){this.state.status=V.STATUS[e]||this.state.status,t&&(this.state.responceMessage=t)}},{key:"registerUpload",value:function(){this.changeStatus(V.STATUS.ONGOING)}},{key:"unregisterUpload",value:function(e){this.changeStatus(e),this.props.uploadFiles()}},{key:"removeFileFromBuffer",value:function(){var e=this;Object(o.remove)(X.files,function(t){return t.state.file.fid===e.state.file.fid}),this.props.uploadFiles()}},{key:"uploadFile",value:function(){var e=Object(f.a)(h.a.mark(function e(){var t,n,r,a,i,s,c,l,u=this;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,n=t.file,r=t.route,a=r,r!==V.NEW_ALBUM){e.next=10;break}if(X.newAlbumID){e.next=9;break}return e.next=6,E.createAlbum({name:"New Album",description:""});case 6:i=e.sent,X.newAlbumID=i.message.id,this.props.populateChanges("qqqqq");case 9:a=X.newAlbumID;case 10:s=E.uploadPhoto({album_id:a,name:n.name,photo:n,color:""},{onUploadProgress:function(e){u.onUploadProgress&&Object(o.isFunction)(u.onUploadProgress)&&u.onUploadProgress(e)}}),c=s.request,l=s.source,this.cancelUpload=function(){if(!u.state.uploadedAt||new Date-u.state.uploadedAt<140){if(u.state.status===V.STATUS.ONGOING)return l.cancel(),u.removeFileFromBuffer(),Promise.resolve();if(u.state.remoteFile)return E.deletePhoto({id:u.state.remoteFile.id}).then(function(){u.removeFileFromBuffer()})}else u.removeFileFromBuffer();return Promise.resolve()},this.pauseUpload=function(){var e=u.state.status;return u.changeStatus(V.STATUS.PAUSED),e===V.STATUS.ONGOING?(l.cancel(),Promise.resolve()):u.state.remoteFile?E.deletePhoto({id:u.state.remoteFile.id}):Promise.resolve()},c.then(function(e){e.success?(u.state.uploadedAt=new Date,u.state.remoteFile=e.message,u.unregisterUpload(V.STATUS.UPLOADED),u.props.populateChanges("aaaa"),u.onUploadSuccess&&Object(o.isFunction)(u.onUploadSuccess)&&u.onUploadSuccess()):u.unregisterUpload(V.STATUS.ERROR,e.message)}).catch(function(e){v.a.isCancel(e)});case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"upload",value:function(){this.registerUpload(),this.uploadFile()}}]),e}(),$=function(){function e(t){Object(G.a)(this,e),this.state={uploadPerSession:V.FILES_PER_UPLOAD,bufferPerSession:V.BUFFER_PER_UPLOAD},this.props=t,this.push=this.push.bind(this),this.clearAll=this.clearAll.bind(this),this.cancelFile=this.cancelFile.bind(this),this.uploadFiles=this.uploadFiles.bind(this),this.pauseUpload=this.pauseUpload.bind(this),this.clearUpload=this.clearUpload.bind(this),this.resumeUpload=this.resumeUpload.bind(this),this.getGlobalState=this.getGlobalState.bind(this),this.populateChanges=this.populateChanges.bind(this),this.countUploadedFiles=this.countUploadedFiles.bind(this),this.registerSubscriberPopulator=this.registerSubscriberPopulator.bind(this),this.unregisterSubscriberPopulator=this.unregisterSubscriberPopulator.bind(this)}return Object(H.a)(e,[{key:"populateChanges",value:function(e){Object(o.forEach)(K,function(t){return t(e)})}},{key:"uploadFiles",value:function(){var e=X.files,t=this.state.uploadPerSession,n=Object(o.groupBy)(e,"state.status"),r=n[V.STATUS.ONGOING]||[];console.log(n),r.length<t&&Object(o.forEach)(Object(o.take)(n[V.STATUS.PENDING],t),function(e){return e.upload()})}},{key:"push",value:function(e){var t,n=window.location.pathname,r=this.uploadFiles,o=this.populateChanges,a=function(e){var t=/(\/album\/)(\d*)/,n=e;return"/404"===n?null:t.test(n)?t.exec(n)[2]:V.NEW_ALBUM}(n);a&&((t=X.files).push.apply(t,Object(Q.a)(e.map(function(e){return new Y({file:e,route:a,uploadFiles:r,populateChanges:o})}))),this.uploadFiles())}},{key:"cancelFile",value:function(e){var t=Object(o.find)(X.files,function(t){return t.state.file.fid===e});return Object(o.has)(t,"cancelUpload")?t.cancelUpload():(Object(o.remove)(X.files,function(t){return t.state.file.fid===e}),Promise.resolve())}},{key:"getGlobalState",value:function(){return X}},{key:"countUploadedFiles",value:function(){var e=X.files;return[(Object(o.groupBy)(e,"state.status")[V.STATUS.UPLOADED]||[]).length]}},{key:"pauseUpload",value:function(){var e=X.files,t=Object(o.groupBy)(e,"state.status")[V.STATUS.ONGOING]||[];Object(o.forEach)(t,function(e){Object(o.has)(e,"pauseUpload")&&e.pauseUpload()})}},{key:"resumeUpload",value:function(){var e=X.files,t=Object(o.groupBy)(e,"state.status")[V.STATUS.PAUSED]||[];Object(o.forEach)(t,function(e){e.upload()})}},{key:"clearUpload",value:function(){var e=X.files,t=Object(o.groupBy)(e,"state.status")[V.STATUS.UPLOADED]||[];Object(o.forEach)(t,function(e){Object(o.remove)(X.files,function(t){return t.state.file.fid===e.state.file.fid})})}},{key:"clearAll",value:function(){this.pauseUpload(),X.files=[]}},{key:"registerSubscriberPopulator",value:function(e){var t=Math.random().toString(36).substr(2,9);return K[t]=e,t}},{key:"unregisterSubscriberPopulator",value:function(e){delete K[e]}}]),e}();function ee(){var e=Object(r.a)(["\n  background: none;\n  color: #fff;\n  border: none;\n  font-size: 1rem;\n  text-align: right;\n  white-space: nowrap;\n"]);return ee=function(){return e},e}function te(){var e=Object(r.a)(["\n  color: #fff;\n  margin: 0;\n  text-align: center;\n  padding: 12px 6px;\n  font-size: 0.875rem;\n"]);return te=function(){return e},e}function ne(){var e=Object(r.a)(["\n  max-width: 100%;\n  left: 0;\n  right: 0;\n  top: 44px;\n  margin: auto;\n  position: absolute;\n  border: solid 20px #fff;\n  box-sizing: border-box;\n"]);return ne=function(){return e},e}function re(){var e=Object(r.a)(["\n  width: 0;\n  margin-left: 12px;\n"]);return re=function(){return e},e}function oe(){var e=Object(r.a)(["\n  display: flex;\n  position: fixed;\n  padding: 12px;\n  padding-bottom: 18px\n  box-sizing: border-box;\n  bottom: 0;\n  width: 100%;\n"]);return oe=function(){return e},e}function ae(){var e=Object(r.a)(["\n  border-radius: 50px;\n  border: 0;\n  height: 52px;\n  width: 100%;\n  padding: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  color: #000000;\n  background: #7BC950;\n  font-size: 1.2rem;\n"]);return ae=function(){return e},e}function ie(){var e=Object(r.a)(["\n  border-radius: 50px;\n  border: 0;\n  height: 52px;\n  width: ",";\n  padding: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  color: #000000;\n  background: #E5F77D;\n  font-size: 1.2rem;\n"]);return ie=function(){return e},e}function se(){var e=Object(r.a)(["\n  width: 100%;\n  color: #fff;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return se=function(){return e},e}l.b.div(se());var ce=l.b.button(ie(),function(e){return e.small?"50%":"100%"}),le=l.b.button(ae()),ue=l.b.div(oe()),de=l.b.div(re()),pe=l.b.img(ne()),he=l.b.h3(te()),fe=l.b.button(ee()),be=function(e){function t(e){var n;return Object(G.a)(this,t),(n=Object(_.a)(this,Object(M.a)(t).call(this,e))).state={qr:!1},n.fuse=new $,n.fuseID=n.fuse.registerSubscriberPopulator(function(){return n.forceUpdate()}),n.addPhotos=n.addPhotos.bind(Object(W.a)(Object(W.a)(n))),n.generateQR=n.generateQR.bind(Object(W.a)(Object(W.a)(n))),n.getQR=n.getQR.bind(Object(W.a)(Object(W.a)(n))),n.getView=n.getView.bind(Object(W.a)(Object(W.a)(n))),n}return Object(q.a)(t,e),Object(H.a)(t,[{key:"addPhotos",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.createElement(ce,{small:t.small,onClick:function(){return e.dropZoneContext.dropzoneRef.current.open()},tabIndex:"0",type:"button"},t.small?"+ Add":"+ Add Photos")}},{key:"generateQR",value:function(){var e=this;document.getElementById("qrcode").innerHTML="";var t=new window.QRCode(document.getElementById("qrcode"),{text:this.fuse.getGlobalState().newAlbumID,width:512,height:512,colorDark:"#000000",colorLight:"#ffffff",correctLevel:window.QRCode.CorrectLevel.H});setTimeout(function(){e.setState({qr:t._el.querySelector("img").src})},178)}},{key:"getQR",value:function(){var e=this;return i.a.createElement(le,{onClick:function(){return e.generateQR()},tabIndex:"0",type:"button"},"Get your pass")}},{key:"goBack",value:function(){var e=this;return i.a.createElement(fe,{onClick:function(){e.fuse.clearAll(),e.setState({qr:null})},tabIndex:"0",type:"button"}," \u2190 Start again")}},{key:"getView",value:function(){return this.state.qr?i.a.createElement(i.a.Fragment,null,i.a.createElement(he,null,"Scan your ticket to play music"),i.a.createElement(pe,{src:this.state.qr}),i.a.createElement(ue,{style:{flexDirection:"row-reverse"}},this.goBack())):this.fuse.getGlobalState().files.length?i.a.createElement(ue,null,this.addPhotos({small:!0}),i.a.createElement(de,null),this.getQR()):i.a.createElement(ue,null,this.addPhotos())}},{key:"componentWillUnmount",value:function(){this.fuse.unregisterSubscriberPopulator(this.fuseID)}},{key:"render",value:function(){var e=this;return i.a.createElement(Z.Consumer,null,function(t){return e.dropZoneContext=t,i.a.createElement(i.a.Fragment,null,e.getView())})}}]),t}(i.a.Component),ge=n(104),me=n.n(ge),ve="undefined"===typeof document||!document||!document.createElement||"multiple"in document.createElement("input");function Oe(e){var t=[];if(e.dataTransfer){var n=e.dataTransfer;n.files&&n.files.length?t=n.files:n.items&&n.items.length&&(t=n.items)}else e.target&&e.target.files&&(t=e.target.files);return Array.prototype.slice.call(t)}function De(e,t){return"application/x-moz-file"===e.type||me()(e,t)}function je(e){e.preventDefault()}var ye={borderStyle:"solid",borderColor:"#c66",backgroundColor:"#eee"},Ee={opacity:.5},Se={borderStyle:"solid",borderColor:"#6c6",backgroundColor:"#eee"},Fe={width:200,height:200,borderWidth:2,borderColor:"#666",borderStyle:"dashed",borderRadius:5},Ce=function(e){function t(e,n){var r;return Object(G.a)(this,t),(r=Object(_.a)(this,Object(M.a)(t).call(this,e,n))).state={draggedFiles:[],acceptedFiles:[],rejectedFiles:[]},r.setRef=r.setRef.bind(Object(W.a)(Object(W.a)(r))),r.setRefs=r.setRefs.bind(Object(W.a)(Object(W.a)(r))),r.isFileDialogActive=!1,r.composeHandlers=r.composeHandlers.bind(Object(W.a)(Object(W.a)(r))),r.onClick=r.onClick.bind(Object(W.a)(Object(W.a)(r))),r.onDocumentDrop=r.onDocumentDrop.bind(Object(W.a)(Object(W.a)(r))),r.onDragEnter=r.onDragEnter.bind(Object(W.a)(Object(W.a)(r))),r.onDragLeave=r.onDragLeave.bind(Object(W.a)(Object(W.a)(r))),r.onDragOver=r.onDragOver.bind(Object(W.a)(Object(W.a)(r))),r.onDragStart=r.onDragStart.bind(Object(W.a)(Object(W.a)(r))),r.onDrop=r.onDrop.bind(Object(W.a)(Object(W.a)(r))),r.onFileDialogCancel=r.onFileDialogCancel.bind(Object(W.a)(Object(W.a)(r))),r.onInputElementClick=r.onInputElementClick.bind(Object(W.a)(Object(W.a)(r))),r}return Object(q.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.preventDropOnDocument;this.dragTargets=[],e&&(document.addEventListener("dragover",je,!1),document.addEventListener("drop",this.onDocumentDrop,!1)),this.fileInputEl.addEventListener("click",this.onInputElementClick,!1),window.addEventListener("focus",this.onFileDialogCancel,!1)}},{key:"componentWillUnmount",value:function(){this.props.preventDropOnDocument&&(document.removeEventListener("dragover",je),document.removeEventListener("drop",this.onDocumentDrop)),null!=this.fileInputEl&&this.fileInputEl.removeEventListener("click",this.onInputElementClick,!1),window.removeEventListener("focus",this.onFileDialogCancel,!1)}},{key:"composeHandlers",value:function(e){return this.props.disabled?null:e}},{key:"onDocumentDrop",value:function(e){this.node&&this.node.contains(e.target)||(e.preventDefault(),this.dragTargets=[])}},{key:"onDragStart",value:function(e){this.props.onDragStart&&this.props.onDragStart.call(this,e)}},{key:"onDragEnter",value:function(e){e.preventDefault(),-1===this.dragTargets.indexOf(e.target)&&this.dragTargets.push(e.target),this.setState({isDragActive:!0,draggedFiles:Oe(e)}),this.props.onDragEnter&&this.props.onDragEnter.call(this,e)}},{key:"onDragOver",value:function(e){e.preventDefault(),e.stopPropagation();try{e.dataTransfer.dropEffect=this.isFileDialogActive?"none":"copy"}catch(t){}return this.props.onDragOver&&this.props.onDragOver.call(this,e),!1}},{key:"onDragLeave",value:function(e){var t=this;e.preventDefault(),this.dragTargets=this.dragTargets.filter(function(n){return n!==e.target&&t.node.contains(n)}),this.dragTargets.length>0||(this.setState({isDragActive:!1,draggedFiles:[]}),this.props.onDragLeave&&this.props.onDragLeave.call(this,e))}},{key:"onDrop",value:function(e){var t=this,n=this.props,r=n.onDrop,o=n.onDropAccepted,a=n.onDropRejected,i=n.multiple,s=n.accept,c=Oe(e),l=[],u=[];e.preventDefault(),this.dragTargets=[],this.isFileDialogActive=!1,c.forEach(function(e){e.fid=Math.random().toString(36).substr(2,9)+Math.random().toString(36).substr(2,9),De(e,s)&&function(e,t,n){return e.size<=t&&e.size>=n}(e,t.props.maxSize,t.props.minSize)?l.push(e):u.push(e)}),i||u.push.apply(u,Object(Q.a)(l.splice(1))),r&&r.call(this,l,u,e),u.length>0&&a&&a.call(this,u,e),l.length>0&&o&&o.call(this,l,e),this.draggedFiles=null,this.setState({isDragActive:!1,draggedFiles:[],acceptedFiles:l,rejectedFiles:u})}},{key:"onClick",value:function(e){var t=this.props,n=t.onClick;t.disableClick||(e.stopPropagation(),n&&n.call(this,e),!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?this.open():setTimeout(this.open.bind(this),0))}},{key:"onInputElementClick",value:function(e){e.stopPropagation(),this.props.inputProps&&this.props.inputProps.onClick&&this.props.inputProps.onClick()}},{key:"onFileDialogCancel",value:function(){var e=this,t=this.props.onFileDialogCancel;this.isFileDialogActive&&setTimeout(function(){null!=e.fileInputEl&&(e.fileInputEl.files.length||(e.isFileDialogActive=!1));"function"===typeof t&&t()},300)}},{key:"setRef",value:function(e){this.node=e}},{key:"setRefs",value:function(e){this.fileInputEl=e}},{key:"open",value:function(){this.isFileDialogActive=!0,this.fileInputEl.value=null,this.fileInputEl.click()}},{key:"renderChildren",value:function(e,t,n,r){return"function"===typeof e?e(Object(d.a)({},this.state,{isDragActive:t,isDragAccept:n,isDragReject:r})):e}},{key:"render",value:function(){var e=this.props,t=e.accept,n=e.acceptClassName,r=e.activeClassName,o=e.children,a=e.disabled,s=e.disabledClassName,c=e.inputProps,l=e.multiple,u=e.name,p=e.rejectClassName,h=Object(J.a)(e,["accept","acceptClassName","activeClassName","children","disabled","disabledClassName","inputProps","multiple","name","rejectClassName"]),f=h.acceptStyle,b=h.activeStyle,g=h.className,m=void 0===g?"":g,v=h.disabledStyle,O=h.rejectStyle,D=h.style,j=Object(J.a)(h,["acceptStyle","activeStyle","className","disabledStyle","rejectStyle","style"]),y=this.state,E=y.isDragActive,S=y.draggedFiles,F=S.length,C=l||F<=1,k=F>0&&function(e,t){return e.every(function(e){return De(e,t)})}(S,this.props.accept),x=F>0&&(!k||!C),w=!m&&!D&&!b&&!f&&!O&&!v;E&&r&&(m+=" "+r),k&&n&&(m+=" "+n),x&&p&&(m+=" "+p),a&&s&&(m+=" "+s),w&&(D=Fe,b=Se,f=Se,O=ye,v=Ee);var A=Object(d.a)({position:"relative"},D);b&&E&&(A=Object(d.a)({},A,b)),f&&k&&(A=Object(d.a)({},A,f)),O&&x&&(A=Object(d.a)({},A,O)),v&&a&&(A=Object(d.a)({},A,v));var T={accept:t,disabled:a,type:"file",style:Object(d.a)({position:"absolute",top:0,right:0,bottom:0,left:0,opacity:1e-5,pointerEvents:"none"},c.style),multiple:ve&&l,ref:this.setRefs,onChange:this.onDrop,autoComplete:"off"};u&&u.length&&(T.name=u);j.acceptedFiles,j.preventDropOnDocument,j.disablePreview,j.disableClick,j.onDropAccepted,j.onDropRejected,j.onFileDialogCancel,j.maxSize,j.minSize;var U=Object(J.a)(j,["acceptedFiles","preventDropOnDocument","disablePreview","disableClick","onDropAccepted","onDropRejected","onFileDialogCancel","maxSize","minSize"]);return i.a.createElement("div",Object.assign({className:m,style:A},U,{onClick:this.composeHandlers(this.onClick),onDragStart:this.composeHandlers(this.onDragStart),onDragEnter:this.composeHandlers(this.onDragEnter),onDragOver:this.composeHandlers(this.onDragOver),onDragLeave:this.composeHandlers(this.onDragLeave),onDrop:this.composeHandlers(this.onDrop),ref:this.setRef,"aria-disabled":a}),this.renderChildren(o,E,k,x),i.a.createElement("input",Object.assign({},c,T)))}}]),t}(i.a.Component),ke=Ce;Ce.defaultProps={preventDropOnDocument:!0,disabled:!1,disablePreview:!1,disableClick:!1,inputProps:{},multiple:!0,maxSize:1/0,minSize:0};a.Component;var xe=function(e){function t(e){var n;return Object(G.a)(this,t),(n=Object(_.a)(this,Object(M.a)(t).call(this,e))).CONSTS={ACTION:{READY:"READY"}},n}return Object(q.a)(t,e),Object(H.a)(t,[{key:"reducer",value:function(e,t){switch(t.type){case this.CONSTS.ACTION.READY:return Object(d.a)({},e,t.payload,{ready:!0});default:return e}}},{key:"dispatch",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:null,payload:{}};if(!this.reducer||!Object(o.isFunction)(this.reducer))throw new SyntaxError("Please provide reducer function to use this functionality!");this.setState(function(n){var r=t;return Object(o.isFunction)(r)&&(r=r(n)),e.reducer(n,r)})}}]),t}(a.PureComponent);function we(){var e=Object(r.a)(["\n  height: 100%;\n  max-height: 100px;\n  overflow: auto;\n  background-color: #fff;\n"]);return we=function(){return e},e}function Ae(){var e=Object(r.a)(["\n  display: ",";\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  padding: 16px;\n  background-color: #fff;\n  border: solid 1px #ccc;\n"]);return Ae=function(){return e},e}var Te=l.b.div(Ae(),function(e){return e.show?"block":"none"}),Ue=l.b.div(we()),Pe=function(e){function t(e){var n;return Object(G.a)(this,t),(n=Object(_.a)(this,Object(M.a)(t).call(this,e))).state={progress:0},n.fuse=new $,n.props.file.onUploadProgress=function(e){return n.setState({progress:e})},n.props.file.onUploadSuccess=function(){return n.props.updateList()},n}return Object(q.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this,t=this.props.file.state.file,n=t.fid,r=t.name,o=this.state.progress;return i.a.createElement("div",{role:"button",tabIndex:"0",onClick:function(){e.fuse.cancelFile(n).then(function(){return e.props.updateList()})},key:n},o+" - "+r)}}]),t}(a.Component),Ie=(a.Component,function(e){function t(e){var n;return Object(G.a)(this,t),(n=Object(_.a)(this,Object(M.a)(t).call(this,e))).fuse=new $,n.state={files:[],store:[],dropzoneActive:!1,setContextState:function(e){n.setState(e)}},n.CONSTS={ACTION:{SHOW_DROPZONE:"SHOW_DROPZONE",HIDE_DROPZONE:"HIDE_DROPZONE"}},n.dropzoneRef=i.a.createRef(),n.onDragEnter=n.onDragEnter.bind(Object(W.a)(Object(W.a)(n))),n.onDragLeave=n.onDragLeave.bind(Object(W.a)(Object(W.a)(n))),n.onDrop=n.onDrop.bind(Object(W.a)(Object(W.a)(n))),n.renderDropZone=n.renderDropZone.bind(Object(W.a)(Object(W.a)(n))),n.renderEmpty=n.renderEmpty.bind(Object(W.a)(Object(W.a)(n))),n}return Object(q.a)(t,e),Object(H.a)(t,[{key:"reducer",value:function(e,t){var n=Object(d.a)({},e,t.payload);switch(t.type){case this.CONSTS.ACTION.SHOW_DROPZONE:return Object(d.a)({},n,{dropzoneActive:!0});case this.CONSTS.ACTION.HIDE_DROPZONE:return Object(d.a)({},n,{dropzoneActive:!1});default:return e}}},{key:"onDragEnter",value:function(){this.dispatch({type:this.CONSTS.ACTION.SHOW_DROPZONE})}},{key:"onDragLeave",value:function(){this.dispatch({type:this.CONSTS.ACTION.HIDE_DROPZONE})}},{key:"onDrop",value:function(e){this.fuse.push(e),this.dispatch({type:this.CONSTS.ACTION.HIDE_DROPZONE})}},{key:"renderDropZone",value:function(){var e=this.state.dropzoneActive;return i.a.createElement(i.a.Fragment,null,i.a.createElement(ke,{disablePreview:!0,disableClick:!0,ref:this.dropzoneRef,style:{position:"relative",width:"100%",height:"100%"},onDrop:this.onDrop,onDragEnter:this.onDragEnter,onDragLeave:this.onDragLeave},e&&i.a.createElement("div",{style:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:9999,display:"flex",flexDirection:"column",background:"rgba(45, 167, 94, 0.85)",alignItems:"center",justifyContent:"center",color:"#fff"}},i.a.createElement("i",{className:"material-icons",style:{fontSize:"8rem"}},"add_photo_alternate"),i.a.createElement("h3",null,"Drop files Here")),Object(o.isFunction)(this.props.children)?this.props.children(this):this.props.children))}},{key:"renderEmpty",value:function(){return i.a.createElement("div",null,Object(o.isFunction)(this.props.children)?this.props.children(this):this.props.children)}},{key:"componentWillUnmount",value:function(){this.setState({setContextState:function(){}})}},{key:"componentDidUpdate",value:function(e,t){t.files.length!==this.state.files.length&&console.log(t.files)}},{key:"render",value:function(){var e=this.props.dropzoneEnabled,t=Object(d.a)({},this.state,{dropzoneRef:this.dropzoneRef,updateFilesState:function(){}});return i.a.createElement(Z.Provider,{value:t},e?this.renderDropZone():this.renderEmpty())}}]),t}(xe));function Ne(){var e=Object(r.a)(['\n  * {\n    font-family: \'Quicksand\', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n      sans-serif;\n  }\n\n  body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: #000;\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n      monospace;\n  }\n\n  #qr {\n    position: absolute;\n    top: ',";\n    left: ",";\n    width: ",";\n    height: ",";\n  }\n\n  #qrcode {\n    left: -1000px;\n    position: fixed;\n  }\n"]);return Ne=function(){return e},e}var Re=Object(l.a)(Ne(),O?"0":"-100%",O?"0":"-100%",O?"auto":0,O?"auto":0),Be=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Re,null),e.children)};"#donteventry"===window.location.hash?(console.log("Server Mode"),L(),c.a.render(i.a.createElement(Be,null,i.a.createElement(R,null)),document.getElementById("root"))):(console.log("Client Mode"),c.a.render(i.a.createElement(Be,null,i.a.createElement(Ie,{dropzoneEnabled:!0},i.a.createElement(be,null))),document.getElementById("root")))}},[[106,2,1]]]);
//# sourceMappingURL=main.1ecbc72b.chunk.js.map