(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"52x9":function(e,t,n){e.exports=n.p+"static/floorPlan-88e21ad3a95302f2249fb07172c4ae57.png"},ixYC:function(e,t,n){},yPQY:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("L12J"),i=(n("ixYC"),n("o0o1")),c=n.n(i),u=(n("ls82"),n("HaE+")),l=n("Jgta"),d=(n("5x/H"),n("6nsN"),n("WI49"),function(e){var t=e.image,n=e.id,o=e.mode,i=Object(a.useState)(0),d=i[0],s=i[1];Object(a.useEffect)((function(){(function(){var e=Object(u.a)(c.a.mark((function e(){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=l.a.storage(),a=n.ref(),a.child(""+t).getDownloadURL().then((function(e){s(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var g={backgroundImage:"url('"+d+"')"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"radio",id:n,name:"chooseMode",value:t,mode:o,className:"button-input",onChange:function(){return localStorage.setItem("currentMode",JSON.stringify({image:d,mode:o,id:n}))}}),r.a.createElement("label",{htmlFor:n},r.a.createElement("div",{className:"chooseModeButton",style:g})))}),s=n("i8i4"),g=n.n(s),f=n("+oFf"),p=n.n(f),m=(n("52x9"),function(e){var t,o,i=e.bgImage,d=Object(a.useState)(0),s=d[0],f=d[1],m=Object(a.useRef)(null);return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.database().ref("saved-tables").once("value").then((function(e){return e.val()}));case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),0!==s&&(!function(){var e;function a(){var e,t=r.stage.children.filter((function(e){return"container"===e.type})),n=[];t.map((function(e){e.children.map((function(t){if("table"===t.type){console.log(t);var a={};a.index=t.index,a.x=e.x,a.y=e.y,a.scaleX=t.scale.x,a.scaleY=t.scale.y,a.rotation=t.transform.rotation,a.texture=t._texture.textureCacheIds[0],a.uniqueId=t.uniqueId,a.id=t.id,n.push(a)}}))})),localStorage.setItem("tables",JSON.stringify(n)),localStorage.setItem("bgImage",answer),e=n,l.a.database().ref("saved-tables").set(e)}p.a||(e=n("IqKQ")),console.log(e),localStorage.getItem("currentMode")&&localStorage.removeItem("currentMode"),document.getElementById("0").checked="true";var r=new e.Application({width:1e3,height:620,backgroundColor:6011503});console.log(i);var c=e.Texture.from(i),u=new e.Sprite(c);r.stage.addChild(u),u.width=r.screen.width,u.height=r.screen.height,m.current.appendChild(r.view);var d=new e.Point;r.view.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1),r.rightMouse=!1,r.view.onmousedown=function(e){3===e.which&&(r.rightMouse=!0)},r.view.onmouseup=function(e){3===e.which&&(r.rightMouse=!1)},null!==s&&s.map((function(n){var a=new e.Container;a.type="container",a.interactive=!0,a.buttonMode=!0,a.x=n.x,a.y=n.y;var i=e.Texture.from(n.texture),c=new e.Sprite(i);c.type="table",c.anchor.set(.5),c.scale.x=n.scaleX,c.scale.y=n.scaleY,c.rotation=n.rotation,c.index=n.index,c.info=n.info,c.id=n.id,c.uniqueId=n.uniqueId,c.buttonMode=!0,c.interactive=!0,c.on("scroll",(function(e){r.rightMouse&&(e.deltaY>0?(c.rotation+=.261799,c.rotation>6.28&&(c.rotation=0)):(c.rotation-=.261799,c.rotation<-6.28&&(c.rotation=0)))})),a.addChild(c),a.on("pointerover",(function(){t!=a&&(c.tint=8553074)})).on("pointerout",(function(){t!=a&&(c.tint=16777215)})).on("pointerdown",(function(e){a.data=e.data,a.alpha=.5,a.dragging=!0})).on("pointerup",(function(){a.alpha=1,a.dragging=!1,a.data=null})).on("pointerupoutside",(function(){a.alpha=1,a.dragging=!1,a.data=null})).on("pointermove",(function(){if(a.dragging){var e=a.data.getLocalPosition(a.parent);a.x=e.x,a.y=e.y}})).on("pointertap",(function(e){o&&(o.tint=16777215),t=e.target.parent,(o=e.target).tint=16711680}));var u=new e.Text(c.index,{font:"2rem",fill:0,align:"center",cacheAsBitmap:!0});u.type="text",u.anchor.set(.5),a.addChild(u),r.stage.addChild(a)})),r.view.onmousewheel=function(e){d.set(e.layerX,e.layerY);var t=r.renderer.plugins.interaction.hitTest(d,r.stage);t&&t.emit("scroll",e)};var f=new e.Text("Save",{font:"4rem",fill:0,align:"center",cacheAsBitmap:!0});f.interactive=!0,f.buttonMode=!0,f.type="button",f.anchor.set(.5),f.x=40,f.y=20,f.on("pointertap",(function(){a()})),r.stage.addChild(f);var h=new e.Text("Remove",{font:"4rem",fill:0,align:"center",cacheAsBitmap:!0});h.interactive=!0,h.buttonMode=!0,h.type="button",h.anchor.set(.5),h.x=40,h.y=50,h.on("pointertap",(function(){t&&(r.stage.removeChild(t),t=void 0)})),r.stage.addChild(h),r.view.onclick=function(n){var a=JSON.parse(localStorage.getItem("currentMode"));if(d.set(n.layerX,n.layerY),!r.renderer.plugins.interaction.hitTest(d,r.stage)&&(a&&"cursor"===a.mode&&(o&&(o.tint=16777215),t=null,o=null),a&&"create"===a.mode)){var i=new e.Container;i.type="container",i.interactive=!0,i.buttonMode=!0,i.x=n.layerX,i.y=n.layerY;var c=e.Texture.from(a.image),u=new e.Sprite(c);u.type="table",u.id=a.id,u.uniqueId=Date.now(),u.anchor.set(.5),u.scale.set(.7),u.buttonMode=!0,u.interactive=!0,u.on("scroll",(function(e){r.rightMouse&&(e.deltaY>0?(u.rotation+=.261799,u.rotation>6.28&&(u.rotation=0)):(u.rotation-=.261799,u.rotation<-6.28&&(u.rotation=0)))})),u.index=r.stage.children.length-2,i.addChild(u),i.on("pointerover",(function(){t!=i&&(u.tint=8553074)})).on("pointerout",(function(){t!=i&&(u.tint=16777215)})).on("pointerdown",(function(e){i.data=e.data,i.alpha=.5,i.dragging=!0})).on("pointerup",(function(){i.alpha=1,i.dragging=!1,i.data=null})).on("pointerupoutside",(function(){i.alpha=1,i.dragging=!1,i.data=null})).on("pointermove",(function(){if(i.dragging){var e=i.data.getLocalPosition(i.parent);i.x=e.x,i.y=e.y}})).on("pointertap",(function(e){o&&(o.tint=16777215),t=e.target.parent,(o=e.target).tint=16711680}));var l=new e.Text(u.index,{font:"2rem",fill:0,align:"center",cacheAsBitmap:!0});l.type="text",l.anchor.set(.5),i.addChild(l),r.stage.addChild(i),localStorage.getItem("state")||g.a.render(canvas,document.getElementById("canvasWrapper"))}}}(),localStorage.setItem("state","loaded")),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:m}))}),h=(n("Zs65"),function(){var e=Object(a.useState)(0),t=e[0],n=e[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.database().ref("CanvasPreset").once("value").then((function(e){return e.val()}));case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(d,{key:0,id:0,image:t.cursorImage,mode:"cursor"}),t.tables.map((function(e,t){return r.a.createElement(d,{key:t+1,id:e.id,image:e.image,mode:"create"})}))),r.a.createElement(m,{bgImage:t.bgImage,tableImages:t.tables,cursorImage:t.cursorImage}))});t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(h,null)))}}}]);
//# sourceMappingURL=component---src-pages-admin-panel-jsx-abe102ba3bec8b875dfb.js.map