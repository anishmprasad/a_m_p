import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Graph from 'vis-react';

import './index.scss';

export default class VisReact extends Component {
	render() {
		return <div className='vis-react'>vis-react</div>;
	}
}
VisReact.propTypes = {
	data: PropTypes.array
};
VisReact.defaultProps = {
	data: null
};
