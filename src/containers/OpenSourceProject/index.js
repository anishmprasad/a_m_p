import React, { Component} from 'react';
import { withRouter } from 'react-router';
import Graph from '../Projects/Graph'

import constants from './constants'
import InlineLoader from '../../components/InlineLoader';





// function OpenSourceProject(props){
//   return React.createElement(mapProject(props.match.params.project))
// }

// export default withRouter(OpenSourceProject)



class OpenSourceProject extends Component {
	constructor(props) {
		super(props);

		this.state = {
			components: []
		};
	}

	mapProject(project){
	  console.log(constants[project]);
	  return constants[project]
	}
	addComponent = async type => {
		console.log(`Loading ${type} component...`);

		import(`../Projects/${type}`)
			.then(component =>
				this.setState({
					components: this.state.components.concat(component.default)
				})
			)
			.catch(error => {
				console.error(`"${type}" not yet supported`);
			});
	};

	async componentWillMount() {
    this.addComponent(this.mapProject(this.props.match.params.project));
	}

	render() {
		const { components } = this.state;
    if (components.length === 0) return <InlineLoader />;

		const componentsElements = components.map(Component => (
			<Component key={Math.random()} />
		));

		return <div className='project'>{componentsElements}</div>;
	}
}

export default withRouter(OpenSourceProject);