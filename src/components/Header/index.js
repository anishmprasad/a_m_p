import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {InitialFetch} from '../../actions/Header'
import Nav from '../Nav'
import { CSSTransition } from 'react-transition-group';
import './index.scss'

class Header extends Component{
  state = {
    isLoading : true
  }
  componentDidMount(){
    this.props.InitialFetch()
    .then(res => {
      this.setState({isLoading : false})
    })
  }
  render(){
    return <div className={`header`}>
        {<div
            className={`${this.state.isLoading ? 'loading' : 'notloading'}`}
          >
            {`${this.state.isLoading ? 'loading' : 'Anish'}`}
          </div>}
        {/* {!this.state.isLoading && */}
          <CSSTransition
            in={!this.state.isLoading}
            timeout={500}
            classNames="message"
            unmountOnExit
            onExited={() => {
              console.log('onExited');
            }}
          >
            <Nav />
          </CSSTransition>
          {/* // } */}
      </div>; 
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ InitialFetch }, dispatch);
}
export default connect(
  null,
  mapDispatchToProps
)(Header);