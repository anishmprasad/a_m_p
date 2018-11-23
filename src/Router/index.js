import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loader from '../components/Loader';
import './index.scss';
import AnimatedTransition from '../components/AnimatedTransition';

const OpenSource = lazy(() => import('../containers/OpenSource'));
const Home = lazy(() => import('../components/Home'));
const About = lazy(() => import('../components/About'));
const Header = lazy(() => import('../components/Header'));
const Container = lazy(() => import('../components/Container'))
const OpenSourceProject = lazy(() => import('../containers/OpenSourceProject'));


export default function Router() {
  return (
    <div className='wrapper'>
      <Suspense fallback={<Loader/>}>
        <Header />
        <Container>
          <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/opensource' render={() => <OpenSource />} />
          <Route exact path='/opensource/:project' render={() => <OpenSourceProject />} />
          <Route exact path='/about' render={() => <About />} />
          <Route exact path='/animatedtransition' render={() => <AnimatedTransition />} />
        </Switch>
        </Container>
      </Suspense>
    </div>
  )
}

