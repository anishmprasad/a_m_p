import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default class VisReact extends Component {
	render() {
		return <div className='vis-react'>vis-react</div>;
	}
}
VisReact.propTypes = {
	data: PropTypes.array
};
