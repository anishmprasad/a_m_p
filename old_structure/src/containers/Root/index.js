import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from '../../components/Router';
import { BrowserRouter, Route, Link } from 'react-router-dom';

type props = {
	store: Object
};
export default class Root extends Component<props> {
	constructor(props) {
		super(props);
		this.state = {
			onEnter: false
		};
	}
	render() {
		return (
			<Provider store={this.props.store}>
				{
					<BrowserRouter>
						<Route path='/' component={Router} />
					</BrowserRouter>
				}
			</Provider>
		);
	}
}
