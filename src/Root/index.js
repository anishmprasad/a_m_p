import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from '../Router';
import { BrowserRouter, Route } from 'react-router-dom';
import './root.scss';

export default class Root extends Component {
	render() {
		return (
			<Provider store={this.props.store}>
				<BrowserRouter>
					<Route path='/' component={Router} />
				</BrowserRouter>
			</Provider>
		);
	}
}
