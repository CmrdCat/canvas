(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"52x9":function(e,t,n){e.exports=n.p+"static/floorPlan-88e21ad3a95302f2249fb07172c4ae57.png"},UOVA:function(e,t,n){"use strict";var a=n("Jgta"),r={apiKey:{}.API_KEY,authDomain:{}.AUTH_DOMAIN,databaseURL:{}.DATABASE_URL,projectId:{}.PROJECT_ID,storageBucket:{}.STORAGE_BUCKET,messagingSenderId:{}.MESSAGING_SENDER_ID,appId:{}.APP_ID};a.a.initializeApp(r);var o=a.a.database();t.a=o},bTjV:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),i=n.n(o),c=n("TSYQ"),l=n.n(c),u=n("33Jr"),s=function(e){var t=e.className,n=e.cssModule,o=e.type,c=e.size,s=e.color,d=e.children,g=e.tag,p=Object(r.a)(e,["className","cssModule","type","size","color","children","tag"]),f=Object(u.m)(l()(t,!!c&&"spinner-"+o+"-"+c,"spinner-"+o,!!s&&"text-"+s),n);return i.a.createElement(g,Object(a.a)({role:"status"},p,{className:f}),d&&i.a.createElement("span",{className:Object(u.m)("sr-only",n)},d))};s.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=s},ixYC:function(e,t,n){},yPQY:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("L12J"),i=(n("ixYC"),n("o0o1")),c=n.n(i),l=(n("ls82"),n("HaE+")),u=n("Jgta"),s=(n("5x/H"),n("6nsN"),n("WI49"),function(e){var t=e.image,n=e.id,o=e.mode,i=Object(a.useState)(0),s=i[0],d=i[1];Object(a.useEffect)((function(){(function(){var e=Object(l.a)(c.a.mark((function e(){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=u.a.storage(),a=n.ref(),a.child(""+t).getDownloadURL().then((function(e){d(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var g={backgroundImage:"url('"+s+"')"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"radio",id:n,name:"chooseMode",value:t,mode:o,className:"button-input",onChange:function(){return localStorage.setItem("currentMode",JSON.stringify({image:s,mode:o,id:n}))}}),r.a.createElement("label",{htmlFor:n},r.a.createElement("div",{className:"chooseModeButton",style:g})))}),d=n("i8i4"),g=n.n(d),p=n("+oFf"),f=n.n(p),m=(n("52x9"),function(e){var t,o,i=e.bgImage,s=Object(a.useState)(0),d=s[0],p=s[1],m=Object(a.useState)(0),h=m[0],v=m[1],b=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=u.a.storage(),n=t.ref(),n.child(""+i).getDownloadURL().then((function(e){p(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.database().ref("saved-tables").once("value").then((function(e){return e.val()}));case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t()}),[]),0!==d&&0!==h&&(!function(){var e;function a(){var e,t=r.stage.children.filter((function(e){return"container"===e.type})),n=[];t.map((function(e){e.children.map((function(t){if("table"===t.type){console.log(t);var a={};a.index=t.index,a.x=e.x,a.y=e.y,a.scaleX=t.scale.x,a.scaleY=t.scale.y,a.rotation=t.transform.rotation,a.texture=t._texture.textureCacheIds[0],a.uniqueId=t.uniqueId,a.id=t.id,n.push(a)}}))})),localStorage.setItem("tables",JSON.stringify(n)),localStorage.setItem("bgImage",d),e=n,u.a.database().ref("saved-tables").set(e)}f.a||(e=n("IqKQ")),console.log(e),localStorage.getItem("currentMode")&&localStorage.removeItem("currentMode"),document.getElementById("0").checked="true";var r=new e.Application({width:1e3,height:620,backgroundColor:6011503});console.log(i);var c=new Image;c.crossOrigin="",c.src=d,console.log(c),console.log(c);var l=e.Texture.from("http://crossorigin.me/"+d),s=e.Texture.from(d);console.log("backgroundImage: ",l),console.log("backgroundImage2: ",s);var p=new e.Sprite(l);r.stage.addChild(p),p.width=r.screen.width,p.height=r.screen.height,b.current.appendChild(r.view);var m=new e.Point;r.view.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1),r.rightMouse=!1,r.view.onmousedown=function(e){3===e.which&&(r.rightMouse=!0)},r.view.onmouseup=function(e){3===e.which&&(r.rightMouse=!1)},null!==h&&h.map((function(n){var a=new e.Container;a.type="container",a.interactive=!0,a.buttonMode=!0,a.x=n.x,a.y=n.y;var i=e.Texture.from(n.texture),c=new e.Sprite(i);c.type="table",c.anchor.set(.5),c.scale.x=n.scaleX,c.scale.y=n.scaleY,c.rotation=n.rotation,c.index=n.index,c.info=n.info,c.id=n.id,c.uniqueId=n.uniqueId,c.buttonMode=!0,c.interactive=!0,c.on("scroll",(function(e){r.rightMouse&&(e.deltaY>0?(c.rotation+=.261799,c.rotation>6.28&&(c.rotation=0)):(c.rotation-=.261799,c.rotation<-6.28&&(c.rotation=0)))})),a.addChild(c),a.on("pointerover",(function(){t!=a&&(c.tint=8553074)})).on("pointerout",(function(){t!=a&&(c.tint=16777215)})).on("pointerdown",(function(e){a.data=e.data,a.alpha=.5,a.dragging=!0})).on("pointerup",(function(){a.alpha=1,a.dragging=!1,a.data=null})).on("pointerupoutside",(function(){a.alpha=1,a.dragging=!1,a.data=null})).on("pointermove",(function(){if(a.dragging){var e=a.data.getLocalPosition(a.parent);a.x=e.x,a.y=e.y}})).on("pointertap",(function(e){o&&(o.tint=16777215),t=e.target.parent,(o=e.target).tint=16711680}));var l=new e.Text(c.index,{font:"2rem",fill:0,align:"center",cacheAsBitmap:!0});l.type="text",l.anchor.set(.5),a.addChild(l),r.stage.addChild(a)})),r.view.onmousewheel=function(e){m.set(e.layerX,e.layerY);var t=r.renderer.plugins.interaction.hitTest(m,r.stage);t&&t.emit("scroll",e)};var v=new e.Text("Save",{font:"4rem",fill:0,align:"center",cacheAsBitmap:!0});v.interactive=!0,v.buttonMode=!0,v.type="button",v.anchor.set(.5),v.x=40,v.y=20,v.on("pointertap",(function(){a()})),r.stage.addChild(v);var x=new e.Text("Remove",{font:"4rem",fill:0,align:"center",cacheAsBitmap:!0});x.interactive=!0,x.buttonMode=!0,x.type="button",x.anchor.set(.5),x.x=40,x.y=50,x.on("pointertap",(function(){t&&(r.stage.removeChild(t),t=void 0)})),r.stage.addChild(x),r.view.onclick=function(n){var a=JSON.parse(localStorage.getItem("currentMode"));if(m.set(n.layerX,n.layerY),!r.renderer.plugins.interaction.hitTest(m,r.stage)&&(a&&"cursor"===a.mode&&(o&&(o.tint=16777215),t=null,o=null),a&&"create"===a.mode)){var i=new e.Container;i.type="container",i.interactive=!0,i.buttonMode=!0,i.x=n.layerX,i.y=n.layerY;var c=e.Texture.from(a.image),l=new e.Sprite(c);l.type="table",l.id=a.id,l.uniqueId=Date.now(),l.anchor.set(.5),l.scale.set(.7),l.buttonMode=!0,l.interactive=!0,l.on("scroll",(function(e){r.rightMouse&&(e.deltaY>0?(l.rotation+=.261799,l.rotation>6.28&&(l.rotation=0)):(l.rotation-=.261799,l.rotation<-6.28&&(l.rotation=0)))})),l.index=r.stage.children.length-2,i.addChild(l),i.on("pointerover",(function(){t!=i&&(l.tint=8553074)})).on("pointerout",(function(){t!=i&&(l.tint=16777215)})).on("pointerdown",(function(e){i.data=e.data,i.alpha=.5,i.dragging=!0})).on("pointerup",(function(){i.alpha=1,i.dragging=!1,i.data=null})).on("pointerupoutside",(function(){i.alpha=1,i.dragging=!1,i.data=null})).on("pointermove",(function(){if(i.dragging){var e=i.data.getLocalPosition(i.parent);i.x=e.x,i.y=e.y}})).on("pointertap",(function(e){o&&(o.tint=16777215),t=e.target.parent,(o=e.target).tint=16711680}));var u=new e.Text(l.index,{font:"2rem",fill:0,align:"center",cacheAsBitmap:!0});u.type="text",u.anchor.set(.5),i.addChild(u),r.stage.addChild(i),localStorage.getItem("state")||g.a.render(canvas,document.getElementById("canvasWrapper"))}}}(),localStorage.setItem("state","loaded")),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:b}))}),h=(n("Zs65"),n("bTjV")),v=n("UOVA"),b=function(){var e=Object(a.useState)(0),t=e[0],n=e[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.ref("CanvasPreset").once("value").then((function(e){return e.val()}));case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,"object"==typeof t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(s,{key:0,id:0,image:t.cursorImage,mode:"cursor"}),t.tables.map((function(e,t){return r.a.createElement(s,{key:t+1,id:e.id,image:e.image,mode:"create"})}))),r.a.createElement(m,{bgImage:t.bgImage,tableImages:t.tables,cursorImage:t.cursorImage})):r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{color:"primary"}),r.a.createElement("span",null,"Loading data...")))};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(b,null)))}}}]);
//# sourceMappingURL=component---src-pages-admin-panel-jsx-6f8a18c5c08af01d3f9c.js.map