(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{13:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"a",function(){return r}),a.d(t,"d",function(){return s}),a.d(t,"b",function(){return o});var n="GRAPH_NODE",r="GRAPH_CHANGED",s="GRAPH_SAGA",o="GRAPH_CHANGED_SAGA"},15:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n="RECEIVE_INITIALFETCH",r="REQUEST_INITIALFETCH"},16:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var n="REQUEST_OPENSOURCE",r="RECEIVE_OPENSOURCE"},27:function(e,t,a){"use strict";function n(e){for(var t=0;t<e.feed.entry.length;t++)for(var a in e.feed.entry[t])e.feed.entry[t].hasOwnProperty(a)&&"gsx$"===a.substr(0,4)&&(e.feed.entry[t][a.substr(4)]=e.feed.entry[t][a].$t,delete e.feed.entry[t][a]);return e.feed.entry}function r(e,t,a){var n=[];for(var s in e)if(e&&"function"==typeof e.hasOwnProperty){if(!e.hasOwnProperty(s))continue;"object"===typeof e[s]?n=n.concat(r(e[s],t,a)):s===t&&e[t]===a&&n.push(e)}return n}a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r})},32:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return s});var n=a(13);function r(e){return{type:n.c,payload:e}}function s(e){return{type:n.a,payload:e}}},45:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return s});var n=a(16);function r(e){return{type:n.b,id:e}}function s(e){return console.log("receiveOpenSource"),{type:n.a,projects:e}}},46:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return s});var n=a(15);function r(e){return{type:n.b,payload:e}}function s(e){return{type:n.a,payload:e}}},49:function(e,t,a){e.exports=a(93)},51:function(e,t,a){e.exports=a.p+"static/media/persp-map.da96d7b7.gif"},52:function(e,t,a){e.exports=a.p+"static/media/blog-hero2.d3145208.jpg"},54:function(e,t,a){e.exports=a(94)},59:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(15),s={};var o=a(16),i=[];var c=a(13),u={};var l=Object(n.c)({Graph:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.c:return t.payload;case c.a:return Object.assign({},e,t.payload);default:return e}}}),d=Object(n.c)({Header:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.a:return t.payload;default:return e}},OpenSource:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.a:return t.projects;default:return e}},Project:l}),h=a(7),p=a.n(h),f=a(6),m=a(29),b=a.n(m),g=a(45),O=a(27),v=p.a.mark(E),y=p.a.mark(k);function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t="https://spreadsheets.google.com/feeds/list/1vsuEOL0F6UdHU75kbm36XAvIQlVu-mgcnNhn0pI72Rg/".concat(e,"/public/values?alt=json");return b.a.get(t).then(function(e){return Object(O.b)(e.data)})}function E(e){var t;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(f.b)(w,e.id);case 2:return t=a.sent,a.next=5,Object(f.d)(Object(g.a)(t));case 5:case"end":return a.stop()}},v)}function k(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)([Object(f.e)(o.b,E)]);case 2:case"end":return e.stop()}},y)}var x=a(32),j=p.a.mark(I),N=p.a.mark(L),S=p.a.mark(T);function I(e){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.d)(Object(x.a)(e));case 2:case"end":return t.stop()}},j)}function L(e){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.d)(Object(x.b)(e));case 2:case"end":return t.stop()}},N)}function T(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)([Object(f.e)(c.d,I),Object(f.e)(c.b,L)]);case 2:case"end":return e.stop()}},S)}var M=a(46),G=p.a.mark(H),P=p.a.mark(W);function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t="https://spreadsheets.google.com/feeds/list/1vsuEOL0F6UdHU75kbm36XAvIQlVu-mgcnNhn0pI72Rg/".concat(e,"/public/values?alt=json");return b.a.get(t).then(function(e){return Object(O.b)(e.data)})}function H(e){var t;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(f.b)(A,e.id);case 2:return t=a.sent,a.next=5,Object(f.d)(Object(M.a)(t));case 5:case"end":return a.stop()}},G)}function W(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)([Object(f.e)(r.b,H)]);case 2:case"end":return e.stop()}},P)}var V=p.a.mark(R);function R(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)([Object(f.c)(k),Object(f.c)(T),Object(f.c)(W)]);case 2:case"end":return e.stop()}},V)}var C=a(35);a.d(t,"sagaMiddleware",function(){return F}),a.d(t,"default",function(){return X});var F=Object(C.a)();function X(e){var t=Object(C.a)(),a=Object(n.e)(d,e,Object(n.a)(t));return t.run(R),a}},94:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(48);a(59),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(49),i=a.n(o),c=a(36),u=a(20),l=a(21),d=a(22),h=a(19),p=a(23),f=a(14);a(84);function m(e){return r.a.createElement("div",{className:"loader"})}a(85);var b=a(4),g=a(51),O=a.n(g),v=a(52),y=a.n(v),w=(a(86),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).toggleShape=function(){console.log(e.state.screen),0===e.state.screen?e.animFire(e.state.splitText):1===e.state.screen?e.animMap(e.state.splitText):2===e.state.screen&&e.animBack(),e.setState({screen:(e.state.screen+1)%3})},e.state={screen:0,splitText:void 0},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({splitText:this.staggerP.childNodes}),b.d.set(this.g2.childNodes,{drawSVG:"33% 0%"}),b.d.set(this.g3.childNodes,{drawSVG:"65% 100%"}),b.d.set(this.g4.childNodes,{drawSVG:"67% 100%"}),b.d.set(this.hero,{css:{transformPerspective:700,perspective:400,transformStyle:"preserve-3d"}}),window.matchMedia("(max-width: 600px)").matches&&b.d.set(this.hero,{css:{transformPerspective:200,perspective:200,transformStyle:"preserve-3d"}})}},{key:"animFire",value:function(e){var t=new b.c,a=e.innerText;function n(e){var t=new b.c;return t.staggerFromTo(e.childNodes,1.5,{rotation:0,strokeWidth:9},{rotation:90,svgOrigin:"527.45 351.8",strokeWidth:1,ease:b.a.easeOut},.05),t}t.staggerFromTo(this.g2.childNodes,1.75,{drawSVG:"33% 0%"},{drawSVG:"71% 100%",ease:b.a.easeOut},.08,"start"),t.staggerFromTo(this.g3.childNodes,1.75,{drawSVG:"65% 100%"},{drawSVG:"30.5% 0%",ease:b.a.easeOut},.08,"start"),t.staggerFromTo(this.g4.childNodes,1.75,{drawSVG:"67% 100%"},{drawSVG:"28.5% 0%",ease:b.a.easeOut},.08,"start"),t.add(n(this.g2),"start+=2"),t.add(n(this.g3),"start+=2"),t.add(n(this.g4),"start+=2"),t.fromTo(this.crect,.5,{scaleX:1,scaleY:1,x:0,y:0},{scaleX:.5,scaleY:1.2,x:-35,y:-50,transformOrigin:"50% 50%",ease:b.b.easeInOut},"start+=2"),t.fromTo(this.shapes,.5,{scale:1,x:0,y:0,opacity:1},{scale:2,x:0,opacity:.25,transformOrigin:"50% 50%",ease:b.b.easeInOut},"start+=2"),window.matchMedia("(max-width: 600px)").matches&&t.to(this.heroarea,.5,{x:-30,ease:b.b.easeInOut},"start+=2"),t.to(this.hero,.5,{x:-125,y:70,ease:b.b.easeInOut},"start+=2"),t.to(this.text,.5,{top:"30vh",x:-50,ease:b.b.easeInOut},"start+=2"),t.to(this.button,.5,{x:-112,ease:b.b.easeIn},"start+=2"),t.to(this.button.childNodes[0],.25,{opacity:0,display:"none",ease:b.b.easeIn},"start+=2"),t.to(this.button.childNodes[1],.25,{display:"block",opacity:1,ease:b.b.easeOut},"start+=2.25"),t.to(this.staggerP,.1,{opacity:1},"start+=2.5"),t.staggerFromTo(a,3,{opacity:0},{opacity:1,ease:b.b.easeOut},.06,"start+=2.5"),t.timeScale(1.7)}},{key:"animBack",value:function(){var e=new b.c,t="start3+=1";function a(e){var t=new b.c;return t.staggerTo(e.childNodes,.8,{rotation:0,strokeWidth:9,scaleX:1,scaleY:1,svgOrigin:"527.45 351.8",ease:b.a.easeOut},.05),t}e.add("start3"),e.to(this.hero,.5,{z:0,rotationX:0,y:0,x:0,ease:b.b.easeOut},"start3"),e.to(this.gray,.25,{autoAlpha:1,ease:b.b.easeOut},"start3"),e.to(this.crect,.25,{scaleX:1,scaleY:1,x:0,y:0,transformOrigin:"50% 50%",ease:b.b.easeOut},"start3"),e.to(this.button.childNodes[2],.25,{opacity:0,display:"none",ease:b.b.easeIn},"start3"),e.to(this.button.childNodes[0],.25,{display:"block",opacity:1,ease:b.b.easeOut},"start3+=0.25"),e.to(this.shapes,.5,{scaleX:1,scaleY:1,scale:1,x:0,y:0,opacity:1,svgOrigin:"520 400",ease:b.b.easeInOut},"start3"),e.to(this.text,.5,{top:"auto",x:0,y:0,ease:b.b.easeIn},"start3"),e.add(a(this.g2),"start3"),e.add(a(this.g3),"start3"),e.add(a(this.g4),"start3"),e.staggerTo(this.g2.childNodes,1,{drawSVG:"33% 0%",ease:b.a.easeOut},.1,t),e.staggerTo(this.g3.childNodes,1,{drawSVG:"65% 100%",ease:b.a.easeOut},.1,t),e.staggerTo(this.g4.childNodes,1,{drawSVG:"67% 100%",ease:b.a.easeOut},.1,t)}},{key:"animMap",value:function(e){var t=new b.c,a=e.lines;function n(e){var t=new b.c;return t.staggerTo(e.childNodes,1,{scaleX:.93,scaleY:2.22,strokeWidth:5,svgOrigin:"493 351.8",ease:b.b.easeOut},.05),t}t.add("start2"),t.to(this.hero,.5,{z:20,rotationX:70,y:100,x:40,ease:b.b.easeOut},"start2"),t.to(this.gray,.25,{autoAlpha:0,ease:b.b.easeOut},"start2"),t.to(this.crect,.25,{scaleX:1,scaleY:.75,transformOrigin:"50% 50%",ease:b.b.easeOut},"start2"),t.add(n(this.g2),"start2"),t.add(n(this.g3),"start2"),t.add(n(this.g4),"start2"),t.to(this.text,.5,{top:"20vh",x:0,ease:b.b.easeIn},"start2"),t.to(this.shapes,.5,{opacity:.75,ease:b.b.easeOut},"start2"),t.to(this.button,.3,{x:0,ease:b.b.easeOut},"start2"),t.to(this.button.childNodes[1],.25,{opacity:0,display:"none",ease:b.b.easeIn},"start2"),t.to(this.button.childNodes[2],.25,{display:"block",opacity:1,ease:b.b.easeOut},"start2+=0.25"),window.matchMedia("(max-width: 600px)").matches&&(t.to(this.heroarea,.5,{x:-150,ease:b.b.easeOut},"start2+=0.5"),t.to(this.text,.5,{y:100,ease:b.b.easeOut},"start2")),t.staggerTo(a,.4,{opacity:0,ease:b.b.easeOut},.03,"start2+=0.8")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"hero-area",ref:function(t){return e.heroarea=t}},r.a.createElement("svg",{className:"hero",ref:function(t){return e.hero=t},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1054.9 703.6"},r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip-path",transform:"translate(0 -67)"},r.a.createElement("rect",{id:"crect",ref:function(t){return e.crect=t},x:"25.6",y:"175",width:"1011.3",height:"550",fill:"none"}))),r.a.createElement("title",null,"change-shape2"),r.a.createElement("g",{style:{clipPath:"url(#clip-path)"}},r.a.createElement("image",{ref:function(t){return e.map=t},width:"1000",height:"667",transform:"scale(1.05)",xlinkHref:O.a}),r.a.createElement("image",{className:"gray",ref:function(t){return e.gray=t},width:"1000",height:"667",transform:"scale(1.05)",xlinkHref:y.a})),r.a.createElement("rect",{id:"square",x:"417.9",y:"268.9",width:"217",height:"217",fill:"none",stroke:"#fff",strokeMiterlimit:"10",strokeWidth:"9"}),r.a.createElement("polygon",{id:"triangle",points:"525.6 271.6 650 487 401.2 487 525.6 271.6",fill:"none",stroke:"#fff",strokeMiterlimit:"10",strokeWidth:"9"}),r.a.createElement("g",{id:"shapes",ref:function(t){return e.shapes=t}},r.a.createElement("g",{id:"g4",ref:function(t){return e.g4=t}},r.a.createElement("path",{d:"M417.9,335.9v249s1,54-62,51-53-74.4,12-80c27.2-2.3,33.3-1.9,33.3-1.9H650",transform:"translate(0 -67)",fill:"none",stroke:"#3953a4",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9"}),r.a.createElement("path",{d:"M417.9,335.9v249s1,54-62,51-53-74.4,12-80c27.2-2.3,33.3-1.9,33.3-1.9H650",transform:"translate(0 -67)",fill:"none",stroke:"#6abd45",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9"}),r.a.createElement("path",{d:"M417.9,335.9v249s1,54-62,51-53-74.4,12-80c27.2-2.3,33.3-1.9,33.3-1.9H650",transform:"translate(0 -67)",fill:"none",stroke:"#ed2024",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9"})),r.a.createElement("g",{id:"g3",ref:function(t){return e.g3=t}},r.a.createElement("path",{d:"M634.9,552.9v-217s10.5-84-61.5-83.5c-70.1.5-60.1,64.4-47.8,86.2S650,554,650,554",transform:"translate(0 -67)",fill:"none",stroke:"#3953a4",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9"}),r.a.createElement("path",{d:"M634.9,552.9v-217s10.5-84-61.5-83.5c-70.1.5-60.1,64.4-47.8,86.2S650,554,650,554",transform:"translate(0 -67)",fill:"none",stroke:"#6abd45",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9"}),r.a.createElement("path",{d:"M634.9,552.9v-217s10.5-84-61.5-83.5c-70.1.5-60.1,64.4-47.8,86.2S650,554,650,554",transform:"translate(0 -67)",fill:"none",stroke:"#ed2024",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9"})),r.a.createElement("g",{id:"g2",ref:function(t){return e.g2=t}},r.a.createElement("path",{d:"M525.6,338.6,647.4,546.4l5,6.5c-44,16.5-8,60-8,60,39,51.5,63.5.5,63.5.5,32.5-72-40.1-59.8-61.2-60.1-7-.1-11.8-.4-11.8-.4h-217",transform:"translate(0 -67)",fill:"none",stroke:"#3953a4",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9"}),r.a.createElement("path",{d:"M525.6,338.6,647.4,546.4l5,6.5c-44,16.5-8,60-8,60,39,51.5,63.5.5,63.5.5,32.5-72-40.1-59.8-61.2-60.1-7-.1-11.8-.4-11.8-.4h-217",transform:"translate(0 -67)",fill:"none",stroke:"#6abd45",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9"}),r.a.createElement("path",{d:"M525.6,338.6,647.4,546.4l5,6.5c-44,16.5-8,60-8,60,39,51.5,63.5.5,63.5.5,32.5-72-40.1-59.8-61.2-60.1-7-.1-11.8-.4-11.8-.4h-217",transform:"translate(0 -67)",fill:"none",stroke:"#ed2024",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9"})))),r.a.createElement("div",{className:"textarea",ref:function(t){return e.text=t}},r.a.createElement("h1",null,"Anish M Prasad"),r.a.createElement("button",{className:"button",ref:function(t){return e.button=t},onClick:this.toggleShape},r.a.createElement("span",{className:"read"},"Read More >"),r.a.createElement("span",{className:"share"},"See Map"),r.a.createElement("span",{className:"home"},"Return Home")),r.a.createElement("div",{className:"staggerP",ref:function(t){return e.staggerP=t}},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam illum repellendus, molestiae excepturi quo, ab possimus perspiciatis sunt quis. Magni impedit hic culpa, ea. Praesentium facilis dicta excepturi magnam perferendis?"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam illum repellendus, molestiae excepturi quo, ab possimus perspiciatis sunt quis. Magni impedit hic culpa, ea. Praesentium facilis dicta excepturi magnam perferendis?"))))}}]),t}(n.Component)),E=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"external"},r.a.createElement(w,null))}}]),t}(n.Component),k=Object(n.lazy)(function(){return a.e(15).then(a.bind(null,357))}),x=Object(n.lazy)(function(){return a.e(13).then(a.bind(null,358))}),j=Object(n.lazy)(function(){return a.e(9).then(a.bind(null,359))}),N=Object(n.lazy)(function(){return a.e(12).then(a.bind(null,364))}),S=Object(n.lazy)(function(){return a.e(11).then(a.bind(null,360))}),I=Object(n.lazy)(function(){return a.e(16).then(a.bind(null,363))}),L=Object(n.lazy)(function(){return a.e(14).then(a.bind(null,361))}),T=Object(n.lazy)(function(){return a.e(10).then(a.bind(null,362))}),M=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.ga&&(window.ga("set","page",window.location.pathname+window.location.search),window.ga("send","pageview",window.location.pathname+window.location.search))}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(n.Suspense,{fallback:r.a.createElement(m,null)},r.a.createElement(N,null),r.a.createElement(S,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement(x,null)}}),r.a.createElement(f.a,{exact:!0,path:"/opensource",render:function(){return r.a.createElement(k,null)}}),r.a.createElement(f.a,{exact:!0,path:"/opensource/:project",render:function(){return r.a.createElement(I,null)}}),r.a.createElement(f.a,{exact:!0,path:"/about",render:function(){return r.a.createElement(j,null)}}),r.a.createElement(f.a,{exact:!0,path:"/animatedtransition",render:function(){return r.a.createElement(E,null)}}),r.a.createElement(f.a,{exact:!0,path:"/lab",render:function(){return r.a.createElement(L,null)}}),r.a.createElement(f.a,{exact:!0,path:"/contact",render:function(){return r.a.createElement(T,null)}})))))}}]),t}(n.Component),G=a(31);a(92);var P=i()(),A=document.getElementById("root");Object(s.render)(r.a.createElement(function(e){return r.a.createElement(c.a,{store:e.store},r.a.createElement(G.a,null,r.a.createElement(f.a,{path:"/",component:M})))},{store:P}),A),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[54,18,19]]]);
//# sourceMappingURL=main.c8c3ab20.chunk.js.map