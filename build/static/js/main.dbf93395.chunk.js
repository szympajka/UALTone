(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(n,e,t){"use strict";t.r(e);var o=t(19),r=t(3),a=t(0),i=t.n(a),c=t(27),l=t.n(c),u=t(20),s=t(86),d=t(29),f=t(15),p=t.n(f),b=t(28),g=t(12),m=t.n(g),h={0:"C1",1:"D1",2:"E1",3:"F1",4:"G1",5:"A1",6:"B1",7:"C2",8:"D2",9:"E2",10:"F2",11:"G2",12:"A2",13:"B2",14:"C3",15:"D3",16:"E3",17:"F3",18:"G3",19:"A3",20:"B3",21:"C4",22:"D4",23:"E4",24:"F4",25:"G4",26:"A4",27:"B4",28:"C5",29:"D5",30:"E5",31:"F5",32:"G5",33:"A5",34:"B5",35:"C6",36:"D6",37:"E6",38:"F6",39:"G6",40:"A6",41:"B6",42:"C7",43:"D7",44:"E7",45:"F7",46:"G7",47:"A7",48:"B7"};function F(){var n=Object(o.a)(["\n  background: transparent;\n  opacity: 0;\n  padding: 12px 18px;\n  border-radius: 5px;\n  color: rgb(255, 255, 255);\n  font-weight: 400;\n  position: fixed;\n  z-index: 100;\n  bottom: 20px;\n  left: 50%;\n  transform: translatex(-50%);\n  margin: auto;\n  display: inline-block;\n  border: solid 1px;\n"]);return F=function(){return n},n}function w(){var n=Object(o.a)(["\n  // border-top-left-radius: ","px;\n  // border-top-right-radius: ","px;\n  // border-bottom-left-radius: ","px;\n  // border-bottom-right-radius: ","px;\n  width: ","px;\n  height: ","px;\n  // color: transparent;\n  color: #000;\n  font-size: 16px;\n  display: flex;\n  background-color: #000;\n  // background-color: ",";\n  justify-content: center;\n  align-items: center;\n  transition: all ease-in 0.2s;\n\n  // :nth-of-type(2n){\n  //   background-color: #967171\n  // }\n"]);return w=function(){return n},n}function y(){var n=Object(o.a)(["\n  font-size: 5em;\n  margin: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return y=function(){return n},n}function E(){var n=Object(o.a)(["\n  position: relative;\n  width: ","px;\n  height: ","px;\n  background: #000;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return E=function(){return n},n}var x=u.b.div(E(),window.innerWidth/3,window.innerWidth/3),j=u.b.h1(y()),v=u.b.div(w(),function(){return Object(r.random)(0,Object(r.size)(h))},function(){return Object(r.random)(0,Object(r.size)(h))},function(){return Object(r.random)(0,Object(r.size)(h))},function(){return Object(r.random)(0,Object(r.size)(h))},window.innerWidth/3/(Object(r.size)(h)/7),window.innerWidth/3/(Object(r.size)(h)/7),function(n){return n.play?"#ff0007ab":"transparent"}),B=u.b.div(F()),C=["#FF6633","#FFB399","#FF33FF","#FFFF99","#00B3E6","#E6B333","#3366E6","#999966","#99FF99","#B34D4D","#80B300","#809900","#E6B3B3","#6680B3","#66991A","#FF99E6","#CCFF1A","#FF1A66","#E6331A","#33FFCC","#66994D","#B366CC","#4D8000","#B33300","#CC80CC","#66664D","#991AFF","#E666FF","#4DB3FF","#1AB399","#E666B3","#33991A","#CC9999","#B3B31A","#00E680","#4D8066","#809980","#E6FF80","#1AFF33","#999933","#FF3380","#CCCC00","#66E64D","#4D80CC","#9900B3","#E64D66","#4DB380","#FF4D4D","#99E6E6","#6666FF"],O=(new m.a.Synth).toMaster(),D=function(n,e){m.a.Transport.stop();var t=[],o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"4n",e=m.a.now();return t.forEach(function(n){e+=n}),t.push(n),console.log("notetime",e),e};n.data.forEach(function(n){var e,t,a,i=n.octave,c=n.note,l=n.description;e=i,t=c,a=l,m.a.Transport.schedule(function(n){O.triggerAttackRelease(e,t,n),m.a.Draw.schedule(function(){document.getElementById("text").innerHTML=a,document.getElementById("text").style.color=C[Object(r.indexOf)(Object(r.toArray)(h),e)],document.getElementById(e).style.backgroundColor=C[Object(r.indexOf)(Object(r.toArray)(h),e)]},n),m.a.Draw.schedule(function(){document.getElementById(e).style.backgroundColor=""},n+m.a.Time(t).toSeconds())},o(t))}),m.a.Transport.schedule(function(){document.getElementById("text").innerHTML="",e(Object(d.a)({},n,{data:[],ongoing:!1})),window.scan()},o()),m.a.Transport.start()},k=function(){console.log("render");var n=Object(a.useState)({ongoing:!1,data:[],albumID:0,play:""}),e=Object(s.a)(n,2),t=e[0],o=e[1],c=function(){var n=Object(b.a)(p.a.mark(function n(){var e,a;return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return window.code||(window.code=422),e=[],n.next=4,fetch("".concat("https://imglish.design:9910/","?photoID=",1,"&imageURI=",1));case 4:return n.next=6,n.sent.json();case 6:a=n.sent,e.push(a),o(Object(d.a)({},t,{data:Object(r.flattenDeep)(e),ongoing:!1}));case 9:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}();return t.ongoing&&c(),t.data.length&&(console.log(t.data),D(t,o)),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(B,{type:"button",onClick:function(){o(Object(d.a)({},t,{ongoing:!0}))}},t.ongoing?"Fetching...":"Release")),i.a.createElement(j,{id:"text"}),i.a.createElement(x,null,Object(r.map)(h,function(n,e){return i.a.createElement(v,{type:"tone",id:n,key:n,octave:n,color:C[e],play:n===t.play},n)})))},A=!1,I=new(t(54).BrowserQRCodeReader);window.code=null;var z=function(){var n=Object(b.a)(p.a.mark(function n(){var e;return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I.decodeFromInputVideoDevice(void 0,"qr");case 2:e=n.sent,window.code=parseInt(e.text,10),document.querySelector('[type="button"]').click(),I.reset();case 6:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}();window.scan=z;var S=z,M=function(){return i.a.createElement("h1",null,"Hello")};function G(){var n=Object(o.a)(['\n  body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: #000;\n    margin: 0;\n    padding: 0;\n    font-family: \'Quicksand\', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n      monospace;\n  }\n\n  #qr {\n    position: absolute;\n    top: ',";\n    left: ",";\n    width: ",";\n    height: ",";\n  }\n"]);return G=function(){return n},n}var T=Object(u.a)(G(),A?"0":"-100%",A?"0":"-100%",A?"auto":0,A?"auto":0),R=function(n){return i.a.createElement(i.a.Fragment,null,i.a.createElement(T,null),n.children)};"#donteventry"===window.location.hash?(console.log("Server Mode"),S(),l.a.render(i.a.createElement(R,null,i.a.createElement(k,null)),document.getElementById("root"))):(console.log("Client Mode"),l.a.render(i.a.createElement(R,null,i.a.createElement(M,null)),document.getElementById("root")))},88:function(n,e,t){n.exports=t(142)}},[[88,2,1]]]);
//# sourceMappingURL=main.dbf93395.chunk.js.map