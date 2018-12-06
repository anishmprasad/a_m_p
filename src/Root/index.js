import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from '../Router';
import { BrowserRouter, Route } from 'react-router-dom';
import './root.scss';

type props = {
	store: Object
};
export default class Root extends Component<props> {
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
