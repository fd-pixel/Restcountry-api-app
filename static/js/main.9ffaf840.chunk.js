(this.webpackJsonprestcounrty=this.webpackJsonprestcounrty||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(27),a=n.n(s),r=(n(33),n(34),n(12)),o=n.n(r),l=n(2),u=n(0),j=function(e){var t,n=e.country,c=Object(l.f)();return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("div",{className:"name",children:n.name}),Object(u.jsxs)("div",{className:"flag",children:[Object(u.jsx)("img",{src:null===n||void 0===n||null===(t=n.flags)||void 0===t?void 0:t.png,alt:"fgh",cursor:"pointer"})," "]}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{className:"btn btn-info btn-sm",onClick:function(){console.log("object"),c.push({pathname:"/details",country:n})},children:"Details"})]})})},d=n(8),b=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("nav",{children:[Object(u.jsx)("div",{className:"navleft btn btn-primary",children:Object(u.jsx)(d.b,{to:"/",children:"HOME"})}),Object(u.jsx)("div",{className:"navcenter",children:"Welcome to the World of the Countries"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(d.b,{to:"/about",className:"btn btn-primary about",children:"ABOUT ME"})}),Object(u.jsx)("li",{children:Object(u.jsx)(d.b,{to:{pathname:"https://github.com/fd-pixel"},target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:"GITHUB"})})]})]})})},h=function(e){var t,n,c,i,s;console.log("props",e);var a=null===e||void 0===e||null===(t=e.location)||void 0===t?void 0:t.country,r=Object(l.f)();return Object(u.jsx)("div",{class:"detail-main",children:Object(u.jsxs)("div",{className:"box-detail",children:[Object(u.jsx)("div",{className:"detail-name",children:null===a||void 0===a?void 0:a.name}),Object(u.jsx)("div",{className:"flag",children:Object(u.jsx)("img",{src:null===a||void 0===a||null===(n=a.flags)||void 0===n?void 0:n.png,alt:"fgh"})}),Object(u.jsxs)("div",{className:"info-box",children:[Object(u.jsxs)("div",{className:"continent ",children:[Object(u.jsx)("span",{style:{fontWeight:"bold"},children:"Continent :"})," ",null===a||void 0===a?void 0:a.region]}),Object(u.jsxs)("div",{className:"capital",children:[Object(u.jsx)("span",{style:{fontWeight:"bold"},children:"Capital :"})," ",null===a||void 0===a?void 0:a.capital]}),Object(u.jsxs)("div",{className:"currency",children:[Object(u.jsx)("span",{style:{fontWeight:"bold"},children:"Currency :"})," ",null===a||void 0===a?void 0:a.currencies.map((function(e){return e.name}))]}),Object(u.jsxs)("div",{className:"population",children:[Object(u.jsx)("span",{style:{fontWeight:"bold"},children:"Population : "}),null===a||void 0===a?void 0:a.population]})]}),Object(u.jsxs)("div",{className:"borders",children:[null===a||void 0===a||null===(c=a.name)||void 0===c?void 0:c.common," has ",null===a||void 0===a||null===(i=a.borders)||void 0===i?void 0:i.length," neighboring countries"," "," ",null===a||void 0===a||null===(s=a.borders)||void 0===s?void 0:s.map((function(e,t){return console.log(e),Object(u.jsxs)("p",{style:{color:"yellow"},children:[t+1,"-",e]})}))]}),Object(u.jsx)("div",{className:"btn btn-warning btn-sm",onClick:function(){console.log("object"),r.push("/")},children:"Back"})]})})},v=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"My name is Fikret"})})},p=n(10),O=n.n(p),m=n(13),x=n(14),f=function(){var e=Object(c.useState)([]),t=Object(x.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(""),a=Object(x.a)(s,2),r=a[0],l=a[1],d=Object(c.useState)(""),b=Object(x.a)(d,2),h=b[0],v=b[1],p="https://restcountries.com/v2/name/".concat(r),f="https://restcountries.com/v2/region/".concat(h),g=function(){var e=Object(m.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://restcountries.com/v2/all");case 2:t=e.sent,console.log(t.data),i(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(p);case 2:n=e.sent,console.log(n.data),i(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(f);case 2:n=e.sent,console.log(n.data),i(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){g()}),[]);return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"form",children:[Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(r)},action:"",children:[Object(u.jsx)("input",{className:"input",type:"text",onChange:function(e){return l(e.target.value.toLowerCase())},id:"input",autoFocus:!0}),Object(u.jsx)("button",{type:"submit",class:"btn btn-primary btn-sm",children:"Search by Name"})]}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N(h)},action:"",children:[Object(u.jsxs)("select",{className:"input",onChange:function(e){return v(e.target.value.toLowerCase())},children:[Object(u.jsx)("option",{value:"all",children:"Filter by Region"}),Object(u.jsx)("option",{value:"africa",children:"Africa"}),Object(u.jsx)("option",{value:"americas",children:"America"}),Object(u.jsx)("option",{value:"asia",children:"Asia"}),Object(u.jsx)("option",{value:"europe",children:"Europe"}),Object(u.jsx)("option",{value:"oceania",children:"Oceania"})]}),Object(u.jsx)("button",{type:"submit",class:"btn btn-primary btn-sm",children:"Filter By Continent"})]})]}),Object(u.jsx)("div",{className:"main",children:n.filter((function(e){return e.name.toLocaleLowerCase().includes(r.toLocaleLowerCase())})).map((function(e,t){return Object(u.jsx)(j,{country:e},t)}))})]})};var g=function(){return Object(u.jsx)(d.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(b,{}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",component:f}),Object(u.jsx)(l.a,{path:"/details",component:h}),Object(u.jsx)(l.a,{path:"/about",component:v})]})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),y()}},[[63,1,2]]]);
//# sourceMappingURL=main.9ffaf840.chunk.js.map