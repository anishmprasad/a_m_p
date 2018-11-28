import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { InitialFetch } from '../../actions/Header';
import Nav from '../Nav';
import { withRouter } from 'react-router';

// import { CSSTransition } from 'react-transition-group';
import './index.scss';

// import logo from 'images/logo.svg';

class Header extends Component {
	state = {
		isLoading: true
	};
	componentDidMount() {
		// this.props.InitialFetch().then(res => {
		this.setState({ isLoading: false });
		// });
	}
	homeRedirection = () => {
		this.props.history.push('/');
	};
	render() {
		// return(
		//     <div className={`container ${!this.state.isLoading ? 'loaded' : ''}`}>
		//     <div className="bg-img"></div>
		//     <div className="header">
		//         <div className="loading">
		//             <div className="block"></div>
		//             <div className="block"></div>
		//             <div className="block"></div>
		//             <div className="block"></div>
		//         </div>
		//         <h1>Go!</h1>
		//     </div>
		//     <div className="main">
		//         <div className="login">
		//             <form>
		//                 <input id="username" name="username" required="required" type="text" placeholder="Username" />
		//                 <input id="password" name="password" required="required" type="password" placeholder="Password" />
		//                 <button type="submit" value="Login">Login</button>
		//                 <span className="form-toggle">Not Registered Yet?</span>
		//             </form>
		//         </div>
		//         <div className="register">
		//             <form>
		//                 <input id="firstname" name="firstname" required="required" type="text" placeholder="First name" />
		//                 <input id="lastname" name="lastname" required="required" type="text" placeholder="Last name" />
		//                 <input id="email" name="email" required="required" type="enail" placeholder="Email" />
		//                 <input id="username" name="username" required="required" type="text" placeholder="Username" />
		//                 <input id="password" name="password" required="required" type="password" placeholder="Password" />
		//                 <button type="submit" value="Login">Register</button>
		//                 <span className="form-toggle">Return to Login</span>
		//             </form>
		//         </div>
		//     </div>
		// </div>
		// )
		return (
			<div className={`header`}>
				{
					<div
						className={`${this.state.isLoading ? 'loading' : 'logo'}`}
						onClick={!this.state.isLoading ? this.homeRedirection : null}
					>
						{/* <img src={logo} alt="logo" />  */}
						{/* {`${!this.state.isLoading ? <img src={logo} alt="logo" /> : 'A + P'}`} */}
					</div>
				}
				{/* {!this.state.isLoading && */}
				<Nav />
				{/* <CSSTransition
					in={!this.state.isLoading}
					timeout={500}
					classNames="message"
					unmountOnExit
					onExited={() => {
					console.log('onExited');
					}}
				>
					<Nav />
				</CSSTransition> */}
				{/* // } */}
			</div>
		);
	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ InitialFetch }, dispatch);
}
export default withRouter(
	connect(
		null,
		mapDispatchToProps
	)(Header)
);
