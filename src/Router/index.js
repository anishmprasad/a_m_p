import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// import Home from '../components/Home'
// import Header from '../components/Header'
// import About from '../components/About';
import './index.scss'

const OpenSource = lazy(() => import('../components/OpenSource'));
const Home = lazy(() => import('../components/Home'));
const About = lazy(() => import('../components/About'));
const Header = lazy(() => import('../components/Header'));


export default function Router(props) {
  return (
    <div className="wrapper">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path='/' component={Home} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path='/opensource' component={OpenSource} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path='/about' component={About} />
        </Suspense>
      </Switch>
    </div>
  )
}

