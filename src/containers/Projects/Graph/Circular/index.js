import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';

class Circular extends Component {
	state = {
		show: true
	};
	render() {
		if (this.props.canvas) {
			return (
				<div
					className={
						this.props.selectedProjectChanged ? 'selected-project active' : 'selected-project unactive'
					}
				>
					<div className='project-summary'>
						<img src={`${this.props.canvas.iconUrlMedium}`} alt='logo' />
						<h5>{this.props.canvas.name}</h5>
						<p>{this.props.canvas.summary}</p>
					</div>
					<a className='text-btn' href={`${this.props.canvas.projecturl}`}>
						View Project
					</a>
				</div>
			);
		} else {
			return null;
		}
	}
}
function mapStateToProps(state) {
	const { Graph } = state.Project;
	return {
		canvas: Graph && Graph.data,
		selectedProjectChanged: Graph && Graph.isProjectChanged
	};
}

export default connect(
	mapStateToProps,
	null
)(Circular);
