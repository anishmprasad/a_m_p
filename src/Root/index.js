import React, { Component } from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import Router from "../Router";
import { BrowserRouter, Route } from "react-router-dom";
class Root extends Component {
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
            <Route path="/" component={Router} />
          </BrowserRouter>
        }
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object
};

export default Root;
