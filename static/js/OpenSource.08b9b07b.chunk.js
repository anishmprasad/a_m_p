(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{102:function(e,a,t){},103:function(e,a,t){},143:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),l=t(19),s=t(43),r=t(10),o=(t(102),t(54));t(103);function m(e){return n.a.createElement("div",{className:"spinner"},n.a.createElement("span",{className:"ball-1"}),n.a.createElement("span",{className:"ball-2"}),n.a.createElement("span",{className:"ball-3"}),n.a.createElement("span",{className:"ball-4"}),n.a.createElement("span",{className:"ball-5"}),n.a.createElement("span",{className:"ball-6"}),n.a.createElement("span",{className:"ball-7"}),n.a.createElement("span",{className:"ball-8"}))}var p=t(141),i=t(104),u=t.n(i),h=t(99),d=t.n(h);t(100);class b extends c.Component{constructor(e){super(e),this.projectOnclick=(e,a=null)=>{"demo"===a?this.props.history.push("/opensource/".concat(e)):window.open(e,"_blank")},e.requestOpenSource(2)}mapProjects(e,a){return n.a.createElement(p.a,{key:a,timeout:500,classNames:"item"},n.a.createElement(u.a,{height:500},n.a.createElement("article",{className:"card cols-3",key:"project-".concat(a)},n.a.createElement("div",{className:"content-card"},n.a.createElement(d.a,{preloadSrc:e["preload-image-path"],containerStyle:{height:"341px"},initialBlur:!0,scale:!0,placeholder:"https://raw.githubusercontent.com/Anishmprasad/circular-knowledge-graph/master/src/public/images/placeholder@480x420.png",src:e["image-path"],alt:"project_image",rel:"noopener"}),n.a.createElement("div",{className:"content"},n.a.createElement("h3",null,e.projectname),n.a.createElement("small",null,"null"!==e.npm&&n.a.createElement("span",{className:"tag",onClick:()=>{this.projectOnclick(e.npm)}},"NPM"),"null"!==e.github&&n.a.createElement("span",{className:"tag",onClick:()=>{this.projectOnclick(e.github)}},"GitHub"),"null"!==e.demo&&n.a.createElement("span",{className:"tag",onClick:()=>{this.projectOnclick(e.demo,"demo")}},"Demo")))))))}render(){return 0!==this.props.OpenSourceProjects.length?n.a.createElement("div",{className:"opensource"},n.a.createElement("div",{id:"projects",className:"project grid-flex"},this.props.OpenSourceProjects.map(this.mapProjects.bind(this)))):n.a.createElement(m,null)}}a.default=Object(r.f)(Object(s.b)((function(e){return{OpenSourceProjects:e.OpenSource}}),(function(e){return Object(l.b)({requestOpenSource:o.b},e)}))(b))}}]);
//# sourceMappingURL=OpenSource.08b9b07b.chunk.js.map