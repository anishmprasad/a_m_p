(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{118:function(t,a,o){var e,i;t.exports=(e=o(0),i=o(25),function(t){var a={};function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=a,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)o.d(e,i,function(a){return t[a]}.bind(null,i));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="",o(o.s=0)}([function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=function(){function t(t,a){for(var o=0;o<a.length;o++){var e=a[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(a,o,e){return o&&t(a.prototype,o),e&&t(a,e),a}}(),i=o(1),s=n(i),r=n(o(2));function n(t){return t&&t.__esModule?t:{default:t}}function l(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}var h=function(){function t(a,o,e){l(this,t),this.x=a||0,this.y=o||0,this.z=e||0}return e(t,[{key:"copy",value:function(){return new t(this.x,this.y,this.z)}},{key:"mag",value:function(){return Math.sqrt(this.magSq())}},{key:"magSq",value:function(){return this.x*this.x+this.y*this.y+this.z*this.z}},{key:"normalize",value:function(){return this.div(this.mag()),this}},{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}},{key:"mult",value:function(t){return this.x*=t,this.y*=t,this.z*=t,this}},{key:"div",value:function(t){return this.x/=t,this.y/=t,this.z/=t,this}}]),t}(),m=function(){function t(a){var o=this;l(this,t),this.data=a,this.RING_RADIUS=265,this.MAX_LINK_LENGTH=290,this.MOUSE_HOVER_DIST=120,this.CLICKABLE_RADIUS_ADD=0,this.IDLE_DRAG=.02,this.ACTIVE_DRAG=.5,this.ACTIVE_RADIUS=175,this.STROKE_WIDTH=10;var e=Math.random()*Math.PI*2,i=20*Math.random(),s="https://anishmprasad.com/"+this.data.startsWith+".png";this.data.lame||this.data.small?this.data.lame||this.active||!this.data.small?(this.STROKE_WIDTH=5-Math.floor(4*Math.random())+0,this.IDLE_RADIUS=25-(Math.floor(6*Math.random())+17)):(this.IDLE_RADIUS=7,this.STROKE_WIDTH=6):this.IDLE_RADIUS=30,this.emptyVector=new h(0,0,0),this.hoverState=0,this.fadeCount=0,this.start=new Date,this.age=0,this.pos=new h(Math.cos(e),Math.sin(e),0),this.pos=this.pos.mult(i),this.vel=new h(0,0,0),this.acc=new h(0,0,0),this.radius=this.IDLE_RADIUS,this.center=new h(0,0,0),this.active=!1,this.thumbImg=document.createElement("img"),void 0===this.data.iconUrlSmall||this.data.lame?this.data.startsWith&&(this.thumbImg.src=s):this.thumbImg.src=this.data.iconUrlSmall,this.thumbImg.addEventListener("error",(function(){o.thumbImg.src=s}))}return e(t,[{key:"getAge",value:function(){return(new Date).getTime()-this.start}},{key:"applyForces",value:function(){this.vel.add(this.acc),this.pos.add(this.vel),this.acc=new h(0,0,0)}},{key:"update",value:function(t){this.active?this.STROKE_WIDTH=10:!this.data.lame&&this.data.small&&(this.STROKE_WIDTH=6),this.age+=1,this.applyForces(),this.updateLerps(),this.drag(this.active?this.ACTIVE_DRAG:this.IDLE_DRAG),this.active?this.moveToCenter():t||(this.jitter(.15),this.keepInRing(this.RING_RADIUS,7e-5),this.rotate(.002)),this.updateLink()}},{key:"moveToCenter",value:function(){this.pos.mult(.85).add(this.center.mult(.15))}},{key:"updateMousePos",value:function(t){if(t&&!this.data.lame){var a=this.pos.copy().sub(t);this.hoverState=Math.max((this.MOUSE_HOVER_DIST-a.mag())/this.MOUSE_HOVER_DIST,0),this.hoverState*=Math.max(0,Math.min(1,(this.getAge()-1e3)/5e3))}}},{key:"updateLerps",value:function(){var t=this.active?this.ACTIVE_RADIUS:this.IDLE_RADIUS;this.radius=.1*t+.9*this.radius}},{key:"hitTest",value:function(t,a){return new h(t,a,0).sub(this.pos).mag()<this.getDisplayRadius()+this.CLICKABLE_RADIUS_ADD}},{key:"onClick",value:function(){this.active?this.deactivate():this.activate()}},{key:"activate",value:function(){this.data.lame||(this.active=!0)}},{key:"deactivate",value:function(){this.active=!1}},{key:"getDisplayRadius",value:function(){var t=this.radius;return this.active||this.data.lame||(this.data.small?t+=26*(this.hoverState||0):t+=10*(this.hoverState||0)),t}},{key:"keepInRing",value:function(t,a){var o=this.pos.copy(),e=o.mag(),i=a*(t-e);0!=e&&o.normalize().mult(i),e<80&&o.mult(10),this.acc.add(o)}},{key:"jitter",value:function(t){var a=new h(Math.random()-.5,Math.random()-.5,0);a.mult(t),this.acc.add(a)}},{key:"drag",value:function(t){this.vel.mult(1-t)}},{key:"rotate",value:function(t){var a=this.pos.copy(),o=[-a.y,a.x];a.x=o[0],a.y=o[1],a.mult(t),this.pos.add(a)}},{key:"render",value:function(t){var a=this.getDisplayRadius(),o=this.data.small&&!this.data.focus?.65:.5;t.save(),t.beginPath(),t.arc(this.pos.x,this.pos.y,a,0,2*Math.PI,!0),t.fillStyle=this.data.lame?"#ececec":"rgba("+this.data.RGB.r+","+this.data.RGB.g+","+this.data.RGB.b+","+o+")",t.fill(),this.renderWhiteFill(t),(!this.data.small||this.active||this.data.lame||this.data.focus)&&!this.active&&!this.data.lame&&this.fadeCount>=.5&&this.renderLogo(t),t.closePath(),t.restore()}},{key:"renderWhiteFill",value:function(t){var a=this.getDisplayRadius();a=this.getDisplayRadius()>this.STROKE_WIDTH/2?a-this.STROKE_WIDTH/2:a,t.globalAlpha=this.active?1:this.fadeCount,t.beginPath(),t.arc(this.pos.x,this.pos.y,a,0,2*Math.PI,!0),t.fillStyle="white",t.fill(),this.fadeCount<1&&(this.fadeCount+=.05)}},{key:"renderLogo",value:function(t){var a=this.getDisplayRadius()/1.05,o={x:this.pos.x-a/2,y:this.pos.y-a/2};t.globalAlpha=this.fadeCount<=.9?this.fadeCount:.9,t.drawImage(this.thumbImg,o.x,o.y,a,a),void 0===this.data.iconUrlSmall&&-1==navigator.userAgent.indexOf("MSIE")&&(t.globalCompositeOperation="lighten",t.fillStyle=this.data.fallbackColor,t.fillRect(o.x,o.y,a,a))}},{key:"getLineStart",value:function(){return new h(this.pos.x,this.pos.y,0)}},{key:"getLineEnd",value:function(){return new h(this.link.pos.x,this.link.pos.y,0)}},{key:"getDotAlpha",value:function(){return Math.min(1,this.age/10)}},{key:"getLinkAlpha",value:function(){var t=this.pos.copy().sub(this.link.pos).mag();return Math.max(0,(this.MAX_LINK_LENGTH-t)/this.MAX_LINK_LENGTH)}},{key:"renderLink",value:function(t,a){null==this.link||this.data.lame||(t.save(),t.beginPath(),this.doLinkPath(t),t.strokeStyle="#ececec",t.globalAlpha=this.getLinkAlpha(),t.lineWidth=this.STROKE_WIDTH-8,t.stroke(),t.closePath(),t.restore())}},{key:"doLinkPath",value:function(t){var a=this.getLineStart(),o=this.getLineEnd();t.moveTo(a.x,a.y),t.lineTo(o.x,o.y)}},{key:"updateLink",value:function(){var t=void 0;(null!=(t=this.link)?t.pos.copy().sub(this.pos).mag():void 0)>this.MAX_LINK_LENGTH&&this.killLink()}},{key:"linkTo",value:function(t){t.data.lame||(this.linkStartTime=new Date,this.link=t)}},{key:"killLink",value:function(){this.link=null}}]),t}(),c=function(t){function a(t){return l(this,a),function(t,a){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,t)),this.AMBIENCE_RANDOM_ACTION_INTERVAL=1e3,this.AMBIENCE_WAIT_AFTER_USER_INPUT=7e3,this.LAME_NODE_COUNT=25,this.canvas,this.done=!1,this.context,this.timer=window.requestAnimationFrame,this.frameCount=0,this.nodes=[],this.activeNode,this.hoveredNode,this.nextActionTime,this.formVisible,this.mousePos,this.globalMousePos,this.hovered=!1,this.pauseInteraction=!1,this.selected_project={},this.selected_project_changed=!1,this.hovered_project={},this.projects_subscription,this.config_service=this.props.config,this.canvas_width=this.props.width,this.canvas_height=this.props.height,this}return function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);t.prototype=Object.create(a&&a.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(t,a):t.__proto__=a)}(a,t),e(a,[{key:"componentDidMount",value:function(){this.updateCanvas()}},{key:"updateCanvas",value:function(){var t=this;return window.innerWidth<this.props.config.MOBILE_WIDTH?this.navigateToListView():window.addEventListener("resize",(function(){window.innerWidth<t.config_service.MOBILE_WIDTH&&t.router.url.indexOf("explore")>0&&t.navigateToListView()})),this.refs.canvas.width=1*this.canvas_width,this.refs.canvas.height=1*this.canvas_height,this.context=this.refs.canvas.getContext("2d"),this.context.scale(1,1),this.done=!1,this.selectNone(),this.loadProjects(this.props.data),this.doRandomAction(),this.refs.canvas.dispatchEvent(new Event("mousemove")),this.refs.canvas.addEventListener("mousemove",t=>{this.moveHandler(t)}),this.refs.canvas.addEventListener("click",t=>{this.clickHandler(t)}),this.refs.canvas.addEventListener("mouseover",t=>{this.pauseInteraction=!0}),this.refs.canvas.addEventListener("mouseout",t=>{this.pauseInteraction=!1}),requestAnimationFrame(this.update.bind(this))}},{key:"loadProjects",value:function(t){var a=t.slice(),o={lame:!0},e=this;e.nodes=[];for(var i=0;i<this.LAME_NODE_COUNT;)a.push(o),i++;a.forEach((function(t,a){a>15&&!t.lame&&(t.small=!0),e.nodes.push(new m(t))}))}},{key:"doRandomAction",value:function(){var t=void 0,a=this.filterLames();if(!this.pauseInteraction)return this.getActiveNodes().length?(this.setNextActionDelay(this.AMBIENCE_RANDOM_ACTION_INTERVAL),this.selectNone()):void(null!=(t=a[Math.floor(Math.random()*a.length)])&&(this.setNextActionDelay(this.AMBIENCE_WAIT_AFTER_USER_INPUT),t.activate(),this.selectProject(t)))}},{key:"filterLames",value:function(){return this.nodes.filter((function(t){return!t.data.lame}))}},{key:"getActiveNodes",value:function(){return this.nodes.filter((function(t){return t.active}))}},{key:"setNextActionDelay",value:function(t){this.nextActionTime=new Date((new Date).getTime()+t)}},{key:"userActionOccurred",value:function(){this.setNextActionDelay(this.AMBIENCE_WAIT_AFTER_USER_INPUT),this.activeNode=this.getActiveNodes()[0]}},{key:"ambientActionOccurred",value:function(){this.activeNode=this.getActiveNodes()[0]}},{key:"timeUntilNextAction",value:function(){return this.nextActionTime-(new Date).getTime()}},{key:"updateAmbience",value:function(){if(this.timeUntilNextAction()<0)return this.doRandomAction(),this.ambientActionOccurred()}},{key:"clickHandler",value:function(t){var a=this.refs.canvas.getBoundingClientRect(),o=t.pageX-a.left-window.pageXOffset,e=t.pageY-a.top-window.pageYOffset,i=this.getNodeUnder(o-this.canvas_width/2,e-this.canvas_height/2);i?i.active?i.onClick():(this.selectNone(),i.onClick(),this.selectProject(i)):this.selectNone(),this.userActionOccurred()}},{key:"navigateToListView",value:function(){this.projects_service.requestParams.page_size=this.config_service.LIST_PAGE_SIZE}},{key:"moveHandler",value:function(t){this.hoveredNode=this.mousePos?this.getNodeUnder(this.mousePos.x,this.mousePos.y):null;var a=this.refs.canvas.getBoundingClientRect();this.globalMousePos={x:t.pageX-a.left-window.pageXOffset,y:t.pageY-a.top-window.pageYOffset},this.mousePos=new h(this.globalMousePos.x-this.canvas_width/2,this.globalMousePos.y-this.canvas_height/2,0),t.preventDefault(),t.stopPropagation()}},{key:"hoverHandler",value:function(){if(this.mousePos){var t=this.getNodeUnder(this.mousePos.x,this.mousePos.y);this.clearHoverStyles(),this.hoveredNode&&t&&this.setHoverStyles(t),!this.hovered&&this.hoveredNode&&this.hoveredNode.data.small&&(this.hoveredNode.fadeCount=0)}}},{key:"setHoverStyles",value:function(t){this.refs.canvas.style.cursor="pointer",this.hovered_project=t,t.data.name!=this.hoveredNode.data.name&&this.hoveredNode.small?(t.data.focus=!0,t.fadeCount=0,this.hoveredNode.data.focus=!1):(t.data.focus=!1,this.hoveredNode.data.focus=!0),this.hovered=!0}},{key:"modulo",value:function(t,a){return(+t%(a=+a)+a)%a}},{key:"clickedArrow",value:function(t,a){var o,e,i=0,s=this.filterLames();s.forEach((function(t,a){t.active&&(i=a)})),o=this.modulo(i+t,s.length),this.selectNone(),(e=s[o]).activate(),this.selectProject(e),this.userActionOccurred(),a.stopPropagation()}},{key:"loadProjectDetails",value:function(t){this.projects_service.cachedColor=this.selected_project.fallbackColor||this.selected_project.primaryColor,t.preventDefault(),t.stopPropogation}},{key:"getNodeUnder",value:function(t,a){for(var o=[],e=null,i=this.nodes.length-1;i>=0;i+=-1){var s=this.nodes[i];s.hitTest(t,a)&&!s.data.lame&&o.push(s)}return o.forEach((function(t){t.data.small||(e=t)})),o.length&&!e?o[0]:e}},{key:"createLinks",value:function(){var t=!0,a=!1,o=void 0;try{for(var e,i=this.nodes[Symbol.iterator]();!(t=(e=i.next()).done);t=!0){var s=e.value;null==s.link&&s.linkTo(this.nodes[Math.floor(Math.random()*this.nodes.length)])}}catch(t){a=!0,o=t}finally{try{!t&&i.return&&i.return()}finally{if(a)throw o}}}},{key:"clearHoverStyles",value:function(){this.refs.canvas&&(this.refs.canvas.style.cursor="default"),this.nodes.forEach((function(t){t.data.focus=!1})),this.hovered=!1}},{key:"selectProject",value:function(t){this.selected_project=t.data,this.props.selectedNode&&this.props.selectedNode(t),setTimeout(function(){this.selected_project_changed=!0,this.props.selectedProjectChanged&&this.props.selectedProjectChanged({isProjectChanged:!0})}.bind(this),200)}},{key:"selectNone",value:function(){this.selected_project={},this.selected_project_changed=!1,this.props.selectedProjectChanged&&this.props.selectedProjectChanged({isProjectChanged:!1});var t=!0,a=!1,o=void 0;try{for(var e,i=this.nodes[Symbol.iterator]();!(t=(e=i.next()).done);t=!0)e.value.deactivate()}catch(t){a=!0,o=t}finally{try{!t&&i.return&&i.return()}finally{if(a)throw o}}}},{key:"update",value:function(){if(!this.done)return this.canvasrender(this.context),this.hoverHandler(),this.nodes.length&&(this.frameCount+=1),1==this.frameCount&&this.ambientActionOccurred(),this.createLinks(),this.nodes.forEach(function(t){t.updateMousePos(this.mousePos),t.update(this.hoveredNode==t)}.bind(this)),this.updateAmbience(),requestAnimationFrame(this.update.bind(this))}},{key:"canvasrender",value:function(t){t.clearRect(0,0,this.canvas_width,this.canvas_height),t.save(),t.translate(this.canvas_width/2,this.canvas_height/2),this.nodes.forEach((function(a,o){a.renderLink(t)})),this.nodes.forEach((function(a,o){a.data.lame&&!a.active&&a.render(t)})),this.nodes.forEach((function(a,o){a.data.lame||a.active||!a.data.small||a.render(t)})),this.nodes.forEach((function(a,o){a.data.lame||a.active||a.data.small||a.data.focus||a.render(t)})),this.nodes.forEach((function(a,o){a.data.lame||a.active||!a.data.focus||a.render(t)})),this.nodes.forEach((function(a,o){!a.data.lame&&a.active&&a.render(t)})),t.restore()}},{key:"shouldComponentUpdate",value:function(t){return t.data!=this.props.data}},{key:"render",value:function(){var t=this.props.width,a=this.props.height;return s.default.createElement("canvas",{ref:"canvas",width:t,height:a})}}]),a}(i.Component);c.defaultProps={width:720,height:720,data:[{id:"tensorflow",name:"TensorFlow",summary:"TensorFlow is a fast, flexible, and scalable open source machine learning library for research and production",iconUrlSmall:"https://www.gstatic.com/opensource/project-images/tensorflow/logo.png?rs=AGWjSYQ1HC13sEyluXwZoYWC2w2i9qsPjQ&sqp=-oaymwEICEwQTCAAUAEIttCMygU",iconUrlMedium:"https://www.gstatic.com/opensource/project-images/tensorflow/logo.png?rs=AGWjSYQ7IXg35u8B_D41kSCIRrHjJYcfng&sqp=-oaymwEKCIwBEIwBIABQAQi20IzKBQ",primaryColor:"#E26026",startsWith:"t",fallbackColor:"#34A853",RGB:{r:226,g:96,b:38}}]},c.propTypes={width:r.default.number,height:r.default.number,data:r.default.array.isRequired,config:r.default.object,selectedNode:r.default.func,selectedProjectChanged:r.default.func},a.default=c},function(t,a){t.exports=e},function(t,a){t.exports=i}]))},119:function(t,a,o){},120:function(t,a,o){},145:function(t,a,o){"use strict";o.r(a);var e=o(0),i=o.n(e),s=o(21),r=o(42),n=o(118),l=o.n(n);o(119);class h extends e.Component{constructor(){super(...arguments),this.state={show:!0}}render(){return this.props.canvas?i.a.createElement("div",{className:this.props.selectedProjectChanged?"selected-project active":"selected-project unactive"},i.a.createElement("div",{className:"project-summary"},i.a.createElement("img",{src:""+this.props.canvas.iconUrlMedium,alt:"logo"}),i.a.createElement("h5",null,this.props.canvas.name),i.a.createElement("p",null,this.props.canvas.summary)),i.a.createElement("a",{className:"text-btn",href:""+this.props.canvas.projecturl},"View Project")):null}}var m=Object(r.b)((function(t){const{Graph:a}=t.Project;return{canvas:a&&a.data,selectedProjectChanged:a&&a.isProjectChanged}}),null)(h),c=o(37);const d=[{id:"sketch-rtl",name:"RTL Sketch Plugin",summary:"Automatically create RTL layouts of your designs with this plugin for Bohemian Coding's Sketch 3",startsWith:"logo",fallbackColor:"#4285F4",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",RGB:{r:66,g:133,b:244}},{id:"certificate-transparency",name:"Certificate Transparency",summary:"A framework for monitoring and auditing SSL certificates in nearly real time",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#181C1D",startsWith:"logo",fallbackColor:"#4285F4",RGB:{r:24,g:28,b:29}},{id:"go",name:"Go",summary:"Go is an open source programming language that makes it easy to build simple, reliable, and efficient software",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#6FD6E2",startsWith:"logo",fallbackColor:"#FBBC05",RGB:{r:111,g:214,b:226}},{id:"boringssl",name:"BoringSSL",summary:"A fork of OpenSSL used to implement cryptography and TLS across most of Google's products",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#6B4B9F",startsWith:"logo",fallbackColor:"#4285F4",RGB:{r:107,g:75,b:159}},{id:"dart",name:"Dart",summary:"Dart is a language designed to be productive, stable, and free of surprises",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#13D5BD",startsWith:"logo",fallbackColor:"#FBBC05",RGB:{r:19,g:213,b:189}},{id:"easypki",name:"Easy Public Key Infrastructure",summary:"A simplified Public Key Infrastructure management tool",startsWith:"logo",fallbackColor:"#FBBC05",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",RGB:{r:251,g:188,b:5}},{id:"snazzymaps-browser",name:"Snazzymaps Browser",summary:"Android app for searching and browsing Snazzy Maps",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#34A853",RGB:{r:52,g:168,b:83}},{id:"crouton",name:"crouton",summary:"Chromium OS Universal Chroot Environment",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#696969",startsWith:"logo",fallbackColor:"#EA4335",RGB:{r:105,g:105,b:105}},{id:"fontview",name:"FontView",summary:"A demo app that displays fonts using a free/libre/open-source text rendering stack",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#FBBC05",RGB:{r:251,g:188,b:5}},{id:"tesseract",name:"Tesseract OCR",summary:"An optical character recognition (OCR) engine",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#EA4335",RGB:{r:234,g:67,b:53}},{id:"blockly",name:"Blockly",summary:"Open source library for adding drag and drop block coding to apps",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#81A8E6",startsWith:"logo",fallbackColor:"#34A853",RGB:{r:129,g:168,b:230}},{id:"syntaxnet",name:"SyntaxNet",summary:"A TensorFlow based NLU toolkit",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#EA4335",RGB:{r:234,g:67,b:53}},{id:"science-journal-arduino",name:"science-journal-arduino",summary:"Science Journal Arduino Firmware",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#EA4335",RGB:{r:234,g:67,b:53}},{id:"agera",name:"Agera",summary:"Reactive Programming for Android",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#b3278a",startsWith:"logo",fallbackColor:"#34A853",RGB:{r:179,g:39,b:138}},{id:"polymer",name:"Polymer",summary:"A lightweight library built on top of the Web Components standard",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#337FCC",startsWith:"logo",fallbackColor:"#FBBC05",RGB:{r:51,g:127,b:204}},{id:"android",name:"Android",summary:"An operating system for a wide range of devices",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#A7C640",startsWith:"logo",fallbackColor:"#EA4335",RGB:{r:167,g:198,b:64}},{id:"ndprbrd",name:"ndprbrd",summary:"NDP Routing Bridge Daemon",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#4285F4",RGB:{r:66,g:133,b:244}},{id:"hilbert",name:"Hilbert",summary:"Go package for mapping values to and from space-filling curves, such as Hilbert and Peano curves",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#323232",startsWith:"logo",fallbackColor:"#EA4335",RGB:{r:50,g:50,b:50}},{id:"prob.js",name:"Prob.js",summary:"Generate random numbers from different probability distributions",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#34A853",RGB:{r:52,g:168,b:83}},{id:"magenta",name:"Magenta",summary:"Magenta: Music and Art Generation with Machine Intelligence",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#06213C",startsWith:"logo",fallbackColor:"#34A853",RGB:{r:6,g:33,b:60}},{id:"angular",name:"Angular",summary:"A web application framework for mobile, desktop, and web",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",startsWith:"logo",fallbackColor:"#FBBC05",RGB:{r:251,g:188,b:5}},{id:"cameraview",name:"CameraView",summary:"CameraView helps Android developers easily integrate Camera features",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#34A853",RGB:{r:52,g:168,b:83}},{id:"flexbox-layout",name:"flexbox-layout",summary:"Flexbox for Android",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#FBBC05",RGB:{r:251,g:188,b:5}},{id:"bazel",name:"Bazel",summary:"Google's build system for fast and correct builds",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#43A047",startsWith:"logo",fallbackColor:"#FBBC05",RGB:{r:67,g:160,b:71}},{id:"noto",name:"Noto Fonts",summary:"Fonts aiming to support all languages with a harmonious look and feel",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#34A853",RGB:{r:52,g:168,b:83}},{id:"fontdiff",name:"FontDiff",summary:"A tool for finding visual differences between font versions",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#FBBC05",RGB:{r:251,g:188,b:5}},{id:"mail-importer",name:"Mail Importer for Gmail",summary:"Mail Importer for Gmail will upload the contents of a Thunderbird mail archive to Gmail and do its best to preserve the read state, flagged state, and folders of the messages",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#EA4335",RGB:{r:234,g:67,b:53}},{id:"cas-eval",name:"Clicks-Attention-Satisfaction Evaluation Model and Metric",summary:"A collection of components to collect data and train a user model and a corresponding search engine result page evaluation metric",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#34A853",RGB:{r:52,g:168,b:83}},{id:"ssh-scripts",name:"ssh-scripts",summary:"Some SSH-related scripts",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#EA4335",RGB:{r:234,g:67,b:53}},{id:"moe",name:"MOE: Make Open Easy",summary:"Synchronizes, translates, and scrubs source code repositories",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#FBBC05",RGB:{r:251,g:188,b:5}},{id:"end-to-end",name:"End-To-End",summary:"End-To-End is a Chrome extension that helps you encrypt, decrypt, digitally sign, and verify signed messages within the browser using OpenPGP",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#333332",startsWith:"logo",fallbackColor:"#EA4335",RGB:{r:51,g:51,b:50}},{id:"error-prone",name:"Error Prone",summary:"A bug detection tool for Java code, integrated into the Java compiler",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#34A853",RGB:{r:52,g:168,b:83}},{id:"radioreceiver",name:"Radio Receiver",summary:"An application to listen to broadcast stereo FM and AM radio from your Chrome browser or your ChromeBook computer using a $15 USB digital TV tuner",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#AA7522",startsWith:"logo",fallbackColor:"#34A853",RGB:{r:170,g:117,b:34}},{id:"go-github",name:"go-github",summary:"Go library for accessing the GitHub API",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#EA4335",RGB:{r:234,g:67,b:53}},{id:"copybara",name:"Copybara",summary:"A tool for transforming and moving code between repositories",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#41929D",startsWith:"logo",fallbackColor:"#EA4335",RGB:{r:65,g:146,b:157}},{id:"three-things-today",name:"three-things-today",summary:"Simple Android application to encourage writing down three things that happened today",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#34A853",RGB:{r:52,g:168,b:83}},{id:"python-fanotify",name:"fanotify Bindings for Python",summary:"Python bindings for Linux's fanotify API",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#4285F4",RGB:{r:66,g:133,b:244}},{id:"zopfli",name:"Zopfli",summary:"Zopfli is a compression library designed to be very good, but slow",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#34A853",RGB:{r:52,g:168,b:83}},{id:"nomulus",name:"Nomulus",summary:"Top-level domain name registry software on Google Cloud Platform",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#394A4A",startsWith:"logo",fallbackColor:"#FBBC05",RGB:{r:57,g:74,b:74}},{id:"airport",name:"Airport Puzzle Solver",summary:"Visual puzzle solver for Smartgames 'Airport' puzzle",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#DDCEC5",startsWith:"logo",fallbackColor:"#FBBC05",RGB:{r:221,g:206,b:197}},{id:"touchtime",name:"TouchTime",summary:"Tells the time through vibration patterns on an Android smartwatch",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#DC4538",startsWith:"logo",fallbackColor:"#4285F4",RGB:{r:220,g:69,b:56}},{id:"remixer",name:"Remixer",summary:"A set of cross-platform libraries and protocols to allow the sharing of design values and live refinement of apps during the development process",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#E783FB",startsWith:"logo",fallbackColor:"#FBBC05",RGB:{r:231,g:131,b:251}},{id:"chromium",name:"Chromium",summary:"A safer, faster, and more stable web browser",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#83AEF6",startsWith:"logo",fallbackColor:"#34A853",RGB:{r:131,g:174,b:246}},{id:"appauth",name:"AppAuth",summary:"Native App SDK for OAuth 2.0 and OpenID Connect implementing modern best practices",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#2bace2",startsWith:"logo",fallbackColor:"#34A853",RGB:{r:43,g:172,b:226}},{id:"jterm-cswithandroid",name:"JTerm at Smith 2017 Course Materials: CS With Android",summary:"Starter code and example solutions for JTerm course, CS with Android, in January 2017",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#34A853",RGB:{r:52,g:168,b:83}},{id:"grpc",name:"gRPC",summary:"A high-performance universal RPC framework",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#44AFB8",startsWith:"logo",fallbackColor:"#EA4335",RGB:{r:68,g:175,b:184}},{id:"ganeti",name:"Ganeti",summary:"A virtual machine cluster management tool",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#B5D1FA",startsWith:"logo",fallbackColor:"#34A853",RGB:{r:181,g:209,b:250}},{id:"flutter",name:"Flutter",summary:"Build high-fidelity apps for iOS and Android from a single codebase",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#4CC2F7",startsWith:"logo",fallbackColor:"#FBBC05",RGB:{r:76,g:194,b:247}},{id:"hstspreload",name:"HSTS Preload List",summary:"The submission website for the Chromium-maintained HSTS preload list, which is used by major browsers to hardcode HTTPS-only sites",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#1ac222",startsWith:"logo",fallbackColor:"#FBBC05",RGB:{r:26,g:194,b:34}},{id:"badwolf",name:"BadWolf",summary:"Temporal graph store abstraction layer",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#1E4689",startsWith:"logo",fallbackColor:"#34A853",RGB:{r:30,g:70,b:137}},{id:"squidwarden",name:"squidwarden",summary:"Frontend to squid to manage ACLs",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#34A853",RGB:{r:52,g:168,b:83}},{id:"neuroglancer",name:"Neuroglancer",summary:"WebGL-based viewer for volumetric data",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#4285F4",RGB:{r:66,g:133,b:244}},{id:"google-authenticator-libpam",name:"Google Authenticator PAM module",summary:"HOTP/TOTP second factor PAM module",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#34A853",RGB:{r:52,g:168,b:83}},{id:"upspin",name:"Upspin",summary:"An experimental framework for naming and sharing files and other data securely, uniformly, and globally",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#fffce6",startsWith:"logo",fallbackColor:"#EA4335",RGB:{r:255,g:252,b:230}},{id:"oppia",name:"Oppia",summary:"A tool for collaboratively creating and sharing interactive online lessons",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#16AA9D",startsWith:"logo",fallbackColor:"#FBBC05",RGB:{r:22,g:170,b:157}},{id:"protobuf",name:"Protobuf",summary:"Google's data interchange format",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#FBBC05",RGB:{r:251,g:188,b:5}},{id:"benchmark",name:"benchmark",summary:"A microbenchmark support library",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#4285F4",RGB:{r:66,g:133,b:244}},{id:"kubernetes",name:"Kubernetes",summary:"Automated container deployment, scaling, and management",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#326ce5",startsWith:"logo",fallbackColor:"#4285F4",RGB:{r:50,g:108,b:229}},{id:"material-components-ios",name:"Material Components for iOS",summary:"Modular and customizable Material Design UI components for iOS",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#00e676",startsWith:"logo",fallbackColor:"#4285F4",RGB:{r:0,g:230,b:118}},{id:"genomewarp",name:"GenomeWarp",summary:"GenomeWarp translates genetic variants from one genome assembly version to another",startsWith:"logo",fallbackColor:"#4285F4",RGB:{r:66,g:133,b:244}},{id:"cloudprint_logocert",name:"Google Cloud Print Logo Certification Tool",summary:"Google Cloud Print Logo Certification Automation",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#577EBF",startsWith:"logo",fallbackColor:"#FBBC05",RGB:{r:87,g:126,b:191}},{id:"science-journal",name:"Open Science Journal",summary:"Science Journal Android code",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#3C7CE9",startsWith:"logo",fallbackColor:"#4285F4",RGB:{r:60,g:124,b:233}},{id:"vim-plugins",name:"Google Vim plugins",summary:"Plugins to enhance the Vim text editor",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#34A853",RGB:{r:52,g:168,b:83}},{id:"tensorflow",name:"TensorFlow",summary:"TensorFlow is a fast, flexible, and scalable open source machine learning library for research and production",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#E26026",startsWith:"logo",fallbackColor:"#34A853",RGB:{r:226,g:96,b:38}},{id:"mcm",name:"Minimal Configuration Manager",summary:"A suite of tools to provide configuration management",startsWith:"logo",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",fallbackColor:"#34A853",RGB:{r:52,g:168,b:83}},{id:"ezgantt",name:"EZ Gantt",summary:"Easily view a Google Spreadsheet as a Gantt Chart",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#A59B94",startsWith:"logo",fallbackColor:"#FBBC05",RGB:{r:165,g:155,b:148}},{id:"dart-sass",name:"Dart Sass",summary:"A Dart implementation of Sass",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#C76395",startsWith:"logo",fallbackColor:"#34A853",RGB:{r:199,g:99,b:149}},{id:"permission.site",name:"permission.site",summary:"A site to test the interaction of web APIs and browser permissions",iconUrlSmall:"https://anishmprasad.com/logo.png",iconUrlMedium:"https://anishmprasad.com/logo.png",primaryColor:"#545454",startsWith:"logo",fallbackColor:"#4285F4",RGB:{r:84,g:84,b:84}}],p={ENABLE_ERROR_REPORTING:!0,LIST_PAGE_SIZE:48,EXPLORE_PAGE_SIZE:80,MOBILE_WIDTH:720,COLORS:{GREEN:"#34A853",RED:"#EA4335",BLUE:"#4285F4",YELLOW:"#FBBC05"}};o(120);class u extends e.Component{shouldComponentUpdate(){return!1}render(){return i.a.createElement("div",{className:"graph"},i.a.createElement("h3",{className:"graph-title"},"React Circular Graph"),i.a.createElement(l.a,{width:720,height:720,data:d,config:p,selectedNode:t=>this.props.CanvasData(t),selectedProjectChanged:t=>{this.props.isProjectChanged(t)}}),i.a.createElement(m,null),i.a.createElement("div",{className:"description"},"JavaScript version available on",i.a.createElement("a",{href:"https://github.com/anishmprasad/circular-knowledge-graph",className:"",target:"_blank",rel:"noopener noreferrer"}," ","Circular Knowlege Graph")))}}a.default=Object(r.b)(null,(function(t){return Object(s.b)({isProjectChanged:c.b,CanvasData:c.a},t)}))(u)}}]);