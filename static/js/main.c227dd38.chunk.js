(this.webpackJsonplastfm=this.webpackJsonplastfm||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(0),n=c(13),r=c.n(n),i=c(23),j=(c(33),c(3)),l=c(12);c(34),c(35);var o=function(){return Object(s.jsx)("header",{className:"header",children:Object(s.jsx)("div",{className:"wrapper",children:Object(s.jsxs)("ul",{className:"header-list",children:[Object(s.jsx)("li",{className:"header-list-item",children:Object(s.jsx)(l.b,{to:"/home",children:"home"})}),Object(s.jsx)("li",{className:"header-list-item",children:Object(s.jsx)(l.b,{to:"/search",children:"search"})})]})})})},h=c(9);c(37);var b=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)({}),i=Object(h.a)(r,2),j=i[0],l=i[1];return console.log(j),Object(a.useEffect)((function(){fetch("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=4c253050b1788950960d40711fb0e7e8&format=json&limit=10").then((function(e){return e.json()})).then((function(e){console.log(e.tracks.track),n(e.tracks.track)}))}),[]),Object(s.jsxs)("div",{children:[j.name&&Object(s.jsxs)("div",{className:"artist-info",children:[Object(s.jsx)("button",{className:"close",onClick:function(){return l("")},children:"+"}),Object(s.jsx)("h2",{className:"artist",children:j.name}),Object(s.jsx)("img",{className:"image",src:j.image[5]["#text"],alt:""}),Object(s.jsx)("div",{className:"tags",children:j.tags.tag.map((function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:e.url,children:e.name})},e.url)}))}),Object(s.jsx)("p",{className:"text",children:j.bio.summary})]}),c.map((function(e){return Object(s.jsxs)("div",{className:"track",children:[Object(s.jsx)("a",{href:e.artist.url,children:Object(s.jsx)("img",{className:"song-pic",src:e.image[0]["#text"],alt:""})}),Object(s.jsx)("span",{children:e.name}),Object(s.jsx)("span",{className:"divider",children:"-"}),Object(s.jsx)("span",{onClick:function(){return t=e.artist.name,void fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=".concat(t,"&api_key=4c253050b1788950960d40711fb0e7e8&format=json")).then((function(e){return e.json()})).then((function(e){return l(e.artist)}));var t},children:Object(s.jsx)("strong",{children:e.artist.name})})]},e.url)}))]})};c(38);var u=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),i=Object(h.a)(r,2),j=i[0],l=i[1];return console.log(j),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("form",{className:"search",onSubmit:function(e){e.preventDefault(),function(e){""!==e&&fetch("http://ws.audioscrobbler.com/2.0/?method=track.search&track=".concat(e,"&api_key=4c253050b1788950960d40711fb0e7e8&format=json&limit=10")).then((function(e){return e.json()})).then((function(e){return l(e.results.trackmatches.track)}))}(c)},children:[Object(s.jsx)("input",{className:"search-field",type:"text",placeholder:"search track",value:c,onChange:function(e){var t=e.target;return n(t.value)}}),Object(s.jsx)("button",{className:"search-button",children:"Search"})]}),j.map((function(e){return Object(s.jsxs)("div",{className:"track",children:[Object(s.jsx)("a",{href:e.artist.url,children:Object(s.jsx)("img",{className:"song-pic",src:e.image[0]["#text"],alt:""})}),Object(s.jsx)("span",{children:e.name}),Object(s.jsx)("span",{className:"divider",children:"-"}),Object(s.jsx)("span",{children:Object(s.jsx)("strong",{children:e.artist})})]},e.name)}))]})};var d=function(){return Object(s.jsx)(l.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o,{}),Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)(j.a,{path:"/home",component:b}),Object(s.jsx)(j.a,{path:"/search",component:u})]})]})})},m=c(11),O=c(22),f=Object(m.c)((function(e,t){switch(t.type){case"load":default:return e}}),Object(m.a)(O.a));r.a.render(Object(s.jsx)(i.a,{store:f,children:Object(s.jsx)(d,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c227dd38.chunk.js.map