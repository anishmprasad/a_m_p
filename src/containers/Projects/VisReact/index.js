import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Graph from 'vis-react';
import { getObjects } from '../../../Utils';

import './index.scss';

let allNodes;
var highlightActive = false;

let options = {
	layout: {
		randomSeed: 2
	},
	nodes: {
		fixed: {
			x: false,
			y: false
		},
		shape: 'dot',
		size: 13,
		borderWidth: 1.5,
		borderWidthSelected: 2,
		font: {
			size: 15,
			align: 'center',
			bold: {
				color: '#bbbdc0',
				size: 15,
				vadjust: 0,
				mod: 'bold'
			}
		}
	},
	edges: {
		width: 0.01,
		color: {
			color: '#D3D3D3',
			highlight: '#797979',
			hover: '#797979',
			opacity: 1.0
		},
		arrows: {
			to: { enabled: true, scaleFactor: 1, type: 'arrow' },
			middle: { enabled: false, scaleFactor: 1, type: 'arrow' },
			from: { enabled: true, scaleFactor: 1, type: 'arrow' }
		},
		smooth: {
			type: 'continuous',
			roundness: 0
		}
	},
	groups: {
		Physics: {
			color: {
				background: '#ffffff',
				border: '#acdbae',
				highlight: {
					border: '#acdbae',
					background: '#ffffff'
				},
				hover: {
					border: '#acdbae',
					background: '#ffffff'
				}
			}
		},
		Chemistry: {
			color: {
				background: '#ffffff',
				border: '#f3bd86',
				highlight: {
					border: '#f3bd86',
					background: '#ffffff'
				},
				hover: {
					border: '#f3bd86',
					background: '#ffffff'
				}
			}
		},
		Biology: {
			color: {
				background: '#ffffff',
				border: '#c89dc8',
				highlight: {
					border: '#c89dc8',
					background: '#ffffff'
				},
				hover: {
					border: '#c89dc8',
					background: '#ffffff'
				}
			}
		},
		Mathematics: {
			color: {
				background: '#ffffff',
				border: '#52CBEC',
				highlight: {
					border: '#52CBEC',
					background: '#ffffff'
				},
				hover: {
					border: '#52CBEC',
					background: '#ffffff'
				}
			}
		},
		English: {
			color: {
				background: '#ffffff',
				border: '#c2b59b',
				highlight: {
					border: '#c2b59b',
					background: '#ffffff'
				},
				hover: {
					border: '#c2b59b',
					background: '#ffffff'
				}
			}
		},
		'Logical Reasoning': {
			color: {
				background: '#ffffff',
				border: '#87a6aa',
				highlight: {
					border: '#87a6aa',
					background: '#ffffff'
				},
				hover: {
					border: '#87a6aa',
					background: '#ffffff'
				}
			}
		}
	},
	// physics: {
	//   forceAtlas2Based: {
	//       gravitationalConstant: -200,
	//       centralGravity: 0.05,
	//       springLength: 230,
	//       springConstant: 0.08,
	//       avoidOverlap:9
	//   },
	//   solver: 'forceAtlas2Based',
	//   timestep: 0.35,
	//   stabilization: {enabled:true,iterations: 10}
	// },
	physics: {
		barnesHut: { gravitationalConstant: -30000, centralGravity: 1, springLength: 70, avoidOverlap: 1 },
		stabilization: { iterations: 2500 }
	},
	interaction: {
		hover: true,
		hoverConnectedEdges: true,
		selectable: false,
		selectConnectedEdges: false,
		zoomView: false,
		dragView: false
	}
};

const initialGraph = [
	{
		content_code: 'KTBBFC50',
		relation: {
			root_kt_node: [
				{
					source: 'Heart',
					target: '',
					from: 'KTBBFC50',
					to: '',
					label: 'Definition',
					seo_subject_name: 'Biology',
					type: 'Foundation Concept',
					id: 0
				}
			],
			leading_to_links: [
				{
					source: 'Heart',
					target: 'Cardiac Cycle',
					from: 'KTBBFC50',
					to: 'KTBBFC05',
					label: 'Definition',
					type: 'Concepts',
					id: 3569,
					seo_subject_name: 'Biology',
					concept_url: 'study/cardiac-cycle-concept?entity_code=KTBBFC05'
				},
				{
					source: 'Heart',
					target: 'Heart Beat',
					from: 'KTBBFC50',
					to: 'KTBBFC15',
					label: 'Definition',
					type: 'Foundation Concept',
					id: 3579,
					seo_subject_name: 'Biology',
					concept_url: 'study/heart-beat-concept?entity_code=KTBBFC15'
				},
				{
					source: 'Heart',
					target: 'Pulse Rate',
					from: 'KTBBFC50',
					to: 'KTBBFC52',
					label: 'Definition',
					type: 'Foundation Concept',
					id: 5848,
					seo_subject_name: 'Biology',
					concept_url: 'study/pulse-rate-concept?entity_code=KTBBFC52'
				},
				{
					source: 'Heart',
					target: 'Heart Rate',
					from: 'KTBBFC50',
					to: 'KTBBFC53',
					label: 'Definition',
					type: 'Concepts',
					id: 5849,
					seo_subject_name: 'Biology',
					concept_url: 'study/heart-rate-concept?entity_code=KTBBFC53'
				},
				{
					source: 'Heart',
					target: 'Cardiac Output',
					from: 'KTBBFC50',
					to: 'KTBBFC55',
					label: 'Definition',
					type: 'Concepts',
					id: 5851,
					seo_subject_name: 'Biology',
					concept_url: 'study/cardiac-output-concept?entity_code=KTBBFC55'
				},
				{
					source: 'Heart',
					target: 'Structure Of Heart',
					from: 'KTBBFC50',
					to: 'KTBBFC56',
					label: 'Definition',
					type: 'Concepts',
					id: 5852,
					seo_subject_name: 'Biology',
					concept_url: 'study/structure-of-heart-concept?entity_code=KTBBFC56'
				},
				{
					source: 'Heart',
					target: 'Electrocardiography (ECG)',
					from: 'KTBBFC50',
					to: 'KTBBFC98',
					label: 'Definition',
					type: 'Concepts',
					id: 5894,
					seo_subject_name: 'Biology',
					concept_url: 'study/electrocardiography-ecg-concept?entity_code=KTBBFC98'
				},
				{
					source: 'Heart',
					target: 'Double Circulation',
					from: 'KTBBFC50',
					to: 'KTBBFC99',
					label: 'Diagram',
					type: 'Super Concepts',
					id: 5895,
					seo_subject_name: 'Biology',
					concept_url: 'study/double-circulation-concept?entity_code=KTBBFC99'
				},
				{
					source: 'Heart',
					target: 'Circulatory Disorders',
					from: 'KTBBFC50',
					to: 'KTBBFC102',
					label: 'Definition',
					type: 'Concepts',
					id: 5898,
					seo_subject_name: 'Biology',
					concept_url: 'study/circulatory-disorders-concept?entity_code=KTBBFC102'
				},
				{
					source: 'Heart',
					target: 'Regulation Of Cardiac Output',
					from: 'KTBBFC50',
					to: 'KTBBFC127',
					label: 'Definition',
					type: 'Concepts',
					id: 5923,
					seo_subject_name: 'Biology',
					concept_url: 'study/regulation-of-cardiac-output-concept?entity_code=KTBBFC127'
				},
				{
					source: 'Heart',
					target: 'Cardiac Muscle',
					from: 'KTBBFC50',
					to: 'KTBLM92',
					label: 'Definition',
					type: 'Concepts',
					id: 14154,
					seo_subject_name: 'Biology',
					concept_url: 'study/cardiac-muscle-concept?entity_code=KTBLM92'
				},
				{
					source: 'Heart',
					target: 'Heart Sound',
					from: 'KTBBFC50',
					to: 'KTBBFC54',
					label: 'Definition',
					type: 'Concepts',
					id: 5850,
					seo_subject_name: 'Biology',
					concept_url: 'study/heart-sound-concept?entity_code=KTBBFC54'
				},
				{
					source: 'Heart',
					target: 'Working of Heart',
					from: 'KTBBFC50',
					to: 'KTBBFC94',
					label: 'Definition',
					type: 'Concepts',
					id: 5890,
					seo_subject_name: 'Biology',
					concept_url: 'study/working-of-heart-concept?entity_code=KTBBFC94'
				}
			],
			derived_from_links: [
				{
					source: 'Component Of Blood Vascular System',
					target: 'Heart',
					from: 'KTBBFC24',
					to: 'KTBBFC50',
					label: 'Constant',
					type: 'Concepts',
					id: 5794,
					seo_subject_name: 'Biology',
					concept_url: 'study/component-of-blood-vascular-system-concept?entity_code=KTBBFC24'
				}
			]
		}
	}
];

export default class VisReact extends Component {
	setState(stateObj) {
		if (this.mounted) {
			super.setState(stateObj);
		}
	}
	componentWillMount() {
		this.mounted = true;
	}
	constructor(props) {
		super(props);
		this.events = {
			select: function(event) {
				var { nodes, edges } = event;
				console.log('Selected nodes:');
				console.log(nodes);
				console.log('Selected edges:');
				console.log(edges);
			},
			hoverNode: function(event) {
				this.neighbourhoodHighlight(event, this.props.searchData);
			},
			blurNode: function(event) {
				this.neighbourhoodHighlightHide(event);
			},
			click: function(event) {
				this.redirectToLearn(event, this.props.searchData);
			}
		};
		let jsonData = initialGraph;

		let nodes = [];
		let edges = [];

		if (jsonData && jsonData.length > 0) {
			for (let i = 0; i < jsonData[0].relation.root_kt_node.length; i++) {
				jsonData[0].relation.root_kt_node[i].color = undefined;
				jsonData[0].relation.root_kt_node[i].label = jsonData[0].relation.root_kt_node[i].source;
				jsonData[0].relation.root_kt_node[i].id = jsonData[0].relation.root_kt_node[i].from;
				jsonData[0].relation.root_kt_node[i].group = jsonData[0].relation.root_kt_node[i].seo_subject_name;
				nodes.push(jsonData[0].relation.root_kt_node[i]);
			}
			for (let j = 0; j < jsonData[0].relation.leading_to_links.length; j++) {
				if (
					jsonData[0].relation.leading_to_links[j].target.length > 20 &&
					jsonData[0].relation.leading_to_links[j].target.indexOf('\n') == -1
				) {
					jsonData[0].relation.leading_to_links[j].target = jsonData[0].relation.leading_to_links[j].target
						.split(' ')
						.reduce((a, e, i) => a + e + (i % 20 === 3 ? '\n' : ' '), ' ');
				}
				jsonData[0].relation.leading_to_links[j].color = undefined;
				jsonData[0].relation.leading_to_links[j].label = jsonData[0].relation.leading_to_links[j].target;
				jsonData[0].relation.leading_to_links[j].id = jsonData[0].relation.leading_to_links[j].to;
				jsonData[0].relation.leading_to_links[j].group =
					jsonData[0].relation.leading_to_links[j].seo_subject_name;
				nodes.push(jsonData[0].relation.leading_to_links[j]);
			}
			for (let k = 0; k < jsonData[0].relation.derived_from_links.length; k++) {
				if (
					jsonData[0].relation.derived_from_links[k].source.length > 20 &&
					jsonData[0].relation.derived_from_links[k].source.indexOf('\n') == -1
				) {
					jsonData[0].relation.derived_from_links[k].source = jsonData[0].relation.derived_from_links[
						k
					].source
						.split(' ')
						.reduce((a, e, i) => a + e + (i % 20 === 3 ? '\n' : ' '), ' ');
				}
				jsonData[0].relation.derived_from_links[k].color = undefined;
				jsonData[0].relation.derived_from_links[k].label = jsonData[0].relation.derived_from_links[k].source;
				jsonData[0].relation.derived_from_links[k].id = jsonData[0].relation.derived_from_links[k].from;
				jsonData[0].relation.derived_from_links[k].group =
					jsonData[0].relation.derived_from_links[k].seo_subject_name;
				nodes.push(jsonData[0].relation.derived_from_links[k]);
			}
			for (let i = 0; i < nodes.length; i++) {
				if (nodes[i].target !== '' && nodes[i].to !== '') {
					let edgeDir = {};
					edgeDir.from = nodes[i].from;
					edgeDir.to = nodes[i].to;
					edgeDir.arrows = 'to';
					edges.push(edgeDir);
				}
			}
		}

		let newGraph = {};
		newGraph.nodes = nodes;
		newGraph.edges = edges;
		this.state = {
			graph: newGraph,
			style: { width: '100%', height: '100%' },
			network: null
		};
		this.measure = this.measure.bind(this);
		this.events.hoverNode = this.events.hoverNode.bind(this);
		this.events.blurNode = this.events.blurNode.bind(this);
		this.events.click = this.events.click.bind(this);
		this.neighbourhoodHighlight = this.neighbourhoodHighlight.bind(this);
		this.redirectToLearn = this.redirectToLearn.bind(this);
		this.neighbourhoodHighlightHide = this.neighbourhoodHighlightHide.bind(this);
	}

	componentDidMount() {
		this.mounted = true;
		window.addEventListener('resize', this.measure);
	}

	componentWillUnmount() {
		this.mounted = false;
		window.removeEventListener('resize', this.measure);
	}

	measure(data) {
		console.log('measure');
		this.state.network.redraw();
		this.state.network.fit();
	}

	redirectToLearn(params, searchData) {
		const result = getObjects(this.state.graph.nodes, 'id', this.state.network.getNodeAt(params.pointer.DOM));
		console.log(this.state.network.getNodeAt(params.pointer.DOM));
		// if(this.props.onTrack){
		//   let e = { widgetData : {
		//     id : searchData[0].code,
		//     widget : 'kt-fab-node',
		//     index : searchData[0].index,
		//     query : window.emContext.searchQuery == undefined ? window.emContext.content_name : window.emContext.searchQuery ,
		//     widget_cta : result[0].label,
		//     xpath : result[0].concept_url,
		//     type : result[0].type
		//   }};
		//   this.props.onTrack(e,'ktnode')
		// }
		if (this.state.network.getNodeAt(params.pointer.DOM) !== undefined) {
			// const result = getObjects(this.state.graph.nodes, 'id', this.state.network.getNodeAt(params.pointer.DOM));

			if (result[0].concept_url) window.open('/' + result[0].concept_url, '_blank');
		}
	}

	neighbourhoodHighlight(params, searchData) {
		const result = getObjects(this.state.graph.nodes, 'id', params.node);
		// if(this.props.onTrack){
		//   let e = { widgetData : {
		//     id : searchData[0].id,
		//     widget : 'kt-fab-node',
		//     index : searchData[0].index,
		//     query : window.emContext.searchQuery == undefined ? window.emContext.content_name : window.emContext.searchQuery,
		//     widget_cta : result[0].label,
		//     xpath : result[0].concept_url,
		//     type : result[0].type
		//   }};
		//   this.props.onTrackHover(e,'ktnode')
		// }
		let allNodes = this.state.graph.nodes;

		// let cloneNodes = allNodes.map(a => {return {...a}});

		let Nodes = new this.vis.DataSet(allNodes);
		let cloneNodes = Nodes.get({ returnType: 'Object' }); // these come from WorldCup2014.js
		// let edgesDataset = new vis.DataSet(edges); // these come from WorldCup2014.js

		this.state.network.canvas.body.container.style.cursor = 'pointer';
		// this.setState({cursor});

		if (params.node !== undefined) {
			highlightActive = true;
			let i, j;
			let selectedNode = params.node;
			let degrees = 1;

			for (var nodeId in cloneNodes) {
				cloneNodes[nodeId].color = 'rgba(200,200,200,0.5)';
				if (cloneNodes[nodeId].hiddenLabel === undefined) {
					cloneNodes[nodeId].hiddenLabel = cloneNodes[nodeId].label;
					cloneNodes[nodeId].label = undefined;
				}
			}

			let connectedNodes = this.state.network.getConnectedNodes(selectedNode);
			let allConnectedNodes = [];
			// get the second degree nodes
			for (i = 1; i < degrees; i++) {
				for (j = 0; j < connectedNodes.length; j++) {
					allConnectedNodes = allConnectedNodes.concat(
						this.state.network.getConnectedNodes(connectedNodes[j])
					);
				}
			}

			// all second degree nodes get a different color and their label back
			for (i = 0; i < allConnectedNodes.length; i++) {
				cloneNodes[allConnectedNodes[i]].color = 'rgba(150,150,150,0.75)';
				if (cloneNodes[allConnectedNodes[i]].hiddenLabel !== undefined) {
					cloneNodes[allConnectedNodes[i]].label = cloneNodes[allConnectedNodes[i]].hiddenLabel;
					cloneNodes[allConnectedNodes[i]].hiddenLabel = undefined;
				}
			}

			// all first degree nodes get their own color and their label back
			for (let i = 0; i < connectedNodes.length; i++) {
				cloneNodes[connectedNodes[i]].color = undefined;
				if (cloneNodes[connectedNodes[i]]['hiddenLabel'] !== undefined) {
					cloneNodes[connectedNodes[i]].label = cloneNodes[connectedNodes[i]]['hiddenLabel'];
					const fontSize = this.state.network.body.nodes;
					fontSize[connectedNodes[i]].options.font.size = 15;
					cloneNodes[connectedNodes[i]]['hiddenLabel'] = undefined;
				}
			}

			// the main node gets its own color and its label back.
			cloneNodes[selectedNode].color = undefined;
			if (cloneNodes[selectedNode]['hiddenLabel'] !== undefined) {
				cloneNodes[selectedNode].label = cloneNodes[selectedNode]['hiddenLabel'];
				const fontSize = this.state.network.body.nodes;
				fontSize[selectedNode].options.font.size = 15;
				// this.setState({fontSize})
				cloneNodes[selectedNode]['hiddenLabel'] = undefined;
			}
		} else if (highlightActive === true) {
			// reset all nodes
			for (let nodeId in cloneNodes) {
				cloneNodes[nodeId].color = undefined;
				if (cloneNodes[nodeId]['hiddenLabel'] !== undefined) {
					cloneNodes[nodeId].label = cloneNodes[nodeId]['hiddenLabel'];
					const fontSize = this.state.network.body.nodes;
					fontSize[nodeId].options.font.size = 15;
					this.setState({ fontSize });
					cloneNodes[nodeId]['hiddenLabel'] = undefined;
				}
			}
			highlightActive = false;
		}

		let updateArray = [];
		for (let nodeId in cloneNodes) {
			if (cloneNodes.hasOwnProperty(nodeId)) {
				updateArray.push(cloneNodes[nodeId]);
			}
		}
		if (this.mounted) {
			this.setState({
				graph: {
					nodes: updateArray,
					edges: this.state.graph.edges
				}
			});
		}
	}

	neighbourhoodHighlightHide(params) {
		let allNodes = this.state.graph.nodes;

		let Nodes = new this.vis.DataSet(allNodes);
		let allNodess = Nodes.get({ returnType: 'Object' });
		// let allNodess = allNodes.map(a => {return {...a}})
		this.state.network.canvas.body.container.style.cursor = 'default';

		for (var nodeId in allNodess) {
			allNodess[nodeId].color = 'rgba(200,200,200,0.5)';
			if (allNodess[nodeId].hiddenLabel === undefined) {
				allNodess[nodeId].hiddenLabel = allNodess[nodeId].label;
				allNodess[nodeId].label = undefined;
			}
		}

		highlightActive = true;
		if (highlightActive === true) {
			// reset all nodes
			for (var nodeIds in allNodess) {
				allNodess[nodeIds].color = undefined;
				if (allNodess[nodeIds].hiddenLabel !== undefined) {
					allNodess[nodeIds].label = allNodess[nodeIds].hiddenLabel;
					const fontSize = this.state.network.body.nodes;
					fontSize[nodeIds].options.font.size = 15;
					this.setState({ fontSize });
					allNodess[nodeIds].hiddenLabel = undefined;
				}
			}
			highlightActive = false;
		}

		var updateArray = [];
		for (var nodeIde in allNodess) {
			if (allNodess.hasOwnProperty(nodeIde)) {
				updateArray.push(allNodess[nodeIde]);
			}
		}
		if (this.mounted) {
			this.setState({
				graph: {
					nodes: updateArray,
					edges: this.state.graph.edges
				}
			});
		}
	}

	getNetwork(data) {
		this.setState({ network: data });
	}
	render() {
		return (
			<Fragment>
				<div className='vis-react'>vis-react</div>
				<Graph
					graph={this.state.graph}
					style={this.state.style}
					options={options}
					getNetwork={this.getNetwork.bind(this)}
					events={this.events}
					vis={vis => (this.vis = vis)}
				/>
			</Fragment>
		);
	}
}
VisReact.propTypes = {
	data: PropTypes.array
};
VisReact.defaultProps = {
	data: null
};
