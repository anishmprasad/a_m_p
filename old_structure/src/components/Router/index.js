import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route,Switch } from 'react-router-dom';
import 'styleCommon/styles.scss';
import DynamicRoute from 'components/DynamicRoute';
import HelloWorld from 'components/HelloWorld'
import Graph from '../Graph';
import Home from 'components/Home'
import Header from 'components/Header'


export default function Router(props){
    return(
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/helloworld' component={HelloWorld} />
          <Route exact path='/dynamicroute/:entityType/:entityCode' component={DynamicRoute} />
          <Route exact path='/graph' component={Graph} />
        </Switch>
      </Fragment>
    )
}

