(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"6XFe":function(e,t,a){"use strict";a.r(t);var n=a("KQm4"),r=a("q1tI"),c=a.n(r),l=a("wx14"),i=a("zLVn"),o=a("TSYQ"),s=a.n(o),u=a("33Jr"),m=function(e){var t=e.className,a=e.cssModule,n=e.row,r=e.disabled,o=e.check,m=e.inline,d=e.tag,f=Object(i.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(u.m)(s()(t,!!n&&"row",o?"form-check":"form-group",!(!o||!m)&&"form-check-inline",!(!o||!r)&&"disabled"),a);return"fieldset"===d&&(f.disabled=r),c.a.createElement(d,Object(l.a)({},f,{className:p}))};m.defaultProps={tag:"div"};var d=m,f=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},p=function(e){var t=e.className,a=e.cssModule,n=e.hidden,r=e.widths,o=e.tag,m=e.check,d=e.size,p=e.for,v=Object(i.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];r.forEach((function(t,n){var r=e[t];if(delete v[t],r||""===r){var c,l=!n;if(Object(u.k)(r)){var i,o=l?"-":"-"+t+"-";c=f(l,t,r.size),b.push(Object(u.m)(s()(((i={})[c]=r.size||""===r.size,i["order"+o+r.order]=r.order||0===r.order,i["offset"+o+r.offset]=r.offset||0===r.offset,i))),a)}else c=f(l,t,r),b.push(c)}}));var h=Object(u.m)(s()(t,!!n&&"sr-only",!!m&&"form-check-label",!!d&&"col-form-label-"+d,b,!!b.length&&"col-form-label"),a);return c.a.createElement(o,Object(l.a)({htmlFor:p},v,{className:h}))};p.defaultProps={tag:"label",widths:["xs","sm","md","lg","xl"]};var v=p,b=a("L3zb"),h=a("GlpG"),g=a.n(h),E=a("L12J"),y=a("o0o1"),O=a.n(y),w=(a("ls82"),a("HaE+")),j=a("Jgta"),k=a("bTjV"),x=a("c4Fx"),N=(a("Zs65"),function(e){var t=e.groupName,a=e.groupElements,n=e.addAdditional2;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"additional-group w-100 pb-4 pt-4"},c.a.createElement("h2",{className:"pl-4 group-title mb-0"},t),c.a.createElement("div",{className:"additional-group-wrapper d-flex flex-wrap"},a.map((function(e){return c.a.createElement(x.a,{key:"key"+e.name,name:e.name,weight:e.weight,img:e.img,description:e.description,cost:e.cost,id:e.id,addAdditional3:n,groupName:t})})))))}),z=function(e){var t=e.addAddition1,a=Object(r.useState)("error"),n=a[0],l=a[1];return Object(r.useEffect)((function(){(function(){var e=Object(w.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.database().ref("additionals").once("value").then((function(e){return e.val()}));case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"additional-wrapper d-flex flex-wrap"},"object"==typeof n?Object.keys(n).map((function(e){return c.a.createElement(N,{key:e,groupName:e,groupElements:Array.from(n[e]),addAdditional2:t})})):c.a.createElement(c.a.Fragment,null,c.a.createElement(k.a,{color:"primary"}),c.a.createElement("span",null,"Loading data..."))))},I=(a("E9XD"),a("6Yhu")),L=a("ya9m"),C=a("sOKU"),T=a("UOVA"),B=a("iKxV"),P=function(e){var t=e.position,a=e.remover;var n="brown";return 2===t.quantity?n="blue":t.quantity>2&&(n="green"),c.a.createElement("div",{className:"d-flex check-element mb-2"},c.a.createElement("div",{className:["check-element-quantity",n].join(" ")},t.quantity),c.a.createElement("div",{className:"check-element-details"},c.a.createElement("h6",{className:["mb-0",n].join(" ")},t.name),c.a.createElement("div",{className:"time-array"},function(e){var t=e.slice();t.sort();for(var a=0;a<t.length;a+=1)"string"==typeof t[a]&&(t[a]=[1,t[a]]),a!==t.length-1&&t[a][1]===t[a+1]&&(t[a][0]+=1,t.splice(a+1,1),a-=1);return console.log("array: ",t),t}(t.time).map((function(e){return c.a.createElement("span",{key:e[1],className:"check-element-time"},e[0]," pc. at ",e[1],"; ")}))),c.a.createElement("span",{className:"check-element-summary-cost"},"x",t.cost,"=",(t.cost*t.quantity).toFixed(1),"$")),c.a.createElement(C.a,{close:!0,className:"ml-auto",onClick:function(){a(t.id)}},c.a.createElement(B.AiOutlineCloseCircle,null)))},q=function(e){var t=e.removePosition1,a=e.checkPosition,n=e.visitTime,l=e.tables,i=1,o=a.reduce((function(e,t){return e+ +t.cost*t.quantity}),0).toFixed(1),s=a.length>0?"total-container not-empty":"total-container",u=Object(r.useState)(!1),m=u[0],d=u[1],f=Object(r.useState)(Date.now()),p=f[0],v=f[1];Object(r.useEffect)((function(){(function(){var e=Object(w.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.database().ref("lastOrder").once("value").then((function(e){return e.val()}));case 2:t=e.sent,v(t),j.a.database().ref("lastOrder").set(t+1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return c.a.createElement("div",{className:[m?"open":"",a.length?"not-empty-check":""].join(" ")},c.a.createElement("h2",{className:"pt-4"},"Basket"),c.a.createElement("button",{type:"button",className:"icon-open-mobile",onClick:function(){d(!m)}},c.a.createElement(L.IoIosArrowUp,null)),c.a.createElement("div",{className:"basket-wrapper pt-2"},a.map((function(e){return i+=1,c.a.createElement(P,{key:i,position:e,remover:t})}))),c.a.createElement("div",{className:s},c.a.createElement("span",null," ",a.length>0?"Total cost: "+o+"$":"Your basket is empty!"),c.a.createElement(C.a,{onClick:function(){var e={};e.tables=l,e.visit=Date.parse(n),e.additions={},a.forEach((function(t){e.additions[t.groupName]={cost:t.cost,id:t.id,name:t.name,quantity:t.quantity,time:t.time,weight:t.weight}})),console.log(e),function(e,t){if(!!T.a.auth().currentUser){var a=T.a.database(),n=T.a.auth().currentUser.uid;a.ref("users/"+n+"/orders/").child(e).set(t)}}(""+p,e)}},c.a.createElement(I.VscDebugContinue,null)," ","Continue")))},S=a("L2R5");a("hO8L"),a("e82H"),t.default=function(){var e,t=Object(r.useState)("tables"),a=t[0],l=t[1],i=Object(r.useState)("0"),o=i[0],s=i[1];var u=c.a.useState([]),m=u[0],f=u[1];return"tables"===a?c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,null,c.a.createElement(g.a,null),c.a.createElement("main",{className:"first-book d-flex"}),c.a.createElement("section",{className:"date-choose"},c.a.createElement("h2",null,"Please choose a time for your visit"),c.a.createElement(d,null,c.a.createElement(v,{for:"date"},"Date"),c.a.createElement(b.a,{type:"date",name:"date",id:"date",placeholder:"date placeholder"})),c.a.createElement(d,null,c.a.createElement(v,{for:"time"},"Time"),c.a.createElement(b.a,{type:"time",name:"time",id:"time",placeholder:"time placeholder"}))),c.a.createElement("button",{onClick:function(){document.getElementById("date").value&&document.getElementById("time").value?(l({tables:o,visitTime:document.getElementById("date").value+"T"+document.getElementById("time").value+"+03:00"}),"Столы",e=document.getElementById("date").value+"T"+document.getElementById("time").value+"+03:00",console.log("Столы",e)):h.store.addNotification({title:"Choose time!",message:"Choose a time to visit and book table",type:"warning",insert:"top",container:"top-right",animationIn:["animate__animated animate__fadeIn"],animationOut:["animate__animated animate__fadeOut"],dismiss:{duration:3e3}})}},"To additions"),c.a.createElement(S.a,{setTable:s,blockedTables:[1612197355808,1612197359103,1612197400830,1612197348936]}))):c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,null,c.a.createElement(g.a,null),c.a.createElement("main",{className:"d-flex flex-wrap"},c.a.createElement("section",{className:"col-12 col-lg-9"},c.a.createElement(z,{addAddition1:function(e){var t=!1;e.id=""+m.length,m.forEach((function(a){a.name===e.name&&(t=!0,a.quantity+=1,a.time=[].concat(Object(n.a)(a.time),[e.time[0]]))})),f(t?Object(n.a)(m):[].concat(Object(n.a)(m),[e]))}})),c.a.createElement("aside",{className:"col-12 col-lg-3 basket-container"},c.a.createElement(q,{removePosition1:function(e){var t=e;m.forEach((function(a,n){a.id===e&&(t=n)})),m.splice(t,1);var a=m.slice();f(a)},key:m.length,checkPosition:m,visitTime:a.visitTime,tables:a.tables})))))}},"6Yhu":function(e,t,a){var n=a("BPHJ").GenIcon;e.exports.VscDebugContinue=function(e){return n({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M2.5 2H4v12H2.5V2zm3.5.18V14l9-5.938-9-5.881zm6.315 5.882L7.5 5v6.18l4.815-3.118z"}}]})(e)}},L2R5:function(e,t,a){"use strict";var n=a("o0o1"),r=a.n(n),c=(a("ls82"),a("HaE+")),l=a("q1tI"),i=a.n(l),o=a("Jgta"),s=(a("a4FB"),a("Yf1C"));a("Zs65");t.a=function(e){e.setTable,e.blockedTables;var t=Object(l.useState)(0),a=t[0],n=t[1];return Object(l.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.database().ref("CanvasPreset").once("value").then((function(e){return e.val()}));case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),i.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},i.a.createElement("div",{id:"canvasWrapper"},a&&document.getElementById("canvasWrapper")?i.a.createElement(s.a,null):"false"),i.a.createElement("div",null,i.a.createElement("div",{id:"tableInfo"})))}},L3zb:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),c=a("JX7q"),l=a("dI71"),i=a("q1tI"),o=a.n(i),s=a("TSYQ"),u=a.n(s),m=a("33Jr"),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(c.a)(a)),a.focus=a.focus.bind(Object(c.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,c=e.type,l=e.bsSize,i=e.valid,s=e.invalid,d=e.tag,f=e.addon,p=e.plaintext,v=e.innerRef,b=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(c)>-1,g=new RegExp("\\D","g"),E=d||("select"===c||"textarea"===c?c:"input"),y="form-control";p?(y+="-plaintext",E=d||"input"):"file"===c?y+="-file":"range"===c?y+="-range":h&&(y=f?null:"form-check-input"),b.size&&g.test(b.size)&&(Object(m.s)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=b.size,delete b.size);var O=Object(m.m)(u()(t,s&&"is-invalid",i&&"is-valid",!!l&&"form-control-"+l,y),a);return("input"===E||d&&"function"==typeof d)&&(b.type=c),b.children&&!p&&"select"!==c&&"string"==typeof E&&"select"!==E&&(Object(m.s)('Input with a type of "'+c+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.a.createElement(E,Object(n.a)({},b,{ref:v,className:O,"aria-invalid":s}))},t}(o.a.Component);d.defaultProps={type:"text"},t.a=d},bTjV:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),c=a("q1tI"),l=a.n(c),i=a("TSYQ"),o=a.n(i),s=a("33Jr"),u=function(e){var t=e.className,a=e.cssModule,c=e.type,i=e.size,u=e.color,m=e.children,d=e.tag,f=Object(r.a)(e,["className","cssModule","type","size","color","children","tag"]),p=Object(s.m)(o()(t,!!i&&"spinner-"+c+"-"+i,"spinner-"+c,!!u&&"text-"+u),a);return l.a.createElement(d,Object(n.a)({role:"status"},f,{className:p}),m&&l.a.createElement("span",{className:Object(s.m)("sr-only",a)},m))};u.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=u},e82H:function(e,t,a){},hO8L:function(e,t,a){},iKxV:function(e,t,a){var n=a("BPHJ").GenIcon;e.exports.AiOutlineCloseCircle=function(e){return n({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}},{tag:"path",attr:{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]})(e)}},ya9m:function(e,t,a){var n=a("BPHJ").GenIcon;e.exports.IoIosArrowUp=function(e){return n({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"}}]})(e)}}}]);
//# sourceMappingURL=component---src-pages-book-jsx-cbf6f7be74681c371eeb.js.map