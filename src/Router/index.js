import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
// import 'styleCommon/styles.scss';
// import DynamicRoute from 'components/DynamicRoute';
// import HelloWorld from 'components/HelloWorld'
// import Graph from '../Graph';
import Home from '../components/Home'
import Header from '../components/Header'
import About from '../components/About';



export default function Router(props) {
  return <Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Switch>
    </Fragment>;
}

