(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){t.exports=n(40)},38:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),u=n(12),i=n(2),l=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},e.content,r.a.createElement("button",{onClick:n},a))},m=function(t){var e=t.message;return null===e?null:r.a.createElement("div",{className:"error"},e)},f=n(3),p=n.n(f),s=function(){return p.a.get("/api/notes").then(function(t){return t.data})},d=function(t){return p.a.post("/api/notes",t).then(function(t){return t.data})},E=function(t){return p.a.put("".concat("/api/notes","/").concat(t.id),t).then(function(t){return t.data})},b=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science 2019"))},v=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(""),f=Object(i.a)(c,2),p=f[0],v=f[1],g=Object(a.useState)(!0),h=Object(i.a)(g,2),j=h[0],k=h[1],O=Object(a.useState)(null),S=Object(i.a)(O,2),w=S[0],y=S[1];Object(a.useEffect)(function(){s().then(function(t){o(t)})},[]);var C=j?n:n.filter(function(t){return t.important});return r.a.createElement("div",null,r.a.createElement("h1",null,"Muistiinpanot"),r.a.createElement(m,{message:w}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return k(!j)}},"n\xe4yt\xe4 ",j?"vain t\xe4rke\xe4t":"kaikki")),r.a.createElement("ul",null,C.map(function(t){return r.a.createElement(l,{key:t.id,note:t,toggleImportance:function(){return function(t){var e=n.find(function(e){return e.id===t}),a=Object(u.a)({},e,{important:!e.important});E(a).then(function(e){o(n.map(function(n){return n.id!==t?n:e}))}).catch(function(a){y("muistiinpano '".concat(e.content,"' on jo valitettavasti poistettu palvelimelta")),setTimeout(function(){y(null)},5e3),o(n.filter(function(e){return e.id!==t}))})}(t.id)}})})),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:p,date:(new Date).toISOString(),important:Math.random()>.5};d(e).then(function(t){o(n.concat(t)),v("")})}},r.a.createElement("input",{value:p,onChange:function(t){v(t.target.value)}}),r.a.createElement("button",{type:"submit"},"tallenna")),r.a.createElement(b,null))};n(38);c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[13,2,1]]]);
//# sourceMappingURL=main.8209a8f2.chunk.js.map