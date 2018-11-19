import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// import Home from '../components/Home'
// import Header from '../components/Header'
// import About from '../components/About';
import './index.scss';

const OpenSource = lazy(() => import('../components/OpenSource'));
const Home = lazy(() => import('../components/Home'));
const About = lazy(() => import('../components/About'));
const Header = lazy(() => import('../components/Header'));


export default function Router() {
  return (
    <div className="wrapper">
      <Suspense fallback={<div className="header">Loading...</div>}>
        <Header />
      </Suspense>
      <Switch>
        <Suspense fallback={<div className="home">Loading...</div>}>
          <Route exact path='/' render={() => <Home/>} />
        </Suspense>
        <Suspense fallback={<div className="opensource">Loading...</div>}>
          <Route exact path='/opensource' render={() => <OpenSource/>} />
        </Suspense>
        <Suspense fallback={<div className="about">Loading...</div>}>
          <Route exact path='/about' render={() => <About/>} />
        </Suspense>
      </Switch>
    </div>
  )
}

