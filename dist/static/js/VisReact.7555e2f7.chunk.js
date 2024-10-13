(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{123:function(e){e.exports=JSON.parse('[{"content_code":"KTBBFC50","relation":{"root_kt_node":[{"source":"Heart","target":"","from":"KTBBFC50","to":"","label":"Definition","seo_subject_name":"Biology","type":"Foundation Concept","id":0}],"leading_to_links":[{"source":"Heart","target":"Cardiac Cycle","from":"KTBBFC50","to":"KTBBFC05","label":"Definition","type":"Concepts","id":3569,"seo_subject_name":"Biology","concept_url":"#cardiac-cycle-concept"},{"source":"Heart","target":"Heart Beat","from":"KTBBFC50","to":"KTBBFC15","label":"Definition","type":"Foundation Concept","id":3579,"seo_subject_name":"Biology","concept_url":"#heart-beat-concept"},{"source":"Heart","target":"Pulse Rate","from":"KTBBFC50","to":"KTBBFC52","label":"Definition","type":"Foundation Concept","id":5848,"seo_subject_name":"Biology","concept_url":"#pulse-rate-concept"},{"source":"Heart","target":"Heart Rate","from":"KTBBFC50","to":"KTBBFC53","label":"Definition","type":"Concepts","id":5849,"seo_subject_name":"Biology","concept_url":"#heart-rate-concept"},{"source":"Heart","target":"Cardiac Output","from":"KTBBFC50","to":"KTBBFC55","label":"Definition","type":"Concepts","id":5851,"seo_subject_name":"Biology","concept_url":"#cardiac-output-concept"},{"source":"Heart","target":"Structure Of Heart","from":"KTBBFC50","to":"KTBBFC56","label":"Definition","type":"Concepts","id":5852,"seo_subject_name":"Biology","concept_url":"#structure-of-heart-concept"},{"source":"Heart","target":"Electrocardiography (ECG)","from":"KTBBFC50","to":"KTBBFC98","label":"Definition","type":"Concepts","id":5894,"seo_subject_name":"Biology","concept_url":"#electrocardiography-ecg-concept"},{"source":"Heart","target":"Double Circulation","from":"KTBBFC50","to":"KTBBFC99","label":"Diagram","type":"Super Concepts","id":5895,"seo_subject_name":"Biology","concept_url":"#double-circulation-concept"},{"source":"Heart","target":"Circulatory Disorders","from":"KTBBFC50","to":"KTBBFC102","label":"Definition","type":"Concepts","id":5898,"seo_subject_name":"Biology","concept_url":"#circulatory-disorders-concept"},{"source":"Heart","target":"Regulation Of Cardiac Output","from":"KTBBFC50","to":"KTBBFC127","label":"Definition","type":"Concepts","id":5923,"seo_subject_name":"Biology","concept_url":"#regulation-of-cardiac-output-concept"},{"source":"Heart","target":"Cardiac Muscle","from":"KTBBFC50","to":"KTBLM92","label":"Definition","type":"Concepts","id":14154,"seo_subject_name":"Biology","concept_url":"#cardiac-muscle-concept"},{"source":"Heart","target":"Heart Sound","from":"KTBBFC50","to":"KTBBFC54","label":"Definition","type":"Concepts","id":5850,"seo_subject_name":"Biology","concept_url":"#heart-sound-concept"},{"source":"Heart","target":"Working of Heart","from":"KTBBFC50","to":"KTBBFC94","label":"Definition","type":"Concepts","id":5890,"seo_subject_name":"Biology","concept_url":"#working-of-heart-concept"}],"derived_from_links":[{"source":"Component Of Blood Vascular System","target":"Heart","from":"KTBBFC24","to":"KTBBFC50","label":"Constant","type":"Concepts","id":5794,"seo_subject_name":"Biology","concept_url":"#component-of-blood-vascular-system-concept"}]}}]')},124:function(e,t,o){},142:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return f}));var r=o(0),i=o.n(r),n=o(121),a=o.n(n),s=o(32),l=o(123),d=(o(124),!1);let c={layout:{randomSeed:2},nodes:{fixed:{x:!1,y:!1},shape:"dot",size:13,borderWidth:1.5,borderWidthSelected:2,font:{size:15,align:"center",bold:{color:"#bbbdc0",size:15,vadjust:0,mod:"bold"}}},edges:{width:.01,color:{color:"#D3D3D3",highlight:"#797979",hover:"#797979",opacity:1},arrows:{to:{enabled:!0,scaleFactor:1,type:"arrow"},middle:{enabled:!1,scaleFactor:1,type:"arrow"},from:{enabled:!0,scaleFactor:1,type:"arrow"}},smooth:{type:"continuous",roundness:0}},groups:{Physics:{color:{background:"#ffffff",border:"#acdbae",highlight:{border:"#acdbae",background:"#ffffff"},hover:{border:"#acdbae",background:"#ffffff"}}},Chemistry:{color:{background:"#ffffff",border:"#f3bd86",highlight:{border:"#f3bd86",background:"#ffffff"},hover:{border:"#f3bd86",background:"#ffffff"}}},Biology:{color:{background:"#ffffff",border:"#c89dc8",highlight:{border:"#c89dc8",background:"#ffffff"},hover:{border:"#c89dc8",background:"#ffffff"}}},Mathematics:{color:{background:"#ffffff",border:"#52CBEC",highlight:{border:"#52CBEC",background:"#ffffff"},hover:{border:"#52CBEC",background:"#ffffff"}}},English:{color:{background:"#ffffff",border:"#c2b59b",highlight:{border:"#c2b59b",background:"#ffffff"},hover:{border:"#c2b59b",background:"#ffffff"}}},"Logical Reasoning":{color:{background:"#ffffff",border:"#87a6aa",highlight:{border:"#87a6aa",background:"#ffffff"},hover:{border:"#87a6aa",background:"#ffffff"}}}},physics:{barnesHut:{gravitationalConstant:-3e4,centralGravity:1,springLength:70,avoidOverlap:1},stabilization:{iterations:2500}},interaction:{hover:!0,hoverConnectedEdges:!0,selectable:!1,selectConnectedEdges:!1,zoomView:!1,dragView:!1}};class f extends r.Component{setState(e){this.mounted&&super.setState(e)}componentWillMount(){this.mounted=!0}constructor(e){super(e),this.getNetwork=e=>{this.setState({network:e})},this.getEdges=e=>{console.log(e)},this.getNodes=e=>{console.log(e)},this.events={select:function(e){var{nodes:t,edges:o}=e;console.log("Selected nodes:"),console.log(t),console.log("Selected edges:"),console.log(o)},hoverNode:function(e){this.neighbourhoodHighlight(e,this.props.searchData)},blurNode:function(e){this.neighbourhoodHighlightHide(e)},click:function(e){this.redirectToLearn(e,this.props.searchData)}};let t=l,o=[],r=[];if(t&&t.length>0){for(let e=0;e<t[0].relation.root_kt_node.length;e++)t[0].relation.root_kt_node[e].color=void 0,t[0].relation.root_kt_node[e].label=t[0].relation.root_kt_node[e].source,t[0].relation.root_kt_node[e].id=t[0].relation.root_kt_node[e].from,t[0].relation.root_kt_node[e].group=t[0].relation.root_kt_node[e].seo_subject_name,o.push(t[0].relation.root_kt_node[e]);for(let e=0;e<t[0].relation.leading_to_links.length;e++)t[0].relation.leading_to_links[e].target.length>20&&-1===t[0].relation.leading_to_links[e].target.indexOf("\n")&&(t[0].relation.leading_to_links[e].target=t[0].relation.leading_to_links[e].target.split(" ").reduce((e,t,o)=>e+t+(o%20===3?"\n":" ")," ")),t[0].relation.leading_to_links[e].color=void 0,t[0].relation.leading_to_links[e].label=t[0].relation.leading_to_links[e].target,t[0].relation.leading_to_links[e].id=t[0].relation.leading_to_links[e].to,t[0].relation.leading_to_links[e].group=t[0].relation.leading_to_links[e].seo_subject_name,o.push(t[0].relation.leading_to_links[e]);for(let e=0;e<t[0].relation.derived_from_links.length;e++)t[0].relation.derived_from_links[e].source.length>20&&-1===t[0].relation.derived_from_links[e].source.indexOf("\n")&&(t[0].relation.derived_from_links[e].source=t[0].relation.derived_from_links[e].source.split(" ").reduce((e,t,o)=>e+t+(o%20===3?"\n":" ")," ")),t[0].relation.derived_from_links[e].color=void 0,t[0].relation.derived_from_links[e].label=t[0].relation.derived_from_links[e].source,t[0].relation.derived_from_links[e].id=t[0].relation.derived_from_links[e].from,t[0].relation.derived_from_links[e].group=t[0].relation.derived_from_links[e].seo_subject_name,o.push(t[0].relation.derived_from_links[e]);for(let e=0;e<o.length;e++)if(""!==o[e].target&&""!==o[e].to){let t={};t.from=o[e].from,t.to=o[e].to,t.arrows="to",r.push(t)}}let i={};i.nodes=o,i.edges=r,this.state={graph:i,style:{width:"100%",height:"100%"},network:null},this.measure=this.measure.bind(this),this.events.hoverNode=this.events.hoverNode.bind(this),this.events.blurNode=this.events.blurNode.bind(this),this.events.click=this.events.click.bind(this),this.neighbourhoodHighlight=this.neighbourhoodHighlight.bind(this),this.redirectToLearn=this.redirectToLearn.bind(this),this.neighbourhoodHighlightHide=this.neighbourhoodHighlightHide.bind(this)}componentDidMount(){this.mounted=!0,window.addEventListener("resize",this.measure)}componentWillUnmount(){this.mounted=!1,window.removeEventListener("resize",this.measure)}measure(e){console.log("measure"),this.state.network.redraw(),this.state.network.fit()}redirectToLearn(e,t){const o=Object(s.a)(this.state.graph.nodes,"id",this.state.network.getNodeAt(e.pointer.DOM));console.log(this.state.network.getNodeAt(e.pointer.DOM)),void 0!==this.state.network.getNodeAt(e.pointer.DOM)&&o[0]&&console.log(o[0])}neighbourhoodHighlight(e,t){let o=this.state.graph.nodes,r=new this.vis.DataSet(o).get({returnType:"Object"});if(this.state.network.canvas.body.container.style.cursor="pointer",void 0!==e.node){let t,o;d=!0;let n=e.node,a=1;for(var i in r)r[i].color="rgba(200,200,200,0.5)",void 0===r[i].hiddenLabel&&(r[i].hiddenLabel=r[i].label,r[i].label=void 0);let s=this.state.network.getConnectedNodes(n),l=[];for(t=1;t<a;t++)for(o=0;o<s.length;o++)l=l.concat(this.state.network.getConnectedNodes(s[o]));for(t=0;t<l.length;t++)r[l[t]].color="rgba(150,150,150,0.75)",void 0!==r[l[t]].hiddenLabel&&(r[l[t]].label=r[l[t]].hiddenLabel,r[l[t]].hiddenLabel=void 0);for(let e=0;e<s.length;e++)if(r[s[e]].color=void 0,void 0!==r[s[e]].hiddenLabel){r[s[e]].label=r[s[e]].hiddenLabel;this.state.network.body.nodes[s[e]].options.font.size=15,r[s[e]].hiddenLabel=void 0}if(r[n].color=void 0,void 0!==r[n].hiddenLabel){r[n].label=r[n].hiddenLabel;this.state.network.body.nodes[n].options.font.size=15,r[n].hiddenLabel=void 0}}else if(!0===d){for(let e in r)if(r[e].color=void 0,void 0!==r[e].hiddenLabel){r[e].label=r[e].hiddenLabel;const t=this.state.network.body.nodes;t[e].options.font.size=15,this.setState({fontSize:t}),r[e].hiddenLabel=void 0}d=!1}let n=[];for(let a in r)r.hasOwnProperty(a)&&n.push(r[a]);this.mounted&&this.setState({graph:{nodes:n,edges:this.state.graph.edges}})}neighbourhoodHighlightHide(e){let t=this.state.graph.nodes,o=new this.vis.DataSet(t).get({returnType:"Object"});for(var r in this.state.network.canvas.body.container.style.cursor="default",o)o[r].color="rgba(200,200,200,0.5)",void 0===o[r].hiddenLabel&&(o[r].hiddenLabel=o[r].label,o[r].label=void 0);if(!0===(d=!0)){for(var i in o)if(o[i].color=void 0,void 0!==o[i].hiddenLabel){o[i].label=o[i].hiddenLabel;const e=this.state.network.body.nodes;e[i].options.font.size=15,this.setState({fontSize:e}),o[i].hiddenLabel=void 0}d=!1}var n=[];for(var a in o)o.hasOwnProperty(a)&&n.push(o[a]);this.mounted&&this.setState({graph:{nodes:n,edges:this.state.graph.edges}})}render(){return i.a.createElement("div",{className:"vis-react"},i.a.createElement("h3",{className:"vis-react-title"},"vis-react"),i.a.createElement(a.a,{graph:this.state.graph,style:this.state.style,options:c,getNetwork:this.getNetwork,getEdges:this.getEdges,getNodes:this.getNodes,events:this.events,vis:e=>this.vis=e}))}}f.defaultProps={data:null}}}]);