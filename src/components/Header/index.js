import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestInitialFetch } from '../../actions/Header';
import Nav from '../Nav';
import { withRouter } from 'react-router';

// import { CSSTransition } from 'react-transition-group';
import './index.scss';

// import logo from 'images/logo.svg';

class Header extends Component {
	componentWillMount() {
		this.props.requestInitialFetch(1);
	}
	homeRedirection = () => {
		this.props.history.push('/');
	};
	render() {
		return (
			<div className={`header`}>
				{
					<div
						className={`${this.props.isLoading ? 'loading' : 'logo'}`}
						onClick={!this.props.isLoading ? this.homeRedirection : null}
					/>
				}
				<Nav />
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		isLoading: Object.keys(state.Header).length === 0
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ requestInitialFetch }, dispatch);
}
export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Header)
);
