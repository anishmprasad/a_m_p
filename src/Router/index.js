import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// import OpenSource from '../components/OpenSource'
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
    <div className='wrapper'>
      <Suspense fallback={<div className='suspense'>Loading...</div>}>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/opensource' render={() => <OpenSource />} />
          <Route exact path='/about' render={() => <About />} />
        </Switch>
      </Suspense>
    </div>
  )
}

