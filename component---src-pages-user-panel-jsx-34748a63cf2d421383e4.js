(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+Qrm":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("L12J"),c=(n("ixYC"),n("L2R5"));t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(c.a,null)))}},L2R5:function(e,t,n){"use strict";var a=n("o0o1"),r=n.n(a),i=(n("ls82"),n("HaE+")),c=n("q1tI"),o=n.n(c),l=n("Jgta"),s=(n("i8i4"),n("5x/H"),n("6nsN"),n("WI49"),n("+oFf")),u=n.n(s),d=function(e){var t=e.bgImage,a=e.fbData,s=e.setTable,d=e.blockedTables,f=Object(c.useState)(0),p=f[0],h=f[1],b=Object(c.useState)(0),v=b[0],m=b[1],w=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=function(){var e=Object(i.a)(r.a.mark((function e(){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=l.c.storage(),a=n.ref(),a.child(""+t).getDownloadURL().then((function(e){h(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.c.database().ref("saved-tables").once("value").then((function(e){return e.val()}));case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),n()}),[]),0!==p&&0!==v&&function(){var e;u.a||(e=n("IqKQ")),console.log(e),console.log("blockedTables: ",d);var t=new e.Application({width:1e3,height:620,backgroundColor:6011503});w.current.appendChild(t.view);var r=e.Texture.from(p),i=new e.Sprite(r);if(t.stage.addChild(i),i.width=t.screen.width,i.height=t.screen.height,null!==v){var c;v.map((function(n){var r=new e.Container;r.type="container",r.x=n.x,r.y=n.y;var i=e.Texture.from(n.texture),o=new e.Sprite(i);o.type="table",o.index=n.index,o.id=n.id,o.uniqueId=n.uniqueId,o.info=n.info,o.anchor.set(.5),o.scale.x=n.scaleX,o.scale.y=n.scaleY,o.rotation=n.rotation,d.includes(o.uniqueId)?(o.buttonMode=!1,o.interactive=!1,o.tint=13421772,o.alpha=.2):(o.buttonMode=!0,o.interactive=!0,o.tint=8421504,o.alpha=.7),r.addChild(o),o.on("pointertap",(function(e){c&&(c.tint=8421504,c.alpha=.7),(c=e.target).tint=16777215,c.alpha=1,a.forEach((function(e){if(o.id===e.id){var t=e.description,n=e.price;document.getElementById("tableInfo").innerHTML="\n                           <p>Table №:"+o.index+"</p>\n                           <p>Description:"+t+"</p>\n                           <p>Table price:"+n+"</p>\n                        "}})),s(o.uniqueId)}));var l=new e.Text(n.index,{font:"2rem",fill:0,align:"center",cacheAsBitmap:!0});l.type="text",l.anchor.set(.5),r.addChild(l),t.stage.addChild(r)}))}else{var o=new e.Text("Sorry, it is not possible to book a table at the moment. \nPlease contact the administrator",{font:"2rem",fill:16777215,align:"center",cacheAsBitmap:!0});o.width=800,o.height=150,o.type="text",o.anchor.set(.5),o.x=t.screen.width/2,o.y=t.screen.height/2,i.tint=9934743,i.addChild(o)}}(),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{ref:w}))};n("Zs65"),t.a=function(e){var t=e.setTable,n=e.blockedTables,a=Object(c.useState)(0),s=a[0],u=a[1];return Object(c.useEffect)((function(){(function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.c.database().ref("CanvasPreset").once("value").then((function(e){return e.val()}));case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),o.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},s?o.a.createElement(d,{bgImage:s.bgImage,fbData:s.tables,setTable:t,blockedTables:n}):"false",o.a.createElement("div",null,o.a.createElement("div",{id:"tableInfo"})))}},ixYC:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-user-panel-jsx-34748a63cf2d421383e4.js.map