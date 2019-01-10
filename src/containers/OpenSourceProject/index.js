import React, { Component } from 'react';
import { withRouter } from 'react-router';

import constants from './constants';
import InlineLoader from '../../components/InlineLoader';

class OpenSourceProject extends Component {
	state = {
		components: []
	};

	mapProject(project) {
		return constants[project];
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

		const componentsElements = components.map(Component => <Component key={Math.random()} />);

		return <div className='project'>{componentsElements}</div>;
	}
}

export default withRouter(OpenSourceProject);
