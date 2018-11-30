import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import './index.scss';

import { requestOpenSource } from '../../actions/OpenSource';
import InlineLoader from '../../components/InlineLoader';

class OpenSource extends Component {
	componentWillMount() {
		this.props.requestOpenSource(2);
	}
	projectOnclick = (projecturl, type = null) => {
		if (type === 'demo') {
			this.props.history.push(`opensource/${projecturl}`);
		} else {
			window.open(projecturl, '_blank');
		}
	};
	mapProjects(project, index) {
		return (
			<article className='card cols-3' key={`project-${index}`}>
				<div className='content-card'>
					<img
						src='https://mir-s3-cdn-cf.behance.net/projects/404/fefe0336828271.Y3JvcCwxMzE0LDEwMjgsMTg1LDMy.jpg'
						alt='LaunchPad'
						rel='noopener'
					/>
					<div className='content'>
						<h3>{project.projectname}</h3>
						<small>
							{project.npm !== 'null' && (
								<span
									className='tag'
									onClick={() => {
										this.projectOnclick(project.npm);
									}}
								>
									NPM
								</span>
							)}
							{project.github !== 'null' && (
								<span
									className='tag'
									onClick={() => {
										this.projectOnclick(project.github);
									}}
								>
									GitHub
								</span>
							)}
							{project.demo !== 'null' && (
								<span
									className='tag'
									onClick={() => {
										this.projectOnclick(project.projectname, 'demo');
									}}
								>
									Demo
								</span>
							)}
						</small>
					</div>
				</div>
			</article>
		);
	}
	render() {
		return this.props.OpenSourceProjects.length !== 0 ? (
			<div className='opensource'>
				<div id='behance-projects' className='project grid-flex'>
					{this.props.OpenSourceProjects.map(this.mapProjects.bind(this))}
				</div>
			</div>
		) : (
			<InlineLoader />
		);
	}
}
function mapStateToProps(state) {
	return {
		OpenSourceProjects: state.OpenSource
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ requestOpenSource }, dispatch);
}
export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(OpenSource)
);
