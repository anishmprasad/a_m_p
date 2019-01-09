import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
import ReactCircularGraph from 'react-circular-graph';
import Circular from './Circular';
import { isProjectChanged, CanvasData } from '../../../actions/Projects/Graph';
import { data } from './Data';
import { config } from './Config';
import './index.scss';

// 'https://opensource.google.com/assets/images/alphabet/' + this.data.startsWith + '.gif';

class Graph extends Component {
	shouldComponentUpdate() {
		return false;
	}
	render() {
		return (
			<div className='graph'>
				<h3 className='graph-title'>React Circular Graph</h3>
				<ReactCircularGraph
					width={720}
					height={720}
					data={data}
					config={config}
					selectedNode={node => this.props.CanvasData(node)}
					selectedProjectChanged={object => {
						this.props.isProjectChanged(object);
					}}
				/>
				<Circular />
				<div className='description'>
					JavaScript version available on
					<a
						href='https://github.com/anishmprasad/circular-knowledge-graph'
						className=''
						target='_blank'
						rel='noopener noreferrer'
					>
						{' '}
						Circular Knowlege Graph
					</a>
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ isProjectChanged, CanvasData }, dispatch);
}
export default connect(
	null,
	mapDispatchToProps
)(Graph);
