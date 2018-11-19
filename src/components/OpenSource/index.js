import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchOpenSource } from '../../actions/OpenSource'

class OpenSource extends Component {
  componentDidMount(){
    this.props.fetchOpenSource(2)
    .then(response => {
      console.log('fetchOpenSource',response);
    })
  }
  render(){
    return(
      <div className="opensource">
        OpenSource
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchOpenSource }, dispatch);
}
export default connect(
  null,
  mapDispatchToProps
)(OpenSource);
