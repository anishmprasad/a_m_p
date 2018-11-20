import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './index.scss'

import { fetchOpenSource } from '../../actions/OpenSource'
import InlineLoader from '../InlineLoader';

class OpenSource extends Component {
	state = {
		opensource:[]
	}
	componentDidMount(){
		this.props.fetchOpenSource(2)
		.then(response => {
			this.setState({opensource : response})
			console.log('fetchOpenSource',response);
		})
	}
	mapProjects(project,index){
		return(
			<article className="card cols-3" key={`project-${index}`}>
				<a href={project.url} id="b36828271" target="_blank">
					<img 
						src="https://mir-s3-cdn-cf.behance.net/projects/404/fefe0336828271.Y3JvcCwxMzE0LDEwMjgsMTg1LDMy.jpg" 
						alt="LaunchPad" 
						rel="noopener"
					/>
					<div className="content">
						<h3>LaunchPad</h3>
						<small>
							<span className="tag">UI/UX</span>
							<span className="tag">Product Design</span>
						</small>
					</div>
				</a>
			</article>
		)
	}
	render(){
		console.log(this.state.opensource);
		return(
			this.state.opensource.length !== 0 ?
			<div className="opensource">
				<div id="behance-projects" className="project grid-flex">
					{this.state.opensource.map(this.mapProjects)}
				</div>
			</div> : <InlineLoader/>
		)
	}
}
  // function mapStateToProps(state) {
  //   return{
  //       OpenSourceProjects : state.OpenSource
  //   }
  // }
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchOpenSource }, dispatch);
}
export default connect(
  null,
  mapDispatchToProps
)(OpenSource);