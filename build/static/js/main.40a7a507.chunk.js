(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){e.exports=n.p+"static/media/IMG_3351.751c214b.jpg"},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(5),o=n.n(i),l=(n(12),n(13),n(1)),c=n(3),s="#FFFFFF",d="#11111F",u="#E06C63",h="#E09F63",m={parallaxHeader:{width:"100%"},headerBackground:{alignItems:"center",display:"flex",justifyContent:"center"},headerContent:{display:"flex",flexDirection:"row",height:"200px",position:"fixed",zIndex:2},headerLinksContainer:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"center"},link:{textAlign:"left",color:s},linkHover:{textAlign:"left",cursor:"pointer",color:"#D698B8"},nameContainer:{alignItems:"center",display:"flex",padding:"40px 5px 5px 5px"},name:{fontSize:50},verticalRule:{borderLeft:"2px solid ".concat(s),marginLeft:"40px",marginRight:"40px",height:"100%"}},f=n(2),p=n.n(f),w={header:{about:"About Me",contact:"Contact",name:"Toren Caldwell",projects:"Projects",resume:"R\xe9sum\xe9"}},E=function(e){return p.a.get(w,e,void 0)},g={linkedIn:"https://www.linkedin.com/in/toren-caldwell-5b2baab0/"},v=n(6),x={height:0,width:0},b=function(e){var t=e.id,n=e.children,i=Object(a.useState)(m.link),o=Object(c.a)(i,2),l=o[0],s=o[1],d=document.getElementById(t);return r.a.createElement("p",{style:l,onMouseEnter:function(){return s(m.linkHover)},onMouseLeave:function(){return s(m.link)},onClick:function(){return d.scrollIntoView({behavior:"smooth"})}},n)},j=function(){var e,t=Object(a.useState)(0),i=Object(c.a)(t,2),o=i[0],d=i[1],f=Object(a.useState)(["auto","auto"]),w=Object(c.a)(f,2),j=w[0],k=w[1],y=function(){var e=x.height/x.width,t=window.innerHeight/window.innerWidth;k(e<=t?["100%","auto"]:["auto","100%"])};return Object(a.useEffect)((function(){var e=function(){return d(window.scrollY/200)};return window.addEventListener("scroll",e),window.addEventListener("resize",y),function(){window.removeEventListener("scroll",e),window.removeEventListener("resize",y)}})),r.a.createElement("div",{style:Object(l.a)(Object(l.a)({},m.headerBackground),{},{height:window.innerHeight})},r.a.createElement("img",{src:n(16),onLoad:function(e){var t=e.target;x={height:t.offsetHeight,width:t.offsetWidth},y()},style:{height:j[0],filter:"blur(".concat(o,"px)"),position:"fixed",transform:"translateY(200)",width:j[1],zIndex:1}}),r.a.createElement("div",{style:Object(l.a)(Object(l.a)({},m.headerContent),{},{transform:"translateY(-".concat(window.scrollY/3,"px)")})},r.a.createElement("div",{style:m.nameContainer},r.a.createElement("a",{href:(e="linkedIn",p.a.get(g,e,void 0))},r.a.createElement(v.SplashText,{baseColor:s,text:E("header.name"),enterColors:[u,h,s],interval:200,duration:2,textStyle:m.name}))),r.a.createElement("div",{style:m.verticalRule}),r.a.createElement("div",{style:m.headerLinksContainer},r.a.createElement(b,{id:"about"},E("header.about")),r.a.createElement(b,{id:"projects"},E("header.projects")),r.a.createElement(b,{id:"resume"},E("header.resume")),r.a.createElement(b,{id:"contact"},E("header.contact")))))},k=function(){return r.a.createElement("div",{id:"about"},r.a.createElement("h1",null,E("header.about")),r.a.createElement("p",null,"This is where the projects will go"))},y=function(){return r.a.createElement("div",{id:"contact"},r.a.createElement("h1",null,"Contact Information"),r.a.createElement("p",null,"This is where the contact information will go"))},C=function(){return r.a.createElement("div",{id:"projects"},r.a.createElement("h1",null,"Demo Projects"),r.a.createElement("p",null,"This is where the projects will go"))},I=function(){return r.a.createElement("div",{id:"resume"},r.a.createElement("h1",null,"Resume"),r.a.createElement("p",null,"This is where the resume will go"))},O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement("div",{style:{height:"5000px",backgroundColor:d,position:"relative",zIndex:2}},r.a.createElement(k,null),r.a.createElement(C,null),r.a.createElement(I,null),r.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.40a7a507.chunk.js.map